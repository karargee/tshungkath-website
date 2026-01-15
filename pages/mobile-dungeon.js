import Head from 'next/head'
import { useState, useEffect } from 'react'

export default function MobileDungeon() {
  const [isMobile, setIsMobile] = useState(false)
  const [selectedPackage, setSelectedPackage] = useState('')
  const [bookingModal, setBookingModal] = useState(false)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    setIsMobile(typeof window !== 'undefined' && window.innerWidth < 768)
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % dungeonImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + dungeonImages.length) % dungeonImages.length)
  }

  const dungeonPackages = [
    { name: 'Basic BDSM Session (2hr)', price: 600, description: 'Introduction to BDSM with basic equipment and restraints' },
    { name: 'Advanced Bondage (3hr)', price: 850, description: 'Complex rope work and advanced restraint techniques' },
    { name: 'Medical Play Session (2hr)', price: 700, description: 'Clinical examination scenarios with medical equipment' },
    { name: 'Sissy Training (4hr)', price: 1000, description: 'Complete feminization training in private setting' },
    { name: 'Overnight Experience (8hr)', price: 2000, description: 'Extended overnight session with multiple scenarios' }
  ]

  const dungeonImages = [
    '/dungeon/image-1-1.jpg', '/dungeon/IMG_1176-1-scaled.jpeg', '/dungeon/IMG_2603-scaled.jpg', 
    '/dungeon/IMG_2608-scaled.jpg', '/dungeon/IMG_2616-scaled.jpg', '/dungeon/Milking-Table-1.jpg',
    '/dungeon/photo_2025-12-26_22-53-00.jpg', '/dungeon/Sybian-on-bench.jpg'
  ]

  return (
    <>
      <Head>
        <title>Mobile Dungeon - TshungKath</title>
        <meta name="description" content="Professional mobile BDSM dungeon experience" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <nav style={{
        position: 'fixed', top: 0, width: '100%', background: 'rgba(0,0,0,0.9)', 
        zIndex: 1000, padding: '15px 0', backdropFilter: 'blur(10px)'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <a href="/" style={{ color: '#ff1493', fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none' }}>TshungKath</a>
          <a href="/" style={{ color: 'white', textDecoration: 'none', padding: '8px 16px', background: '#ff1493', borderRadius: '5px' }}>← Back</a>
        </div>
      </nav>

      <section style={{
        height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', 
        textAlign: 'center', color: 'white',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/dungeon/IMG_1176-1-scaled.jpeg")',
        backgroundSize: 'cover', backgroundPosition: 'center',
        position: 'relative', overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute', top: '0', left: '0', right: '0', bottom: '0',
          background: 'radial-gradient(circle at 30% 20%, rgba(255,20,147,0.4) 0%, transparent 50%), radial-gradient(circle at 70% 80%, rgba(255,105,180,0.3) 0%, transparent 50%)',
          animation: 'gradientShift 8s ease-in-out infinite'
        }} />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : '4rem', marginBottom: '20px',
            background: 'linear-gradient(45deg, #ff1493, #ff69b4, #fff)', 
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255,20,147,0.8)'
          }}>🚐 Mobile Dungeon</h1>
          <p style={{ fontSize: isMobile ? '1.1rem' : '1.4rem', marginBottom: '30px', maxWidth: '700px' }}>
            Professional BDSM dungeon brought directly to your location. Fully equipped with restraints, toys, and medical equipment for the ultimate private experience.
          </p>
          <button onClick={() => setBookingModal(true)} style={{
            padding: '20px 40px', background: 'linear-gradient(45deg, #ff1493, #ff69b4)', 
            color: 'white', border: 'none', borderRadius: '30px', fontSize: '18px', 
            fontWeight: 'bold', cursor: 'pointer', boxShadow: '0 10px 30px rgba(255,20,147,0.4)'
          }}>Book Now</button>
        </div>
      </section>

      <section style={{ 
        padding: '80px 0', 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/dungeon/image-1-1.jpg")',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            textAlign: 'center', fontSize: '3rem', marginBottom: '60px', 
            background: 'linear-gradient(45deg, #ff1493, #ff69b4, #fff)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255,20,147,0.6)'
          }}>⚡ Equipment & Features</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { icon: '🔗', title: 'Professional Restraints', desc: 'High-quality leather cuffs, chains, and bondage equipment' },
              { icon: '⚡', title: 'Electro-Stimulation', desc: 'Safe electrical play equipment for sensation training' },
              { icon: '🩺', title: 'Medical Equipment', desc: 'Clinical tools for medical play and examination scenarios' },
              { icon: '🎭', title: 'Role-Play Props', desc: 'Costumes and props for various domination scenarios' },
              { icon: '📸', title: 'Documentation', desc: 'Professional photo/video equipment (with consent)' },
              { icon: '🚗', title: 'Mobile Service', desc: 'Discreet arrival at your preferred location' }
            ].map((feature, i) => (
              <div key={i} style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))',
                backdropFilter: 'blur(20px)', border: '2px solid rgba(255,20,147,0.4)',
                padding: '40px 30px', borderRadius: '20px', textAlign: 'center',
                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
              }}>
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{feature.icon}</div>
                <h3 style={{ color: '#fff', marginBottom: '15px', textShadow: '0 0 10px rgba(255,20,147,0.8)' }}>{feature.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ 
        padding: '80px 0', 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/dungeon/Milking-Table-1.jpg")',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ 
            textAlign: 'center', fontSize: '3rem', marginBottom: '60px', 
            background: 'linear-gradient(45deg, #ff1493, #ff69b4, #fff)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>💎 Session Packages</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {dungeonPackages.map((pkg, i) => (
              <div key={i} style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))',
                backdropFilter: 'blur(25px)', border: '2px solid rgba(255,20,147,0.4)',
                padding: '40px 30px', borderRadius: '20px',
                boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
              }}>
                <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '15px', textShadow: '0 0 10px rgba(255,20,147,0.8)' }}>{pkg.name}</h3>
                <div style={{ fontSize: '2rem', color: '#ff1493', fontWeight: 'bold', marginBottom: '15px' }}>${pkg.price}</div>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.6', marginBottom: '25px' }}>{pkg.description}</p>
                <button onClick={() => {
                  setSelectedPackage(pkg.name)
                  setBookingModal(true)
                }} style={{
                  width: '100%', padding: '15px', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
                  color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold'
                }}>Book This Package</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ 
        padding: '80px 0', 
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
            textAlign: 'center', fontSize: '3rem', marginBottom: '60px', 
            background: 'linear-gradient(45deg, #ff1493, #ff69b4, #fff)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
            textShadow: '0 0 30px rgba(255,20,147,0.6)'
          }}>📋 What to Expect</h2>
          
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(400px, 1fr))', gap: '40px' }}>
            <div style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))',
              backdropFilter: 'blur(25px)', border: '2px solid rgba(255,20,147,0.4)',
              padding: '40px 30px', borderRadius: '20px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
            }}>
              <h3 style={{ color: '#ff1493', fontSize: '1.5rem', marginBottom: '20px', textShadow: '0 0 10px rgba(255,20,147,0.8)' }}>🚗 Arrival & Setup</h3>
              <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>• Discreet arrival in unmarked vehicle</li>
                <li style={{ marginBottom: '10px' }}>• Professional setup of equipment (30-45 minutes)</li>
                <li style={{ marginBottom: '10px' }}>• Privacy discussion and consent verification</li>
                <li style={{ marginBottom: '10px' }}>• Safe words and limits confirmation</li>
                <li style={{ marginBottom: '10px' }}>• Equipment demonstration and safety briefing</li>
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))',
              backdropFilter: 'blur(25px)', border: '2px solid rgba(255,20,147,0.4)',
              padding: '40px 30px', borderRadius: '20px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
            }}>
              <h3 style={{ color: '#ff1493', fontSize: '1.5rem', marginBottom: '20px', textShadow: '0 0 10px rgba(255,20,147,0.8)' }}>⛓️ Session Activities</h3>
              <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>• Bondage and restraint training</li>
                <li style={{ marginBottom: '10px' }}>• Sensory deprivation experiences</li>
                <li style={{ marginBottom: '10px' }}>• Impact play with various implements</li>
                <li style={{ marginBottom: '10px' }}>• Electro-stimulation and sensation play</li>
                <li style={{ marginBottom: '10px' }}>• Role-play scenarios and power exchange</li>
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))',
              backdropFilter: 'blur(25px)', border: '2px solid rgba(255,20,147,0.4)',
              padding: '40px 30px', borderRadius: '20px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
            }}>
              <h3 style={{ color: '#ff1493', fontSize: '1.5rem', marginBottom: '20px', textShadow: '0 0 10px rgba(255,20,147,0.8)' }}>🛡️ Safety & Aftercare</h3>
              <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>• Continuous monitoring during all activities</li>
                <li style={{ marginBottom: '10px' }}>• First aid kit and emergency protocols</li>
                <li style={{ marginBottom: '10px' }}>• Proper aftercare and emotional support</li>
                <li style={{ marginBottom: '10px' }}>• Hydration and comfort items provided</li>
                <li style={{ marginBottom: '10px' }}>• Post-session check-in within 24 hours</li>
              </ul>
            </div>

            <div style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))',
              backdropFilter: 'blur(25px)', border: '2px solid rgba(255,20,147,0.4)',
              padding: '40px 30px', borderRadius: '20px',
              boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
            }}>
              <h3 style={{ color: '#ff1493', fontSize: '1.5rem', marginBottom: '20px', textShadow: '0 0 10px rgba(255,20,147,0.8)' }}>📝 Preparation Guidelines</h3>
              <ul style={{ color: 'rgba(255,255,255,0.9)', lineHeight: '1.8', listStyle: 'none', padding: 0 }}>
                <li style={{ marginBottom: '10px' }}>• Shower and personal hygiene before session</li>
                <li style={{ marginBottom: '10px' }}>• Avoid alcohol or substances 24 hours prior</li>
                <li style={{ marginBottom: '10px' }}>• Eat a light meal 2-3 hours beforehand</li>
                <li style={{ marginBottom: '10px' }}>• Prepare private space with adequate room</li>
                <li style={{ marginBottom: '10px' }}>• Have emergency contact information ready</li>
              </ul>
            </div>
          </div>

          <div style={{
            marginTop: '60px', textAlign: 'center',
            background: 'linear-gradient(145deg, rgba(255,20,147,0.1), rgba(255,105,180,0.05))',
            backdropFilter: 'blur(25px)', border: '2px solid rgba(255,20,147,0.4)',
            padding: '40px', borderRadius: '20px', maxWidth: '800px', margin: '60px auto 0',
            boxShadow: '0 25px 50px rgba(0,0,0,0.4)'
          }}>
            <h3 style={{ color: '#ff1493', fontSize: '1.8rem', marginBottom: '20px', textShadow: '0 0 15px rgba(255,20,147,0.8)' }}>🔒 Privacy & Discretion Guaranteed</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '20px' }}>
              Your privacy is my top priority. All sessions are completely confidential, and I maintain the highest standards of discretion. 
              No personal information is ever shared, and all equipment is sanitized between sessions.
            </p>
            <p style={{ color: '#ff69b4', fontSize: '1rem', fontStyle: 'italic', textShadow: '0 0 8px rgba(255,105,180,0.6)' }}>
              "Professional, safe, and transformative experiences that respect your boundaries while pushing your limits." - Mistress Kathy
            </p>
          </div>
        </div>
      </section>

      <section style={{ 
        padding: '80px 0', 
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/dungeon/Sybian-on-bench.jpg")',
        backgroundSize: 'cover', backgroundPosition: 'center', backgroundAttachment: 'fixed'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px', textAlign: 'center' }}>
          <h2 style={{ 
            fontSize: '3rem', marginBottom: '40px', 
            background: 'linear-gradient(45deg, #ff1493, #ff69b4, #fff)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'
          }}>📸 Dungeon Gallery</h2>
          
          <div style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))',
            backdropFilter: 'blur(20px)', border: '2px solid rgba(255,20,147,0.4)',
            padding: '60px 40px', borderRadius: '25px', cursor: 'pointer',
            maxWidth: '500px', margin: '0 auto',
            boxShadow: '0 30px 60px rgba(0,0,0,0.4)'
          }} onClick={() => {
            if (confirm('🔞 Age Verification Required\\n\\nYou must be 18+ to view this content.')) {
              setGalleryOpen(true)
            }
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🏰</div>
            <h3 style={{ color: '#fff', fontSize: '1.5rem', marginBottom: '10px', textShadow: '0 0 15px rgba(255,20,147,0.8)' }}>Dungeon Equipment Gallery</h3>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1rem' }}>View our professional BDSM equipment - 🔞 18+ Only</p>
          </div>
        </div>
      </section>

      {bookingModal && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
          background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', 
          justifyContent: 'center', zIndex: 10000
        }}>
          <div style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,20,147,0.05))',
            backdropFilter: 'blur(25px)', border: '2px solid rgba(255,20,147,0.4)',
            padding: '40px', borderRadius: '20px', maxWidth: '500px', width: '90%'
          }}>
            <h3 style={{ color: '#fff', textAlign: 'center', marginBottom: '30px', textShadow: '0 0 10px rgba(255,20,147,0.8)' }}>🚐 Book Mobile Dungeon</h3>
            <form onSubmit={(e) => {
              e.preventDefault()
              const formData = new FormData(e.target)
              const bookingData = {
                package: formData.get('package'),
                date: formData.get('date'),
                name: formData.get('name'),
                email: formData.get('email'),
                location: formData.get('location'),
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
                    package: bookingData.package,
                    date: bookingData.date,
                    location: bookingData.location,
                    message: bookingData.message,
                    timestamp: bookingData.timestamp
                  }
                })
              })
              .then(() => {
                alert('🔥 Booking request sent successfully! I will contact you within 24 hours to confirm your mobile dungeon session.')
                setBookingModal(false)
              })
              .catch(() => {
                alert('📧 Booking sent! Please also email kathtri57@gmail.com directly with your booking details.')
                setBookingModal(false)
              })
            }}>
              <select name="package" required style={{
                width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '12px',
                border: '2px solid rgba(255,20,147,0.5)', background: 'rgba(0,0,0,0.3)',
                color: '#fff', boxSizing: 'border-box'
              }}>
                <option value="">Select Package</option>
                {dungeonPackages.map((pkg, i) => (
                  <option key={i} value={pkg.name} selected={selectedPackage === pkg.name} style={{ background: '#1a1a2e' }}>
                    {pkg.name} - ${pkg.price}
                  </option>
                ))}
              </select>
              <input name="date" type="date" required style={{
                width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '12px',
                border: '2px solid rgba(255,20,147,0.5)', background: 'rgba(0,0,0,0.3)',
                color: '#fff', boxSizing: 'border-box'
              }} />
              <input name="name" type="text" placeholder="Your Name" required style={{
                width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '12px',
                border: '2px solid rgba(255,20,147,0.5)', background: 'rgba(0,0,0,0.3)',
                color: '#fff', boxSizing: 'border-box'
              }} />
              <input name="email" type="email" placeholder="Your Email" required style={{
                width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '12px',
                border: '2px solid rgba(255,20,147,0.5)', background: 'rgba(0,0,0,0.3)',
                color: '#fff', boxSizing: 'border-box'
              }} />
              <input name="location" type="text" placeholder="Your Location/Address" required style={{
                width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '12px',
                border: '2px solid rgba(255,20,147,0.5)', background: 'rgba(0,0,0,0.3)',
                color: '#fff', boxSizing: 'border-box'
              }} />
              <textarea name="message" placeholder="Special requests or limits..." rows="3" style={{
                width: '100%', padding: '15px', marginBottom: '20px', borderRadius: '12px',
                border: '2px solid rgba(255,20,147,0.5)', background: 'rgba(0,0,0,0.3)',
                color: '#fff', boxSizing: 'border-box', fontFamily: 'inherit'
              }}></textarea>
              <div style={{ display: 'flex', gap: '15px' }}>
                <button type="submit" style={{
                  flex: 1, padding: '15px', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
                  color: 'white', border: 'none', borderRadius: '12px', cursor: 'pointer', fontWeight: 'bold'
                }}>Submit Booking</button>
                <button type="button" onClick={() => setBookingModal(false)} style={{
                  flex: 1, padding: '15px', background: '#666', color: 'white',
                  border: 'none', borderRadius: '12px', cursor: 'pointer'
                }}>Cancel</button>
              </div>
            </form>
          </div>
        </div>
      )}

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
            <img src={dungeonImages[currentSlide]} alt={`Dungeon ${currentSlide + 1}`} style={{
              maxWidth: '100%', maxHeight: '80vh', objectFit: 'contain',
              borderRadius: '10px', boxShadow: '0 10px 30px rgba(255,20,147,0.5)'
            }} />
            
            <div style={{
              marginTop: '20px', color: 'white', fontSize: '18px',
              background: 'rgba(255,20,147,0.8)', padding: '10px 20px',
              borderRadius: '20px', display: 'inline-block'
            }}>
              {currentSlide + 1} / {dungeonImages.length}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </>
  )
}