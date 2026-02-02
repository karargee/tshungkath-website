import Head from 'next/head'
import { useState } from 'react'

export default function MobileDungeon() {
  const [paymentModal, setPaymentModal] = useState({ open: false, service: '', price: 0, selectedOption: '' })
  const [lightbox, setLightbox] = useState({ open: false, image: '' })

  const equipment = [
    { name: 'St. Andrew\'s Cross', image: '/dungeon/image-1-1.jpg', description: 'Professional restraint cross for bondage sessions' },
    { name: 'Milking Table', image: '/dungeon/Milking-Table-1.jpg', description: 'Specialized table for milking and prostate massage' },
    { name: 'Sybian Machine', image: '/dungeon/Sybian-on-bench.jpg', description: 'Premium riding machine for intense sessions' },
    { name: 'Medical Equipment', image: '/dungeon/IMG_1176-1-scaled.jpeg', description: 'Professional medical play setup' },
    { name: 'Bondage Setup', image: '/dungeon/IMG_2603-scaled.jpg', description: 'Complete restraint and bondage equipment' },
    { name: 'Dungeon Interior', image: '/dungeon/IMG_2608-scaled.jpg', description: 'Professional dungeon atmosphere' }
  ]

  const services = [
    { name: 'Basic BDSM Session (2hr)', price: 800, description: 'Introduction to BDSM with basic equipment' },
    { name: 'Advanced Bondage (3hr)', price: 1200, description: 'Complex restraints and advanced techniques' },
    { name: 'Medical Play Session (2hr)', price: 900, description: 'Professional medical examination scenarios' },
    { name: 'Milking Session (2hr)', price: 1000, description: 'Prostate milking with specialized equipment' },
    { name: 'Overnight Experience (8hr)', price: 2500, description: 'Extended overnight dungeon experience' }
  ]

  return (
    <>
      <Head>
        <title>Mobile Dungeon - TshungKath Professional Services</title>
        <meta name="description" content="Professional mobile dungeon service with full BDSM equipment" />
      </Head>

      <nav style={{ background: '#000', padding: '1rem 0', borderBottom: '2px solid #ff1493' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
          <a href="/" style={{ color: '#ff1493', fontSize: '1.8rem', fontWeight: 'bold', textDecoration: 'none' }}>TshungKath</a>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', padding: '8px 16px', background: '#ff1493', borderRadius: '20px' }}>← Back to Home</a>
        </div>
      </nav>

      <div style={{ background: '#000', color: '#fff', minHeight: '100vh' }}>
        <section style={{ background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url("/dungeon/IMG_2616-scaled.jpg") center/cover', padding: '100px 0', textAlign: 'center' }}>
          <h1 style={{ fontSize: '3rem', marginBottom: '20px', color: '#ff1493' }}>🚐 Mobile Dungeon Experience</h1>
          <p style={{ fontSize: '1.4rem', maxWidth: '800px', margin: '0 auto 30px', lineHeight: '1.6' }}>
            I bring my fully equipped professional dungeon directly to you. Complete discretion, professional equipment, and unforgettable experiences.
          </p>
          <a href="#booking" style={{ background: 'linear-gradient(45deg, #ff1493, #ff69b4)', color: 'white', padding: '15px 30px', textDecoration: 'none', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold' }}>Book Session</a>
        </section>

        <section style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', color: '#ff1493' }}>Professional Equipment Gallery</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
              {equipment.map((item, i) => (
                <div key={i} style={{ background: 'linear-gradient(135deg, #111, #222)', borderRadius: '15px', overflow: 'hidden', border: '2px solid #ff1493', cursor: 'pointer' }}
                  onClick={() => setLightbox({ open: true, image: item.image })}>
                  <img src={item.image} alt={item.name} style={{ width: '100%', height: '250px', objectFit: 'cover' }} />
                  <div style={{ padding: '20px' }}>
                    <h3 style={{ color: '#ff1493', marginBottom: '10px' }}>{item.name}</h3>
                    <p style={{ color: '#ccc', fontSize: '14px' }}>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section style={{ background: 'linear-gradient(135deg, #111, #222)', padding: '80px 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '30px', color: '#ff1493' }}>What Makes Our Mobile Dungeon Special</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', marginTop: '50px' }}>
              {[
                { icon: '🚐', title: 'Fully Mobile', desc: 'Custom-built van with professional setup' },
                { icon: '🔒', title: 'Complete Discretion', desc: 'Unmarked vehicle, professional arrival' },
                { icon: '⚡', title: 'Full Power Setup', desc: 'Generator powered for all equipment' },
                { icon: '🧼', title: 'Sanitized Equipment', desc: 'Professional cleaning between sessions' },
                { icon: '🏥', title: 'Safety First', desc: 'Complete safety protocols and aftercare' },
                { icon: '📍', title: 'Your Location', desc: 'Hotel, residence, or private venue' }
              ].map((feature, i) => (
                <div key={i} style={{ textAlign: 'center', padding: '30px 20px', background: 'rgba(255,20,147,0.1)', borderRadius: '15px', border: '2px solid rgba(255,20,147,0.3)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '15px' }}>{feature.icon}</div>
                  <h3 style={{ color: '#ff1493', marginBottom: '10px' }}>{feature.title}</h3>
                  <p style={{ color: '#ccc', fontSize: '14px' }}>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="booking" style={{ padding: '80px 0' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
            <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px', color: '#ff1493' }}>Mobile Dungeon Services & Pricing</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
              {services.map((service, i) => (
                <div key={i} style={{ background: 'linear-gradient(135deg, #111, #222)', padding: '30px', borderRadius: '15px', border: '2px solid #ff1493', cursor: 'pointer' }}
                  onClick={() => setPaymentModal({ open: true, service: 'Mobile Dungeon', price: service.price, selectedOption: service.name })}>
                  <h3 style={{ color: '#ff1493', fontSize: '1.3rem', marginBottom: '15px' }}>{service.name}</h3>
                  <p style={{ color: '#ccc', marginBottom: '20px', lineHeight: '1.5' }}>{service.description}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '1.5rem', color: '#ff1493', fontWeight: 'bold' }}>${service.price}</span>
                    <button style={{ background: 'linear-gradient(45deg, #ff1493, #ff69b4)', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>Book Now</button>
                  </div>
                </div>
              ))}
            </div>
            
            <div style={{ textAlign: 'center', marginTop: '50px', padding: '30px', background: 'rgba(255,20,147,0.1)', borderRadius: '15px', border: '2px solid rgba(255,20,147,0.3)' }}>
              <h3 style={{ color: '#ff1493', marginBottom: '15px' }}>📋 Booking Requirements</h3>
              <ul style={{ listStyle: 'none', padding: 0, color: '#ccc' }}>
                <li>• 48-hour advance booking required</li>
                <li>• Location approval needed for safety</li>
                <li>• 50% deposit required to secure booking</li>
                <li>• Available within 50 miles of base location</li>
                <li>• Travel fees may apply for distant locations</li>
              </ul>
            </div>
          </div>
        </section>
      </div>

      {lightbox.open && (
        <div onClick={() => setLightbox({ open: false, image: '' })} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.95)', zIndex: 10001, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <button onClick={() => setLightbox({ open: false, image: '' })} style={{ position: 'absolute', top: '20px', right: '20px', background: 'rgba(255,20,147,0.8)', border: 'none', color: 'white', fontSize: '30px', width: '50px', height: '50px', borderRadius: '50%', cursor: 'pointer' }}>×</button>
          <img src={lightbox.image} alt="Equipment" style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain', borderRadius: '10px' }} />
        </div>
      )}

      {paymentModal.open && (
        <div onClick={() => setPaymentModal({ open: false, service: '', price: 0, selectedOption: '' })} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10001 }}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: 'white', borderRadius: '20px', padding: '40px', maxWidth: '500px', width: '90%' }}>
            <h2 style={{ color: '#ff1493', textAlign: 'center', marginBottom: '20px' }}>💳 Payment</h2>
            <div style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h3>{paymentModal.selectedOption}</h3>
              <div style={{ fontSize: '2rem', color: '#ff1493', fontWeight: 'bold' }}>${paymentModal.price}</div>
            </div>
            <div style={{ display: 'grid', gap: '15px' }}>
              <button onClick={() => alert(`💳 Redirecting to card payment for $${paymentModal.price}...`)} style={{ background: 'linear-gradient(45deg, #4169E1, #6495ED)', color: 'white', border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer' }}>💳 Pay with Card</button>
              <button onClick={() => alert(`💰 Redirecting to PayPal for $${paymentModal.price}...`)} style={{ background: 'linear-gradient(45deg, #0070ba, #003087)', color: 'white', border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer' }}>💰 PayPal</button>
              <button onClick={() => alert(`₿ Bitcon Payment\n\nSend $${paymentModal.price} worth of Bitcon to:\nbc1q77mna3wnsvfuts4jksua6609l2fzych6vkgejs\n\nAfter sending, contact me with the transaction ID`)} style={{ background: 'linear-gradient(45deg, #f7931a, #ffb347)', color: 'white', border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer' }}>₿ Bitcon</button>
            </div>
            <button onClick={() => setPaymentModal({ open: false, service: '', price: 0, selectedOption: '' })} style={{ background: '#666', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '10px', cursor: 'pointer', width: '100%', marginTop: '20px' }}>Cancel</button>
          </div>
        </div>
      )}
    </>
  )
}