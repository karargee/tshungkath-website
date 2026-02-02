import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function InPersonSessions() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
      <Head>
        <title>In-Person Sessions - TshungKath Professional Services</title>
        <meta name="description" content="Exclusive in-person sessions in professional settings with complete discretion" />
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
              <div className="service-badge">🏢 IN-PERSON ELITE</div>
              <h1>In-Person Sessions</h1>
              <p className="header-subtitle">Exclusive face-to-face encounters in professional, private settings for the ultimate kinky experience</p>
            </motion.div>
          </div>
        </header>

        <nav className="service-nav">
          <div className="container">
            <div className="nav-tabs">
              {[
                { id: 'overview', label: '📋 Overview' },
                { id: 'process', label: '🔄 Process' },
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
                  <h2>What to Expect in Your Private Sessions</h2>
                  <div className="expectation-grid">
                    <motion.div className="expectation-card" whileHover={{ scale: 1.02, y: -5 }}>
                      <h3>🏰 Location & Setup</h3>
                      <ul>
                        <li>Professional private dungeon space</li>
                        <li>Fully equipped BDSM playroom</li>
                        <li>Complete discretion and confidentiality</li>
                        <li>Premium toys and equipment available</li>
                        <li>Comfortable aftercare area</li>
                        <li>Secure, private entrance</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div className="expectation-card" whileHover={{ scale: 1.02, y: -5 }}>
                      <h3>⏰ Session Experience</h3>
                      <ul>
                        <li>Extended 2-4 hour intensive sessions</li>
                        <li>Personalized one-on-one domination</li>
                        <li>Hands-on kinky training and exploration</li>
                        <li>Real-time skill development and correction</li>
                        <li>Immediate feedback and punishment/rewards</li>
                        <li>Professional aftercare and debriefing</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div className="expectation-card" whileHover={{ scale: 1.02, y: -5 }}>
                      <h3>🎯 Focus Areas</h3>
                      <ul>
                        <li>Advanced BDSM techniques and bondage</li>
                        <li>Sissy training with wardrobe and makeup</li>
                        <li>Pain training and limit exploration</li>
                        <li>Humiliation and degradation scenarios</li>
                        <li>Chastity training and orgasm control</li>
                        <li>Fetish exploration and kink development</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div className="expectation-card" whileHover={{ scale: 1.02, y: -5 }}>
                      <h3>📦 What's Included</h3>
                      <ul>
                        <li>Pre-session kink consultation and planning</li>
                        <li>Professional equipment and toy usage</li>
                        <li>Wardrobe and costume options</li>
                        <li>Session photos/videos (optional)</li>
                        <li>Aftercare and follow-up support</li>
                        <li>Detailed progress assessment report</li>
                      </ul>
                    </motion.div>
                  </div>
                </section>

                <section className="features-section">
                  <h2>Why Choose My In-Person Domination?</h2>
                  <div className="features-grid">
                    <div className="feature-item">
                      <div className="feature-icon">🔒</div>
                      <h4>Ultimate Privacy</h4>
                      <p>Completely private dungeon space with secure access and total discretion</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">⭐</div>
                      <h4>Professional Domme</h4>
                      <p>Years of hands-on experience in BDSM, sissy training, and fetish play</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">🌍</div>
                      <h4>Premium Equipment</h4>
                      <p>Fully equipped dungeon with professional-grade BDSM equipment and toys</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">💎</div>
                      <h4>Luxury Experience</h4>
                      <p>High-end facilities with comfort amenities and professional aftercare</p>
                    </div>
                  </div>
                </section>
              </motion.div>
            )}

            {activeTab === 'process' && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <section className="process-section">
                  <h2>Our In-Person Session Process</h2>
                  <div className="process-steps">
                    {[
                      {
                        step: '01',
                        title: 'Detailed Kink Consultation',
                        desc: 'Comprehensive discussion of your fetishes, limits, and desired experiences'
                      },
                      {
                        step: '02', 
                        title: 'Session Planning & Preparation',
                        desc: 'Custom scene planning with equipment selection and safety protocols'
                      },
                      {
                        step: '03',
                        title: 'Intensive Dungeon Session',
                        desc: 'Hands-on domination and training in fully equipped private dungeon'
                      },
                      {
                        step: '04',
                        title: 'Aftercare & Follow-up',
                        desc: 'Professional aftercare, debriefing, and ongoing support'
                      }
                    ].map((item, i) => (
                      <motion.div 
                        key={i}
                        className="process-step"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.2 }}
                      >
                        <div className="step-number">{item.step}</div>
                        <div className="step-content">
                          <h4>{item.title}</h4>
                          <p>{item.desc}</p>
                        </div>
                      </motion.div>
                    ))}
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
                        q: 'What kind of dungeon equipment do you have?',
                        a: 'My dungeon is fully equipped with bondage furniture, suspension points, impact toys, electro equipment, chastity devices, and extensive sissy wardrobe collections.'
                      },
                      {
                        q: 'How private and discreet are the sessions?',
                        a: 'Complete privacy is guaranteed. Private entrance, soundproof rooms, and no other clients present during your session. Your visit remains completely confidential.'
                      },
                      {
                        q: 'What should I bring to my session?',
                        a: 'Just yourself! I provide all equipment, toys, and wardrobe. However, you\'re welcome to bring personal items or specific requests discussed beforehand.'
                      },
                      {
                        q: 'How intense can the sessions get?',
                        a: 'Intensity is completely customized to your limits and desires. We\'ll discuss boundaries beforehand and can range from gentle introduction to extreme play.'
                      },
                      {
                        q: 'Do you offer couples sessions?',
                        a: 'Yes! Couples sessions are available for those wanting to explore together. Special rates and extended time options are available for couples.'
                      },
                      {
                        q: 'What about aftercare?',
                        a: 'Professional aftercare is included in every session. Comfortable space, refreshments, debriefing, and emotional support to ensure you leave feeling positive.'
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
                <h2>🔥 Ready for the Ultimate Kinky Experience?</h2>
                <p>Step into my dungeon and experience professional domination like never before</p>
                <motion.button 
                  onClick={() => window.location.href = '/#booking'}
                  className="cta-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Book Your Dungeon Session
                </motion.button>
                <div className="booking-guarantee">
                  <span>🔒 100% Discretion Guaranteed</span>
                  <span>🏰 Professional Dungeon</span>
                  <span>💎 Premium Experience</span>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
      </motion.div>

      <style jsx>{`
        .service-detail-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
          color: white;
        }
        
        .service-header {
          padding: 2rem 0 1rem;
          background: rgba(0,0,0,0.2);
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
          background: linear-gradient(45deg, #fff, #f0f0f0);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .header-subtitle {
          font-size: 1.2rem;
          opacity: 0.9;
          max-width: 600px;
          margin: 0 auto;
        }
        
        .service-nav {
          background: rgba(0,0,0,0.3);
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
          border: 2px solid rgba(255,255,255,0.3);
          color: white;
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
        }
        
        .back-btn {
          color: white;
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
          background: rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          transition: all 0.3s ease;
        }
        
        .expectation-card:hover {
          background: rgba(255,255,255,0.15);
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
          border-bottom: 1px solid rgba(255,255,255,0.1);
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
          background: rgba(255,255,255,0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
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
        
        .process-steps {
          margin-top: 2rem;
        }
        
        .process-step {
          display: flex;
          align-items: center;
          gap: 2rem;
          margin-bottom: 2rem;
          padding: 2rem;
          background: rgba(255,255,255,0.1);
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }
        
        .step-number {
          font-size: 2rem;
          font-weight: bold;
          color: #ff1493;
          background: rgba(255,20,147,0.2);
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .step-content h4 {
          color: #ff1493;
          margin-bottom: 0.5rem;
        }
        
        .price-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .price-card {
          background: rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 15px;
          text-align: center;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.2);
          position: relative;
          transition: all 0.3s ease;
        }
        
        .price-card.featured {
          border: 2px solid #ffd700;
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
        
        .price-header {
          margin-bottom: 1.5rem;
        }
        
        .price {
          font-size: 2.5rem;
          font-weight: bold;
          color: #ff1493;
          margin: 1rem 0;
        }
        
        .price-save {
          color: #4CAF50;
          font-size: 0.9rem;
          font-weight: 600;
        }
        
        .price-features {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
          text-align: left;
        }
        
        .price-features li {
          padding: 0.5rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.1);
        }
        
        .faq-grid {
          display: grid;
          gap: 2rem;
          margin-top: 2rem;
        }
        
        .faq-item {
          background: rgba(255,255,255,0.1);
          padding: 2rem;
          border-radius: 15px;
          backdrop-filter: blur(10px);
        }
        
        .faq-item h4 {
          color: #ff1493;
          margin-bottom: 1rem;
        }
        
        .booking-cta {
          text-align: center;
          background: rgba(255,255,255,0.1);
          padding: 3rem;
          border-radius: 20px;
          backdrop-filter: blur(10px);
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
          opacity: 0.9;
        }
        
        @media (max-width: 768px) {
          .header-content h1 {
            font-size: 2rem;
          }
          
          .expectation-grid {
            grid-template-columns: 1fr;
          }
          
          .process-step {
            flex-direction: column;
            text-align: center;
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