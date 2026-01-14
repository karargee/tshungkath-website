import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [authModal, setAuthModal] = useState(false)
  const [authMode, setAuthMode] = useState('login')
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
            </div>
            <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="hero">
        <div className="hero-content">
          <h1>TshungKath</h1>
          <p>🔥 Dominant trans mistress ready to explore your deepest fantasies and push your limits. Submit to my control and experience true pleasure through pain and obedience. 💋</p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <h2>Premium Services</h2>
          <div className="services-grid">
            {[
              { key: 'Online Domination', title: '🔥 Online Domination', desc: 'Intense cam sessions where I control every move you make' },
              { key: 'Sissy Transformation', title: '👗 Sissy Transformation', desc: 'Turn you into my perfect little slut through complete feminization' },
              { key: 'Financial Domination', title: '💰 Financial Domination', desc: 'Drain your wallet while you beg for more abuse' },
              { key: 'Foot Worship', title: '👠 Foot Worship', desc: 'Worship my perfect feet like the pathetic sub you are' },
              { key: 'Private Mobile Dungeon', title: '🚐 Mobile Dungeon', desc: 'I bring my fully equipped dungeon directly to you' }
            ].map((service, i) => (
              <div key={i} className="service-card" onClick={() => setServiceModal({ open: true, service: service.key })}>
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
                <div className="service-overlay">Click for Details</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="pricing">
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
          </div>
        </div>
      </section>

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
              </>
            )}
          </div>
        </div>
      )}

      {/* Payment Modal */}
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
                alert(`💳 Redirecting to card payment for $${paymentModal.price}...`)
              }} style={{
                background: 'linear-gradient(45deg, #4169E1, #6495ED)', color: 'white',
                border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'
              }}>💳 Pay with Card</button>
              
              <button onClick={() => {
                alert(`💰 Redirecting to PayPal for $${paymentModal.price}...`)
              }} style={{
                background: 'linear-gradient(45deg, #0070ba, #003087)', color: 'white',
                border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'
              }}>💰 PayPal</button>
            </div>
            
            <button onClick={() => setPaymentModal({ open: false, service: '', price: '', selectedOption: '' })} style={{
              background: '#666', color: 'white', border: 'none', padding: '10px 20px',
              borderRadius: '10px', cursor: 'pointer', width: '100%', marginTop: '20px'
            }}>Cancel</button>
          </div>
        </div>
      )}

      <style jsx>{`
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.9); z-index: 1000; padding: 15px 0; }
        .nav-container { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .nav-right { display: flex; align-items: center; gap: 15px; }
        .header-social { display: flex; align-items: center; gap: 10px; }
        .logo { color: #ff1493; font-size: 1.8rem; font-weight: bold; margin: 0; }
        .mobile-menu-btn { background: #ff1493; border: none; color: white; padding: 8px 12px; border-radius: 5px; cursor: pointer; }
        .hero { height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); }
        .hero h1 { font-size: 4rem; margin-bottom: 20px; }
        .hero p { font-size: 1.4rem; margin-bottom: 30px; max-width: 700px; }
        .cta-button { display: inline-block; padding: 20px 40px; background: linear-gradient(45deg, #ff1493, #ff69b4); color: white; text-decoration: none; border-radius: 30px; font-size: 18px; font-weight: bold; }
        .services, .pricing, .contact { padding: 80px 0; }
        .services { background: white; }
        .pricing { background: #f8f9fa; }
        .contact { background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; text-align: center; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .services h2, .pricing h2, .contact h2 { text-align: center; font-size: 2.5rem; margin-bottom: 50px; color: #ff1493; }
        .services-grid, .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .service-card, .pricing-card { background: rgba(255,255,255,0.95); padding: 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 2px solid #ff1493; cursor: pointer; position: relative; overflow: hidden; }
        .service-card:hover { transform: translateY(-10px); }
        .service-overlay { position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(255,20,147,0.9); color: white; display: flex; align-items: center; justify-content: center; font-weight: bold; font-size: 18px; opacity: 0; transition: opacity 0.3s ease; }
        .service-card:hover .service-overlay { opacity: 1; }
        .service-card h3, .pricing-card h3 { color: #ff1493; margin-bottom: 15px; }
        .contact-info { display: flex; flex-direction: column; gap: 20px; max-width: 600px; margin: 0 auto; }
        .contact-item { display: flex; align-items: center; justify-content: center; gap: 15px; padding: 20px; background: rgba(255,255,255,0.1); border-radius: 15px; border: 2px solid rgba(255,20,147,0.3); }
        .contact-item .icon { font-size: 2rem; }
      `}</style>
    </>
  )
}
