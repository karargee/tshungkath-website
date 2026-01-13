import Head from 'next/head'
import { useState } from 'react'

export default function MobileDungeon() {
  const [paymentModal, setPaymentModal] = useState({ open: false, service: '', price: '', selectedOption: '' })

  const dungeonServices = [
    { name: '1hr Domination Session', price: 300, description: 'Complete restraint and impact play experience' },
    { name: '2hr BDSM Training', price: 500, description: 'Intensive pain training and submission protocols' },
    { name: '4hr Transformation', price: 800, description: 'Full sissy makeover with dungeon experience' },
    { name: 'Overnight Slave Training', price: 1200, description: 'Complete 8-hour slave breaking experience' },
    { name: 'Medical Play Session', price: 400, description: 'Clinical examination and medical domination' },
    { name: 'Milking & Prostate Training', price: 350, description: 'Forced orgasm and prostate massage session' }
  ]

  return (
    <>
      <Head>
        <title>Mobile Dungeon - TshungKath Professional Services</title>
        <meta name="description" content="Professional mobile dungeon services with complete BDSM equipment" />
      </Head>

      {/* Hero Section */}
      <section style={{
        height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url("/dungeon/IMG_2603-scaled.jpg")',
        backgroundSize: 'cover', backgroundPosition: 'center', color: 'white', textAlign: 'center'
      }}>
        <div>
          <h1 style={{ fontSize: '4rem', marginBottom: '20px', textShadow: '3px 3px 6px rgba(0,0,0,0.8)' }}>
            🚐 Mobile Dungeon Experience
          </h1>
          <p style={{ fontSize: '1.5rem', maxWidth: '800px', margin: '0 auto 30px', textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
            I bring my fully equipped dungeon directly to you. Complete discretion, professional equipment, and the ultimate kinky experience at your location.
          </p>
          <a href="#services" style={{
            display: 'inline-block', padding: '20px 40px', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
            color: 'white', textDecoration: 'none', borderRadius: '30px', fontSize: '18px', fontWeight: 'bold'
          }}>Explore Services</a>
        </div>
      </section>

      {/* Equipment Gallery */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #1a1a1a, #2d1b2d)', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '60px', color: '#ff1493' }}>
            🏰 Professional Dungeon Equipment
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            {[
              { img: '/dungeon/IMG_2603-scaled.jpg', title: '⛓️ Restraint Systems', desc: 'St. Andrew\'s cross, suspension points, bondage table for complete immobilization' },
              { img: '/dungeon/IMG_2608-scaled.jpg', title: '🔥 Impact Play Arsenal', desc: 'Professional floggers, paddles, whips, canes, and crops for proper discipline' },
              { img: '/dungeon/IMG_2616-scaled.jpg', title: '🎭 Transformation Station', desc: 'Complete sissy makeover setup with makeup, wigs, lingerie, and heels' },
              { img: '/dungeon/Milking-Table-1.jpg', title: '🥛 Milking Equipment', desc: 'Specialized milking table and prostate massage equipment for forced orgasms' },
              { img: '/dungeon/Sybian-on-bench.jpg', title: '🎪 Sybian Machine', desc: 'High-powered vibrating machine for intense orgasm control and edging' },
              { img: '/dungeon/image-1-1.jpg', title: '💉 Medical Play Setup', desc: 'Clinical examination table, speculums, sounds, catheters for medical scenes' }
            ].map((item, i) => (
              <div key={i} style={{
                background: 'rgba(255,255,255,0.1)', borderRadius: '15px', overflow: 'hidden',
                border: '2px solid #ff1493', transition: 'transform 0.3s ease'
              }}>
                <img src={item.img} alt={item.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
                <div style={{ padding: '20px' }}>
                  <h3 style={{ color: '#ff1493', marginBottom: '10px' }}>{item.title}</h3>
                  <p style={{ color: '#ccc', lineHeight: '1.6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="services" style={{ padding: '100px 0', background: '#f8f9fa' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '60px', color: '#ff1493' }}>
            💰 Mobile Dungeon Services & Rates
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}>
            {dungeonServices.map((service, i) => (
              <div key={i} style={{
                background: 'white', padding: '30px', borderRadius: '15px', border: '2px solid #ff1493',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)', transition: 'transform 0.3s ease'
              }}>
                <h3 style={{ color: '#ff1493', fontSize: '1.5rem', marginBottom: '15px' }}>{service.name}</h3>
                <div style={{ fontSize: '2rem', color: '#ff1493', fontWeight: 'bold', marginBottom: '15px' }}>
                  ${service.price}
                </div>
                <p style={{ color: '#666', marginBottom: '20px', lineHeight: '1.6' }}>{service.description}</p>
                <button onClick={() => setPaymentModal({ 
                  open: true, service: service.name, price: service.price, selectedOption: service.name 
                })} style={{
                  width: '100%', padding: '15px', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
                  color: 'white', border: 'none', borderRadius: '10px', fontSize: '16px',
                  cursor: 'pointer', fontWeight: 'bold'
                }}>
                  Book This Session 💋
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section style={{ padding: '100px 0', background: 'linear-gradient(135deg, #2d1b2d, #1a1a1a)', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
          <h2 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '60px', color: '#ff1493' }}>
            🔥 What to Expect
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
            <div>
              <h3 style={{ color: '#ff69b4', marginBottom: '20px' }}>🚐 Arrival & Setup</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,20,147,0.3)' }}>
                  🏠 Discreet unmarked van arrival at your location
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,20,147,0.3)' }}>
                  ⚙️ Professional equipment setup in your space
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,20,147,0.3)' }}>
                  🧼 Complete sanitization of all equipment
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,20,147,0.3)' }}>
                  🔒 Privacy screens and soundproofing setup
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#ff69b4', marginBottom: '20px' }}>⛓️ Session Experience</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,20,147,0.3)' }}>
                  🗣️ Pre-session consultation and limit discussion
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,20,147,0.3)' }}>
                  🎯 Customized scene based on your fantasies
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,20,147,0.3)' }}>
                  🔥 Intense domination with professional equipment
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,20,147,0.3)' }}>
                  💆 Aftercare and emotional support included
                </li>
              </ul>
            </div>
            <div>
              <h3 style={{ color: '#ff69b4', marginBottom: '20px' }}>🛡️ Safety & Discretion</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,20,147,0.3)' }}>
                  🚨 Safe words always respected and enforced
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,20,147,0.3)' }}>
                  🏥 First aid kit and emergency protocols ready
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,20,147,0.3)' }}>
                  🤐 Complete confidentiality and discretion guaranteed
                </li>
                <li style={{ padding: '8px 0', borderBottom: '1px solid rgba(255,20,147,0.3)' }}>
                  📱 48-hour advance booking required
                </li>
              </ul>
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
                const btcAddress = 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh'
                alert(`₿ Bitcoin Payment\\n\\nSend $${paymentModal.price} worth of Bitcoin to:\\n${btcAddress}\\n\\nThen contact me with transaction ID.`)
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

      {/* Back to Home */}
      <div style={{ textAlign: 'center', padding: '40px 0', background: '#000' }}>
        <a href="/" style={{
          display: 'inline-block', padding: '15px 30px', background: 'linear-gradient(45deg, #ff1493, #ff69b4)',
          color: 'white', textDecoration: 'none', borderRadius: '25px', fontSize: '16px', fontWeight: 'bold'
        }}>← Back to Main Site</a>
      </div>
    </>
  )
}