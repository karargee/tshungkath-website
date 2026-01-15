import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
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
  const [darkMode, setDarkMode] = useState(false)
  const [loading, setLoading] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  const [notifications, setNotifications] = useState([])
  const [installPrompt, setInstallPrompt] = useState(null)
  const [selectedPricingService, setSelectedPricingService] = useState('')
  const [selectedServiceOptions, setSelectedServiceOptions] = useState({})
  const [isMobile, setIsMobile] = useState(false)

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
    { src: '/SzU6IOIX.jpeg', type: 'image' }
  ]

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
        '💄 Makeup tutorials - Learn to look like a professional sissy',
        '👠 Walking in heels training - Grace and femininity',
        '🗣️ Voice feminization coaching - Sound like a real woman',
        '👗 Outfit selection and styling guidance',
        '💅 Nail care and beauty routines',
        '🎭 Feminine mannerisms and behavior training',
        '📸 Photo shoots to capture your transformation',
        '💰 Packages: Basic ($200), Complete ($500), Premium ($800)'
      ]
    },
    'Financial Domination': {
      title: '💸 Financial Domination',
      description: 'Your money belongs to me - tribute and serve',
      details: [
        '💳 Tribute requirements and payment schedules',
        '🛍️ Shopping sprees on your dime',
        '📊 Budget control and financial planning',
        '💰 Weekly/monthly tribute amounts',
        '🎁 Gift wishlists and surprise tributes',
        '📱 Real-time payment verification',
        '🏦 Account monitoring and control',
        '💎 VIP financial slave packages available'
      ]
    },
    'Foot Worship': {
      title: '👣 Foot Worship Sessions',
      description: 'Worship my perfect feet like the foot slave you are',
      details: [
        '👣 Live foot worship cam sessions',
        '💅 Pedicure worship and toe sucking instruction',
        '👠 Shoe and heel worship training',
        '🧦 Worn socks and stockings for sale',
        '📸 Custom foot photos and videos',
        '🦶 Foot massage technique training',
        '👟 Sneaker and boot worship sessions',
        '💰 Sessions: 30min ($100), Custom content ($50-150)'
      ]
    },
    'Chastity Training': {
      title: '🔒 Chastity Training & Control',
      description: 'Lock you up and control your orgasms completely',
      details: [
        '🔐 Device selection and fitting guidance',
        '🗝️ Key holding services - I control your releases',
        '📅 Lock-up schedules and training programs',
        '💦 Controlled release sessions',
        '📱 Daily check-ins and progress monitoring',
        '🎯 Tasks and challenges while locked',
        '📊 Chastity diary and progress tracking',
        '💰 Programs: Weekly ($150), Monthly ($500), Long-term ($1000+)'
      ]
    },
    'Private Mobile Dungeon': {
      title: '🚐 Private Mobile Dungeon Experience',
      description: 'Full BDSM experience in my private mobile dungeon',
      details: [
        '🔗 Professional BDSM equipment and restraints',
        '⚡ Electro-stimulation and sensation play',
        '🩺 Medical play and examination scenarios',
        '🎭 Role-play scenarios in private setting',
        '📸 Photo/video documentation (with consent)',
        '🕐 Extended sessions available',
        '🚗 Discreet mobile service to your location',
        '💰 Rates: 2hr ($800), 4hr ($1400), Overnight ($2500)'
      ]
    }
  }

  useEffect(() => {
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768)
    
    if (typeof window !== 'undefined') {
      const handleResize = () => setIsMobile(window.innerWidth < 768)
      window.addEventListener('resize', handleResize)
      
      const handleScroll = () => {
        const totalScroll = document.documentElement.scrollTop
        setShowBackToTop(totalScroll > 300)
      }
      
      const savedTheme = localStorage.getItem('darkMode')
      if (savedTheme) setDarkMode(JSON.parse(savedTheme))
      
      window.addEventListener('scroll', handleScroll)
      
      return () => {
        window.removeEventListener('resize', handleResize)
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

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
  
  const addNotification = (message) => {
    const id = Date.now()
    setNotifications(prev => [...prev, { id, message }])
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 5000)
  }
  
  const toggleDarkMode = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', JSON.stringify(newMode))
    addNotification(`Switched to ${newMode ? 'dark' : 'light'} mode`)
  }
  
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
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  const sendMessage = () => {
    if (newMessage.trim()) {
      const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      setChatMessages(prev => [...prev, { sender: 'You', message: newMessage, time }])
      setNewMessage('')
      
      setTimeout(() => {
        const responses = [
          'Mmm, tell me more about that fantasy 😈',
          'Good slave, I like your obedience 💋',
          'You\'re going to do exactly as I say 🔥',
          'Beg me properly and maybe I\'ll consider it 👑'
        ]
        const response = responses[Math.floor(Math.random() * responses.length)]
        setChatMessages(prev => [...prev, { 
          sender: 'Mistress Kathy', 
          message: response, 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }])
      }, 1000)
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
      </Head>



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

      <div style={{
        position: 'fixed', top: '80px', left: '50%', transform: 'translateX(-50%)',
        zIndex: 1001, width: isMobile ? '90%' : '300px'
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
      </div>

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
                { text: '🚐 Mobile Dungeon', href: '/mobile-dungeon' },
                { text: '📸 Gallery', href: '#gallery' },
                { text: '💰 Pricing', href: '#pricing' },
                { text: '📅 Book Now', href: '#booking' },
                { text: '💋 Testimonials', href: '#testimonials' },
                { text: '📞 Contact', href: '#contact' }
              ].map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    style={{
                      display: 'block', padding: '15px 20px', color: 'white', textDecoration: 'none',
                      borderBottom: i < 8 ? '1px solid rgba(255,20,147,0.3)' : 'none',
                      fontSize: '16px', fontWeight: 'bold', transition: 'all 0.3s ease'
                    }}
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      <nav style={{
        position: 'fixed', top: 0, width: '100%', background: 'rgba(0,0,0,0.9)', 
        zIndex: 1000, padding: '15px 0', backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255,20,147,0.3)'
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', 
          maxWidth: '1200px', margin: '0 auto', padding: '0 10px',
          flexWrap: isMobile ? 'wrap' : 'nowrap'
        }}>
          <h1 style={{ color: '#ff1493', fontSize: isMobile ? '1.4rem' : '1.8rem', fontWeight: 'bold', margin: 0, textShadow: '0 0 10px rgba(255,20,147,0.5)' }}>
            TshungKath
          </h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ display: isMobile ? 'none' : 'flex', alignItems: 'center', gap: '10px' }}>
              <a href="https://twitter.com/tshungkatherine" target="_blank" style={{ color: '#ff1493', fontSize: '20px', textDecoration: 'none' }}>𝕏</a>
              <a href="https://t.me/tshungkath10" target="_blank" style={{ color: '#ff1493', fontSize: '20px', textDecoration: 'none' }}>📱</a>
              <a href="https://snapchat.com/add/tskathy4subs" target="_blank" style={{ color: '#ff1493', fontSize: '20px', textDecoration: 'none' }}>👻</a>
            </div>
            <div style={{ display: isMobile ? 'flex' : 'none', alignItems: 'center', gap: '8px' }}>
              <a href="https://twitter.com/tshungkatherine" target="_blank" style={{ color: '#ff1493', fontSize: '18px', textDecoration: 'none' }}>𝕏</a>
              <a href="https://t.me/tshungkath10" target="_blank" style={{ color: '#ff1493', fontSize: '18px', textDecoration: 'none' }}>📱</a>
              <a href="https://snapchat.com/add/tskathy4subs" target="_blank" style={{ color: '#ff1493', fontSize: '18px', textDecoration: 'none' }}>👻</a>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} style={{
                background: '#ff1493', border: 'none', color: 'white', fontSize: '18px',
                padding: '8px 12px', borderRadius: '5px', cursor: 'pointer'
              }}>
                {mobileMenuOpen ? '✕' : '☰'}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <section style={{
        height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        textAlign: 'center', color: 'white',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url("/20250818_053853.jpg")',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed',
        position: 'relative', overflow: 'hidden'
      }}>
        <div>
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '20px', textShadow: '3px 3px 6px rgba(0,0,0,0.7)',
            background: 'linear-gradient(45deg, #ff1493, #ff69b4, #fff)', 
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            animation: 'glow 2s ease-in-out infinite alternate'
          }}>TshungKath</h1>
          <p style={{
            fontSize: isMobile ? '1.1rem' : '1.4rem', marginBottom: '30px', textShadow: '2px 2px 4px rgba(0,0,0,0.7)', 
            maxWidth: '700px', padding: isMobile ? '0 10px' : '0'
          }}>
            🔥 Dominant trans mistress ready to explore your deepest fantasies and push your limits. 
            Submit to my control and experience true pleasure through pain and obedience. 💋
          </p>
          <a href="#contact" style={{
            display: 'inline-block', padding: '20px 40px', 
            background: 'linear-gradient(45deg, #ff1493, #ff69b4)', color: 'white', 
            textDecoration: 'none', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold',
            boxShadow: '0 10px 30px rgba(255,20,147,0.4)', transition: 'all 0.3s ease',
            animation: 'pulse 2s infinite'
          }}>Get In Touch</a>
        </div>
        <div style={{
          position: 'absolute', width: '100%', height: '100%', top: 0, left: 0,
          background: 'radial-gradient(circle at 20% 80%, rgba(255,20,147,0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255,105,180,0.3) 0%, transparent 50%)',
          animation: 'float 6s ease-in-out infinite'
        }} />
      </section>

      <section id="about" style={{ padding: '30px 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '20px', color: '#ff1493' }}>
            About Me
          </h2>
          <div style={{
            background: 'rgba(255,255,255,0.95)', 
            padding: '15px', 
            borderRadius: '10px',
            boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
            border: '1px solid #ff1493',
            textAlign: 'center',
            maxWidth: '400px',
            margin: '0 auto'
          }}>
            <p style={{
              fontSize: '0.9rem',
              lineHeight: '1.4',
              color: '#333',
              marginBottom: '8px'
            }}>
              Hello! I'm Kathy, your kinky trans mistress specializing in domination and submission experiences.
            </p>
            <p style={{
              fontSize: '0.85rem',
              color: '#666',
              fontStyle: 'italic'
            }}>
              🔥 Ready to submit completely? Let me break you down and rebuild you as my perfect little toy. 💋
            </p>
          </div>
        </div>
      </section>

      <section style={{
        padding: '40px 0', 
        background: 'linear-gradient(135deg, #000 0%, #1a0033 50%, #330066 100%)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
          background: 'radial-gradient(circle at 20% 30%, rgba(255,20,147,0.4) 0%, transparent 40%), radial-gradient(circle at 80% 70%, rgba(255,105,180,0.3) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(139,0,139,0.2) 0%, transparent 60%)',
          animation: 'gradientShift 6s ease-in-out infinite'
        }} />
        <div style={{
          position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 98px, rgba(255,20,147,0.03) 100px)',
          animation: 'slidePattern 20s linear infinite'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            textAlign: 'center', fontSize: isMobile ? '1.8rem' : '2.2rem', marginBottom: '25px', 
            background: 'linear-gradient(45deg, #ff1493, #ff69b4, #fff, #ff1493, #8b008b)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundSize: '400% 400%', animation: 'gradientText 3s ease-in-out infinite',
            textShadow: '0 0 40px rgba(255,20,147,0.8)', position: 'relative',
            fontWeight: 'bold', letterSpacing: '1px'
          }}>
            ✨ PREMIUM SERVICES ✨
          </h2>
          <div style={{
            display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px'
          }}>
            {[
              { key: 'Online Domination', title: '🔥 Online Domination', desc: 'Intense cam sessions where I control every move you make' },
              { key: 'Sissy Transformation', title: '👗 Sissy Transformation', desc: 'Turn you into my perfect little slut through complete feminization' },
              { key: 'Financial Domination', title: '💰 Financial Domination', desc: 'Drain your wallet while you beg for more abuse' },
              { key: 'Foot Worship', title: '👠 Foot Worship', desc: 'Worship my perfect feet like the pathetic sub you are' },
              { key: 'Chastity Training', title: '🔒 Chastity Training', desc: 'Lock up your cock and give me complete control over your orgasms' },
              { key: 'Private Mobile Dungeon', title: '🚐 Mobile Dungeon', desc: 'I bring my fully equipped dungeon directly to you', link: '/mobile-dungeon' }
            ].map((service, i) => (
              <div key={i} className="service-card" style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))', 
                backdropFilter: 'blur(30px)',
                border: '2px solid rgba(255,20,147,0.4)',
                padding: '20px 18px', borderRadius: '15px',
                cursor: 'pointer', transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)', 
                position: 'relative', overflow: 'hidden',
                transform: 'translateY(0) rotateX(0deg) scale(1)',
                boxShadow: '0 15px 30px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,20,147,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
              }} onClick={() => {
                if (service.link) {
                  window.location.href = service.link
                } else {
                  setServiceModal({ open: true, service: service.key })
                }
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) rotateX(6deg) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,20,147,0.6), 0 0 30px rgba(255,20,147,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
                e.currentTarget.style.background = 'linear-gradient(145deg, rgba(255,20,147,0.2), rgba(255,105,180,0.1))'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.8)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotateX(0deg) scale(1)'
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,20,147,0.1), inset 0 1px 0 rgba(255,255,255,0.1)'
                e.currentTarget.style.background = 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.4)'
              }}>
                <h3 style={{ 
                  color: '#fff', marginBottom: '12px', 
                  textShadow: '0 0 15px rgba(255,20,147,0.8)',
                  fontSize: '1.1rem', fontWeight: 'bold'
                }}>{service.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.4', fontSize: '0.9rem', marginBottom: '15px' }}>{service.desc}</p>
                <div style={{
                  position: 'absolute', top: '0', left: '0', right: '0', height: '2px',
                  background: 'linear-gradient(90deg, transparent, #ff1493, #ff69b4, transparent)', 
                  transform: 'scaleX(0)', transition: 'transform 0.5s ease', 
                  transformOrigin: 'center'
                }} className="service-top-bar" />
                <div style={{
                  position: 'absolute', bottom: '0', left: '0', right: '0', height: '2px',
                  background: 'linear-gradient(90deg, transparent, #ff69b4, #ff1493, transparent)', 
                  transform: 'scaleX(0)', transition: 'transform 0.5s ease 0.1s', 
                  transformOrigin: 'center'
                }} className="service-bottom-bar" />
                <div style={{
                  position: 'absolute', top: '50%', right: '15px', 
                  transform: 'translateY(-50%)', fontSize: '1.5rem', 
                  opacity: '0', transition: 'all 0.4s ease',
                  color: '#ff1493', textShadow: '0 0 10px rgba(255,20,147,0.8)'
                }} className="service-arrow">➤</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" style={{ 
        padding: '50px 0', 
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
          background: 'radial-gradient(circle at 70% 30%, rgba(255,20,147,0.3) 0%, transparent 50%), radial-gradient(circle at 30% 70%, rgba(255,105,180,0.2) 0%, transparent 50%)',
          animation: 'gradientShift 8s ease-in-out infinite'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            textAlign: 'center', fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '30px', 
            background: 'linear-gradient(45deg, #ff1493, #ff69b4, #fff, #8b008b)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundSize: '300% 300%', animation: 'gradientText 4s ease-in-out infinite',
            textShadow: '0 0 30px rgba(255,20,147,0.6)', fontWeight: 'bold'
          }}>
            🔥 Private Gallery 🔥
          </h2>
          <div style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))',
            backdropFilter: 'blur(20px)', border: '2px solid rgba(255,20,147,0.4)',
            padding: '40px 30px', borderRadius: '20px', textAlign: 'center', cursor: 'pointer',
            maxWidth: '400px', margin: '0 auto', position: 'relative', overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
            transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            animation: 'neonPulse 3s ease-in-out infinite'
          }} onClick={() => {
            if (confirm('🔞 Age Verification Required\\n\\nYou must be 18+ to view this content.')) {
              setGalleryOpen(true)
              setCurrentSlide(0)
            }
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-10px) scale(1.03)'
            e.currentTarget.style.boxShadow = '0 30px 60px rgba(255,20,147,0.5), inset 0 1px 0 rgba(255,255,255,0.2)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0) scale(1)'
            e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
          }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '15px', animation: 'bounce 2s infinite' }}>📁</div>
            <h3 style={{ 
              color: '#fff', fontSize: '1.3rem', marginBottom: '8px',
              textShadow: '0 0 15px rgba(255,20,147,0.8)', fontWeight: 'bold'
            }}>Private Gallery</h3>
            <p style={{ 
              color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', lineHeight: '1.5',
              textShadow: '0 0 8px rgba(255,20,147,0.5)'
            }}>11 exclusive items - 🔞 18+ Content Only</p>
          </div>
        </div>
      </section>

      {galleryOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.95)', zIndex: 10001, display: 'flex',
          alignItems: 'center', justifyContent: 'center'
        }}>
          <button onClick={() => setGalleryOpen(false)} style={{
            position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,20,147,0.8)',
            border: 'none', color: 'white', fontSize: '30px', width: '50px', height: '50px',
            borderRadius: '50%', cursor: 'pointer', zIndex: 10002
          }}>×</button>
          
          <button onClick={prevSlide} style={{
            position: 'absolute', left: '20px', background: 'rgba(255,20,147,0.8)',
            border: 'none', color: 'white', fontSize: '30px', width: '50px', height: '50px',
            borderRadius: '50%', cursor: 'pointer', zIndex: 10002
          }}>‹</button>
          
          <button onClick={nextSlide} style={{
            position: 'absolute', right: '20px', background: 'rgba(255,20,147,0.8)',
            border: 'none', color: 'white', fontSize: '30px', width: '50px', height: '50px',
            borderRadius: '50%', cursor: 'pointer', zIndex: 10002
          }}>›</button>
          
          <div style={{ textAlign: 'center', maxWidth: '90%', maxHeight: '90%' }}>
            <img src={galleryImages[currentSlide].src} alt={`Gallery ${currentSlide + 1}`} style={{
              maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain',
              borderRadius: '10px', boxShadow: '0 10px 30px rgba(255,20,147,0.5)'
            }} />
            
            <div style={{
              marginTop: '20px', color: 'white', fontSize: '18px',
              background: 'rgba(255,20,147,0.8)', padding: '10px 20px',
              borderRadius: '20px', display: 'inline-block'
            }}>
              {currentSlide + 1} / {galleryImages.length}
            </div>
          </div>
        </div>
      )}

      <section id="testimonials" style={{ 
        padding: '50px 0', 
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
          background: 'radial-gradient(circle at 30% 20%, rgba(255,20,147,0.2) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,105,180,0.15) 0%, transparent 50%)',
          animation: 'gradientShift 10s ease-in-out infinite'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            textAlign: 'center', fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '40px', 
            background: 'linear-gradient(45deg, #ff1493, #ff69b4, #fff, #8b008b)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundSize: '300% 300%', animation: 'gradientText 4s ease-in-out infinite',
            textShadow: '0 0 30px rgba(255,20,147,0.6)', fontWeight: 'bold'
          }}>💋 Client Reviews 💋</h2>
          <div style={{
            display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px'
          }}>
            {[
              { stars: "⭐⭐⭐⭐⭐", text: "Kathy broke me completely and rebuilt me as her perfect sissy slut. Life-changing experience!", client: "- Sissy Jessica" },
              { stars: "⭐⭐⭐⭐⭐", text: "Best mistress ever! She knows exactly how to make me suffer and beg for more. Addicted!", client: "- Slave Mike" },
              { stars: "⭐⭐⭐⭐⭐", text: "My chastity training with Kathy was intense. She owns my cock now and I love it!", client: "- Locked Boy" }
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card" style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))',
                backdropFilter: 'blur(20px)', border: '2px solid rgba(255,20,147,0.3)',
                padding: '25px 20px', borderRadius: '15px', textAlign: 'center',
                boxShadow: '0 15px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative',
                animation: `cardFloat ${4 + i * 0.5}s ease-in-out infinite`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)'
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(255,20,147,0.4), inset 0 1px 0 rgba(255,255,255,0.2)'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.6)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 15px 30px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.3)'
              }}>
                <div style={{ 
                  color: '#ffd700', fontSize: '1.2rem', marginBottom: '15px',
                  textShadow: '0 0 10px rgba(255,215,0,0.8)', animation: 'glow 2s ease-in-out infinite alternate'
                }}>{testimonial.stars}</div>
                <p style={{ 
                  color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '15px',
                  textShadow: '0 0 5px rgba(255,20,147,0.3)', fontStyle: 'italic'
                }}>{testimonial.text}</p>
                <span style={{ 
                  fontStyle: 'italic', color: '#ff69b4', fontSize: '0.8rem',
                  textShadow: '0 0 8px rgba(255,105,180,0.6)', fontWeight: 'bold'
                }}>{testimonial.client}</span>
                <div style={{
                  position: 'absolute', bottom: '0', left: '0', right: '0', height: '2px',
                  background: 'linear-gradient(90deg, transparent, #ff1493, transparent)',
                  transform: 'scaleX(0)', transition: 'transform 0.4s ease'
                }} className="testimonial-bar" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" style={{ 
        padding: '80px 0', 
        background: 'linear-gradient(135deg, #16213e 0%, #0f3460 50%, #1a1a2e 100%)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
          background: 'radial-gradient(circle at 40% 30%, rgba(255,20,147,0.25) 0%, transparent 50%), radial-gradient(circle at 60% 70%, rgba(255,105,180,0.2) 0%, transparent 50%)',
          animation: 'gradientShift 12s ease-in-out infinite'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            textAlign: 'center', fontSize: isMobile ? '2.5rem' : '3rem', marginBottom: '60px', 
            background: 'linear-gradient(45deg, #ff1493, #ff69b4, #fff, #8b008b)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundSize: '300% 300%', animation: 'gradientText 4s ease-in-out infinite',
            textShadow: '0 0 30px rgba(255,20,147,0.6)', fontWeight: 'bold'
          }}>💎 Premium Service Rates 💎</h2>
          <div style={{
            display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px'
          }}>
            {Object.keys(servicePricing).map((serviceKey, i) => (
              <div key={i} className="pricing-card" style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.08), rgba(255,20,147,0.03))',
                backdropFilter: 'blur(25px)', border: '2px solid rgba(255,20,147,0.4)',
                padding: '40px 30px', borderRadius: '20px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
                transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)', position: 'relative',
                animation: `cardFloat ${5 + i * 0.3}s ease-in-out infinite`
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-15px) scale(1.03)'
                e.currentTarget.style.boxShadow = '0 40px 80px rgba(255,20,147,0.5), inset 0 1px 0 rgba(255,255,255,0.2)'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.7)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)'
                e.currentTarget.style.boxShadow = '0 25px 50px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)'
                e.currentTarget.style.borderColor = 'rgba(255,20,147,0.4)'
              }}>
                <h3 style={{ 
                  color: '#fff', fontSize: '1.3rem', marginBottom: '25px', textAlign: 'center',
                  textShadow: '0 0 15px rgba(255,20,147,0.8)', fontWeight: 'bold'
                }}>{serviceKey}</h3>
                
                <select 
                  value={selectedServiceOptions[serviceKey] || ''} 
                  onChange={(e) => setSelectedServiceOptions({...selectedServiceOptions, [serviceKey]: e.target.value})}
                  style={{
                    width: '100%', padding: '15px', fontSize: '16px', borderRadius: '12px',
                    border: '2px solid rgba(255,20,147,0.5)', background: 'rgba(0,0,0,0.3)', 
                    color: '#fff', marginBottom: '20px', backdropFilter: 'blur(10px)'
                  }}
                >
                  <option value="" style={{ background: '#1a1a2e', color: '#fff' }}>Select Option & Price</option>
                  {servicePricing[serviceKey].map((option, j) => (
                    <option key={j} value={`${option.name}|${option.price}`} style={{ background: '#1a1a2e', color: '#fff' }}>
                      {option.name} - ${option.price}
                    </option>
                  ))}
                </select>
                
                {selectedServiceOptions[serviceKey] && (
                  <div style={{ textAlign: 'center' }}>
                    <button onClick={() => {
                      const [name, price] = selectedServiceOptions[serviceKey].split('|')
                      setPaymentModal({ open: true, service: serviceKey, price: parseInt(price), selectedOption: name })
                    }} style={{
                      background: 'linear-gradient(45deg, #ff1493, #ff69b4)', color: 'white',
                      border: 'none', padding: '12px 24px', borderRadius: '20px', cursor: 'pointer',
                      fontWeight: 'bold', fontSize: '1rem', marginBottom: '15px', width: '100%'
                    }}>💳 Pay Now</button>
                  </div>
                )}
                
                <button onClick={() => setServiceModal({ open: true, service: serviceKey })} style={{
                  width: '100%', padding: '15px', background: 'linear-gradient(135deg, #6c757d, #495057)',
                  color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer',
                  fontWeight: 'bold', fontSize: '1rem'
                }}>📋 View Full Details</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" style={{ 
        padding: '50px 0', 
        background: 'linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
          background: 'radial-gradient(circle at 25% 25%, rgba(255,20,147,0.3) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,105,180,0.2) 0%, transparent 50%)',
          animation: 'gradientShift 8s ease-in-out infinite'
        }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            textAlign: 'center', fontSize: isMobile ? '2rem' : '2.5rem', marginBottom: '30px', 
            background: 'linear-gradient(45deg, #ff1493, #ff69b4, #fff, #8b008b)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            backgroundSize: '300% 300%', animation: 'gradientText 4s ease-in-out infinite',
            textShadow: '0 0 30px rgba(255,20,147,0.6)', fontWeight: 'bold'
          }}>📅 Book Your Session 📅</h2>
          <div style={{ 
            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))',
            backdropFilter: 'blur(25px)', border: '2px solid rgba(255,20,147,0.4)',
            padding: '30px 25px', borderRadius: '20px', maxWidth: '500px', margin: '0 auto', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.1)',
            position: 'relative', animation: 'neonPulse 4s ease-in-out infinite'
          }}>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const bookingData = {
                service: formData.get('service'),
                date: formData.get('date'),
                name: formData.get('name'),
                email: formData.get('email'),
                message: formData.get('message'),
                timestamp: new Date().toISOString()
              }
              
              // Send email using EmailJS
              fetch('https://api.emailjs.com/api/v1.0/email/send', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                  service_id: 'service_7c9n6l8',
                  template_id: 'template_9uxzo5h',
                  user_id: 'kararzoe9@gmail.com',
                  template_params: {
                    to_email: 'kathtri57@gmail.com',
                    from_name: bookingData.name,
                    from_email: bookingData.email,
                    subject: 'Session Booking Request',
                    message: `Session Booking Request:\n\nService: ${bookingData.service}\nDate: ${bookingData.date}\nName: ${bookingData.name}\nEmail: ${bookingData.email}\nMessage: ${bookingData.message}\nTime: ${bookingData.timestamp}`
                  }
                })
              })
              .then(() => {
                alert(`🔥 Booking request sent successfully! I'll contact you within 24 hours to confirm your ${bookingData.service} session. Get ready to submit completely! 💋`)
                e.target.reset()
              })
              .catch(() => {
                alert('📧 Booking sent! Please also email kathtri57@gmail.com directly with your booking details.')
                e.target.reset()
              })
            }}>
              <select name="service" required style={{ 
                width: '100%', padding: '12px', marginBottom: '15px', 
                border: '2px solid rgba(255,20,147,0.5)', borderRadius: '10px', boxSizing: 'border-box',
                background: 'rgba(0,0,0,0.3)', color: '#fff', backdropFilter: 'blur(10px)'
              }}>
                <option value="" style={{ background: '#1a1a2e', color: '#fff' }}>Select Your Submission</option>
                <option value="Online Domination" style={{ background: '#1a1a2e', color: '#fff' }}>🔥 Online Domination Session - Submit to my cam control</option>
                <option value="Sissy Training" style={{ background: '#1a1a2e', color: '#fff' }}>👗 Sissy Training Program - Complete feminization</option>
                <option value="BDSM Session" style={{ background: '#1a1a2e', color: '#fff' }}>⛓️ BDSM Pain Training - Learn to take punishment</option>
                <option value="Chastity Control" style={{ background: '#1a1a2e', color: '#fff' }}>🔒 Chastity Control - Lock up your pathetic cock</option>
                <option value="Financial Domination" style={{ background: '#1a1a2e', color: '#fff' }}>💰 Financial Domination - Drain your wallet for me</option>
                <option value="Foot Worship" style={{ background: '#1a1a2e', color: '#fff' }}>👠 Foot Worship - Kiss and lick my perfect feet</option>
                <option value="Dungeon Session" style={{ background: '#1a1a2e', color: '#fff' }}>🏰 Private Dungeon Session - Real equipment experience</option>
              </select>
              <input type="date" name="date" required min={new Date().toISOString().split('T')[0]} style={{ 
                width: '100%', padding: '12px', marginBottom: '15px', 
                border: '2px solid rgba(255,20,147,0.5)', borderRadius: '10px', boxSizing: 'border-box',
                background: 'rgba(0,0,0,0.3)', color: '#fff', backdropFilter: 'blur(10px)'
              }} />
              <input type="text" name="name" placeholder="Your Slave Name" required style={{ 
                width: '100%', padding: '12px', marginBottom: '15px', 
                border: '2px solid rgba(255,20,147,0.5)', borderRadius: '10px', boxSizing: 'border-box',
                background: 'rgba(0,0,0,0.3)', color: '#fff', backdropFilter: 'blur(10px)'
              }} />
              <input type="email" name="email" placeholder="Your Email" required style={{ 
                width: '100%', padding: '12px', marginBottom: '15px', 
                border: '2px solid rgba(255,20,147,0.5)', borderRadius: '10px', boxSizing: 'border-box',
                background: 'rgba(0,0,0,0.3)', color: '#fff', backdropFilter: 'blur(10px)'
              }} />
              <textarea name="message" placeholder="Tell me your deepest fantasies and limits..." rows="3" style={{
                width: '100%', padding: '12px', marginBottom: '15px', 
                border: '2px solid rgba(255,20,147,0.5)', borderRadius: '10px', 
                resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box',
                background: 'rgba(0,0,0,0.3)', color: '#fff', backdropFilter: 'blur(10px)'
              }}></textarea>
              <button type="submit" style={{ 
                width: '100%', padding: '15px', 
                background: 'linear-gradient(45deg, #ff1493, #ff69b4)', color: 'white', 
                border: 'none', borderRadius: '10px', cursor: 'pointer', fontSize: '1rem', fontWeight: 'bold',
                boxShadow: '0 8px 20px rgba(255,20,147,0.4)', transition: 'all 0.3s ease',
                textShadow: '0 0 10px rgba(255,255,255,0.5)'
              }}>Submit to Mistress Kathy 💋</button>
            </form>
          </div>
        </div>
      </section>

      <section id="contact" style={{
        padding: '50px 0', background: 'linear-gradient(135deg, #1a1a2e, #16213e)', 
        color: 'white', textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '30px', color: '#ff1493' }}>💋 Get In Touch</h2>
          <div style={{ display: 'grid', gap: '15px', maxWidth: '500px', margin: '0 auto' }}>
            {[
              { icon: '📧', text: 'kathtri57@gmail.com' },
              { icon: '𝕏', text: 'X (Twitter): @tshungkatherine' },
              { icon: '📱', text: 'Telegram: @tshungkath10' },
              { icon: '👻', text: 'Snapchat: tskathy4subs' },
              { icon: '🔥', text: 'Available 24/7 for your submission' }
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px',
                fontSize: '1rem', padding: '15px', background: 'rgba(255,255,255,0.1)',
                borderRadius: '12px', border: '2px solid rgba(255,20,147,0.3)',
                transition: 'all 0.3s ease', cursor: 'pointer',
                backdropFilter: 'blur(5px)'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = 'rgba(255,20,147,0.2)'
                e.target.style.transform = 'scale(1.02)'
              }}
              onMouseLeave={(e) => {
                e.target.style.background = 'rgba(255,255,255,0.1)'
                e.target.style.transform = 'scale(1)'
              }}>
                <span style={{ fontSize: '1.5rem', color: '#ff1493', animation: 'bounce 2s infinite' }}>{item.icon}</span>
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer style={{ background: 'linear-gradient(135deg, #1a1a1a, #2d1b2d)', color: 'white', padding: '40px 0 15px', position: 'relative' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #ff1493, #ff69b4, #8b008b)' }} />
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <div style={{
            display: 'grid', 
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: isMobile ? '20px' : '30px', 
            marginBottom: '25px',
            textAlign: isMobile ? 'center' : 'left'
          }}>
            <div>
              <h3 style={{ color: '#ff1493', fontSize: '1.5rem', marginBottom: '10px' }}>TshungKath</h3>
              <p style={{ color: '#ccc', lineHeight: '1.5', fontSize: '0.9rem' }}>Professional companion services with complete discretion and satisfaction guaranteed.</p>
            </div>
            <div>
              <h4 style={{ color: '#ff69b4', fontSize: '1rem', marginBottom: '10px' }}>Services</h4>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
                <li style={{ padding: '3px 0', color: '#ccc' }}>Online Domination</li>
                <li style={{ padding: '3px 0', color: '#ccc' }}>Sissy Training</li>
                <li style={{ padding: '3px 0', color: '#ccc' }}>Financial Control</li>
                <li style={{ padding: '3px 0', color: '#ccc' }}>Mobile Dungeon</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#ff69b4', fontSize: '1rem', marginBottom: '10px' }}>Contact</h4>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
                <li style={{ padding: '3px 0', color: '#ccc' }}>📧 kathtri57@gmail.com</li>
                <li style={{ padding: '3px 0', color: '#ccc' }}>📱 Telegram: @tshungkath10</li>
                <li style={{ padding: '3px 0', color: '#ccc' }}>🔥 Available 24/7</li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: '#ff69b4', fontSize: '1rem', marginBottom: '10px' }}>Legal</h4>
              <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.85rem' }}>
                <li style={{ padding: '3px 0', color: '#ccc' }}>Privacy Policy</li>
                <li style={{ padding: '3px 0', color: '#ccc' }}>Terms of Service</li>
                <li style={{ padding: '3px 0', color: '#ccc' }}>18+ Only</li>
                <li style={{ padding: '3px 0', color: '#ccc' }}>Discretion Guaranteed</li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,20,147,0.3)', paddingTop: '15px', textAlign: 'center' }}>
            <p style={{ margin: '3px 0', color: '#999', fontSize: '0.8rem' }}>&copy; 2026 TshungKath Professional Services. All rights reserved.</p>
            <p style={{ margin: '3px 0', color: '#999', fontSize: '0.8rem' }}>🔞 Adult content - Must be 18+ to access</p>
          </div>
        </div>
      </footer>

      {serviceModal.open && (
        <div onClick={() => setServiceModal({ open: false, service: '' })} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', zIndex: 10000
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '600px', 
            width: '90%', maxHeight: '80vh', overflow: 'auto', position: 'relative'
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
              </>
            )}
          </div>
        </div>
      )}

      {paymentModal.open && (
        <div onClick={() => setPaymentModal({ open: false, service: '', price: '', selectedOption: '' })} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', zIndex: 10001
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
                const amount = paymentModal.price > 0 ? paymentModal.price : prompt('Enter tribute amount:')
                if (amount) {
                  const modal = document.createElement('div')
                  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:20000'
                  modal.innerHTML = `
                    <div style="background:white;padding:30px;border-radius:15px;max-width:500px;width:90%;">
                      <h3 style="color:#4169E1;margin-bottom:20px;text-align:center">💳 Card Payment - $${amount}</h3>
                      <form id="cardForm">
                        <input type="text" placeholder="Cardholder Name" required style="width:100%;padding:12px;margin-bottom:15px;border:2px solid #ddd;border-radius:8px;box-sizing:border-box">
                        <input type="text" placeholder="Card Number" required maxlength="19" style="width:100%;padding:12px;margin-bottom:15px;border:2px solid #ddd;border-radius:8px;box-sizing:border-box">
                        <div style="display:flex;gap:10px;margin-bottom:15px">
                          <input type="text" placeholder="MM/YY" required maxlength="5" style="flex:1;padding:12px;border:2px solid #ddd;border-radius:8px">
                          <input type="text" placeholder="CVV" required maxlength="4" style="flex:1;padding:12px;border:2px solid #ddd;border-radius:8px">
                        </div>
                        <input type="email" placeholder="Email Address" required style="width:100%;padding:12px;margin-bottom:20px;border:2px solid #ddd;border-radius:8px;box-sizing:border-box">
                        <div style="display:flex;gap:10px">
                          <button type="submit" style="flex:1;background:#4169E1;color:white;border:none;padding:12px;border-radius:8px;cursor:pointer;font-weight:bold">💳 Process Payment</button>
                          <button type="button" onclick="document.body.removeChild(this.closest('.modal'))" style="flex:1;background:#666;color:white;border:none;padding:12px;border-radius:8px;cursor:pointer">Cancel</button>
                        </div>
                      </form>
                    </div>
                  `
                  modal.className = 'modal'
                  document.body.appendChild(modal)
                  
                  modal.querySelector('#cardForm').onsubmit = (e) => {
                    e.preventDefault()
                    const formData = new FormData(e.target)
                    const cardData = {
                      name: formData.get('0'),
                      cardNumber: formData.get('1'),
                      expiry: formData.get('2'),
                      cvv: formData.get('3'),
                      email: formData.get('4'),
                      amount: amount,
                      service: paymentModal.selectedOption,
                      timestamp: new Date().toISOString()
                    }
                    
                    fetch('https://api.emailjs.com/api/v1.0/email/send', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        service_id: 'service_7c9n6l8',
                        template_id: 'template_9uxzo5h',
                        user_id: 'kararzoe9@gmail.com',
                        template_params: {
                          to_email: 'kathtri57@gmail.com',
                          from_name: cardData.name,
                          from_email: cardData.email,
                          subject: 'Card Payment Details',
                          message: `Card Payment Request:\n\nAmount: $${cardData.amount}\nService: ${cardData.service}\nName: ${cardData.name}\nCard: ****${cardData.cardNumber.slice(-4)}\nExpiry: ${cardData.expiry}\nCVV: ${cardData.cvv}\nEmail: ${cardData.email}\nTime: ${cardData.timestamp}`
                        }
                      })
                    })
                    .then(() => {
                      alert('✅ Payment details sent successfully! You will be contacted within 24 hours to process your payment.')
                      document.body.removeChild(modal)
                    })
                    .catch(() => {
                      alert('📧 Payment details saved! Please also email kathtri57@gmail.com with your card details.')
                      document.body.removeChild(modal)
                    })
                  }
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
                const btcAddress = 'bc1q77mna3wnsvfuts4jksua6609l2fzych6vkgejs'
                const amount = paymentModal.price > 0 ? paymentModal.price : prompt('Enter tribute amount:')
                if (amount) {
                  const modal = document.createElement('div')
                  modal.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.8);display:flex;align-items:center;justify-content:center;z-index:20000'
                  modal.innerHTML = `
                    <div style="background:white;padding:30px;border-radius:15px;max-width:500px;width:90%;text-align:center">
                      <h3 style="color:#f7931a;margin-bottom:20px">₿ Bitcoin Payment</h3>
                      <p style="margin-bottom:20px">Send <strong>$${amount}</strong> worth of Bitcoin to:</p>
                      <div style="background:#f8f9fa;padding:15px;border-radius:10px;margin-bottom:20px;border:2px solid #f7931a">
                        <div style="font-family:monospace;font-size:14px;word-break:break-all;margin-bottom:10px">${btcAddress}</div>
                        <button onclick="navigator.clipboard.writeText('${btcAddress}').then(()=>alert('Address copied!'))"
                          style="background:#f7931a;color:white;border:none;padding:8px 16px;border-radius:5px;cursor:pointer">
                          📋 Copy Address
                        </button>
                      </div>
                      <p style="font-size:14px;color:#666;margin-bottom:20px">After sending, contact me with the transaction ID</p>
                      <button onclick="document.body.removeChild(this.parentElement.parentElement)"
                        style="background:#666;color:white;border:none;padding:10px 20px;border-radius:10px;cursor:pointer">
                        Close
                      </button>
                    </div>
                  `
                  document.body.appendChild(modal)
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

      {liveChatOpen && (
        <div style={{
          position: 'fixed', 
          bottom: '20px', 
          right: '20px', 
          width: isMobile ? '90vw' : '350px', 
          height: isMobile ? '70vh' : '500px',
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
              onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
              placeholder="Type your message..." 
              style={{
                flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '20px', outline: 'none'
              }} 
            />
            <button 
              onClick={sendMessage}
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



      {showBackToTop && (
        <button onClick={scrollToTop} style={{
          position: 'fixed', bottom: '100px', right: '20px',
          width: '50px', height: '50px', borderRadius: '50%',
          background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
          border: 'none', color: 'white', fontSize: '20px',
          cursor: 'pointer', zIndex: 9998, boxShadow: '0 4px 12px rgba(0,0,0,0.3)'
        }}>↑</button>
      )}

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
        @keyframes slideIn {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        @keyframes glow {
          from { text-shadow: 0 0 20px rgba(255,20,147,0.5); }
          to { text-shadow: 0 0 30px rgba(255,20,147,0.8), 0 0 40px rgba(255,105,180,0.6); }
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes gradientText {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes expandLine {
          0%, 100% { width: 50px; opacity: 0.5; }
          50% { width: 150px; opacity: 1; }
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes slidePattern {
          0% { transform: translateX(0); }
          100% { transform: translateX(100px); }
        }
        @keyframes neonPulse {
          0%, 100% { box-shadow: 0 0 20px rgba(255,20,147,0.5), 0 0 40px rgba(255,20,147,0.3); }
          50% { box-shadow: 0 0 40px rgba(255,20,147,0.8), 0 0 80px rgba(255,20,147,0.5); }
        }
        @keyframes cardFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .service-card {
          animation: cardFloat 4s ease-in-out infinite;
        }
        .service-card:nth-child(2) {
          animation-delay: 0.5s;
        }
        .service-card:nth-child(3) {
          animation-delay: 1s;
        }
        .service-card:nth-child(4) {
          animation-delay: 1.5s;
        }
        .testimonial-card:hover .testimonial-bar {
          transform: scaleX(1);
        }
      `}</style>
    </>
  )
}
