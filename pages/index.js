import Head from 'next/head'
import { useEffect, useState } from 'react'

export default function Home() {
  const [paymentModal, setPaymentModal] = useState({ open: false, service: '', price: 0, selectedOption: '' })
  
  useEffect(() => {
    // Mobile menu toggle
    window.toggleMobileMenu = function() {
      const nav = document.getElementById('mobileNav');
      const btn = document.querySelector('.mobile-menu-btn');
      
      if (nav) {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        btn.textContent = nav.style.display === 'block' ? '✕' : '☰';
      }
    };

    // Gallery functions
    window.openGalleryFolder = function() {
      if (confirm('🔞 Age Verification Required\\n\\nYou must be 18+ to view this content.\\n\\nClick OK if you are 18+')) {
        document.getElementById('galleryContent').classList.remove('hidden');
      }
    };

    window.openLightbox = function(imageSrc) {
      const lightbox = document.getElementById('lightbox');
      const lightboxImg = document.getElementById('lightbox-img');
      
      if (lightbox && lightboxImg) {
        lightboxImg.src = imageSrc;
        lightbox.style.display = 'flex';
      }
    };

    window.closeLightbox = function() {
      const lightbox = document.getElementById('lightbox');
      if (lightbox) lightbox.style.display = 'none';
    };
  }, []);

  return (
    <>
      <Head>
        <title>Kathy - Your Kinky Trans Dominatrix & Sissy Trainer</title>
        <meta name="description" content="Kinky trans mistress specializing in BDSM, sissy training, and domination sessions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <div className="social-top">
        <div className="container">
          <div className="social-links">
            <a href="https://twitter.com/tshungkatherine" target="_blank" rel="noopener noreferrer">🐦</a>
            <a href="https://snapchat.com/add/tshungkathyb" target="_blank" rel="noopener noreferrer">👻</a>
            <a href="https://telegram.me/tshungkathy10" target="_blank" rel="noopener noreferrer">📱</a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="left-section">
            <h1 className="logo">TshungKath</h1>
            <button className="mobile-menu-btn" onClick={() => window.toggleMobileMenu()}>☰</button>
          </div>
          <div className="nav-wrapper" id="mobileNav">
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="/mobile-dungeon">🏰 Dungeon</a></li>
              <li><a href="#booking">Book Now</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="main-title">TshungKath</h1>
          <p>just imagine meeting with the most elegant,dominant,hung trans..</p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Professional Service Rates</h2>
          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="service-badge">💻 VIRTUAL</div>
              <h3>Online Sessions</h3>
              <div className="price">$60 - $180</div>
              <ul>
                <li onClick={() => setPaymentModal({ open: true, service: 'Online Sessions', price: 60, selectedOption: 'JOI Session (15min)' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>JOI Session (15min) - $60</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Online Sessions', price: 75, selectedOption: 'CEI Training (20min)' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>CEI Training (20min) - $75</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Online Sessions', price: 100, selectedOption: 'Humiliation Session (30min)' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Humiliation Session (30min) - $100</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

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
              
              <button onClick={() => {
                const cashappHandle = '$kathkarv'
                const modal = document.createElement('div')
                modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 10002;'
                modal.innerHTML = `
                  <div style="background: white; padding: 30px; border-radius: 15px; max-width: 500px; width: 90%; text-align: center;">
                    <h3 style="color: #00d632; margin-bottom: 20px;">💵 CashApp Payment</h3>
                    <p style="color: #333; margin-bottom: 15px;">Send <strong>$${paymentModal.price}</strong> to:</p>
                    <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0; border: 2px solid #00d632;">
                      <div style="color: #333; font-family: monospace; font-size: 18px; font-weight: bold; margin-bottom: 10px;">${cashappHandle}</div>
                      <button onclick="navigator.clipboard.writeText('${cashappHandle}').then(() => alert('CashApp handle copied to clipboard!')).catch(() => alert('Please copy manually: ${cashappHandle}'))" style="background: #00d632; color: white; border: none; padding: 8px 16px; border-radius: 5px; cursor: pointer; font-size: 14px;">📋 Copy Handle</button>
                    </div>
                    <p style="color: #666; font-size: 14px; margin-bottom: 20px;">After sending, contact me with confirmation</p>
                    <button onclick="document.body.removeChild(this.closest('div'))" style="background: #666; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer;">Close</button>
                  </div>
                `
                document.body.appendChild(modal)
                modal.onclick = (e) => { if (e.target === modal) document.body.removeChild(modal) }
              }} style={{
                background: 'linear-gradient(45deg, #00d632, #00b82f)', color: 'white',
                border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'
              }}>💵 CashApp</button>
              
              <button onClick={() => {
                const btcAddress = 'bc1q6k7lmj5jruuk0tq28c03pc5ae2jv0wnthdpxpn'
                const modal = document.createElement('div')
                modal.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); display: flex; align-items: center; justify-content: center; z-index: 10002;'
                modal.innerHTML = `
                  <div style="background: white; padding: 30px; border-radius: 15px; max-width: 500px; width: 90%; text-align: center;">
                    <h3 style="color: #f7931a; margin-bottom: 20px;">₿ Bitcoin Payment</h3>
                    <p style="color: #333; margin-bottom: 15px;">Send <strong>$${paymentModal.price}</strong> worth of Bitcoin to:</p>
                    <div style="background: #f5f5f5; padding: 15px; border-radius: 8px; margin: 15px 0; border: 2px solid #f7931a;">
                      <div style="color: #333; font-family: monospace; font-size: 14px; word-break: break-all; margin-bottom: 10px;">${btcAddress}</div>
                      <button onclick="navigator.clipboard.writeText('${btcAddress}').then(() => alert('Bitcoin address copied to clipboard!')).catch(() => alert('Please copy manually: ${btcAddress}'))" style="background: #f7931a; color: white; border: none; padding: 8px 16px; border-radius: 5px; cursor: pointer; font-size: 14px;">📋 Copy Address</button>
                    </div>
                    <p style="color: #666; font-size: 14px; margin-bottom: 20px;">After sending, contact me with the transaction ID</p>
                    <button onclick="document.body.removeChild(this.closest('div'))" style="background: #666; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer;">Close</button>
                  </div>
                `
                document.body.appendChild(modal)
                modal.onclick = (e) => { if (e.target === modal) document.body.removeChild(modal) }
              }} style={{
                background: 'linear-gradient(45deg, #f7931a, #ffb347)', color: 'white',
                border: 'none', padding: '15px', borderRadius: '10px', fontSize: '16px', cursor: 'pointer'
              }}>₿ Bitcoin</button>
            </div>
            
            <button onClick={() => setPaymentModal({ open: false, service: '', price: 0, selectedOption: '' })} style={{
              background: '#666', color: 'white', border: 'none', padding: '10px 20px',
              borderRadius: '10px', cursor: 'pointer', width: '100%', marginTop: '20px'
            }}>Cancel</button>
          </div>
        </div>
      )}

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #000; color: #fff; line-height: 1.6; }
        
        .social-top { background: #111; padding: 0.5rem 0; text-align: center; }
        .social-links a { margin: 0 10px; font-size: 1.2rem; text-decoration: none; }
        
        .navbar { background: #000; padding: 1rem 0; border-bottom: 2px solid #ff1493; }
        .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 1rem; }
        .logo { color: #ff1493; font-size: 1.8rem; font-weight: bold; }
        .nav-menu { display: flex; list-style: none; gap: 1.5rem; }
        .nav-menu a { color: #fff; text-decoration: none; padding: 0.5rem 1rem; border-radius: 20px; }
        
        .hero { 
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/20250818_053853.jpg') center/cover;
          padding: 8rem 0; 
          text-align: center; 
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .hero-content h1 { font-size: 4rem; margin-bottom: 1rem; color: #fff; }
        .hero-content p { font-size: 1.4rem; margin-bottom: 2rem; }
        .cta-button { background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; padding: 1.2rem 2.5rem; text-decoration: none; border-radius: 30px; display: inline-block; font-weight: bold; }
        
        .pricing { padding: 5rem 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        h2 { font-size: 3rem; text-align: center; margin-bottom: 4rem; color: #ff1493; }
        
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; }
        .pricing-card { background: linear-gradient(135deg, #111, #222); padding: 2.5rem; border-radius: 20px; border: 2px solid #ff1493; position: relative; }
        .service-badge { position: absolute; top: -15px; left: 25px; background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; padding: 8px 20px; border-radius: 20px; font-size: 0.9rem; font-weight: bold; }
        .price { font-size: 2.5rem; color: #ff1493; font-weight: bold; margin: 1.5rem 0; text-align: center; }
      `}</style>
    </>
  )
}