import Head from 'next/head'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useState } from 'react'

export default function OnlineTraining() {
  const [activeTab, setActiveTab] = useState('overview')

  return (
    <>
      <Head>
        <title>Online Training - TshungKath Professional Services</title>
        <meta name="description" content="Professional online training sessions with personalized attention and HD video quality" />
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
              <div className="service-badge">💻 VIRTUAL SESSIONS</div>
              <h1>Online Training Sessions</h1>
              <p className="header-subtitle">Professional virtual consultations with personalized attention and interactive guidance</p>
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
                  <h2>What to Expect in Your Sessions</h2>
                  <div className="expectation-grid">
                    <motion.div className="expectation-card" whileHover={{ scale: 1.02, y: -5 }}>
                      <h3>🎯 Intimate Session Structure</h3>
                      <ul>
                        <li>60-90 minute private one-on-one sessions</li>
                        <li>HD video with crystal clear audio quality</li>
                        <li>Interactive toys and equipment demonstrations</li>
                        <li>Real-time guidance for pleasure techniques</li>
                        <li>Personalized kink exploration and training</li>
                        <li>Session recordings for your personal collection</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div className="expectation-card" whileHover={{ scale: 1.02, y: -5 }}>
                      <h3>📋 Pre-Session Preparation</h3>
                      <ul>
                        <li>Detailed kink and fetish preference questionnaire</li>
                        <li>Limits and boundaries discussion</li>
                        <li>Toy and equipment recommendations</li>
                        <li>Wardrobe and outfit selection guidance</li>
                        <li>Private space setup for maximum pleasure</li>
                        <li>Mood lighting and camera angle optimization</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div className="expectation-card" whileHover={{ scale: 1.02, y: -5 }}>
                      <h3>🎓 Specialized Training Areas</h3>
                      <ul>
                        <li>Sissy training and feminization techniques</li>
                        <li>BDSM fundamentals and advanced practices</li>
                        <li>Submission and obedience training</li>
                        <li>Chastity training and orgasm control</li>
                        <li>Humiliation and degradation scenarios</li>
                        <li>Fetish exploration and kink development</li>
                      </ul>
                    </motion.div>
                    
                    <motion.div className="expectation-card" whileHover={{ scale: 1.02, y: -5 }}>
                      <h3>📈 Progress & Development</h3>
                      <ul>
                        <li>Kink progression assessments and milestones</li>
                        <li>Personalized training assignments and tasks</li>
                        <li>Follow-up materials and instructional content</li>
                        <li>Achievement rewards and punishment systems</li>
                        <li>Continuous skill development and refinement</li>
                        <li>Personal transformation tracking and goals</li>
                      </ul>
                    </motion.div>
                  </div>
                </section>

                <section className="features-section">
                  <h2>Why Choose My Kinky Online Training?</h2>
                  <div className="features-grid">
                    <div className="feature-item">
                      <div className="feature-icon">🔒</div>
                      <h4>Complete Discretion</h4>
                      <p>Your deepest fantasies and kinks remain completely private with encrypted sessions</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">⭐</div>
                      <h4>Expert Domination</h4>
                      <p>Years of experience in BDSM, sissy training, and fetish exploration</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">🌍</div>
                      <h4>24/7 Availability</h4>
                      <p>Ready to train and dominate you anytime, anywhere in the world</p>
                    </div>
                    <div className="feature-item">
                      <div className="feature-icon">💎</div>
                      <h4>Premium Experience</h4>
                      <p>High-quality sessions with professional equipment and intimate attention</p>
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
                  <h2>Our Training Process</h2>
                  <div className="process-steps">
                    {[
                      {
                        step: '01',
                        title: 'Kink Assessment & Consultation',
                        desc: 'Deep dive into your fetishes, limits, and desires to create your perfect training program'
                      },
                      {
                        step: '02', 
                        title: 'Personalized Training Plan',
                        desc: 'Custom sissy, BDSM, or fetish training program designed specifically for your kinks'
                      },
                      {
                        step: '03',
                        title: 'Interactive Training Sessions',
                        desc: 'Hands-on kinky sessions with real-time domination, guidance, and pleasure training'
                      },
                      {
                        step: '04',
                        title: 'Kink Development & Mastery',
                        desc: 'Progressive skill building and fetish exploration with regular assessments'
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
                        q: 'What kind of kinky activities do you offer?',
                        a: 'I specialize in sissy training, BDSM instruction, chastity training, humiliation scenarios, fetish exploration, and personalized kink development based on your desires.'
                      },
                      {
                        q: 'How explicit are the online sessions?',
                        a: 'Sessions are as explicit as you want them to be. We discuss your comfort level and boundaries beforehand, then explore your kinks within those limits.'
                      },
                      {
                        q: 'Do I need special toys or equipment?',
                        a: 'I\'ll provide recommendations based on your interests. Basic items might include toys, restraints, or feminine clothing depending on your training focus.'
                      },
                      {
                        q: 'Can you help me explore new fetishes?',
                        a: 'Absolutely! I love introducing clients to new kinks and fetishes. We\'ll start slowly and build up your comfort and skill level progressively.'
                      },
                      {
                        q: 'Is everything completely confidential?',
                        a: 'Yes, complete discretion is guaranteed. All sessions are private, encrypted, and your personal information and kinks remain strictly confidential.'
                      },
                      {
                        q: 'What if I want to try something extreme?',
                        a: 'We\'ll discuss all activities beforehand. I\'m experienced with advanced kinks and can guide you safely through more intense experiences within your limits.'
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
                <h2>🔥 Ready to Explore Your Deepest Desires?</h2>
                <p>Join my exclusive community of kinky clients who have discovered their true selves through personalized training</p>
                <motion.button 
                  onClick={() => window.location.href = '/#booking'}
                  className="cta-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Your Kinky Journey Now
                </motion.button>
                <div className="booking-guarantee">
                  <span>🔒 100% Discretion Guaranteed</span>
                  <span>💎 Premium Kinky Experience</span>
                  <span>🌙 Available 24/7</span>
                </div>
              </div>
            </motion.section>
          </div>
        </main>
      </motion.div>

      <style jsx>{`
        .service-detail-page {
          min-height: 100vh;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
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