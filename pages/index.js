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
            {['🏠 Home', '👤 About', '💼 Services', '🏰 Dungeon', '💰 Pricing', '📅 Book Now', '📞 Contact'].map((item, i) => (
              <li key={i}><a href={['#home','#about','#services','#dungeon','#pricing','#booking','#contact'][i]} onClick={() => setMobileMenuOpen(false)} style={{
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
      <section className="hero">
        <div className="hero-content">
          <h1>TshungKath</h1>
          <p>🔥 Dominant trans mistress ready to explore your deepest fantasies and push your limits. Submit to my control and experience true pleasure through pain and obedience. 💋</p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>Hello! I'm Kathy, your kinky trans mistress specializing in domination and submission experiences. I provide exceptional personalized sessions for dedicated sluts and subs, helping you explore your deepest desires and push your limits in a safe, discreet environment.</p>
        </div>
      </section>

      {/* Services */}
      <section className="services">
        <div className="container">
          <h2>Premium Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>🔥 Online Domination</h3>
              <p>Intense cam sessions where I control every move you make</p>
            </div>
            <div className="service-card">
              <h3>👗 Sissy Transformation</h3>
              <p>Turn you into my perfect little slut through complete feminization</p>
            </div>
            <div className="service-card">
              <h3>💰 Financial Domination</h3>
              <p>Drain your wallet while you beg for more abuse</p>
            </div>
            <div className="service-card">
              <h3>👠 Foot Worship</h3>
              <p>Worship my perfect feet like the pathetic sub you are</p>
            </div>
            <div className="service-card">
              <h3>🔒 Chastity Training</h3>
              <p>Lock you up and control your orgasms completely</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dungeon */}
      <section className="dungeon">
        <div className="container">
          <h2 style={{
            background: 'linear-gradient(45deg, #8b008b, #ff1493, #000)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>🏰 My Private Dungeon</h2>
          <div className="dungeon-grid">
            <div className="dungeon-card">
              <div className="dungeon-image">
                <img src="/dungeon/IMG_2603-scaled.jpg" alt="Restraint Station" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <h3>⛓️ Restraint Station</h3>
              <p>Professional bondage equipment including St. Andrew's cross, suspension points, and medical restraints</p>
            </div>
            <div className="dungeon-card">
              <div className="dungeon-image">
                <img src="/dungeon/IMG_2608-scaled.jpg" alt="Impact Play" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <h3>🔥 Impact Play Area</h3>
              <p>Paddles, floggers, whips, and canes for proper discipline and punishment sessions</p>
            </div>
            <div className="dungeon-card">
              <div className="dungeon-image">
                <img src="/dungeon/IMG_2616-scaled.jpg" alt="Transformation" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <h3>🎭 Transformation Chamber</h3>
              <p>Full sissy makeover station with makeup, wigs, lingerie, and feminine accessories</p>
            </div>
            <div className="dungeon-card">
              <div className="dungeon-image">
                <img src="/dungeon/image-1-1.jpg" alt="Chastity Training" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <h3>🔒 Chastity Training</h3>
              <p>Collection of chastity devices and orgasm control equipment for long-term training</p>
            </div>
            <div className="dungeon-card">
              <div className="dungeon-image">
                <img src="/dungeon/Milking-Table-1.jpg" alt="Milking Station" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <h3>🥛 Milking Station</h3>
              <p>Specialized milking table for prostate massage and forced orgasm sessions</p>
            </div>
            <div className="dungeon-card">
              <div className="dungeon-image">
                <img src="/dungeon/Sybian-on-bench.jpg" alt="Sybian Machine" style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '10px' }} />
              </div>
              <h3>🎪 Sybian Machine</h3>
              <p>High-powered vibrating machine for intense forced orgasm training and edging</p>
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
          <h2>💰 Service Rates</h2>
          <div className="pricing-grid">
            {[
              { title: "🔥 Domination Sessions", price: "$150 - $750", features: ["HD cam domination", "Humiliation & degradation", "JOI & CEI instructions"] },
              { title: "⛓️ BDSM Training", price: "$300 - $1500", features: ["Pain training protocols", "Slave position training", "Punishment sessions"] },
              { title: "👗 Sissy Makeover", price: "$500 - $2000", features: ["Complete feminization", "Makeup & dress training", "Slut behavior coaching"] }
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
          <p>&copy; 2026 TshungKath Professional Services. All rights reserved.</p>
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
        .hero h1 { font-size: 3rem; margin-bottom: 20px; }
        .hero p { font-size: 1.2rem; margin-bottom: 30px; max-width: 600px; }
        .cta-button { display: inline-block; padding: 15px 30px; background: linear-gradient(45deg, #ff1493, #ff69b4); color: white; text-decoration: none; border-radius: 25px; }
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
        .service-card, .testimonial-card, .pricing-card, .dungeon-card { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 2px solid #ff1493; }
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
        .contact-item { display: flex; align-items: center; justify-content: center; gap: 15px; margin-bottom: 20px; font-size: 1.2rem; }
        .contact-item .icon { font-size: 1.5rem; }
        .dungeon-rules { background: rgba(139,0,139,0.2); padding: 40px; border-radius: 15px; margin-top: 50px; border: 2px solid #8b008b; }
        .dungeon-rules h3 { color: #ff1493; margin-bottom: 20px; }
        .dungeon-rules ul { list-style: none; padding: 0; }
        .dungeon-rules li { padding: 10px 0; border-bottom: 1px solid rgba(255,20,147,0.3); }
        .dungeon-rules li:before { content: '⚙️'; margin-right: 10px; }
        .dungeon-gallery { margin-top: 40px; }
        .dungeon-gallery h3 { color: #ff1493; text-align: center; margin-bottom: 30px; font-size: 1.8rem; }
        @media (max-width: 768px) {
          .hero h1 { font-size: 2rem; }
          .services-grid, .dungeon-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
