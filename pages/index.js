import Head from 'next/head'
import { useState } from 'react'

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <Head>
        <title>TshungKath - Professional Companion Services</title>
        <meta name="description" content="Professional personal companion and social services" />
      </Head>

      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">TshungKath</h1>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
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
            <div className="service-card">
              <h3>🔥 Online Domination</h3>
              <p>Intense cam sessions where I control every move you make</p>
            </div>
            <div className="service-card">
              <h3>👗 Sissy Transformation</h3>
              <p>Turn you into my perfect little slut through complete feminization</p>
            </div>
            <div className="service-card">
              <h3>⛓️ BDSM Sessions</h3>
              <p>Real domination with toys, restraints, and punishment</p>
            </div>
          </div>
        </div>
      </section>

      {/* Dungeon */}
      <section className="dungeon">
        <div className="container">
          <h2>🏰 My Private Dungeon</h2>
          <div className="dungeon-grid">
            <div className="dungeon-card">
              <div className="dungeon-placeholder">⛓️</div>
              <h3>Restraint Station</h3>
              <p>Professional bondage equipment</p>
            </div>
            <div className="dungeon-card">
              <div className="dungeon-placeholder">🔥</div>
              <h3>Impact Play Area</h3>
              <p>Paddles, floggers, whips, and canes</p>
            </div>
            <div className="dungeon-card">
              <div className="dungeon-placeholder">🎭</div>
              <h3>Transformation Chamber</h3>
              <p>Full sissy makeover station</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="contact">
        <div className="container">
          <h2>💋 Get In Touch</h2>
          <p>📧 kathtri57@gmail.com</p>
          <p>🔥 Available 24/7 for your submission</p>
        </div>
      </section>

      <style jsx>{`
        .navbar { position: fixed; top: 0; width: 100%; background: rgba(0,0,0,0.9); z-index: 1000; padding: 15px 0; }
        .nav-container { display: flex; justify-content: space-between; align-items: center; max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .logo { color: #ff1493; font-size: 1.8rem; font-weight: bold; margin: 0; }
        .mobile-menu-btn { background: #ff1493; border: none; color: white; padding: 8px 12px; border-radius: 5px; cursor: pointer; }
        .hero { height: 100vh; display: flex; align-items: center; justify-content: center; text-align: center; color: white; background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab); }
        .hero h1 { font-size: 3rem; margin-bottom: 20px; }
        .hero p { font-size: 1.2rem; margin-bottom: 30px; max-width: 600px; }
        .cta-button { display: inline-block; padding: 15px 30px; background: linear-gradient(45deg, #ff1493, #ff69b4); color: white; text-decoration: none; border-radius: 25px; }
        .services, .dungeon, .contact { padding: 80px 0; }
        .services { background: white; }
        .dungeon { background: linear-gradient(135deg, #1a1a1a, #2d1b2d); color: white; }
        .contact { background: linear-gradient(135deg, #1a1a2e, #16213e); color: white; text-align: center; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .services h2, .dungeon h2, .contact h2 { text-align: center; font-size: 2.5rem; margin-bottom: 50px; }
        .services h2 { color: #ff1493; }
        .dungeon h2, .contact h2 { color: #ff1493; }
        .services-grid, .dungeon-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px; }
        .service-card, .dungeon-card { background: white; padding: 30px; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); border: 2px solid #ff1493; }
        .dungeon-card { background: rgba(255,255,255,0.1); color: white; }
        .service-card h3, .dungeon-card h3 { color: #ff1493; margin-bottom: 15px; }
        .dungeon-placeholder { width: 100%; height: 150px; display: flex; align-items: center; justify-content: center; font-size: 4rem; background: rgba(139,0,139,0.3); border-radius: 10px; margin-bottom: 15px; }
        .contact p { font-size: 1.2rem; margin: 10px 0; }
        @media (max-width: 768px) {
          .hero h1 { font-size: 2rem; }
          .services-grid, .dungeon-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}
