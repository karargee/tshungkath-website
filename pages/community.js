import Head from 'next/head'
import { useState, useEffect } from 'react'
import io from 'socket.io-client'

const API_URL = 'http://localhost:5001/api'
const SOCKET_URL = 'http://localhost:5001'

export default function Community() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({ content: '', image: null, category: 'General' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [socket, setSocket] = useState(null)
  const [token, setToken] = useState(null)
  const [backendOnline, setBackendOnline] = useState(false)

  const categories = ['All', 'Domination', 'Sissy Training', 'Chastity', 'Foot Worship', 'Financial Dom', 'BDSM', 'General']

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser')
    const savedToken = localStorage.getItem('authToken')
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser))
      setToken(savedToken)
    }

    // Check if backend is running first
    fetch(`${API_URL}/posts`)
      .then(response => {
        if (response.ok) {
          setBackendOnline(true)
          // Initialize socket connection only if backend is online
          const newSocket = io(SOCKET_URL)
          setSocket(newSocket)

          newSocket.on('connect', () => {
            console.log('🔥 Backend connected!')
          })

          newSocket.on('disconnect', () => {
            setBackendOnline(false)
            console.log('❌ Backend disconnected')
          })

          // Listen for real-time updates
          newSocket.on('newPost', (post) => {
            setPosts(prev => [post, ...prev])
          })

          newSocket.on('postLiked', ({ postId, likes }) => {
            setPosts(prev => prev.map(post => 
              post.id === postId ? { ...post, likes } : post
            ))
          })

          newSocket.on('newComment', ({ postId, comments }) => {
            setPosts(prev => prev.map(post => 
              post.id === postId ? { ...post, comments } : post
            ))
          })

          return () => newSocket.close()
        } else {
          throw new Error('Backend not running')
        }
      })
      .catch(() => {
        console.log('❌ Backend not available - using demo mode')
        setBackendOnline(false)
      })

    // Load posts
    loadPosts()
  }, [])

  const loadPosts = async (category = 'All') => {
    try {
      const url = category === 'All' ? `${API_URL}/posts` : `${API_URL}/posts?category=${category}`
      const response = await fetch(url)
      if (!response.ok) throw new Error('Backend not running')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Backend not available:', error)
      // Show demo posts when backend is offline
      setPosts([
        {
          id: 1, user: 'MistressKathy', avatar: '👑', verified: true,
          content: 'Welcome to our kinky community! Share your fantasies and experiences 🔥',
          category: 'Domination', likes: 15, comments: 3, time: '2 hours ago',
          image: null
        },
        {
          id: 2, user: 'SissySlut', avatar: '💋', verified: false,
          content: 'Just finished my first makeup tutorial with Mistress! I look like such a whore now 😍',
          category: 'Sissy Training', likes: 8, comments: 5, time: '4 hours ago',
          image: null
        },
        {
          id: 3, user: 'PayPig69', avatar: '🐷', verified: false,
          content: 'Sent another $500 tribute today. My wallet is getting so light but I can\'t stop! 💸',
          category: 'Financial Dom', likes: 12, comments: 2, time: '6 hours ago',
          image: null
        }
      ])
    }
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setNewPost({...newPost, image: file})
    }
  }

  const submitPost = async () => {
    if (!user || !token) {
      alert('Please sign in to post')
      return
    }
    if (!newPost.content.trim()) return

    try {
      const formData = new FormData()
      formData.append('content', newPost.content)
      formData.append('category', newPost.category)
      if (newPost.image) {
        formData.append('image', newPost.image)
      }

      const response = await fetch(`${API_URL}/posts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      })

      if (response.ok) {
        setNewPost({ content: '', image: null, category: 'General' })
        // Post will be added via socket event
      } else {
        throw new Error('Backend not available')
      }
    } catch (error) {
      console.error('Backend not available:', error)
      // Add post locally when backend is offline
      const newPostData = {
        id: Date.now(),
        user: user.name || user.email.split('@')[0],
        avatar: '🔥',
        verified: false,
        content: newPost.content,
        category: newPost.category,
        likes: 0,
        comments: 0,
        time: 'Just now',
        image: null
      }
      setPosts(prev => [newPostData, ...prev])
      setNewPost({ content: '', image: null, category: 'General' })
      alert('🔥 Post created! (Demo mode - start backend for full functionality)')
    }
  }

  const likePost = async (postId) => {
    if (!token) {
      alert('Please sign in to like posts')
      return
    }

    try {
      await fetch(`${API_URL}/posts/${postId}/like`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      })
      // Like count will be updated via socket event
    } catch (error) {
      console.error('Backend not available:', error)
      // Update likes locally when backend is offline
      setPosts(prev => prev.map(post => 
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      ))
    }
  }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
    loadPosts(category)
  }

  const filteredPosts = posts

  return (
    <>
      <Head>
        <title>Kinky Community - TshungKath</title>
        <meta name="description" content="Adult community for kinky discussions and sharing" />
      </Head>

      <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #1a1a1a, #2d1b2d)', color: 'white' }}>
        {/* Header */}
        <header style={{ background: 'rgba(0,0,0,0.9)', padding: '15px 0', borderBottom: '2px solid #ff1493' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ color: '#ff1493', margin: 0 }}>🔥 Kinky Community</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: backendOnline ? '#00ff00' : '#ff0000'
              }}></div>
              <span style={{ fontSize: '12px', color: '#ccc' }}>
                {backendOnline ? 'Live' : 'Demo Mode'}
              </span>
            </div>
            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
              {user ? (
                <span>Welcome, {user.name || user.email.split('@')[0]} 💋</span>
              ) : (
                <button onClick={() => window.location.href = '/'} style={{
                  background: '#ff1493', border: 'none', color: 'white', padding: '8px 15px',
                  borderRadius: '5px', cursor: 'pointer'
                }}>Sign In</button>
              )}
              <a href="/" style={{ color: 'white', textDecoration: 'none' }}>← Back to Main</a>
            </div>
          </div>
        </header>

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px', display: 'grid', gridTemplateColumns: '250px 1fr', gap: '30px' }}>
          {/* Sidebar */}
          <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '15px', padding: '20px', height: 'fit-content' }}>
            <h3 style={{ color: '#ff1493', marginBottom: '20px' }}>Categories</h3>
            {categories.map(cat => (
              <div key={cat} onClick={() => handleCategoryChange(cat)} style={{
                padding: '10px 15px', marginBottom: '5px', borderRadius: '8px', cursor: 'pointer',
                background: selectedCategory === cat ? '#ff1493' : 'transparent',
                transition: 'background 0.3s ease'
              }}>
                {cat}
              </div>
            ))}
            
            <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(255,20,147,0.2)', borderRadius: '10px' }}>
              <h4 style={{ color: '#ff69b4', marginBottom: '10px' }}>🔞 Community Rules</h4>
              <ul style={{ fontSize: '12px', lineHeight: '1.4', paddingLeft: '15px' }}>
                <li>18+ only - age verification required</li>
                <li>Respect all members and their limits</li>
                <li>No harassment or non-consensual content</li>
                <li>Keep content kinky but legal</li>
                <li>No spam or commercial posts</li>
              </ul>
            </div>
          </div>

          {/* Main Content */}
          <div>
            {/* Post Creation */}
            {user && (
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '15px', padding: '25px', marginBottom: '30px' }}>
                <h3 style={{ color: '#ff1493', marginBottom: '20px' }}>Share Your Kinky Thoughts 💭</h3>
                <select value={newPost.category} onChange={(e) => setNewPost({...newPost, category: e.target.value})} style={{
                  width: '200px', padding: '8px', marginBottom: '15px', borderRadius: '5px', border: 'none'
                }}>
                  {categories.slice(1).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <textarea value={newPost.content} onChange={(e) => setNewPost({...newPost, content: e.target.value})} 
                  placeholder="Share your kinky experiences, fantasies, or questions..." style={{
                  width: '100%', height: '100px', padding: '15px', borderRadius: '10px', border: 'none',
                  background: 'rgba(255,255,255,0.9)', resize: 'vertical', marginBottom: '15px'
                }} />
                <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                  <label style={{ cursor: 'pointer', background: '#666', padding: '8px 15px', borderRadius: '5px' }}>
                    📷 Add Image
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                  </label>
                  {newPost.image && <span style={{ color: '#ff69b4' }}>✓ Image selected</span>}
                  <button onClick={submitPost} style={{
                    background: 'linear-gradient(45deg, #ff1493, #ff69b4)', border: 'none', color: 'white',
                    padding: '10px 20px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'
                  }}>Post 🔥</button>
                </div>
              </div>
            )}

            {/* Posts Feed */}
            <div>
              {filteredPosts.map(post => (
                <div key={post.id} style={{
                  background: 'rgba(255,255,255,0.1)', borderRadius: '15px', padding: '25px',
                  marginBottom: '20px', border: '1px solid rgba(255,20,147,0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <span style={{ fontSize: '2rem', marginRight: '10px' }}>{post.avatar}</span>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <strong style={{ color: '#ff69b4' }}>{post.user}</strong>
                        {post.verified && <span style={{ color: '#ff1493' }}>✓</span>}
                        <span style={{ background: '#ff1493', padding: '2px 8px', borderRadius: '10px', fontSize: '12px' }}>
                          {post.category}
                        </span>
                      </div>
                      <div style={{ fontSize: '12px', color: '#ccc' }}>{post.time}</div>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '15px', lineHeight: '1.6' }}>{post.content}</div>
                  
                  {post.image && (
                    <div style={{ marginBottom: '15px' }}>
                      <img src={post.image} alt="Post" style={{
                        maxWidth: '100%', maxHeight: '400px', borderRadius: '10px', cursor: 'pointer'
                      }} onClick={() => window.open(post.image, '_blank')} />
                    </div>
                  )}
                  
                  <div style={{ display: 'flex', gap: '20px', paddingTop: '15px', borderTop: '1px solid rgba(255,20,147,0.2)' }}>
                    <button onClick={() => likePost(post.id)} style={{
                      background: 'none', border: 'none', color: '#ff69b4', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '5px'
                    }}>
                      🔥 {post.likes}
                    </button>
                    <button style={{
                      background: 'none', border: 'none', color: '#ccc', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '5px'
                    }}>
                      💬 {post.comments}
                    </button>
                    <button style={{
                      background: 'none', border: 'none', color: '#ccc', cursor: 'pointer'
                    }}>
                      📤 Share
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredPosts.length === 0 && (
              <div style={{ textAlign: 'center', padding: '60px', color: '#666' }}>
                <h3>No posts in this category yet</h3>
                <p>Be the first to share something kinky! 🔥</p>
              </div>
            )}
          </div>
        </div>

        {/* Age Verification Notice */}
        <div style={{
          position: 'fixed', bottom: '20px', right: '20px', background: 'rgba(255,20,147,0.9)',
          padding: '15px', borderRadius: '10px', maxWidth: '300px', fontSize: '12px'
        }}>
          🔞 This is an adult community. You must be 18+ to participate.
        </div>
      </div>
    </>
  )
}