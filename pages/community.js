import Head from 'next/head'
import { useState, useEffect } from 'react'
import dynamic from 'next/dynamic'

const API_URL = 'http://localhost:3000/api'
const SOCKET_URL = 'http://localhost:3000'

export default function Community() {
  const [user, setUser] = useState(null)
  const [posts, setPosts] = useState([])
  const [newPost, setNewPost] = useState({ content: '', image: null, category: 'General' })
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [socket, setSocket] = useState(null)
  const [token, setToken] = useState(null)
  const [backendOnline, setBackendOnline] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  const categories = ['All', 'Domination', 'Sissy Training', 'Chastity', 'Foot Worship', 'Financial Dom', 'BDSM', 'General']

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768)
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    window.addEventListener('resize', handleResize)
    
    const savedUser = localStorage.getItem('user')
    const savedToken = localStorage.getItem('authToken')
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser))
      setToken(savedToken)
    }

    // Always use demo mode - fully functional without backend
    setBackendOnline(true)
    loadPosts()
    
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const loadPosts = (category = 'All') => {
    const allPosts = JSON.parse(localStorage.getItem('communityPosts') || JSON.stringify([
      {
        id: 1, user: 'MistressKathy', avatar: '👑', verified: true,
        content: 'Welcome to our kinky community! Share your fantasies and experiences 🔥',
        category: 'Domination', likes: 15, comments: 3, time: '2 hours ago'
      },
      {
        id: 2, user: 'SissySlut', avatar: '💋', verified: false,
        content: 'Just finished my first makeup tutorial with Mistress! I look like such a whore now 😍',
        category: 'Sissy Training', likes: 8, comments: 5, time: '4 hours ago'
      },
      {
        id: 3, user: 'PayPig69', avatar: '🐷', verified: false,
        content: 'Sent another $500 tribute today. My wallet is getting so light but I can\'t stop! 💸',
        category: 'Financial Dom', likes: 12, comments: 2, time: '6 hours ago'
      },
      {
        id: 4, user: 'ChastityBoy', avatar: '🔒', verified: false,
        content: 'Day 30 locked up! My balls are so blue and I\'m desperate for release 😩',
        category: 'Chastity', likes: 20, comments: 7, time: '1 hour ago'
      },
      {
        id: 5, user: 'FootSlave', avatar: '👣', verified: false,
        content: 'Mistress made me worship her heels for 2 hours straight. My tongue is sore but I loved every second 👠',
        category: 'Foot Worship', likes: 14, comments: 4, time: '3 hours ago'
      }
    ]))
    
    const filtered = category === 'All' ? allPosts : allPosts.filter(post => post.category === category)
    setPosts(filtered)
  }

  const handleImageUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setNewPost({...newPost, image: file})
    }
  }

  const submitPost = () => {
    if (!user) {
      alert('Please sign in to post')
      return
    }
    if (!newPost.content.trim()) return

    const newPostData = {
      id: Date.now(),
      user: user.name || user.email.split('@')[0],
      avatar: '🔥',
      verified: false,
      content: newPost.content,
      category: newPost.category,
      likes: 0,
      comments: 0,
      time: 'Just now'
    }
    
    const allPosts = JSON.parse(localStorage.getItem('communityPosts') || '[]')
    allPosts.unshift(newPostData)
    localStorage.setItem('communityPosts', JSON.stringify(allPosts))
    
    setPosts(prev => [newPostData, ...prev])
    setNewPost({ content: '', image: null, category: 'General' })
  }

  const likePost = (postId) => {
    if (!user) {
      alert('Please sign in to like posts')
      return
    }

    setPosts(prev => prev.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    ))
    
    const allPosts = JSON.parse(localStorage.getItem('communityPosts') || '[]')
    const updatedPosts = allPosts.map(post => 
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    )
    localStorage.setItem('communityPosts', JSON.stringify(updatedPosts))
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
          <div style={{ 
            maxWidth: '1200px', margin: '0 auto', padding: '0 10px', 
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            flexWrap: 'wrap', gap: '10px'
          }}>
            <h1 style={{ color: '#ff1493', margin: 0, fontSize: isMobile ? '1.5rem' : '2rem' }}>🔥 Kinky Community</h1>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{
                width: '10px', height: '10px', borderRadius: '50%',
                background: backendOnline ? '#00ff00' : '#ff0000'
              }}></div>
              <span style={{ fontSize: '12px', color: '#ccc' }}>
                Live Community
              </span>
            </div>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
              {user ? (
                <span style={{ fontSize: isMobile ? '14px' : '16px' }}>Welcome, {user.name || user.email.split('@')[0]} 💋</span>
              ) : (
                <button onClick={() => window.location.href = '/'} style={{
                  background: '#ff1493', border: 'none', color: 'white', padding: '8px 15px',
                  borderRadius: '5px', cursor: 'pointer', fontSize: '14px'
                }}>Sign In</button>
              )}
              <a href="/" style={{ color: 'white', textDecoration: 'none', fontSize: '14px' }}>← Back</a>
            </div>
          </div>
        </header>

        <div style={{ 
          maxWidth: '1200px', margin: '0 auto', padding: '10px', 
          display: 'block'
        }}>
          {/* Sidebar */}
          <div style={{ 
            background: 'rgba(255,255,255,0.1)', borderRadius: '15px', padding: '15px', 
            marginBottom: '20px'
          }}>
            <h3 style={{ color: '#ff1493', marginBottom: '15px', fontSize: '1.2rem' }}>Categories</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {categories.map(cat => (
                <div key={cat} onClick={() => handleCategoryChange(cat)} style={{
                  padding: '8px 12px', borderRadius: '20px', cursor: 'pointer', fontSize: '14px',
                  background: selectedCategory === cat ? '#ff1493' : 'rgba(255,255,255,0.1)',
                  transition: 'background 0.3s ease', border: '1px solid rgba(255,20,147,0.3)'
                }}>
                  {cat}
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div>
            {/* Post Creation */}
            {user && (
              <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '15px', padding: '15px', marginBottom: '20px' }}>
                <h3 style={{ color: '#ff1493', marginBottom: '15px', fontSize: '1.2rem' }}>Share Your Kinky Thoughts 💭</h3>
                <select value={newPost.category} onChange={(e) => setNewPost({...newPost, category: e.target.value})} style={{
                  width: '100%', padding: '10px', marginBottom: '15px', borderRadius: '8px', border: 'none', fontSize: '14px'
                }}>
                  {categories.slice(1).map(cat => <option key={cat} value={cat}>{cat}</option>)}
                </select>
                <textarea value={newPost.content} onChange={(e) => setNewPost({...newPost, content: e.target.value})} 
                  placeholder="Share your kinky experiences, fantasies, or questions..." style={{
                  width: '100%', height: '80px', padding: '12px', borderRadius: '8px', border: 'none',
                  background: 'rgba(255,255,255,0.9)', resize: 'vertical', marginBottom: '15px', fontSize: '14px', boxSizing: 'border-box'
                }} />
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <label style={{ cursor: 'pointer', background: '#666', padding: '8px 12px', borderRadius: '5px', fontSize: '14px' }}>
                    📷 Add Image
                    <input type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
                  </label>
                  {newPost.image && <span style={{ color: '#ff69b4', fontSize: '14px' }}>✓ Image selected</span>}
                  <button onClick={submitPost} style={{
                    background: 'linear-gradient(45deg, #ff1493, #ff69b4)', border: 'none', color: 'white',
                    padding: '10px 15px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '14px'
                  }}>Post 🔥</button>
                </div>
              </div>
            )}

            {/* Posts Feed */}
            <div>
              {filteredPosts.map(post => (
                <div key={post.id} style={{
                  background: 'rgba(255,255,255,0.1)', borderRadius: '15px', padding: '15px',
                  marginBottom: '15px', border: '1px solid rgba(255,20,147,0.3)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '1.5rem', marginRight: '8px' }}>{post.avatar}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', flexWrap: 'wrap' }}>
                        <strong style={{ color: '#ff69b4', fontSize: '14px' }}>{post.user}</strong>
                        {post.verified && <span style={{ color: '#ff1493' }}>✓</span>}
                        <span style={{ background: '#ff1493', padding: '2px 6px', borderRadius: '8px', fontSize: '11px' }}>
                          {post.category}
                        </span>
                      </div>
                      <div style={{ fontSize: '11px', color: '#ccc' }}>{post.time}</div>
                    </div>
                  </div>
                  
                  <div style={{ marginBottom: '12px', lineHeight: '1.5', fontSize: '14px' }}>{post.content}</div>
                  
                  {post.image && (
                    <div style={{ marginBottom: '12px' }}>
                      <img src={post.image} alt="Post" style={{
                        maxWidth: '100%', maxHeight: '300px', borderRadius: '8px', cursor: 'pointer'
                      }} onClick={() => window.open(post.image, '_blank')} />
                    </div>
                  )}
                  
                  <div style={{ display: 'flex', gap: '15px', paddingTop: '12px', borderTop: '1px solid rgba(255,20,147,0.2)' }}>
                    <button onClick={() => likePost(post.id)} style={{
                      background: 'none', border: 'none', color: '#ff69b4', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px'
                    }}>
                      🔥 {post.likes}
                    </button>
                    <button style={{
                      background: 'none', border: 'none', color: '#ccc', cursor: 'pointer',
                      display: 'flex', alignItems: 'center', gap: '4px', fontSize: '14px'
                    }}>
                      💬 {post.comments}
                    </button>
                    <button style={{
                      background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: '14px'
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