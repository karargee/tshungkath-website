const express = require('express')
const cors = require('cors')
const multer = require('multer')
const path = require('path')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Server } = require('socket.io')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = new Server(server, {
  cors: { origin: "*", methods: ["GET", "POST"] }
})

// In-memory storage (no database required)
let users = []
let posts = [
  {
    id: 1, username: 'MistressKathy', avatar: '👑', verified: true,
    content: 'Welcome to our kinky community! Share your fantasies and experiences 🔥',
    category: 'Domination', likes: [], comments: [], createdAt: new Date()
  }
]
let userIdCounter = 1
let postIdCounter = 2

// Middleware
app.use(cors())
app.use(express.json())
app.use('/uploads', express.static('uploads'))

// Image Upload Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/')
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + Math.round(Math.random() * 1E9) + path.extname(file.originalname))
  }
})

const upload = multer({ 
  storage: storage,
  limits: { fileSize: 5 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith('image/')) {
      cb(null, true)
    } else {
      cb(new Error('Only image files allowed'))
    }
  }
})

// Auth Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (!token) {
    return res.sendStatus(401)
  }

  jwt.verify(token, 'kinky_secret_key', (err, user) => {
    if (err) return res.sendStatus(403)
    req.user = user
    next()
  })
}

// Routes

// User Registration
app.post('/api/register', async (req, res) => {
  try {
    const { username, email, password } = req.body
    
    const existingUser = users.find(u => u.email === email || u.username === username)
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const user = {
      id: userIdCounter++,
      username,
      email,
      password: hashedPassword,
      avatar: '🔥',
      verified: false,
      createdAt: new Date()
    }
    
    users.push(user)

    const token = jwt.sign({ userId: user.id }, 'kinky_secret_key')
    res.json({ token, user: { id: user.id, username, email, avatar: user.avatar } })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// User Login
app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body
    
    const user = users.find(u => u.email === email)
    if (!user || !await bcrypt.compare(password, user.password)) {
      return res.status(400).json({ error: 'Invalid credentials' })
    }

    const token = jwt.sign({ userId: user.id }, 'kinky_secret_key')
    res.json({ token, user: { id: user.id, username: user.username, email, avatar: user.avatar } })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Get Posts
app.get('/api/posts', (req, res) => {
  try {
    const { category } = req.query
    let filteredPosts = category && category !== 'All' ? 
      posts.filter(post => post.category === category) : posts

    const formattedPosts = filteredPosts
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 50)
      .map(post => ({
        id: post.id,
        user: post.username,
        avatar: post.avatar,
        verified: post.verified || false,
        content: post.content,
        image: post.image ? `/uploads/${post.image}` : null,
        category: post.category,
        likes: post.likes.length,
        comments: post.comments.length,
        time: formatTime(post.createdAt),
        createdAt: post.createdAt
      }))

    res.json(formattedPosts)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Create Post
app.post('/api/posts', authenticateToken, upload.single('image'), (req, res) => {
  try {
    const { content, category } = req.body
    const user = users.find(u => u.id === req.user.userId)
    
    const post = {
      id: postIdCounter++,
      userId: user.id,
      username: user.username,
      avatar: user.avatar,
      verified: user.verified,
      content,
      category: category || 'General',
      image: req.file ? req.file.filename : null,
      likes: [],
      comments: [],
      createdAt: new Date()
    }

    posts.unshift(post)
    
    const formattedPost = {
      id: post.id,
      user: post.username,
      avatar: post.avatar,
      verified: post.verified,
      content: post.content,
      image: post.image ? `/uploads/${post.image}` : null,
      category: post.category,
      likes: 0,
      comments: 0,
      time: 'Just now',
      createdAt: post.createdAt
    }

    // Broadcast to all connected clients
    io.emit('newPost', formattedPost)
    
    res.json(formattedPost)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Like Post
app.post('/api/posts/:id/like', authenticateToken, (req, res) => {
  try {
    const postId = parseInt(req.params.id)
    const userId = req.user.userId
    const post = posts.find(p => p.id === postId)

    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }

    if (post.likes.includes(userId)) {
      post.likes = post.likes.filter(id => id !== userId)
    } else {
      post.likes.push(userId)
    }
    
    // Broadcast like update
    io.emit('postLiked', { postId: post.id, likes: post.likes.length })
    
    res.json({ likes: post.likes.length })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Add Comment
app.post('/api/posts/:id/comment', authenticateToken, (req, res) => {
  try {
    const { content } = req.body
    const postId = parseInt(req.params.id)
    const user = users.find(u => u.id === req.user.userId)
    const post = posts.find(p => p.id === postId)

    if (!post) {
      return res.status(404).json({ error: 'Post not found' })
    }

    const comment = {
      userId: user.id,
      username: user.username,
      content,
      createdAt: new Date()
    }

    post.comments.push(comment)

    // Broadcast comment update
    io.emit('newComment', { postId: post.id, comments: post.comments.length })
    
    res.json({ comments: post.comments.length })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

// Socket.io for real-time updates
io.on('connection', (socket) => {
  console.log('🔥 User connected:', socket.id)
  
  socket.on('disconnect', () => {
    console.log('👋 User disconnected:', socket.id)
  })
})

// Helper function
function formatTime(date) {
  const now = new Date()
  const diff = now - date
  const minutes = Math.floor(diff / 60000)
  const hours = Math.floor(minutes / 60)
  const days = Math.floor(hours / 24)

  if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`
  if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`
  if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`
  return 'Just now'
}

const PORT = process.env.PORT || 5000

// Handle server startup with error handling
server.listen(PORT, () => {
  console.log(`🔥 Kinky Community Server running on http://localhost:${PORT}`)
  console.log(`📱 No database required - using in-memory storage`)
  console.log(`🚀 Ready for connections!`)
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.log(`❌ Port ${PORT} is busy, trying port ${PORT + 1}...`)
    server.listen(PORT + 1, () => {
      console.log(`🔥 Kinky Community Server running on http://localhost:${PORT + 1}`)
      console.log(`📱 No database required - using in-memory storage`)
      console.log(`🚀 Ready for connections!`)
    })
  } else {
    console.error('❌ Server error:', err)
  }
})