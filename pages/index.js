import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [user, setUser] = useState(null)
  const [authModal, setAuthModal] = useState(false)
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxImage, setLightboxImage] = useState('')
  const [liveChatOpen, setLiveChatOpen] = useState(false)
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Mistress Kathy', message: 'Ready to submit to me, slave? Tell me your deepest fantasies 😈🔥', time: '10:30 AM' },
    { sender: 'You', message: 'Please use me however you want, Mistress', time: '10:31 AM' },
    { sender: 'Mistress Kathy', message: 'Good slut. I\'m going to break you and make you beg for more 💋', time: '10:32 AM' }
  ])
  const [newMessage, setNewMessage] = useState('')
  const [serviceModal, setServiceModal] = useState({ open: false, service: '' })

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
              <li key={i}><a href={['#home','#about','#services','#pricing','#booking','#contact'][i]} onClick={() => setMobileMenuOpen(false)} style={{
                display: 'block', padding: '12px 16px', color: '#333', textDecoration: 'none',
                borderBottom: '1px solid #eee', fontSize: '14px'
              }}>{item}</a></li>
            ))}
          </ul>
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
            {user ? (
              <span style={{color: 'white', marginRight: '15px'}}>Welcome, {user.name || user.email}</span>
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
      <section id="about" className="about" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("/Snapchat-2048414736.jpg")',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
      }}>
        <div className="container">
          <h2>About Me</h2>
          <p>Hello! I'm Kathy, your kinky trans mistress specializing in domination and submission experiences. I provide exceptional personalized sessions for dedicated sluts and subs, helping you explore your deepest desires and push your limits in a safe, discreet environment.</p>
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



      {/* Gallery */}
      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <div className="gallery-folder" onClick={() => {
            if (confirm('🔞 Age Verification Required\n\nYou must be 18+ to view this content.')) {
              document.getElementById('galleryContent').style.display = 'block'
            }
          }}>
            <div className="folder-icon">📁</div>
            <h3>Private Gallery</h3>
            <p>15 items - 🔞 18+ Content Only</p>
          </div>
          <div id="galleryContent" style={{ display: 'none' }}>
            <div className="gallery-grid">
              {[
                '/20250811_080612.jpg', '/20250818_053853.jpg', '/20250923_033902.jpg', '/20251013_205914.jpg',
                '/5f859e2079de2-320-3.jpg', '/ClipDown.App_323181084_859195861864401_767757521491526338_n (1).jpg',
                '/IZ1KqdnC.jpeg', '/Snapchat-2048414736.jpg', '/Snapchat-2094116657.jpg',
                '/Snapinsta.app_252779091_468028234603867_2548580010668401338_n_1080.jpg',
                '/Snapinsta.app_323280597_482304177421626_3152935471351356946_n_1080.jpg',
                '/SnapInsta.to_574484374_18534045874052735_872482252059731347_n.jpg', '/SzU6IOIX.jpeg'
              ].map((img, i) => (
                <div key={i} className="gallery-item" onClick={() => { setLightboxImage(img); setLightboxOpen(true); }}>
                  <img src={img} alt="Gallery" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="dungeon-gallery">
              <h3>🏰 Dungeon Equipment</h3>
              <div className="gallery-grid">
                {[
                  '/dungeon/image-1-1.jpg', '/dungeon/IMG_1176-1-scaled.jpeg', '/dungeon/IMG_2603-scaled.jpg',
                  '/dungeon/IMG_2608-scaled.jpg', '/dungeon/IMG_2616-scaled.jpg', '/dungeon/Milking-Table-1.jpg',
                  '/dungeon/photo_2025-12-26_22-53-00.jpg', '/dungeon/Sybian-on-bench.jpg'
                ].map((img, i) => (
                  <div key={i} className="gallery-item" onClick={() => { setLightboxImage(img); setLightboxOpen(true); }}>
                    <img src={img} alt="Dungeon Equipment" loading="lazy" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="testimonials" style={{
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url("/IZ1KqdnC.jpeg")',
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
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
      <section id="pricing" className="pricing" style={{
        backgroundImage: 'linear-gradient(rgba(248,249,250,0.95), rgba(248,249,250,0.95)), url("/SzU6IOIX.jpeg")',
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <div className="container">
          <h2>💰 Service Rates</h2>
          <div className="pricing-grid">
            {[
              { title: "🔥 Online Domination Sessions", price: "$150 - $750", features: ["HD cam domination with full control", "JOI & CEI instructions - I control your orgasms", "Humiliation & degradation sessions", "Custom fetish content creation", "Task assignments between sessions"] },
              { title: "⛓️ BDSM Training & Pain Play", price: "$300 - $1500", features: ["Pain tolerance training protocols", "Slave position and behavior training", "Impact play instruction (paddles, whips)", "Bondage and restraint techniques", "Safe word establishment and limits"] },
              { title: "👗 Complete Sissy Transformation", price: "$500 - $2000", features: ["Full feminization makeover process", "Makeup tutorials and dress training", "Voice coaching and mannerism training", "Public humiliation preparation", "Wardrobe consultation and shopping"] },
              { title: "💰 Financial Domination & Control", price: "$50 - $5000+", features: ["Tribute demands and wallet inspection", "Complete budget control and monitoring", "Shopping sprees on your expense", "Financial games and blackmail scenarios", "Real-time money transfer sessions"] },
              { title: "👠 Foot Worship & Sole Training", price: "$100 - $300", features: ["Proper foot massage instruction", "Toe sucking and sole licking training", "Shoe and sock worship sessions", "Custom foot content (photos/videos)", "Worn item sales for devoted slaves"] },
              { title: "🔒 Chastity Control & Denial", price: "$200 - $2000/mo", features: ["Device selection and fitting guidance", "Long-term key holding services", "Orgasm scheduling and denial training", "Daily check-in requirements", "Release task assignments and rewards"] },
              { title: "🚐 Private Mobile Dungeon", price: "$800 - $2500", features: ["Fully equipped mobile dungeon delivery", "Discreet setup at your location", "Professional BDSM equipment included", "Complete privacy and discretion", "Flexible location arrangements"] },
              { title: "📱 Custom Content & Media", price: "$25 - $500", features: ["Personalized video messages", "Custom photo sets and galleries", "Audio domination recordings", "Worn clothing and accessory sales", "Special request fulfillment"] },
              { title: "🎭 Role-Play & Fantasy Sessions", price: "$200 - $600", features: ["Teacher/student power dynamics", "Boss/employee domination scenarios", "Medical examination role-plays", "Age regression and mommy play", "Custom fantasy scenario creation"] },
              { title: "💉 Medical Play & Examination", price: "$400 - $1200", features: ["Professional medical equipment use", "Intimate examination procedures", "Catheter and sound insertion training", "Medical restraint and positioning", "Clinical humiliation scenarios"] },
              { title: "🎆 Extreme & Advanced Sessions", price: "$600 - $3000", features: ["Needle play and piercing sessions", "Electro-stimulation training", "Breath play and edge control", "Extreme bondage and suspension", "Advanced pain tolerance building"] },
              { title: "📅 Subscription & Ongoing Control", price: "$300 - $1500/mo", features: ["24/7 text message domination", "Daily task assignments and check-ins", "Weekly video call sessions", "Lifestyle control and monitoring", "Priority booking and discounts"] }
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
                  <button onClick={() => {
                    setServiceModal({ open: false, service: '' })
                    document.getElementById('booking').scrollIntoView({ behavior: 'smooth' })
                  }} style={{
                    background: 'linear-gradient(45deg, #ff1493, #ff69b4)', color: 'white',
                    border: 'none', padding: '15px 30px', borderRadius: '25px',
                    fontSize: '18px', cursor: 'pointer', fontWeight: 'bold'
                  }}>Book This Service 💋</button>
                </div>
              </>
            )}
          </div>
        </div>
      )}

      {/* Live Chat Widget */}
      {liveChatOpen && (
        <div style={{
          position: 'fixed', bottom: '20px', right: '20px', width: '350px', height: '500px',
          background: 'white', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)', zIndex: 10000
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

      {/* Live Chat Button */}
      <button onClick={() => setLiveChatOpen(!liveChatOpen)} style={{
        position: 'fixed', bottom: '20px', right: '20px', width: '60px', height: '60px',
        borderRadius: '50%', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
        border: 'none', color: 'white', fontSize: '24px', cursor: 'pointer'
      }}>💬</button>

      {/* Auth Modal */}
      {authModal && (
        <div onClick={() => setAuthModal(false)} style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10000
        }}>
          <div onClick={(e) => e.stopPropagation()} style={{
            background: 'white', borderRadius: '15px', padding: '40px', maxWidth: '400px', width: '90%'
          }}>
            <h3>Sign In</h3>
            <input type="email" placeholder="Email" style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '2px solid #e0e0e0', borderRadius: '10px' }} />
            <input type="password" placeholder="Password" style={{ width: '100%', padding: '15px', marginBottom: '20px', border: '2px solid #e0e0e0', borderRadius: '10px' }} />
            <button style={{
              width: '100%', padding: '15px', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
              color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer'
            }}>Sign In</button>
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

      <style jsx>{`
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
        .nav-right { display: flex; align-items: center; }
        .logo { color: #ff1493; font-size: 1.8rem; font-weight: bold; margin: 0; }
        .mobile-menu-btn { background: #ff1493; border: none; color: white; padding: 8px 12px; border-radius: 5px; cursor: pointer; }
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
        }
          .hero h1 { font-size: 2rem; }
          .services-grid, .dungeon-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
