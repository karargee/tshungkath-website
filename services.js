import Head from 'next/head'
import { useState } from 'react'

export default function Services() {
  const [paymentModal, setPaymentModal] = useState({ open: false, service: '', price: 0, selectedOption: '' })

  const services = {
    'Online Sessions': {
      icon: '💻',
      description: 'HD cam-to-cam sessions with complete control',
      details: [
        'HD cam-to-cam sessions with full audio control',
        'JOI (Jerk Off Instructions) - I control when and how you touch yourself',
        'CEI (Cum Eating Instructions) - You\'ll swallow every drop for me',
        'Humiliation and degradation - I\'ll break down your ego completely',
        'Orgasm control and denial - Beg me for permission to cum',
        'Tasks and assignments between sessions to keep you obedient',
        'Role-play scenarios: boss/employee, teacher/student, mommy/baby'
      ],
      pricing: [
        { name: 'JOI Session (15min)', price: 60 },
        { name: 'CEI Training (20min)', price: 75 },
        { name: 'Humiliation Session (30min)', price: 100 },
        { name: 'Orgasm Control (45min)', price: 140 },
        { name: 'Role-play Session (60min)', price: 180 }
      ]
    },
    'Sissy Training': {
      icon: '👗',
      description: 'Complete feminization and transformation programs',
      details: [
        'Makeup tutorials - Learn to look like a professional sissy',
        'Walking in heels training - Grace and femininity',
        'Voice feminization coaching - Sound like a real woman',
        'Outfit selection and styling guidance',
        'Nail care and beauty routines',
        'Feminine mannerisms and behavior training',
        'Photo shoots to capture your transformation',
        'Complete feminization programs available'
      ],
      pricing: [
        { name: 'Makeup Tutorial', price: 80 },
        { name: 'Walking in Heels Training', price: 60 },
        { name: 'Voice Feminization', price: 90 },
        { name: 'Outfit Styling Session', price: 70 },
        { name: 'Complete Transformation', price: 300 }
      ]
    },
    'In-Person Sessions': {
      icon: '🏛️',
      description: 'Luxury private meetings for ultimate experiences',
      details: [
        'Private luxury meetings in discreet locations',
        'Professional BDSM equipment and restraints',
        'Complete domination and submission experiences',
        'Sissy training with real-time guidance',
        'Medical play and examination scenarios',
        'Role-play scenarios in private setting',
        'Extended sessions and overnight experiences available',
        'Worldwide travel available for elite clients'
      ],
      pricing: [
        { name: 'Basic Meeting (2hr)', price: 700 },
        { name: 'Extended Session (4hr)', price: 1200 },
        { name: 'Overnight Experience (8hr)', price: 2000 },
        { name: 'Weekend Package (48hr)', price: 5000 }
      ]
    },
    'Dungeon Play': {
      icon: '🏰',
      description: 'Professional BDSM dungeon with full equipment',
      details: [
        'Professional BDSM dungeon with full equipment',
        'St. Andrew\'s cross, suspension points, bondage table',
        'Impact play equipment: floggers, paddles, whips, canes',
        'Chastity devices and orgasm control equipment',
        'Medical play setup: examination table, speculums, sounds',
        'Electro-stimulation and sensation play',
        'Complete safety protocols and aftercare',
        'Discreet mobile dungeon service available'
      ],
      pricing: [
        { name: 'Basic BDSM Session (2hr)', price: 800 },
        { name: 'Advanced Bondage (3hr)', price: 1200 },
        { name: 'Medical Play Session (2hr)', price: 900 },
        { name: 'Overnight Dungeon (8hr)', price: 2500 }
      ]
    }
  }

  return (
    <>
      <Head>
        <title>Services - TshungKath Professional Services</title>
        <meta name="description" content="Complete list of professional companion services" />
      </Head>

      <nav style={{
        background: '#000', padding: '1rem 0', borderBottom: '2px solid #ff1493'
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', display: 'flex', 
          justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem'
        }}>
          <a href="/" style={{ color: '#ff1493', fontSize: '1.8rem', fontWeight: 'bold', textDecoration: 'none' }}>
            TshungKath
          </a>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', padding: '8px 16px', 
            background: '#ff1493', borderRadius: '20px' }}>← Back to Home</a>
        </div>
      </nav>

      <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '50px 0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '50px', color: '#ff1493' }}>
            Professional Services
          </h1>

          {Object.entries(services).map(([serviceName, service]) => (
            <div key={serviceName} style={{
              background: 'linear-gradient(135deg, #111, #222)', 
              padding: '40px', borderRadius: '20px', marginBottom: '40px',
              border: '2px solid #ff1493'
            }}>
              <h2 style={{ color: '#ff1493', fontSize: '2rem', marginBottom: '20px' }}>
                {service.icon} {serviceName}
              </h2>
              <p style={{ fontSize: '1.2rem', marginBottom: '30px', color: '#ccc' }}>
                {service.description}
              </p>

              <h3 style={{ color: '#ff69b4', marginBottom: '20px' }}>What to Expect:</h3>
              <ul style={{ marginBottom: '30px', lineHeight: '1.8' }}>
                {service.details.map((detail, i) => (
                  <li key={i} style={{ marginBottom: '10px' }}>• {detail}</li>
                ))}
              </ul>

              <h3 style={{ color: '#ff69b4', marginBottom: '20px' }}>Pricing:</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '15px' }}>
                {service.pricing.map((item, i) => (
                  <div key={i} 
                    onClick={() => setPaymentModal({ open: true, service: serviceName, price: item.price, selectedOption: item.name })}
                    style={{
                      background: '#333', padding: '20px', borderRadius: '10px', cursor: 'pointer',
                      border: '2px solid #ff1493', transition: 'all 0.3s',
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                    }}
                    onMouseEnter={(e) => e.target.style.background = '#444'}
                    onMouseLeave={(e) => e.target.style.background = '#333'}
                  >
                    <span>{item.name}</span>
                    <span style={{ color: '#ff1493', fontWeight: 'bold', fontSize: '1.2rem' }}>${item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {paymentModal.open && (
        <div onClick={() => setPaymentModal({ open: false, service: '', price: 0, selectedOption: '' })} style={{
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
                ${paymentModal.price}
              </div>
            </div>
            
            <div style={{ display: 'grid', gap: '15px' }}>
              <button onClick={() => alert(`💳 Redirecting to card payment for $${paymentModal.price}...`)} style={{
                background: 'linear-gradient(45deg, #4169E1, #6495ED)', color: 'white',
                border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'
              }}>💳 Pay with Card</button>
              
              <button onClick={() => alert(`💰 Redirecting to PayPal for $${paymentModal.price}...`)} style={{
                background: 'linear-gradient(45deg, #0070ba, #003087)', color: 'white',
                border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'
              }}>💰 PayPal</button>
              
              <button onClick={() => {
                const btcAddress = 'bc1q77mna3wnsvfuts4jksua6609l2fzych6vkgejs'
                alert(`₿ Bitcon Payment\n\nSend $${paymentModal.price} worth of Bitcon to:\n${btcAddress}\n\nAfter sending, contact me with the transaction ID`)
              }} style={{
                background: 'linear-gradient(45deg, #f7931a, #ffb347)', color: 'white',
                border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'
              }}>₿ Bitcon</button>
            </div>
            
            <button onClick={() => setPaymentModal({ open: false, service: '', price: 0, selectedOption: '' })} style={{
              background: '#666', color: 'white', border: 'none', padding: '10px 20px',
              borderRadius: '10px', cursor: 'pointer', width: '100%', marginTop: '20px'
            }}>Cancel</button>
          </div>
        </div>
      )}
    </>
  )
}