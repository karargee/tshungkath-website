import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [authModal, setAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState('login') // 'login', 'register', 'verify'
  const [verificationEmail, setVerificationEmail] = useState('')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const [liveChatOpen, setLiveChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Mistress Kathy', message: 'Ready to submit to me, slave? Tell me your deepest fantasies 😈🔥', time: '10:30 AM' },
    { sender: 'You', message: 'Please use me however you want, Mistress', time: '10:31 AM' },
    { sender: 'Mistress Kathy', message: 'Good slut. I\'m going to break you and make you beg for more 💋', time: '10:32 AM' }
  ])
  const [newMessage, setNewMessage] = useState('')
  const [serviceModal, setServiceModal] = useState({ open: false, service: '' })
  const [paymentModal, setPaymentModal] = useState({ open: false, service: '', price: '', selectedOption: '' })
  
  // New advanced features state
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(true)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [installPrompt, setInstallPrompt] = useState(null)

  const servicePricing = {
    'Online Domination': [
      { name: 'JOI Session (15min)', price: 60 },
      { name: 'CEI Training (20min)', price: 75 },
      { name: 'Humiliation Session (30min)', price: 100 },
      { name: 'Orgasm Control (45min)', price: 140 },
      { name: 'Role-play Session (60min)', price: 180 }
    ],
    'Sissy Transformation': [
      { name: 'Makeup Tutorial', price: 80 },
      { name: 'Walking in Heels Training', price: 60 },
      { name: 'Voice Feminization', price: 90 },
      { name: 'Outfit Styling Session', price: 70 },
      { name: 'Complete Transformation', price: 300 }
    ],
    'Financial Domination': [
      { name: 'Tribute $25', price: 25 },
      { name: 'Tribute $50', price: 50 },
      { name: 'Tribute $100', price: 100 },
      { name: 'Wallet Inspection', price: 150 },
      { name: 'Budget Control Session', price: 200 }
    ],
    'Foot Worship': [
      { name: 'Foot Massage Instructions', price: 40 },
      { name: 'Toe Sucking Training', price: 50 },
      { name: 'Shoe Worship Session', price: 45 },
      { name: 'Custom Foot Photos (5 pics)', price: 60 },
      { name: 'Worn Socks/Stockings', price: 80 }
    ],
    'Chastity Training': [
      { name: 'Device Fitting Guidance', price: 75 },
      { name: 'Weekly Lock-up Program', price: 120 },
      { name: 'Monthly Control Package', price: 400 },
      { name: 'Key Holding Service', price: 200 },
      { name: 'Release Training Session', price: 100 }
    ],
    'Private Mobile Dungeon': [
      { name: 'Basic BDSM Session (2hr)', price: 600 },
      { name: 'Advanced Bondage (3hr)', price: 850 },
      { name: 'Medical Play Session (2hr)', price: 700 },
      { name: 'Sissy Training (4hr)', price: 1000 },
      { name: 'Overnight Experience (8hr)', price: 2000 }
    ]
  }

  // Advanced features effects
  useEffect(() => {
    // Loading simulation
    setTimeout(() => setLoading(false), 2000)
    
    // Load saved user from localStorage
    const savedUser = localStorage.getItem('user')
    const savedToken = localStorage.getItem('authToken')
    if (savedUser && savedToken) {
      setUser(JSON.parse(savedUser))
    }
    
    // Scroll progress and back to top
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
      const scroll = `${totalScroll / windowHeight}`
      setScrollProgress(scroll * 100)
      setShowBackToTop(totalScroll > 300)
    }
    
    // PWA install prompt
    const handleInstallPrompt = (e) => {
      e.preventDefault()
      setInstallPrompt(e)
      addNotification('📱 Install TshungKath as an app for better experience!')
    }
    
    // Dark mode from localStorage
    const savedTheme = localStorage.getItem('darkMode')
    if (savedTheme) setDarkMode(JSON.parse(savedTheme))
    
    // Push notification permission
    if ('Notification' in window && Notification.permission === 'default') {
      Notification.requestPermission()
    }
    
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('beforeinstallprompt', handleInstallPrompt)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('beforeinstallprompt', handleInstallPrompt)
    }
  }, [])
  
  // Search functionality
  const handleSearch = (query) => {
    setSearchQuery(query)
    setShowSearch(true)
    if (query.length > 0) {
      const results = []
      Object.keys(servicePricing).forEach(service => {
        if (service.toLowerCase().includes(query.toLowerCase())) {
          results.push({ type: 'service', name: service, category: 'Services' })
        }
        servicePricing[service].forEach(item => {
          if (item.name.toLowerCase().includes(query.toLowerCase())) {
            results.push({ type: 'item', name: item.name, price: item.price, category: service })
          }
        })
      })
      setSearchResults(results)
    } else {
      setSearchResults([])
      setShowSearch(false)
    }
  }
  
  // Notification system
  const addNotification = (message) => {
    const id = Date.now()
    setNotifications(prev => [...prev, { id, message }])
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 5000)
  }
  
  // Theme toggle
  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', JSON.stringify(newMode))
    addNotification(`Switched to ${newMode ? 'dark' : 'light'} mode`)
  }
  
  // PWA install
  const handleInstall = async () => {
    if (installPrompt) {
      installPrompt.prompt()
      const result = await installPrompt.userChoice
      if (result.outcome === 'accepted') {
        addNotification('🎉 App installed successfully!')
      }
      setInstallPrompt(null)
    }
  }
  
  // Back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Gallery slideshow
  const galleryImages = [
    { src: '/20250811_080612.jpg', type: 'image' },
    { src: '/20250923_033902.jpg', type: 'image' },
    { src: '/5f859e2079de2-320-3.jpg', type: 'image' },
    { src: '/ClipDown.App_323181084_859195861864401_767757521491526338_n (1).jpg', type: 'image' },
    { src: '/IZ1KqdnC.jpeg', type: 'image' },
    { src: '/Snapchat-2048414736.jpg', type: 'image' },
    { src: '/Snapchat-2094116657.jpg', type: 'image' },
    { src: '/Snapinsta.app_252779091_468028234603867_2548580010668401338_n_1080.jpg', type: 'image' },
    { src: '/Snapinsta.app_323280597_482304177421626_3152935471351356946_n_1080.jpg', type: 'image' },
    { src: '/SnapInsta.to_574484374_18534045874052735_872482252059731347_n.jpg', type: 'image' },
    { src: '/SzU6IOIX.jpeg', type: 'image' },
    { src: '/kathys%20gallery/video1.mp4', type: 'video' },
    { src: '/kathys%20gallery/video2.mp4', type: 'video' },
    { src: '/kathys%20gallery/video3.mp4', type: 'video' }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const serviceDetails = {
    'Online Domination': {
      title: '🔥 Online Domination Sessions',
      description: 'Complete control through your screen - I own you digitally',
      details: [
        '💻 HD cam-to-cam sessions with full audio control',
        '🎯 JOI (Jerk Off Instructions) - I control when and how you touch yourself',
        '💦 CEI (Cum Eating Instructions) - You\'ll swallow every drop for me',
        '😈 Humiliation and degradation - I\'ll break down your ego completely',
        '🔒 Orgasm control and denial - Beg me for permission to cum',
        '📱 Tasks and assignments between sessions to keep you obedient',
        '🎭 Role-play scenarios: boss/employee, teacher/student, mommy/baby',
        '⏰ Sessions: 30min ($150), 60min ($250), 90min ($350)'
      ]
    },
    'Sissy Transformation': {
      title: '👗 Complete Sissy Transformation',
      description: 'Turn you into my perfect feminine slut step by step',
      details: [
        '💄 Makeup tutorials - Learn to look like a proper whore',
        '👠 Walking in heels training - Strut like the slut you are',
        '🎀 Outfit selection and styling - Dress to please men',
        '💅 Voice feminization coaching - Sound like a real girl',
        '🛍️ Shopping assignments for lingerie, dresses, and accessories',
        '📸 Photo shoots to document your transformation progress',
        '🌟 Public feminization tasks (when ready and consenting)',
        '💰 Packages: Basic ($500), Advanced ($1000), Complete Slut ($2000)'
      ]
    },
    'Financial Domination': {
      title: '💰 Financial Domination & Wallet Rape',
      description: 'Your money belongs to me - I\'ll drain you dry',
      details: [
        '💳 Tribute demands - Send money to prove your devotion',
        '🛒 Shopping sprees on your dime - Buy me whatever I want',
        '📊 Budget control - I decide how you spend YOUR money',
        '🎰 Financial games and blackmail scenarios',
        '💸 Wallet inspection - Show me every card and account',
        '🏦 Bill paying - I might pay your bills... or make them worse',
        '📱 Real-time money transfers during sessions',
        '💎 Tributes: $50-$5000+ depending on your wallet size'
      ]
    },
    'Foot Worship': {
      title: '👠 Foot Worship & Sole Submission',
      description: 'Worship my perfect feet like the pathetic foot slut you are',
      details: [
        '👣 Foot massage instructions - Learn to worship properly',
        '💅 Pedicure funding - Keep my feet perfect for you',
        '👠 Shoe and sock sniffing sessions',
        '🦶 Toe sucking and sole licking training',
        '📏 Foot measurement and comparison humiliation',
        '🧦 Worn sock and stocking sales for devoted foot slaves',
        '📱 Custom foot photos and videos',
        '💰 Sessions: $100-$300, Custom content: $50-$200'
      ]
    },
    'Chastity Training': {
      title: '🔒 Chastity Training & Orgasm Control',
      description: 'Lock up that pathetic cock - I control your pleasure now',
      details: [
        '🔐 Device selection and fitting guidance',
        '⏰ Lock-up periods from hours to months',
        '🗝️ Key holding services - I decide when you\'re free',
        '📊 Orgasm tracking and denial schedules',
        '💦 Ruined orgasm training when you\'ve been good',
        '🎯 Tasks to earn release time',
        '📱 Check-in requirements and photo proof',
        '💰 Training: $200-$800, Long-term control: $500-$2000/month'
      ]
    },
    'Private Mobile Dungeon': {
      title: '🚐 Private Mobile Dungeon Experience',
      description: 'I bring my fully equipped dungeon directly to you - ultimate discretion and convenience',
      details: [
        '🚐 Custom-built mobile dungeon van with professional BDSM equipment',
        '🏠 Discreet arrival at your location - neighbors will never know',
        '⛓️ Full restraint systems: St. Andrew\'s cross, suspension points, bondage table',
        '🔥 Impact play equipment: floggers, paddles, whips, canes, crops',
        '🔒 Chastity devices and orgasm control equipment selection',
        '💉 Medical play setup: examination table, speculums, sounds, catheters',
        '👗 Sissy transformation station: makeup, wigs, lingerie, heels',
        '🎪 Milking machine and prostate massage equipment',
        '🧼 Professional cleaning and sanitization between sessions',
        '📱 Booking requires 48-hour notice and location approval',
        '🏨 Available for hotel visits, private residences, or secluded locations',
        '💰 Sessions: 2hr minimum ($800), 4hr ($1400), Overnight ($2500)',
        '🛡️ Complete discretion guaranteed - unmarked vehicle, professional setup'
      ]
    }
  }

  return (
    <>
      <Head>
        <title>TshungKath - Professional Companion Services</title>
        <meta name="description" content="Professional personal companion and social services" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ff1493" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css?v=2" />
      </Head>

      {/* Loading Screen */}
      {loading && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: darkMode ? '#1a1a1a' : 'white', zIndex: 10002,
          display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'
        }}>
          <div style={{
            width: '60px', height: '60px', border: '4px solid #f3f3f3',
            borderTop: '4px solid #ff1493', borderRadius: '50%',
            animation: 'spin 1s linear infinite', marginBottom: '20px'
          }} />
          <h2 style={{ color: '#ff1493', marginBottom: '10px' }}>TshungKath</h2>
          <p style={{ color: darkMode ? '#ccc' : '#666' }}>Loading your desires...</p>
        </div>
      )}

      {/* Scroll Progress Bar */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: `${scrollProgress}%`, height: '3px',
        background: 'linear-gradient(90deg, #ff1493, #ff69b4)', zIndex: 10001,
        transition: 'width 0.3s ease'
      }} />

      {/* Notifications */}
      <div style={{
        position: 'fixed', top: '20px', right: '20px', zIndex: 10001
      }}>
        {notifications.map(notification => (
          <div key={notification.id} style={{
            background: darkMode ? '#333' : '#28a745', color: 'white',
            padding: '15px 20px', borderRadius: '8px', marginBottom: '10px',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)', animation: 'slideIn 0.3s ease'
          }}>
            {notification.message}
          </div>
        ))}
      </div>

      {/* Theme Toggle & PWA Install */}
      <div style={{
        position: 'fixed', top: '80px', right: '20px', zIndex: 1001,
        display: 'flex', flexDirection: 'column', gap: '10px'
      }}>
        <button onClick={toggleDarkMode} style={{
          width: '50px', height: '50px', borderRadius: '50%',
          background: darkMode ? '#333' : '#fff', border: '2px solid #ff1493',
          color: darkMode ? '#fff' : '#333', cursor: 'pointer', fontSize: '20px'
        }}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        {installPrompt && (
          <button onClick={handleInstall} style={{
            width: '50px', height: '50px', borderRadius: '50%',
            background: '#ff1493', border: 'none', color: 'white',
            cursor: 'pointer', fontSize: '20px'
          }}>📱</button>
        )}
      </div>

      {/* Search Bar */}
      <div style={{
        position: 'fixed', top: '80px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 1001, width: '300px'
      }}>
        <div style={{ position: 'relative' }}>
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
            onFocus={() => setShowSearch(true)}
            onBlur={() => setTimeout(() => setShowSearch(false), 200)}
            style={{
              width: '100%', padding: '12px 40px 12px 15px',
              border: '2px solid #ff1493', borderRadius: '25px',
              background: darkMode ? '#333' : 'white',
              color: darkMode ? 'white' : '#333', outline: 'none'
            }}
          />
          <span style={{
            position: 'absolute', right: '15px', top: '50%',
            transform: 'translateY(-50%)', color: '#ff1493', fontSize: '18px'
          }}>🔍</span>
        </div>
        
        {/* Search Results */}
        {showSearch && searchResults.length > 0 && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: darkMode ? '#333' : 'white', border: '1px solid #ddd',
            borderRadius: '10px', marginTop: '5px', maxHeight: '300px',
            overflow: 'auto', boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
          }}>
            {searchResults.map((result, i) => (
              <div key={i} style={{
                padding: '12px 15px', borderBottom: '1px solid #eee',
                cursor: 'pointer', color: darkMode ? 'white' : '#333'
              }} onClick={() => {
                if (result.type === 'service') {
                  setServiceModal({ open: true, service: result.name })
                }
                setShowSearch(false)
                setSearchQuery('')
              }}>
                <div style={{ fontWeight: 'bold' }}>{result.name}</div>
                <div style={{ fontSize: '12px', color: '#666' }}>
                  {result.category} {result.price && `- $${result.price}`}
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* Show "No results" when searching but no matches */}
        {showSearch && searchQuery.length > 2 && searchResults.length === 0 && (
          <div style={{
            position: 'absolute', top: '100%', left: 0, right: 0,
            background: darkMode ? '#333' : 'white', border: '1px solid #ddd',
            borderRadius: '10px', marginTop: '5px', padding: '15px',
            color: darkMode ? 'white' : '#333', textAlign: 'center'
          }}>
            No services found for "{searchQuery}"
          </div>
        )}
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', top: '70px', left: '0', right: '0',
          background: 'rgba(0,0,0,0.95)', zIndex: 50000,
          padding: '20px', backdropFilter: 'blur(10px)'
        }}>
          <div style={{
            maxWidth: '400px', margin: '0 auto',
            background: 'rgba(255,255,255,0.1)', borderRadius: '15px',
            border: '2px solid #ff1493'
          }}>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
              {[
                { text: '🏠 Home', href: '#home' },
                { text: '👤 About', href: '#about' },
                { text: '💼 Services', href: '#services' },
                { text: '🔥 Community', href: '/community' },
                { text: '💰 Pricing', href: '#pricing' },
                { text: '📅 Book Now', href: '#booking' },
                { text: '📞 Contact', href: '#contact' }
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.href} onClick={() => setMobileMenuOpen(false)} style={{
                    display: 'block', padding: '15px 20px', color: 'white', textDecoration: 'none',
                    borderBottom: i < 6 ? '1px solid rgba(255,20,147,0.3)' : 'none',
                    fontSize: '16px', fontWeight: 'bold', transition: 'all 0.3s ease'
                  }}>{item.text}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Animated Background */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -2,
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%', animation: 'gradientShift 15s ease infinite'
      }} />

      {/* Floating Background Elements */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: -1, overflow: 'hidden'
      }}>
        {['💋', '🔥', '⛓️', '🖤', '💜', '👠', '🔒', '💰'].map((emoji, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${10 + i * 12}%`,
            top: `${20 + (i % 3) * 30}%`,
            animation: `float ${4 + i}s ease-in-out infinite`,
            fontSize: '3rem',
            opacity: 0.15,
            transform: `rotate(${i * 45}deg)`
          }}>{emoji}</div>
        ))}
        {Array.from({length: 20}).map((_, i) => (
          <div key={`particle-${i}`} style={{
            position: 'absolute',
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: '4px',
            height: '4px',
            background: '#ff1493',
            borderRadius: '50%',
            animation: `particle ${5 + Math.random() * 10}s linear infinite`,
            opacity: 0.3
          }} />
        ))}
      </div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">TshungKath</h1>
          <div className="nav-right">
            <div className="header-social">
              <a href="/community" style={{
                color: 'white', fontSize: '18px', marginRight: '15px', textDecoration: 'none',
                background: 'rgba(255,20,147,0.2)', padding: '5px 10px', borderRadius: '5px'
              }}>🔥 Community</a>
              <a href="https://twitter.com/tshungkatherine" target="_blank" style={{
                color: 'white', fontSize: '18px', marginRight: '10px', textDecoration: 'none'
              }}>𝕏</a>
              <a href="https://t.me/tshungkath10" target="_blank" style={{
                color: 'white', fontSize: '18px', marginRight: '10px', textDecoration: 'none'
              }}>📱</a>
              <a href="https://snapchat.com/add/tskathy4subs" target="_blank" style={{
                color: 'white', fontSize: '18px', marginRight: '15px', textDecoration: 'none'
              }}>👻</a>
            </div>
            {user ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{color: 'white', fontSize: '14px'}}>Welcome, {user.name || user.email}</span>
                <button onClick={() => {
                  setUser(null)
                  localStorage.removeItem('user')
                  localStorage.removeItem('authToken')
                  addNotification('Signed out successfully')
                }} style={{
                  background: '#dc3545', border: 'none', color: 'white', fontSize: '12px',
                  padding: '6px 10px', borderRadius: '4px', cursor: 'pointer'
                }}>Sign Out</button>
              </div>
            ) : (
              <button onClick={() => setAuthModal(true)} style={{
                background: '#ff1493', border: 'none', color: 'white', fontSize: '18px',
                padding: '8px 12px', borderRadius: '5px', cursor: 'pointer', marginRight: '15px'
              }}>👤</button>
            )}
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/20250818_053853.jpg")',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
      }}>
        <div className="hero-content">
          <h1>TshungKath</h1>
          <p>🔥 Dominant trans mistress ready to explore your deepest fantasies and push your limits. Submit to my control and experience true pleasure through pain and obedience. 💋</p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div style={{
            background: 'rgba(255,255,255,0.95)', 
            padding: '40px', 
            borderRadius: '15px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            border: '2px solid #ff1493',
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <p style={{
              fontSize: '1.2rem',
              lineHeight: '1.8',
              color: '#333',
              marginBottom: '20px'
            }}>Hello! I'm Kathy, your kinky trans mistress specializing in domination and submission experiences. I provide exceptional personalized sessions for dedicated sluts and subs, helping you explore your deepest desires and push your limits in a safe, discreet environment.</p>
            <p style={{
              fontSize: '1.1rem',
              color: '#666',
              fontStyle: 'italic'
            }}>🔥 Ready to submit completely? Let me break you down and rebuild you as my perfect little toy. 💋</p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="services" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.95), rgba(255,255,255,0.95)), url("/5f859e2079de2-320-3.jpg")',
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <div className="container">
          <h2>Premium Services</h2>
          <div className="services-grid">
            {[
              { key: 'Online Domination', title: '🔥 Online Domination', desc: 'Intense cam sessions where I control every move you make' },
              { key: 'Sissy Transformation', title: '👗 Sissy Transformation', desc: 'Turn you into my perfect little slut through complete feminization' },
              { key: 'Financial Domination', title: '💰 Financial Domination', desc: 'Drain your wallet while you beg for more abuse' },
              { key: 'Foot Worship', title: '👠 Foot Worship', desc: 'Worship my perfect feet like the pathetic sub you are' },
              { key: 'Private Mobile Dungeon', title: '🚐 Mobile Dungeon', desc: 'I bring my fully equipped dungeon directly to you', link: '/mobile-dungeon' }
            ].map((service, i) => (
              <div key={i} className="service-card" onClick={() => {
                if (service.link) {
                  window.open(service.link, '_blank')
                } else {
                  setServiceModal({ open: true, service: service.key })
                }
              }}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-overlay">Click for Details</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <div className="gallery-folder" onClick={() => {
            if (confirm('🔞 Age Verification Required\\n\\nYou must be 18+ to view this content.')) {
              setGalleryOpen(true)
              setCurrentSlide(0)
            }
          }}>
            <div className="folder-icon">📁</div>
            <h3>Private Gallery</h3>
            <p>15 items - 🔞 18+ Content Only</p>
          </div>
        </div>
      </section>

      {/* Gallery Slideshow Modal */}
      {galleryOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.95)', zIndex: 10001, display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }}>
          {/* Close Button */}
          <button onClick={() => setGalleryOpen(false)} style={{
            position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,20,147,0.8)',
            border: 'none', color: 'white', fontSize: '30px', width: '50px', height: '50px',
            borderRadius: '50%', cursor: 'pointer', zIndex: 10002
          }}>×</button>
          
          {/* Previous Button */}
          <button onClick={prevSlide} style={{
            position: 'absolute', left: '20px', background: 'rgba(255,20,147,0.8)',
            border: 'none', color: 'white', fontSize: '30px', width: '50px', height: '50px',
            borderRadius: '50%', cursor: 'pointer', zIndex: 10002
          }}>‹</button>
          
          {/* Next Button */}
          <button onClick={nextSlide} style={{
            position: 'absolute', right: '20px', background: 'rgba(255,20,147,0.8)',
            border: 'none', color: 'white', fontSize: '30px', width: '50px', height: '50px',
            borderRadius: '50%', cursor: 'pointer', zIndex: 10002
          }}>›</button>
          
          {/* Main Image/Video */}
          <div style={{ textAlign: 'center', maxWidth: '90%', maxHeight: '90%' }}>
            {galleryImages[currentSlide].type === 'video' ? (
              <video 
                src={galleryImages[currentSlide].src} 
                controls 
                autoPlay 
                muted
                style={{
                  maxWidth: '100%', maxHeight: '80vh', borderRadius: '10px',
                  boxShadow: '0 10px 30px rgba(255,20,147,0.5)'
                }}
              />
            ) : (
              <img src={galleryImages[currentSlide].src} alt={`Gallery ${currentSlide + 1}`} style={{
                maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain',
                borderRadius: '10px', boxShadow: '0 10px 30px rgba(255,20,147,0.5)'
              }} />
            )}
            
            {/* Image Counter */}
            <div style={{
              marginTop: '20px', color: 'white', fontSize: '18px',
              background: 'rgba(255,20,147,0.8)', padding: '10px 20px',
              borderRadius: '20px', display: 'inline-block'
            }}>
              {currentSlide + 1} / {galleryImages.length}
            </div>
            
            {/* Thumbnail Navigation */}
            <div style={{
              display: 'flex', justifyContent: 'center', gap: '10px',
              marginTop: '20px', flexWrap: 'wrap', maxWidth: '600px', margin: '20px auto 0'
            }}>
              {galleryImages.map((item, i) => (
                <div key={i} onClick={() => setCurrentSlide(i)} style={{
                  width: '60px', height: '60px', cursor: 'pointer', position: 'relative',
                  border: currentSlide === i ? '3px solid #ff1493' : '2px solid transparent',
                  borderRadius: '8px', overflow: 'hidden', opacity: currentSlide === i ? 1 : 0.6
                }}>
                  {item.type === 'video' ? (
                    <>
                      <video src={item.src} style={{
                        width: '100%', height: '100%', objectFit: 'cover'
                      }} />
                      <div style={{
                        position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                        color: 'white', fontSize: '20px', textShadow: '0 0 5px rgba(0,0,0,0.8)'
                      }}>▶</div>
                    </>
                  ) : (
                    <img src={item.src} alt={`Thumb ${i + 1}`} style={{
                      width: '100%', height: '100%', objectFit: 'cover'
                    }} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2 className="section-title">Client Reviews</h2>
          <div className="testimonials-grid">
            {[
              { stars: "⭐⭐⭐⭐⭐", text: "Kathy broke me completely and rebuilt me as her perfect sissy slut. Life-changing experience!", client: "- Sissy Jessica" },
              { stars: "⭐⭐⭐⭐⭐", text: "Best mistress ever! She knows exactly how to make me suffer and beg for more. Addicted!", client: "- Slave Mike" },
              { stars: "⭐⭐⭐⭐⭐", text: "My chastity training with Kathy was intense. She owns my cock now and I love it!", client: "- Locked Boy" }
            ].map((testimonial, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.95)',
                padding: '30px',
                borderRadius: '15px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '2px solid #ff1493',
                textAlign: 'center'
              }}>
                <div style={{ color: '#ffd700', fontSize: '1.2rem', marginBottom: '15px' }}>{testimonial.stars}</div>
                <p style={{ color: '#333', fontSize: '16px', lineHeight: '1.6', marginBottom: '15px' }}>{testimonial.text}</p>
                <span style={{ fontStyle: 'italic', color: '#666', fontSize: '14px' }}>{testimonial.client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing" style={{
        backgroundImage: 'linear-gradient(rgba(248,249,250,0.95), rgba(248,249,250,0.95)), url("/SzU6IOIX.jpeg")',
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <div className="container">
          <h2>💰 Service Rates</h2>
          <div className="pricing-grid">
            {Object.keys(servicePricing).map((serviceKey, i) => (
              <div key={i} className="pricing-card">
                <h3>{serviceKey}</h3>
                <div style={{ marginBottom: '20px' }}>
                  <select 
                    onChange={(e) => {
                      const selectedOption = servicePricing[serviceKey].find(opt => opt.name === e.target.value)
                      if (selectedOption) {
                        setPaymentModal({ 
                          open: true, 
                          service: serviceKey, 
                          price: selectedOption.price, 
                          selectedOption: selectedOption.name 
                        })
                      }
                    }}
                    style={{
                      width: '100%', padding: '12px', borderRadius: '8px', border: '2px solid #ff1493',
                      background: 'white', fontSize: '16px', cursor: 'pointer'
                    }}
                  >
                    <option value="">Select Service & Pay Now</option>
                    {servicePricing[serviceKey].map((option, j) => (
                      <option key={j} value={option.name}>
                        {option.name} - ${option.price > 0 ? option.price : 'Custom'}
                      </option>
                    ))}
                  </select>
                </div>
                <button 
                  onClick={() => setServiceModal({ open: true, service: serviceKey })}
                  style={{
                    width: '100%', padding: '12px', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
                    color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold'
                  }}
                >
                  View Details
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="booking" className="booking">
        <div className="container">
          <h2>📅 Book Your Session</h2>
          <div className="booking-form">
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const service = formData.get('service')
              const date = formData.get('date')
              const name = formData.get('name')
              const email = formData.get('email')
              const message = formData.get('message')
              
              alert(`🔥 Booking request submitted successfully! I'll contact you within 24 hours to confirm your ${service} session. Get ready to submit completely! 💋`)
              e.target.reset()
            }}>
              <select name="service" required>
                <option value="">Select Your Submission</option>
                <option value="Online Domination">🔥 Online Domination Session - Submit to my cam control</option>
                <option value="Sissy Training">👗 Sissy Training Program - Complete feminization</option>
                <option value="BDSM Session">⛓️ BDSM Pain Training - Learn to take punishment</option>
                <option value="Chastity Control">🔒 Chastity Control - Lock up your pathetic cock</option>
                <option value="Financial Domination">💰 Financial Domination - Drain your wallet for me</option>
                <option value="Foot Worship">👠 Foot Worship - Kiss and lick my perfect feet</option>
                <option value="Dungeon Session">🏰 Private Dungeon Session - Real equipment experience</option>
              </select>
              <input type="date" name="date" required min={new Date().toISOString().split('T')[0]} />
              <input type="text" name="name" placeholder="Your Slave Name" required />
              <input type="email" name="email" placeholder="Your Email" required />
              <textarea name="message" placeholder="Tell me your deepest fantasies and limits..." rows="4" style={{
                width: '100%', padding: '15px', marginBottom: '20px', border: '2px solid #e0e0e0',
                borderRadius: '10px', resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box'
              }}></textarea>
              <button type="submit">Submit to Mistress Kathy 💋</button>
            </form>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>💋 Get In Touch</h2>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📧</span>
              <span>kathtri57@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">𝕏</span>
              <span>X (Twitter): @tshungkatherine</span>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <span>Telegram: @tshungkath10</span>
            </div>
            <div className="contact-item">
              <span className="icon">👻</span>
              <span>Snapchat: tskathy4subs</span>
            </div>
            <div className="contact-item">
              <span className="icon">🔥</span>
              <span>Available 24/7 for your submission</span>
            </div>
          </div>
        </div>
      </section>

      {/* Payment Gateway Modal */}
      {paymentModal.open && (
        <div onClick={() => setPaymentModal({ open: false, service: '', price: '', selectedOption: '' })} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10001
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '500px', width: '90%'
          }}>
            <h2 style={{ color: '#ff1493', textAlign: 'center', marginBottom: '20px' }}>💳 Payment</h2>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h3>{paymentModal.selectedOption}</h3>
              <div style={{ fontSize: '2rem', color: '#ff1493', fontWeight: 'bold' }}>
                ${paymentModal.price > 0 ? paymentModal.price : 'Custom Amount'}
              </div>
            </div>
            
            <div style={{ display: 'grid', gap: '15px' }}>
              <button onClick={() => {
                if (paymentModal.price === 0) {
                  const amount = prompt('Enter tribute amount:')
                  if (amount) alert(`💳 Redirecting to card payment for $${amount}...`)
                } else {
                  alert(`💳 Redirecting to card payment for $${paymentModal.price}...`)
                }
              }} style={{
                background: 'linear-gradient(45deg, #4169E1, #6495ED)', color: 'white',
                border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'
              }}>💳 Pay with Card</button>
              
              <button onClick={() => {
                if (paymentModal.price === 0) {
                  const amount = prompt('Enter tribute amount:')
                  if (amount) alert(`💰 Redirecting to PayPal for $${amount}...`)
                } else {
                  alert(`💰 Redirecting to PayPal for $${paymentModal.price}...`)
                }
              }} style={{
                background: 'linear-gradient(45deg, #0070ba, #003087)', color: 'white',
                border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'
              }}>💰 PayPal</button>
              
              <button onClick={() => {
                const btcAddress = 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
                const amount = paymentModal.price > 0 ? paymentModal.price : prompt('Enter tribute amount:')
                if (amount) {
                  alert(`₿ Bitcoin Payment\\n\\nSend $${amount} worth of Bitcoin to:\\n${btcAddress}\\n\\nThen contact me with transaction ID.`)
                }
              }} style={{
                background: 'linear-gradient(45deg, #f7931a, #ffb347)', color: 'white',
                border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'
              }}>₿ Bitcoin</button>
            </div>
            
            <button onClick={() => setPaymentModal({ open: false, service: '', price: '', selectedOption: '' })} style={{
              background: '#666', color: 'white', border: 'none', padding: '10px 20px',
              borderRadius: '10px', cursor: 'pointer', width: '100%', marginTop: '20px'
            }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Service Details Modal */}
      {serviceModal.open && (
        <div onClick={() => setServiceModal({ open: false, service: '' })} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '600px', width: '90%',
            maxHeight: '80vh', overflow: 'auto', position: 'relative'
          }}>
            <button onClick={() => setServiceModal({ open: false, service: '' })} style={{
              position: 'absolute', top: '20px', right: '25px', background: 'none',
              border: 'none', fontSize: '30px', cursor: 'pointer', color: '#ff1493'
            }}>×</button>
            {serviceDetails[serviceModal.service] && (
              <>
                <h2 style={{ color: '#ff1493', marginBottom: '20px' }}>
                  {serviceDetails[serviceModal.service].title}
                </h2>
                <p style={{ fontSize: '18px', marginBottom: '30px', fontStyle: 'italic', color: '#666' }}>
                  {serviceDetails[serviceModal.service].description}
                </p>
                <div style={{ background: '#f8f9fa', padding: '30px', borderRadius: '15px', border: '2px solid #ff1493' }}>
                  <h3 style={{ color: '#ff1493', marginBottom: '20px' }}>What to Expect:</h3>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {serviceDetails[serviceModal.service].details.map((detail, i) => (
                      <li key={i} style={{
                        padding: '12px 0', borderBottom: '1px solid #eee',
                        fontSize: '16px', lineHeight: '1.5'
                      }}>{detail}</li>
                    ))}
                  </ul>
                </div>
                <div style={{ textAlign: 'center', marginTop: '30px' }}>
                  <h3 style={{ color: '#ff1493', marginBottom: '20px' }}>Select Your Option:</h3>
                  <div style={{ display: 'grid', gap: '15px', marginBottom: '20px' }}>
                    {servicePricing[serviceModal.service]?.map((option, i) => (
                      <button key={i} onClick={() => setPaymentModal({ open: true, service: serviceModal.service, price: option.price, selectedOption: option.name })} style={{
                        background: 'linear-gradient(45deg, #ff1493, #ff69b4)', color: 'white',
                        border: 'none', padding: '15px 20px', borderRadius: '10px',
                        fontSize: '16px', cursor: 'pointer', fontWeight: 'bold'
                      }}>
                        {option.name} - ${option.price > 0 ? option.price : 'Custom'}
                      </button>
                    ))}
                  </div>
                  <button onClick={() => {
                    setServiceModal({ open: false, service: '' })
                    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })
                  }} style={{
                    background: '#666', color: 'white',
                    border: 'none', padding: '10px 20px', borderRadius: '10px',
                    fontSize: '14px', cursor: 'pointer'
                  }}>Or Book Custom Session</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Live Chat Widget */}
      {liveChatOpen && (
        <div style={{
          position: 'fixed', 
          bottom: '20px', 
          right: '20px', 
          width: window.innerWidth < 768 ? '90vw' : '350px', 
          height: window.innerWidth < 768 ? '70vh' : '500px',
          background: 'white', 
          borderRadius: '15px', 
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)', 
          zIndex: 10000
        }}>
          <div style={{
            background: '#000', color: 'white', padding: '15px', borderRadius: '15px 15px 0 0',
            display: 'flex', justifyContent: 'space-between', alignItems: 'center'
          }}>
            <span>💬 Live Chat with Kathy</span>
            <button onClick={() => setLiveChatOpen(false)} style={{
              background: 'none', border: 'none', color: 'white', fontSize: '20px', cursor: 'pointer'
            }}>×</button>
          </div>
          <div style={{ padding: '20px', height: '350px', overflow: 'auto', background: '#f8f9fa' }}>
            {chatMessages.map((msg, i) => (
              <div key={i} style={{
                marginBottom: '15px', padding: '10px',
                background: msg.sender === 'Mistress Kathy' ? '#333' : '#ff1493',
                color: 'white', borderRadius: '10px',
                marginLeft: msg.sender === 'You' ? '20px' : '0'
              }}>
                <strong>{msg.sender}:</strong> {msg.message}
                <div style={{ fontSize: '10px', opacity: 0.7, marginTop: '5px' }}>{msg.time}</div>
              </div>
            ))}
          </div>
          <div style={{ padding: '15px', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
            <input 
              type="text" 
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === 'Enter' && newMessage.trim()) {
                  setChatMessages([...chatMessages, {
                    sender: 'You',
                    message: newMessage,
                    time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                  }])
                  setNewMessage('')
                  setTimeout(() => {
                    setChatMessages(prev => [...prev, {
                      sender: 'Mistress Kathy',
                      message: 'Mmm, tell me more about that fantasy, my little slut 🔥💋',
                      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                    }])
                  }, 2000)
                }
              }}
              placeholder="Type your message..." 
              style={{
                flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '20px', outline: 'none'
              }} 
            />
            <button 
              onClick={() => {
                if (newMessage.trim()) {
                  setChatMessages([...chatMessages, {
                    sender: 'You',
                    message: newMessage,
                    time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                  }])
                  setNewMessage('')
                  setTimeout(() => {
                    setChatMessages(prev => [...prev, {
                      sender: 'Mistress Kathy',
                      message: 'Mmm, tell me more about that fantasy, my little slut 🔥💋',
                      time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})
                    }])
                  }, 2000)
                }
              }}
              style={{
                background: '#ff1493', border: 'none', color: 'white', padding: '10px 20px',
                borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold'
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Back to Top Button */}
      {showBackToTop && (
        <button onClick={scrollToTop} style={{
          position: 'fixed', bottom: '100px', right: '20px',
          width: '50px', height: '50px', borderRadius: '50%',
          background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
          border: 'none', color: 'white', fontSize: '20px',
          cursor: 'pointer', zIndex: 9998, boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}>↑</button>
      )}



      {/* Auth Modal */}
      {authModal && (
        <div onClick={() => setAuthModal(false)} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: 'white', borderRadius: '15px', padding: '40px', maxWidth: '400px', width: '90%'
          }}>
            {authMode === 'login' && (
              <>
                <h3 style={{ color: '#ff1493', textAlign: 'center', marginBottom: '30px' }}>👤 Sign In</h3>
                <form onSubmit={async (e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target)
                  const email = formData.get('email')
                  const password = formData.get('password')
                  
                  try {
                    const response = await fetch('http://localhost:5002/api/login', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email, password })
                    })
                    
                    const data = await response.json()
                    
                    if (response.ok) {
                      setUser(data.user)
                      localStorage.setItem('authToken', data.token)
                      localStorage.setItem('user', JSON.stringify(data.user))
                      setAuthModal(false)
                      addNotification(`Welcome back, ${data.user.username}! 🔥`)
                    } else {
                      alert(data.error || 'Login failed')
                    }
                  } catch (error) {
                    alert('Connection error. Please try again.')
                  }
                }}>
                  <input name="email" type="email" placeholder="Email" required style={{ 
                    width: '100%', padding: '15px', marginBottom: '20px', 
                    border: '2px solid #e0e0e0', borderRadius: '10px', 
                    boxSizing: 'border-box', outline: 'none'
                  }} />
                  <input name="password" type="password" placeholder="Password" required style={{ 
                    width: '100%', padding: '15px', marginBottom: '20px', 
                    border: '2px solid #e0e0e0', borderRadius: '10px', 
                    boxSizing: 'border-box', outline: 'none'
                  }} />
                  <button type="submit" style={{
                    width: '100%', padding: '15px', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
                    color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold'
                  }}>Sign In</button>
                </form>
                <div style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
                  <p>Don't have an account? <button onClick={() => setAuthMode('register')} style={{ color: '#ff1493', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Register here</button></p>
                </div>
              </>
            )}
            
            {authMode === 'register' && (
              <>
                <h3 style={{ color: '#ff1493', textAlign: 'center', marginBottom: '30px' }}>🔥 Join Our Community</h3>
                <form onSubmit={async (e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target)
                  const username = formData.get('username')
                  const email = formData.get('email')
                  const password = formData.get('password')
                  
                  try {
                    const response = await fetch('http://localhost:5002/api/register', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ username, email, password })
                    })
                    
                    const data = await response.json()
                    
                    if (response.ok) {
                      setVerificationEmail(email)
                      setAuthMode('verify')
                      addNotification('📧 Verification code sent to your email!')
                    } else {
                      alert(data.error || 'Registration failed')
                    }
                  } catch (error) {
                    alert('Connection error. Please try again.')
                  }
                }}>
                  <input name="username" type="text" placeholder="Username" required style={{ 
                    width: '100%', padding: '15px', marginBottom: '20px', 
                    border: '2px solid #e0e0e0', borderRadius: '10px', 
                    boxSizing: 'border-box', outline: 'none'
                  }} />
                  <input name="email" type="email" placeholder="Email" required style={{ 
                    width: '100%', padding: '15px', marginBottom: '20px', 
                    border: '2px solid #e0e0e0', borderRadius: '10px', 
                    boxSizing: 'border-box', outline: 'none'
                  }} />
                  <input name="password" type="password" placeholder="Password" required style={{ 
                    width: '100%', padding: '15px', marginBottom: '20px', 
                    border: '2px solid #e0e0e0', borderRadius: '10px', 
                    boxSizing: 'border-box', outline: 'none'
                  }} />
                  <button type="submit" style={{
                    width: '100%', padding: '15px', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
                    color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold'
                  }}>Register</button>
                </form>
                <div style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
                  <p>Already have an account? <button onClick={() => setAuthMode('login')} style={{ color: '#ff1493', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Sign in here</button></p>
                </div>
              </>
            )}
            
            {authMode === 'verify' && (
              <>
                <h3 style={{ color: '#ff1493', textAlign: 'center', marginBottom: '30px' }}>📧 Verify Your Email</h3>
                <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>We sent a 6-digit code to <strong>{verificationEmail}</strong></p>
                <form onSubmit={async (e) => {
                  e.preventDefault()
                  const formData = new FormData(e.target)
                  const code = formData.get('code')
                  
                  try {
                    const response = await fetch('http://localhost:5002/api/verify-email', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ email: verificationEmail, code })
                    })
                    
                    const data = await response.json()
                    
                    if (response.ok) {
                      setUser(data.user)
                      localStorage.setItem('authToken', data.token)
                      localStorage.setItem('user', JSON.stringify(data.user))
                      setAuthModal(false)
                      setAuthMode('login')
                      addNotification(`Welcome to TshungKath, ${data.user.username}! 🔥`)
                    } else {
                      alert(data.error || 'Verification failed')
                    }
                  } catch (error) {
                    alert('Connection error. Please try again.')
                  }
                }}>
                  <input name="code" type="text" placeholder="Enter 6-digit code" maxLength="6" required style={{ 
                    width: '100%', padding: '15px', marginBottom: '20px', 
                    border: '2px solid #e0e0e0', borderRadius: '10px', 
                    boxSizing: 'border-box', outline: 'none', textAlign: 'center',
                    fontSize: '1.5rem', letterSpacing: '0.5rem'
                  }} />
                  <button type="submit" style={{
                    width: '100%', padding: '15px', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
                    color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold'
                  }}>Verify Account</button>
                </form>
                <div style={{ textAlign: 'center', marginTop: '20px', color: '#666' }}>
                  <p>Didn't receive the code? <button onClick={() => setAuthMode('register')} style={{ color: '#ff1493', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Resend</button></p>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Lightbox */}
      {lightboxOpen && (
        <div onClick={() => setLightboxOpen(false)} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000
        }}>
          <div onClick={(e) => e.stopPropagation()}>
            <img src={lightboxImage} alt="Gallery" style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>TshungKath</h3>
              <p>Professional companion services with complete discretion and satisfaction guaranteed.</p>
              <div className="social-links">
                <a href="https://twitter.com/tshungkatherine" target="_blank">𝕏</a>
                <a href="https://t.me/tshungkath10" target="_blank">📱</a>
                <a href="https://snapchat.com/add/tskathy4subs" target="_blank">👻</a>
              </div>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Online Domination</li>
                <li>Sissy Training</li>
                <li>Financial Control</li>
                <li>Mobile Dungeon</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <ul>
                <li>📧 kathtri57@gmail.com</li>
                <li>📱 Telegram: @tshungkath10</li>
                <li>🔥 Available 24/7</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Legal</h4>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
                <li>18+ Only</li>
                <li>Discretion Guaranteed</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 TshungKath Professional Services. All rights reserved.</p>
            <p>🔞 Adult content - Must be 18+ to access</p>
          </div>
        </div>
      </footer>

      {/* Floating Kinky Emojis */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        pointerEvents: 'none', zIndex: -1, overflow: 'hidden'
      }}>
        {['💋', '🔥', '⛓️', '🖤', '💜'].map((emoji, i) => (
          <div key={i} style={{
            position: 'absolute',
            left: `${20 + i * 20}%`,
            animation: `float ${3 + i}s ease-in-out infinite`,
            fontSize: '2rem',
            opacity: 0.1
          }}>{emoji}</div>
        ))}
      </div>

      {/* Live Chat Button */}
      <button onClick={() => setLiveChatOpen(!liveChatOpen)} style={{
        position: 'fixed', 
        bottom: '20px', 
        right: '20px', 
        width: '60px', 
        height: '60px',
        borderRadius: '50%', 
        background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
        border: 'none', 
        color: 'white', 
        fontSize: '24px', 
        cursor: 'pointer',
        zIndex: 9999
      }}>💬</button>

      <style jsx>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        @keyframes glow {
          0% { text-shadow: 0 0 20px #ff1493; }
          100% { text-shadow: 0 0 30px #ff69b4; }
        }
        @keyframes particle {
          0% { transform: translateY(100vh) rotate(0deg); }
          100% { transform: translateY(-100vh) rotate(360deg); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.9); z-index: 1000; padding: 15px 0; }
        .nav-container { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .nav-right { display: flex; align-items: center; gap: 15px; }
        .header-social { display: flex; align-items: center; gap: 10px; }
        .logo { color: #ff1493; font-size: 1.8rem; font-weight: bold; margin: 0; }
        .mobile-menu-btn { background: #ff1493; border: none; color: white; padding: 8px 12px; border-radius: 5px; cursor: pointer; display: none; }
        .hero { height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); }
        .hero h1 { font-size: 4rem; margin-bottom: 20px; text-shadow: 3px 3px 6px rgba(0,0,0,0.7); background: linear-gradient(45deg, #ff1493, #ff69b4, #fff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; animation: glow 3s ease-in-out infinite alternate; }
        .hero p { font-size: 1.4rem; margin-bottom: 30px; text-shadow: 2px 2px 4px rgba(0,0,0,0.7); max-width: 700px; }
        .cta-button { display: inline-block; padding: 20px 40px; background: linear-gradient(45deg, #ff1493, #ff69b4); color: white; text-decoration: none; border-radius: 30px; font-size: 18px; font-weight: bold; box-shadow: 0 10px 30px rgba(255,20,147,0.4); transition: all 0.3s ease; }
        .cta-button:hover { transform: translateY(-5px); box-shadow: 0 15px 40px rgba(255,20,147,0.6); }
        .about, .services, .gallery, .testimonials, .pricing, .booking, .dungeon, .contact { padding: 80px 0; }
        .about { background: #f8f9fa; }
        .services { background: white; }
        .gallery { background: #f8f9fa; }
        .testimonials { background: white; }
        .pricing { background: #f8f9fa; }
        .booking { background: white; }
        .dungeon { background: linear-gradient(135deg, #1a1a1a, #2d1b2d); color: white; }
        .contact { background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; text-align: center; }
        .footer { background: #000; color: white; padding: 40px 0; text-align: center; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .about h2, .services h2, .gallery h2, .testimonials h2, .pricing h2, .booking h2, .dungeon h2, .contact h2 { text-align: center; font-size: 2.5rem; margin-bottom: 50px; }
        .about h2, .services h2, .gallery h2, .testimonials h2, .pricing h2, .booking h2 { color: #ff1493; }
        .dungeon h2, .contact h2 { color: #ff1493; }
        .services-grid, .testimonials-grid, .pricing-grid, .dungeon-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .service-card { background: rgba(255,255,255,0.95); padding: 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 2px solid transparent; transition: all 0.3s ease; position: relative; overflow: hidden; cursor: pointer; backdrop-filter: blur(10px); }
        .service-card:hover { border-color: #ff1493; transform: translateY(-10px); box-shadow: 0 20px 40px rgba(255,20,147,0.3); }
        .service-card .service-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,20,147,0.9); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; opacity: 0; transition: opacity 0.3s ease; }
        .service-card:hover .service-overlay { opacity: 1; }
        .testimonial-card, .pricing-card { background: rgba(255,255,255,0.95); padding: 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 2px solid #ff1493; backdrop-filter: blur(10px); }
        .dungeon-card { background: rgba(255,255,255,0.1); color: white; }
        .service-card h3, .testimonial-card h3, .pricing-card h3, .dungeon-card h3 { color: #ff1493; margin-bottom: 15px; }
        .dungeon-placeholder { width: 100%; height: 150px; display: flex; align-items: center; justify-content: center; font-size: 4rem; background: rgba(139,0,139,0.3); border-radius: 10px; margin-bottom: 15px; }
        .gallery-folder { background: linear-gradient(135deg, #ff1493, #8b008b); color: white; padding: 40px; border-radius: 15px; text-align: center; cursor: pointer; max-width: 400px; margin: 0 auto; }
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; margin-top: 20px; }
        .gallery-item { cursor: pointer; border-radius: 10px; overflow: hidden; }
        .gallery-item img { width: 100%; height: 200px; object-fit: cover; }
        .testimonial-card .stars { color: #ffd700; font-size: 1.2rem; margin-bottom: 15px; }
        .testimonial-card .client-name { font-style: italic; color: #666; }
        .pricing-card .price { font-size: 2rem; color: #ff1493; font-weight: bold; margin: 20px 0; }
        .pricing-card ul { list-style: none; padding: 0; }
        .pricing-card li { padding: 8px 0; border-bottom: 1px solid #eee; }
        .booking-form { background: white; padding: 40px; border-radius: 15px; max-width: 500px; margin: 0 auto; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
        .booking-form input, .booking-form select { width: 100%; padding: 15px; margin-bottom: 20px; border: 2px solid #e0e0e0; border-radius: 10px; box-sizing: border-box; }
        .booking-form button { width: 100%; padding: 15px; background: linear-gradient(45deg, #ff1493, #ff69b4); color: white; border: none; border-radius: 10px; cursor: pointer; }
        .contact-item { display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 20px; font-size: 1.2rem; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 15px; border: 2px solid rgba(255,20,147,0.3); transition: all 0.3s ease; backdrop-filter: blur(10px); }
        .contact-item:hover { background: rgba(255,20,147,0.2); border-color: #ff1493; transform: translateY(-5px) scale(1.02); box-shadow: 0 15px 30px rgba(255,20,147,0.4); }
        .contact-item .icon { font-size: 2rem; background: linear-gradient(45deg, #ff1493, #ff69b4); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .dungeon-rules { background: rgba(139,0,139,0.2); padding: 40px; border-radius: 15px; margin-top: 50px; border: 2px solid #8b008b; }
        .dungeon-rules h3 { color: #ff1493; margin-bottom: 20px; }
        .dungeon-rules ul { list-style: none; padding: 0; }
        .dungeon-rules li { padding: 10px 0; border-bottom: 1px solid rgba(255,20,147,0.3); }
        .dungeon-rules li:before { content: '⚙️'; margin-right: 10px; }
        .dungeon-gallery { margin-top: 40px; }
        .dungeon-gallery h3 { color: #ff1493; text-align: center; margin-bottom: 30px; font-size: 1.8rem; }
        .footer { background: linear-gradient(135deg, #1a1a1a, #2d1b2d); color: white; padding: 60px 0 20px; position: relative; }
        .footer::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, #ff1493, #ff69b4, #8b008b); }
        .footer-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 40px; margin-bottom: 40px; }
        .footer-section h3 { color: #ff1493; font-size: 1.8rem; margin-bottom: 15px; }
        .footer-section h4 { color: #ff69b4; font-size: 1.2rem; margin-bottom: 15px; }
        .footer-section p { color: #ccc; line-height: 1.6; }
        .footer-section ul { list-style: none; padding: 0; }
        .footer-section li { padding: 5px 0; color: #ccc; }
        .social-links { display: flex; gap: 15px; margin-top: 15px; }
        .social-links a { display: inline-block; width: 40px; height: 40px; background: linear-gradient(45deg, #ff1493, #ff69b4); border-radius: 50%; text-align: center; line-height: 40px; color: white; text-decoration: none; transition: transform 0.3s ease; }
        .social-links a:hover { transform: scale(1.1); }
        .footer-bottom { border-top: 1px solid rgba(255,20,147,0.3); padding-top: 20px; text-align: center; }
        .footer-bottom p { margin: 5px 0; color: #999; }
        @media (max-width: 768px) {
          .footer-content { grid-template-columns: 1fr; gap: 30px; }
          .hero h1 { font-size: 2.5rem !important; }
          .hero p { font-size: 1.1rem !important; padding: 0 10px; }
          .services-grid, .dungeon-grid, .testimonials-grid, .pricing-grid { grid-template-columns: 1fr !important; }
          .nav-container { padding: 0 10px !important; }
          .logo { font-size: 1.4rem !important; }
          .container { padding: 0 10px !important; }
          .about h2, .services h2, .gallery h2, .testimonials h2, .pricing h2, .booking h2, .contact h2 { font-size: 2rem !important; }
          .service-card, .testimonial-card, .pricing-card { margin: 0 10px; }
          .booking-form { margin: 0 10px; padding: 20px !important; }
          .contact-item { margin: 0 10px 15px 10px; padding: 15px !important; font-size: 1rem !important; }
          .gallery-grid { grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)) !important; }
          .header-social { display: none !important; }
          .nav-right { gap: 10px; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  )
}
