import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function PremiumPackages() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
      <Head>
        <title>Premium Packages - TshungKath Professional Services</title>
        <meta name="description" content="Exclusive premium packages with VIP treatment and comprehensive transformation programs" />
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <motion.div 
        className="service-detail-page"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <header className="service-header">
          <div className="container">
            <Link href="/" className="back-btn">← Back to Home</Link>
            <motion.div 
              className="header-content"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <div className="service-badge">💎 EXCLUSIVE PACKAGES</div>
              <h1>Premium Transformation Packages</h1>
              <p className="header-subtitle">Comprehensive kink transformation programs with VIP treatment and exclusive member benefits</p>
            </motion.div>
          </div>
        </header>

        <nav className="service-nav">
          <div className="container">
            <div className="nav-tabs">
              {[
                { id: 'overview', label: '📋 Overview' },
                { id: 'packages', label: '📦 Packages' },
                { id: 'faq', label: '❓ FAQ' }
              ].map(tab => (
                <button
                  key={tab.id}
                  className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <main className="service-content">
          <div className="container">
            {activeTab === 'overview' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <section className="service-overview">
                  <h2>What to Expect from Premium Packages</h2>
                  <div className="expectation-grid">
                    <motion.div className="expectation-card" whileHover={{ scale: 1.02, y: -5 }}>
                      <h3>🌟 VIP Treatment</h3>
                      <ul>
                        <li>Priority scheduling and 24/7 access</li>
                        <li>Dedicated personal domme and consultant</li>
                        <li>Exclusive member-only content and resources</li>
                        <li>VIP dungeon access and premium equipment</li>
                        <li>Concierge-level service and support</li>
                        <li>Private member community access</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div className="expectation-card" whileHover={{ scale: 1.02, y: -5 }}>
                      <h3>📚 Comprehensive Program</h3>
                      <ul>
                        <li>3-12 month complete transformation journey</li>
                        <li>Weekly intensive one-on-one sessions</li>
                        <li>Group workshops and kinky seminars</li>
                        <li>Peer networking with other subs and sissies</li>
                        <li>Ongoing progress monitoring and adjustment</li>
                        <li>Milestone celebrations and rewards</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div className="expectation-card" whileHover={{ scale: 1.02, y: -5 }}>
                      <h3>🎓 Advanced Kink Training</h3>
                      <ul>
                        <li>Master-level BDSM and fetish development</li>
                        <li>Advanced sissy training and feminization</li>
                        <li>Specialized kink and fetish exploration</li>
                        <li>Advanced communication and submission skills</li>
                        <li>Professional kink lifestyle integration</li>
                        <li>Certification in specialized areas</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div className="expectation-card" whileHover={{ scale: 1.02, y: -5 }}>
                      <h3>🎁 Exclusive Bonuses</h3>
                      <ul>
                        <li>Premium resource library and video content</li>
                        <li>Monthly group coaching and play sessions</li>
                        <li>Exclusive kinky event invitations</li>
                        <li>Lifetime alumni community membership</li>
                        <li>Continuing education and advanced workshops</li>
                        <li>Personal wardrobe and toy consultations</li>
                      </ul>
                    </motion.div>
                  </div>
                </section>

                <section className="features-section">
                  <h2>Why Choose Premium Transformation Packages?</h2>
                  <div className="features-grid">
                    <div className="feature-item">
                      <div className="feature-icon">🔒</div>
                      <h4>Complete Discretion</h4>
                      <p>VIP-level privacy and confidentiality with exclusive member protections</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">⭐</div>
                      <h4>Expert Transformation</h4>
                      <p>Comprehensive programs designed by experienced dommes and kink professionals</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">🌍</div>
                      <h4>Exclusive Community</h4>
                      <p>Access to private member community and exclusive kinky events</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">💎</div>
                      <h4>Luxury Experience</h4>
                      <p>Premium facilities, equipment, and concierge-level service throughout</p>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'packages' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <section className="package-options">
                  <h2>📦 Available Transformation Packages</h2>
                  <div className="package-grid">
                    <motion.div className="package-card" whileHover={{ scale: 1.02 }}>
                      <h3>🥉 Platinum Package</h3>
                      <div className="package-duration">3 Months</div>
                      <div className="package-features">What's Included:</div>
                      <ul>
                        <li>12 Online kinky training sessions</li>
                        <li>4 In-person dungeon sessions</li>
                        <li>Weekly group sissy training calls</li>
                        <li>Premium kink resource library access</li>
                        <li>Email and chat support</li>
                        <li>Basic wardrobe consultation</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div className="package-card featured" whileHover={{ scale: 1.02 }}>
                      <div className="popular-badge">Most Popular</div>
                      <h3>💎 Diamond Package</h3>
                      <div className="package-duration">6 Months</div>
                      <div className="package-features">What's Included:</div>
                      <ul>
                        <li>24 Online intensive training sessions</li>
                        <li>8 In-person dungeon experiences</li>
                        <li>Bi-weekly group coaching calls</li>
                        <li>Full premium resource access</li>
                        <li>24/7 domme support and guidance</li>
                        <li>Exclusive kinky networking events</li>
                        <li>Advanced kink certification program</li>
                        <li>Complete wardrobe transformation</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div className="package-card" whileHover={{ scale: 1.02 }}>
                      <h3>👑 Elite Package</h3>
                      <div className="package-duration">12 Months</div>
                      <div className="package-features">What's Included:</div>
                      <ul>
                        <li>Unlimited online training sessions</li>
                        <li>16 In-person dungeon experiences</li>
                        <li>Weekly group coaching calls</li>
                        <li>VIP resource and content access</li>
                        <li>Concierge support and assistance</li>
                        <li>Exclusive VIP events and parties</li>
                        <li>Master-level kink certification</li>
                        <li>Lifetime alumni community access</li>
                        <li>Personal lifestyle integration coaching</li>
                      </ul>
                    </motion.div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'faq' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <section className="faq-section">
                  <h2>Frequently Asked Questions</h2>
                  <div className="faq-grid">
                    {[
                      {
                        q: 'What makes these packages different from individual sessions?',
                        a: 'Premium packages offer comprehensive transformation programs with ongoing support, exclusive community access, and significant cost savings compared to individual sessions.'
                      },
                      {
                        q: 'Can I customize my package based on my specific kinks?',
                        a: 'Absolutely! All packages are customized to your specific fetishes, limits, and transformation goals. We create a personalized program just for you.'
                      },
                      {
                        q: 'What kind of community access do I get?',
                        a: 'Premium members get access to our private online community, exclusive events, group sessions, and networking opportunities with other members.'
                      },
                      {
                        q: 'How intensive are the transformation programs?',
                        a: 'Programs are designed to fit your schedule and comfort level. We can adjust intensity based on your availability and how quickly you want to progress.'
                      },
                      {
                        q: 'What if I want to upgrade or change my package?',
                        a: 'You can upgrade your package at any time. We\'ll credit your current investment toward the higher tier and adjust your program accordingly.'
                      },
                      {
                        q: 'Is there ongoing support after my package ends?',
                        a: 'Yes! All premium package members get lifetime access to our alumni community and ongoing support. You\'re part of our family forever.'
                      }
                    ].map((faq, i) => (
                      <motion.div 
                        key={i}
                        className="faq-item"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <h4>{faq.q}</h4>
                        <p>{faq.a}</p>
                      </motion.div>
                    ))}
                  </div>
                </section>
              </motion.div>
            )}

            <motion.section 
              className="booking-section"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="booking-cta">
                <h2>🔥 Ready for Complete Transformation?</h2>
                <p>Join our exclusive community and begin your journey to becoming your true kinky self</p>
                <motion.button 
                  onClick={() => window.location.href = '/#booking'}
                  className="cta-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Choose Your Transformation Package
                </motion.button>
                <div className="booking-guarantee">
                  <span>🔒 100% Discretion Guaranteed</span>
                  <span>💎 VIP Treatment</span>
                  <span>🎆 Lifetime Support</span>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
      </motion.div>

      <style jsx>{`
        .service-detail-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%);
          color: #333;
        }
        
        .service-header {
          padding: 2rem 0 1rem;
          background: rgba(0,0,0,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .header-content {
          text-align: center;
        }
        
        .service-badge {
          display: inline-block;
          background: linear-gradient(45deg, #ff1493, #ff69b4);
          color: white;
          padding: 8px 20px;
          border-radius: 25px;
          font-size: 0.9rem;
          font-weight: 600;
          margin-bottom: 1rem;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        
        .header-content h1 {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(45deg, #333, #555);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .header-subtitle {
          font-size: 1.2rem;
          opacity: 0.8;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .service-nav {
          background: rgba(0,0,0,0.1);
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .nav-tabs {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        
        .nav-tab {
          background: transparent;
          border: 2px solid rgba(255,20,147,0.3);
          color: #333;
          padding: 10px 20px;
          border-radius: 25px;
          cursor: pointer;
          transition: all 0.3s ease;
          font-weight: 500;
        }
        
        .nav-tab:hover {
          border-color: #ff1493;
          background: rgba(255,20,147,0.1);
        }
        
        .nav-tab.active {
          background: linear-gradient(45deg, #ff1493, #ff69b4);
          border-color: #ff1493;
          color: white;
        }
        
        .back-btn {
          color: #333;
          text-decoration: none;
          font-size: 1.1rem;
          margin-bottom: 2rem;
          display: inline-block;
          opacity: 0.8;
          transition: opacity 0.3s ease;
        }
        
        .back-btn:hover {
          opacity: 1;
          color: #ff1493;
        }
        
        .service-content {
          padding: 3rem 0;
        }
        
        .expectation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .expectation-card {
          background: rgba(255,255,255,0.8);
          padding: 2rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          transition: all 0.3s ease;
        }
        
        .expectation-card:hover {
          background: rgba(255,255,255,0.9);
          border-color: rgba(255,20,147,0.5);
        }
        
        .expectation-card h3 {
          color: #ff1493;
          margin-bottom: 1rem;
          font-size: 1.3rem;
        }
        
        .expectation-card ul {
          list-style: none;
          padding: 0;
        }
        
        .expectation-card li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,20,147,0.1);
          position: relative;
          padding-left: 20px;
        }
        
        .expectation-card li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #ff1493;
          font-weight: bold;
        }
        
        .features-section {
          margin: 4rem 0;
        }
        
        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .feature-item {
          text-align: center;
          padding: 2rem;
          background: rgba(255,255,255,0.8);
          border-radius: 15px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .feature-icon {
          font-size: 3rem;
          margin-bottom: 1rem;
          display: block;
        }
        
        .feature-item h4 {
          color: #ff1493;
          margin-bottom: 1rem;
        }
        
        .package-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .package-card {
          background: rgba(255,255,255,0.9);
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.3);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
          position: relative;
          transition: all 0.3s ease;
        }
        
        .package-card.featured {
          border: 3px solid #ffd700;
          background: rgba(255,215,0,0.1);
          transform: scale(1.05);
        }
        
        .popular-badge {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: #ffd700;
          color: #333;
          padding: 5px 15px;
          border-radius: 15px;
          font-size: 0.8rem;
          font-weight: bold;
        }
        
        .package-duration {
          background: #ff1493;
          color: white;
          padding: 0.5rem 1rem;
          border-radius: 20px;
          display: inline-block;
          margin: 1rem 0;
          font-weight: bold;
        }
        
        .package-features {
          font-weight: 600;
          color: #ff1493;
          margin-bottom: 1rem;
          font-size: 1.1rem;
        }
        
        .package-card ul {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
          text-align: left;
        }
        
        .package-card li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,20,147,0.1);
          position: relative;
          padding-left: 20px;
        }
        
        .package-card li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #ff1493;
          font-weight: bold;
        }
        
        .pricing-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .pricing-card {
          background: rgba(255,255,255,0.9);
          padding: 2rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .pricing-card h3 {
          color: #ff1493;
          margin-bottom: 1rem;
        }
        
        .pricing-card ul {
          list-style: none;
          padding: 0;
        }
        
        .pricing-card li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,20,147,0.1);
          position: relative;
          padding-left: 20px;
        }
        
        .pricing-card li:before {
          content: '✓';
          position: absolute;
          left: 0;
          color: #ff1493;
          font-weight: bold;
        }
        
        .faq-grid {
          display: grid;
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .faq-item {
          background: rgba(255,255,255,0.9);
          padding: 2rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .faq-item h4 {
          color: #ff1493;
          margin-bottom: 1rem;
        }
        
        .booking-cta {
          text-align: center;
          background: rgba(255,255,255,0.9);
          padding: 3rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.1);
        }
        
        .cta-btn {
          background: linear-gradient(45deg, #ff1493, #ff69b4);
          color: white;
          border: none;
          padding: 1rem 2rem;
          border-radius: 50px;
          font-size: 1.2rem;
          cursor: pointer;
          box-shadow: 0 5px 15px rgba(255,20,147,0.3);
          margin: 1rem 0;
        }
        
        .booking-guarantee {
          display: flex;
          justify-content: center;
          gap: 2rem;
          margin-top: 2rem;
          flex-wrap: wrap;
        }
        
        .booking-guarantee span {
          font-size: 0.9rem;
          opacity: 0.8;
        }
        
        @media (max-width: 768px) {
          .header-content h1 {
            font-size: 2rem;
          }
          
          .expectation-grid {
            grid-template-columns: 1fr;
          }
          
          .package-grid {
            grid-template-columns: 1fr;
          }
          
          .booking-guarantee {
            flex-direction: column;
            gap: 1rem;
          }
        }
      `}</style>
    </>
  )
}