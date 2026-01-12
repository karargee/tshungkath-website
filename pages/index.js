import Head from 'next/head'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
// import PaymentGateway from '../components/PaymentGateway'

export default function Home() {
  const [authModal, setAuthModal] = useState(false)
  const [currentStep, setCurrentStep] = useState('email')
  const [user, setUser] = useState(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [expandedPricing, setExpandedPricing] = useState({})
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')
  const [liveChatOpen, setLiveChatOpen] = useState(false)
  const [sessionTimerActive, setSessionTimerActive] = useState(false)
  const [timerSeconds, setTimerSeconds] = useState(0)
  const [paymentModal, setPaymentModal] = useState({ open: false, service: '', price: '' })
  const [deferredPrompt, setDeferredPrompt] = useState(null)
  const [showInstallPrompt, setShowInstallPrompt] = useState(false)
  const [adminPanelOpen, setAdminPanelOpen] = useState(false)
  const [serviceModalOpen, setServiceModalOpen] = useState(false)
  const [currentService, setCurrentService] = useState('')
  const [notifications, setNotifications] = useState([])

  useEffect(() => {
    const handleBeforeInstallPrompt = (e) => {
      e.preventDefault()
      setDeferredPrompt(e)
      setShowInstallPrompt(true)
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
    return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const [heroRef, heroInView] = useInView({ threshold: 0.3 })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3 })
  const [servicesRef, servicesInView] = useInView({ threshold: 0.3 })

  useEffect(() => {
    const savedUser = localStorage.getItem('currentUser')
    if (savedUser) setUser(JSON.parse(savedUser))

    if (window.emailjs) {
      window.emailjs.init('hNbP0fS3-WwUuqUyE')
    }

    if (window.gtag) {
      window.gtag('config', 'G-XXXXXXXXXX', {
        page_title: 'Homepage',
        page_location: window.location.href
      })
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/sw.js')
        .then(registration => {
          console.log('SW registered:', registration)
          
          if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission().then(permission => {
              if (permission === 'granted') {
                console.log('Notification permission granted')
              }
            })
          }
        })
        .catch(error => console.error('SW registration failed:', error))
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  const handleInstallPWA = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt()
      const { outcome } = await deferredPrompt.userChoice
      
      if (outcome === 'accepted' && window.gtag) {
        window.gtag('event', 'pwa_installed', { event_category: 'engagement' })
      }
      
      setDeferredPrompt(null)
      setShowInstallPrompt(false)
    }
  }

  const handleLogin = (email, password) => {
    const verifiedUsers = JSON.parse(localStorage.getItem('verifiedUsers') || '{}')
    const user = verifiedUsers[email]
    
    if (user && user.password === password) {
      localStorage.setItem('currentUser', JSON.stringify(user))
      setUser(user)
      setAuthModal(false)
    } else {
      alert('Invalid credentials')
    }
  }

  const openLightbox = (imageSrc) => {
    setLightboxImage(imageSrc)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
    setLightboxImage('')
  }

  const startSessionTimer = () => {
    setSessionTimerActive(true)
    setTimerSeconds(0)
  }

  const endSession = () => {
    setSessionTimerActive(false)
    setTimerSeconds(0)
  }

  useEffect(() => {
    let interval = null
    if (sessionTimerActive) {
      interval = setInterval(() => {
        setTimerSeconds(seconds => seconds + 1)
      }, 1000)
    } else if (!sessionTimerActive && timerSeconds !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [sessionTimerActive, timerSeconds])

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600)
    const mins = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60
    return `${hrs.toString().padStart(2, '0')}:${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
  }

  const handlePayment = (method, service, price) => {
    if (window.gtag) {
      window.gtag('event', 'booking_initiated', {
        event_category: 'booking',
        event_label: service,
        value: parseFloat(price.replace(/[^0-9.-]/g, ''))
      })
    }
    setPaymentModal({ open: true, service, price })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  }

  const addNotification = (message) => {
    const id = Date.now()
    setNotifications(prev => [...prev, { id, message }])
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id))
    }, 5000)
  }

  return (
    <>
      <Head>
        <title>TshungKath - Professional Companion Services</title>
        <meta name="description" content="Professional personal companion and social services" />
        <link rel="stylesheet" href="/styles.css" />
        <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
        <script src="https://js.stripe.com/v3/"></script>
        <script src="https://www.paypal.com/sdk/js?client-id=YOUR_PAYPAL_CLIENT_ID&currency=USD"></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
        <script src="/analytics.js"></script>
      </Head>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div style={{
          position: 'fixed', top: '70px', right: '20px', width: '200px',
          background: '#fff', border: '1px solid #ddd', borderRadius: '8px',
          zIndex: 50000, boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {['🏠 Home', '👤 About', '💼 Services', '💰 Pricing', '📅 Book Now', '📞 Contact'].map((item, i) => (
              <li key={i}><a href={['#home','#about','#services','#pricing','#booking','#contact'][i]} onClick={toggleMobileMenu} style={{
                display: 'block', padding: '12px 16px', color: '#333', textDecoration: 'none',
                borderBottom: '1px solid #eee', fontSize: '14px'
              }}>{item}</a></li>
            ))}
          </ul>
        </div>
      )}

      {/* Background */}
      <div style={{
        position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
        background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
        backgroundSize: '400% 400%', animation: 'gradientShift 15s ease infinite', zIndex: -1
      }} />

      {/* Navigation */}
      <motion.nav className="navbar" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
        <div className="nav-container">
          <div className="left-section">
            <h1 className="logo">TshungKath</h1>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu} style={{
              background: '#ff1493', border: 'none', color: 'white', fontSize: '18px',
              padding: '8px 12px', borderRadius: '5px', cursor: 'pointer', marginLeft: '15px'
            }}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
          <div className="auth-buttons">
            {user ? (
              <span style={{color: 'white'}}>Welcome, {user.name || user.email}</span>
            ) : (
              <button onClick={() => setAuthModal(true)} style={{
                background: '#ff1493', border: 'none', color: 'white', fontSize: '18px',
                padding: '8px 12px', borderRadius: '5px', cursor: 'pointer'
              }}>👤</button>
            )}
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <motion.h1 className="main-title" initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.5 }}>TshungKath</motion.h1>
          <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
            🔥 Dominant trans mistress ready to explore your deepest fantasies and push your limits. Submit to my control and experience true pleasure through pain and obedience. 💋
          </motion.p>
          <motion.a href="#contact" className="cta-button" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
            Get In Touch
          </motion.a>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="premium-title">Premium Services</h2>
          <div className="services-grid">
            {[
              { title: "🔥 Online Domination", desc: "Intense cam sessions where I control every move you make" },
              { title: "👗 Sissy Transformation", desc: "Turn you into my perfect little slut through complete feminization" },
              { title: "⛓️ BDSM Sessions", desc: "Real domination with toys, restraints, and punishment" }
            ].map((service, i) => (
              <div key={i} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dungeon */}
      <section id="dungeon" className="dungeon">
        <div className="container">
          <h2>🏰 My Private Dungeon</h2>
          <div className="dungeon-grid">
            {[
              { emoji: "⛓️", title: "Restraint Station", desc: "Professional bondage equipment" },
              { emoji: "🔥", title: "Impact Play Area", desc: "Paddles, floggers, whips, and canes" },
              { emoji: "🎭", title: "Transformation Chamber", desc: "Full sissy makeover station" }
            ].map((item, i) => (
              <div key={i} className="dungeon-card">
                <div className="dungeon-placeholder">{item.emoji}</div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
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
              <span className="icon">🔥</span>
              <span>Available 24/7 for your submission</span>
            </div>
          </div>
        </div>
      </section>

      {/* Live Chat */}
      <button onClick={() => setLiveChatOpen(!liveChatOpen)} style={{
        position: 'fixed', bottom: '20px', right: '20px', width: '60px', height: '60px',
        borderRadius: '50%', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
        border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer'
      }}>💬</button>

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.9); z-index: 1000; padding: 15px 0; }
        .nav-container { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .left-section { display: flex; align-items: center; }
        .logo { color: #ff1493; font-size: 1.8rem; font-weight: bold; margin: 0; }
        .mobile-menu-btn { display: none; }
        .hero { height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; }
        .hero-content h1 { font-size: 3rem; margin-bottom: 20px; }
        .hero-content p { font-size: 1.2rem; margin-bottom: 30px; max-width: 600px; }
        .cta-button { display: inline-block; padding: 15px 30px; background: linear-gradient(45deg, #ff1493, #ff69b4); color: white; text-decoration: none; border-radius: 25px; }
        .services, .dungeon, .contact { padding: 80px 0; }
        .services { background: white; }
        .dungeon { background: linear-gradient(135deg, #1a1a1a, #2d1b2d); color: white; }
        .contact { background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .services h2, .dungeon h2, .contact h2 { text-align: center; font-size: 2.5rem; margin-bottom: 50px; }
        .services h2 { color: #ff1493; }
        .dungeon h2, .contact h2 { color: #ff1493; }
        .services-grid, .dungeon-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .service-card, .dungeon-card { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 2px solid #ff1493; }
        .dungeon-card { background: rgba(255,255,255,0.1); color: white; }
        .service-card h3, .dungeon-card h3 { color: #ff1493; margin-bottom: 15px; }
        .dungeon-placeholder { width: 100%; height: 150px; display: flex; align-items: center; justify-content: center; font-size: 4rem; background: rgba(139,0,139,0.3); border-radius: 10px; margin-bottom: 15px; }
        .contact-info { text-align: center; }
        .contact-item { display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 20px; font-size: 1.2rem; }
        .contact-item .icon { font-size: 1.5rem; }
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          .hero-content h1 { font-size: 2rem; }
          .services-grid, .dungeon-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}tial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 1, delay: 0.5 }}>TshungKath</motion.h1>
          <motion.p initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
            🔥 Dominant trans mistress ready to explore your deepest fantasies and push your limits. Submit to my control and experience true pleasure through pain and obedience. 💋
          </motion.p>
          <motion.a href="#contact" className="cta-button" initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
            Get In Touch
          </motion.a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Hello! I'm Kathy, your kinky trans mistress specializing in domination and submission experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="premium-title">Premium Services</h2>
          <div className="services-grid">
            {[
              { title: "🔥 Online Domination", desc: "Intense cam sessions where I control every move you make", link: "/online-training" },
              { title: "👗 Sissy Transformation", desc: "Turn you into my perfect little slut through complete feminization", link: "/premium-packages" },
              { title: "⛓️ BDSM Sessions", desc: "Real domination with toys, restraints, and punishment", link: "/in-person-sessions" },
              { title: "👠 Foot Worship", desc: "Worship my perfect feet like the pathetic sub you are", link: "/premium-packages" },
              { title: "🔒 Chastity Training", desc: "Lock you up and control your orgasms completely", link: "/online-training" },
              { title: "💰 Financial Domination", desc: "Drain your wallet while you beg for more abuse", link: "/premium-packages" }
            ].map((service, i) => (
              <Link key={i} href={service.link}>
                <div className="service-card">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </Link>
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
              document.getElementById('galleryContent').style.display = 'block'
            }
          }}>
            <div className="folder-icon">📁</div>
            <h3>Private Gallery</h3>
            <p>11 items - 🔞 18+ Content Only</p>
          </div>
          <div id="galleryContent" style={{ display: 'none' }}>
            <div className="gallery-grid">
              {['/20250811_080612.jpg', '/20250818_053853.jpg'].map((img, i) => (
                <div key={i} className="gallery-item" onClick={() => openLightbox(img)}>
                  <img src={img} alt="Gallery" loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>Client Reviews</h2>
          <div className="testimonials-grid">
            {[
              { stars: "⭐⭐⭐⭐⭐", text: "Kathy broke me completely and rebuilt me as her perfect sissy slut. Life-changing experience!", client: "- Sissy Jessica" },
              { stars: "⭐⭐⭐⭐⭐", text: "Best mistress ever! She knows exactly how to make me suffer and beg for more. Addicted!", client: "- Slave Mike" },
              { stars: "⭐⭐⭐⭐⭐", text: "My chastity training with Kathy was intense. She owns my cock now and I love it!", client: "- Locked Boy" }
            ].map((testimonial, i) => (
              <div key={i} className="testimonial-card">
                <div className="stars">{testimonial.stars}</div>
                <p>{testimonial.text}</p>
                <span className="client-name">{testimonial.client}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing">
        <div className="container">
          <h2 style={{
            background: 'linear-gradient(45deg, #ff1493, #ff69b4, #8b008b)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>💰 Service Rates</h2>
          <div className="pricing-grid">
            {[
              { title: "🔥 Domination Sessions", price: "$150 - $750", features: ["HD cam domination", "Humiliation & degradation", "JOI & CEI instructions", "Custom fetish content"] },
              { title: "⛓️ BDSM Training", price: "$300 - $1500", features: ["Pain training protocols", "Slave position training", "Punishment sessions", "Orgasm control"] },
              { title: "👗 Sissy Makeover", price: "$500 - $2000", features: ["Complete feminization", "Makeup & dress training", "Slut behavior coaching", "Public humiliation prep"] }
            ].map((plan, i) => (
              <div key={i} className="pricing-card">
                <h3>{plan.title}</h3>
                <div className="price">{plan.price}</div>
                <ul>{plan.features.map((f, j) => <li key={j}>{f}</li>)}</ul>
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
              const service = new FormData(e.target).get('service')
              setPaymentModal({ open: true, service: service + ' Session', price: '$150' })
            }}>
              <select name="service" required>
                <option value="">Select Your Submission</option>
                <option value="domination">🔥 Online Domination Session</option>
                <option value="sissy">👗 Sissy Training Program</option>
                <option value="bdsm">⛓️ BDSM Pain Training</option>
                <option value="chastity">🔒 Chastity Control</option>
                <option value="findom">💰 Financial Domination</option>
              </select>
              <input type="date" name="date" required />
              <input type="text" name="name" placeholder="Your Name" required />
              <button type="submit">Proceed to Payment</button>
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
              <span className="icon">📱</span>
              <span>Telegram: @tshungkath10</span>
            </div>
            <div className="contact-item">
              <span className="icon">🔥</span>
              <span>Available 24/7 for your submission</span>
            </div>
          </div>
        </div>
      </section>

      {/* Dungeon Section */}
      <section id="dungeon" className="dungeon">
        <div className="container">
          <h2 style={{
            background: 'linear-gradient(45deg, #8b008b, #ff1493, #000)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>🏰 My Private Dungeon</h2>
          <div className="dungeon-grid">
            <div className="dungeon-card">
              <div className="dungeon-placeholder">⛓️</div>
              <h3>⛓️ Restraint Station</h3>
              <p>Professional bondage equipment including St. Andrew's cross, suspension points, and medical restraints</p>
            </div>
            <div className="dungeon-card">
              <div className="dungeon-placeholder">🔥</div>
              <h3>🔥 Impact Play Area</h3>
              <p>Paddles, floggers, whips, and canes for proper discipline and punishment sessions</p>
            </div>
            <div className="dungeon-card">
              <div className="dungeon-placeholder">🎭</div>
              <h3>🎭 Transformation Chamber</h3>
              <p>Full sissy makeover station with makeup, wigs, lingerie, and feminine accessories</p>
            </div>
            <div className="dungeon-card">
              <div className="dungeon-placeholder">🔒</div>
              <h3>🔒 Chastity Training</h3>
              <p>Collection of chastity devices and orgasm control equipment for long-term training</p>
            </div>
            <div className="dungeon-card">
              <div className="dungeon-placeholder">👠</div>
              <h3>👠 Worship Throne</h3>
              <p>Elevated platform for foot worship, body worship, and submission rituals</p>
            </div>
            <div className="dungeon-card">
              <div className="dungeon-placeholder">🎪</div>
              <h3>🎪 Role-Play Sets</h3>
              <p>Medical examination table, schoolroom setup, and various fantasy scenarios</p>
            </div>
          </div>
          <div className="dungeon-rules">
            <h3>🔥 Dungeon Rules & Safety</h3>
            <ul>
              <li>Safe words always respected - "Yellow" to slow down, "Red" to stop immediately</li>
              <li>All equipment professionally maintained and sanitized between sessions</li>
              <li>Health screening required for all in-person dungeon sessions</li>
              <li>Limits discussed and agreed upon before any session begins</li>
              <li>Aftercare provided - water, snacks, and emotional support included</li>
              <li>Discretion guaranteed - private entrance and soundproofed rooms</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 TshungKath Professional Services. All rights reserved.</p>
        </div>
      </footer>

      {/* Live Chat Widget */}
      <AnimatePresence>
        {liveChatOpen && (
          <motion.div style={{
            position: 'fixed', bottom: '20px', right: '20px', width: '350px', height: '500px',
            background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', zIndex: 10000
          }} initial={{ x: 400, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 400, opacity: 0 }}>
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
              <div style={{ marginBottom: '15px', padding: '10px', background: '#333', color: 'white', borderRadius: '10px' }}>
                <strong>Mistress Kathy:</strong> Ready to submit to me, slave? Tell me your deepest fantasies 😈🔥
              </div>
              <div style={{ marginBottom: '15px', padding: '10px', background: '#ff1493', color: 'white', borderRadius: '10px', marginLeft: '20px' }}>
                <strong>You:</strong> Please use me however you want, Mistress
              </div>
              <div style={{ marginBottom: '15px', padding: '10px', background: '#333', color: 'white', borderRadius: '10px' }}>
                <strong>Mistress Kathy:</strong> Good slut. I'm going to break you and make you beg for more 💋
              </div>
            </div>
            <div style={{ padding: '15px', borderTop: '1px solid #eee', display: 'flex', gap: '10px' }}>
              <input type="text" placeholder="Type your message..." style={{
                flex: 1, padding: '10px', border: '1px solid #ddd', borderRadius: '20px', outline: 'none'
              }} />
              <button style={{
                background: '#ff1493', border: 'none', color: 'white', padding: '10px 20px',
                borderRadius: '20px', cursor: 'pointer', fontWeight: 'bold'
              }}>Send</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Action Buttons */}
      <div style={{
        position: 'fixed', bottom: '100px', right: '20px', display: 'flex',
        flexDirection: 'column', gap: '10px', zIndex: 9998
      }}>
        <button onClick={startSessionTimer} style={{
          width: '50px', height: '50px', borderRadius: '50%',
          background: 'linear-gradient(45deg, #8b008b, #ff1493)', border: 'none',
          color: 'white', fontSize: '20px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(139,0,139,0.4)'
        }} title="Start Session">⏱️</button>
        <button onClick={() => addNotification('🔥 New kinky content available!')} style={{
          width: '50px', height: '50px', borderRadius: '50%',
          background: 'linear-gradient(45deg, #ff4500, #ff1493)', border: 'none',
          color: 'white', fontSize: '20px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(255,69,0,0.4)'
        }} title="Notifications">🔔</button>
      </div>

      {/* Kinky Floating Emojis */}
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

      {/* Live Chat */}
      <button onClick={() => setLiveChatOpen(!liveChatOpen)} style={{
        position: 'fixed', bottom: '20px', right: '20px', width: '60px', height: '60px',
        borderRadius: '50%', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
        border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer',
        display: liveChatOpen ? 'none' : 'flex', alignItems: 'center', justifyContent: 'center'
      }}>💬</button>

      {/* Notifications */}
      <div style={{ position: 'fixed', top: '20px', right: '20px', zIndex: 10001 }}>
        <AnimatePresence>
          {notifications.map(n => (
            <motion.div key={n.id} initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }} style={{
              background: '#28a745', color: 'white', padding: '15px 20px', borderRadius: '8px', marginBottom: '10px'
            }}>{n.message}</motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Session Timer */}
      <AnimatePresence>
        {sessionTimerActive && (
          <motion.div style={{
            position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)',
            background: 'rgba(0,0,0,0.8)', color: 'white', padding: '15px 25px', borderRadius: '25px'
          }} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: -100, opacity: 0 }}>
            <span>⏱️ Session: {formatTime(timerSeconds)}</span>
            <button onClick={endSession} style={{
              background: '#ff1493', border: 'none', color: 'white', padding: '5px 15px',
              borderRadius: '15px', cursor: 'pointer', marginLeft: '15px'
            }}>End</button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div onClick={closeLightbox} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.9)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000
          }}>
            <div onClick={(e) => e.stopPropagation()} style={{ position: 'relative' }}>
              <button onClick={closeLightbox} style={{
                position: 'absolute', top: '-40px', right: '0', background: 'none',
                border: 'none', color: 'white', fontSize: '2rem', cursor: 'pointer'
              }}>×</button>
              <img src={lightboxImage} alt="Gallery" style={{ maxWidth: '90vw', maxHeight: '90vh' }} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Modal */}
      <AnimatePresence>
        {authModal && (
          <motion.div onClick={() => setAuthModal(false)} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} style={{
            position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
            background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000
          }}>
            <div onClick={(e) => e.stopPropagation()} style={{
              background: 'white', borderRadius: '15px', padding: '40px', maxWidth: '400px', width: '90%'
            }}>
              <button onClick={() => setAuthModal(false)} style={{
                position: 'absolute', top: '15px', right: '20px', background: 'none',
                border: 'none', fontSize: '24px', cursor: 'pointer'
              }}>×</button>
              <h3>Sign In</h3>
              <input id="authEmail" type="email" placeholder="Email" style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '2px solid #e0e0e0', borderRadius: '10px' }} />
              <input id="authPassword" type="password" placeholder="Password" style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '2px solid #e0e0e0', borderRadius: '10px' }} />
              <button onClick={() => {
                const email = document.getElementById('authEmail')?.value
                const password = document.getElementById('authPassword')?.value
                if (email && password) handleLogin(email, password)
              }} style={{
                width: '100%', padding: '15px', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
                color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer'
              }}>Sign In</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* PWA Install Prompt */}
      <AnimatePresence>
        {showInstallPrompt && (
          <motion.div style={{
            position: 'fixed', bottom: '90px', right: '20px', background: 'white', padding: '20px',
            borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', zIndex: 10000, maxWidth: '300px'
          }} initial={{ x: 400, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 400, opacity: 0 }}>
            <button onClick={() => setShowInstallPrompt(false)} style={{
              position: 'absolute', top: '10px', right: '15px', background: 'none',
              border: 'none', fontSize: '20px', cursor: 'pointer'
            }}>×</button>
            <h4 style={{ margin: '0 0 10px 0', color: '#333' }}>📱 Install TshungKath App</h4>
            <p style={{ margin: '0 0 15px 0', color: '#666', fontSize: '14px' }}>
              Get the full app experience with offline access and notifications
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button onClick={handleInstallPWA} style={{
                background: '#ff1493', color: 'white', border: 'none', padding: '10px 15px',
                borderRadius: '8px', cursor: 'pointer', fontSize: '14px', fontWeight: '600'
              }}>Install</button>
              <button onClick={() => setShowInstallPrompt(false)} style={{
                background: '#f0f0f0', color: '#666', border: 'none', padding: '10px 15px',
                borderRadius: '8px', cursor: 'pointer', fontSize: '14px'
              }}>Later</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Admin Dashboard Button */}
      {user && user.email === 'kathtri57@gmail.com' && (
        <button onClick={() => window.open('/admin-dashboard.html', '_blank')} style={{
          position: 'fixed', top: '50%', left: '20px', transform: 'translateY(-50%)',
          width: '50px', height: '50px', borderRadius: '50%',
          background: 'linear-gradient(45deg, #28a745, #20c997)', border: 'none',
          color: 'white', fontSize: '20px', cursor: 'pointer', zIndex: 1000
        }} title="Admin Dashboard">⚙️</button>
      )}

      {/* Payment Gateway */}
      <PaymentGateway 
        isOpen={paymentModal.open}
        onClose={() => setPaymentModal({ open: false, service: '', price: '' })}
        service={paymentModal.service}
        price={paymentModal.price}
      />
      
      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.9); z-index: 1000; padding: 15px 0; }
        .nav-container { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .left-section { display: flex; align-items: center; }
        .logo { color: #ff1493; font-size: 1.8rem; font-weight: bold; margin: 0; }
        .mobile-menu-btn { display: none; }
        .hero { height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; position: relative; }
        .hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y="50" font-size="20" fill="%23ff1493" opacity="0.1">⛓️🔥💋⛓️🔥💋</text></svg>'); }
        .hero-content { position: relative; z-index: 2; }
        .hero-content h1 { font-size: 3rem; margin-bottom: 20px; text-shadow: 2px 2px 4px rgba(0,0,0,0.5); }
        .hero-content p { font-size: 1.2rem; margin-bottom: 30px; text-shadow: 1px 1px 2px rgba(0,0,0,0.5); }
        .cta-button { display: inline-block; padding: 15px 30px; background: linear-gradient(45deg, #ff1493, #ff69b4); color: white; text-decoration: none; border-radius: 25px; animation: pulse 2s infinite; }
        .cta-button:hover { animation: none; transform: scale(1.05); }
        .about, .services, .gallery, .pricing, .booking, .contact, .testimonials, .dungeon { padding: 80px 0; }
        .dungeon { background: linear-gradient(135deg, #1a1a1a, #2d1b2d); color: white; }
        .dungeon-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 50px; }
        .dungeon-card { background: rgba(255,255,255,0.1); padding: 30px; border-radius: 15px; border: 2px solid #ff1493; backdrop-filter: blur(10px); position: relative; overflow: hidden; }
        .dungeon-card h3 { color: #ff1493; margin-bottom: 15px; }
        .dungeon-placeholder { width: 100%; height: 200px; display: flex; align-items: center; justify-content: center; font-size: 4rem; background: rgba(139,0,139,0.3); border-radius: 10px; margin-bottom: 15px; border: 2px solid #8b008b; }
        .dungeon-card:hover .dungeon-placeholder { transform: scale(1.05); transition: transform 0.3s ease; }
        .dungeon-rules { background: rgba(139,0,139,0.2); padding: 40px; border-radius: 15px; margin-top: 50px; border: 2px solid #8b008b; }
        .dungeon-rules h3 { color: #ff1493; margin-bottom: 20px; }
        .dungeon-rules ul { list-style: none; padding: 0; }
        .dungeon-rules li { padding: 10px 0; border-bottom: 1px solid rgba(255,20,147,0.3); }
        .dungeon-rules li:before { content: '⚙️'; margin-right: 10px; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .services-grid, .pricing-grid, .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; margin-top: 50px; }
        .service-card, .pricing-card, .testimonial-card { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 2px solid transparent; transition: all 0.3s ease; }
        .service-card:hover, .pricing-card:hover { border-color: #ff1493; transform: translateY(-5px); box-shadow: 0 15px 40px rgba(255,20,147,0.3); }
        .service-card h3 { color: #ff1493; font-weight: bold; }
        .gallery-folder { background: linear-gradient(135deg, #ff1493, #8b008b); color: white; padding: 40px; border-radius: 15px; text-align: center; cursor: pointer; box-shadow: 0 10px 30px rgba(255,20,147,0.3); }
        .gallery-folder:hover { transform: scale(1.05); }
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 20px; margin-top: 20px; }
        .gallery-item { cursor: pointer; border-radius: 10px; overflow: hidden; }
        .gallery-item img { width: 100%; height: 200px; object-fit: cover; }
        .booking-form { background: white; padding: 40px; border-radius: 15px; max-width: 500px; margin: 0 auto; }
        .booking-form input, .booking-form select { width: 100%; padding: 15px; margin-bottom: 20px; border: 2px solid #e0e0e0; border-radius: 10px; }
        .booking-form button { width: 100%; padding: 15px; background: linear-gradient(45deg, #ff1493, #ff69b4); color: white; border: none; border-radius: 10px; cursor: pointer; }
        .contact { background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; }
        .contact-item { display: flex; align-items: center; gap: 15px; margin-bottom: 20px; }
        .contact-item .icon { font-size: 1.5rem; }
        .footer { background: #000; color: white; padding: 40px 0; text-align: center; }
        .footer p { margin: 0; }
        .footer p:before { content: '© 2026 '; }
        .testimonials { background: #f8f9fa; }
        .testimonial-card .stars { color: #ffd700; font-size: 1.2rem; margin-bottom: 15px; }
        .testimonial-card .client-name { font-style: italic; color: #666; }
        .pricing-card .price { font-size: 2rem; color: #ff1493; font-weight: bold; margin: 20px 0; }
        .pricing-card ul { list-style: none; padding: 0; }
        .pricing-card li { padding: 8px 0; border-bottom: 1px solid #eee; }
        .pricing-card li:before { content: '🔥'; margin-right: 8px; }
        .testimonial-card { position: relative; overflow: hidden; }
        .testimonial-card:before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, transparent, rgba(255,20,147,0.1), transparent); transform: rotate(45deg); transition: all 0.5s; opacity: 0; }
        .testimonial-card:hover:before { opacity: 1; animation: shimmer 1s ease-in-out; }
        @keyframes shimmer { 0% { transform: translateX(-100%) rotate(45deg); } 100% { transform: translateX(100%) rotate(45deg); } }
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          .hero-content h1 { font-size: 2rem; }
          .services-grid, .pricing-grid, .testimonials-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
