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

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Hello! I'm Kathy, a professional mistress, providing exceptional experience to kinky, dedicated sluts and subs helping them explore all their kinks and limits... im also a vers trans and can be all kinky and slutty for the right person... you can be the lucky one.</p>
              <ul>
                <li>Professional and discreet</li>
                <li>kinky with no limits</li>
                <li>experienced in sissy training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2 className="premium-title">Premium Services</h2>
          <div className="services-grid">
            <div className="service-card" onClick={() => window.location.href = '/services'}>
              <div className="service-icon">💻</div>
              <h3>Online Sessions</h3>
              <p>Providing you with the most intimate and kinky virtual experience</p>
            </div>
            <div className="service-card" onClick={() => window.location.href = '/services'}>
              <div className="service-icon">👗</div>
              <h3>Sissy Training Programs</h3>
              <p>Complete feminization and sissy transformation programs</p>
            </div>
            <div className="service-card" onClick={() => window.location.href = '/services'}>
              <div className="service-icon">🏛️</div>
              <h3>In-Person Sessions</h3>
              <p>Discreet luxury meetings for ultimate domination experiences</p>
            </div>
            <div className="service-card" onClick={() => window.location.href = '/services'}>
              <div className="service-icon">🏰</div>
              <h3>Dungeon Play Sessions</h3>
              <p>Professional BDSM dungeon with full equipment and safety protocols</p>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="gallery">
        <div className="container">
          <h2>Gallery</h2>
          <div className="gallery-folder" onClick={() => window.openGalleryFolder()}>
            <div className="folder-icon">📁</div>
            <h3>Private Gallery</h3>
            <p>13 items - 🔞 18+ Content Only</p>
            <div className="folder-lock">🔒</div>
          </div>
          
          <div className="gallery-content hidden" id="galleryContent">
            <div className="gallery-grid">
              <div className="gallery-item" onClick={() => window.openLightbox('/20250811_080612.jpg')}>
                <img src="/20250811_080612.jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/20250818_053853.jpg')}>
                <img src="/20250818_053853.jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/20250923_033902.jpg')}>
                <img src="/20250923_033902.jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/20251013_205914.jpg')}>
                <img src="/20251013_205914.jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/5f859e2079de2-320-3.jpg')}>
                <img src="/5f859e2079de2-320-3.jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/ClipDown.App_323181084_859195861864401_767757521491526338_n (1).jpg')}>
                <img src="/ClipDown.App_323181084_859195861864401_767757521491526338_n (1).jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/IZ1KqdnC.jpeg')}>
                <img src="/IZ1KqdnC.jpeg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/Snapchat-2048414736.jpg')}>
                <img src="/Snapchat-2048414736.jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/Snapchat-2094116657.jpg')}>
                <img src="/Snapchat-2094116657.jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/Snapinsta.app_252779091_468028234603867_2548580010668401338_n_1080.jpg')}>
                <img src="/Snapinsta.app_252779091_468028234603867_2548580010668401338_n_1080.jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/Snapinsta.app_323280597_482304177421626_3152935471351356946_n_1080.jpg')}>
                <img src="/Snapinsta.app_323280597_482304177421626_3152935471351356946_n_1080.jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/SnapInsta.to_574484374_18534045874052735_872482252059731347_n.jpg')}>
                <img src="/SnapInsta.to_574484374_18534045874052735_872482252059731347_n.jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/SzU6IOIX.jpeg')}>
                <img src="/SzU6IOIX.jpeg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="booking" className="booking">
        <div className="container">
          <h2>Book Your Session</h2>
          <div className="booking-content">
            <div className="booking-form">
              <h3>Quick Booking</h3>
              <form>
                <select required>
                  <option value="">Select Service</option>
                  <option value="online">Online Session ($150-$750)</option>
                  <option value="sissy">Sissy Training ($300)</option>
                  <option value="inperson">In-Person Session ($700-$1200)</option>
                  <option value="dungeon">Dungeon Play Session ($800-$1500)</option>
                </select>
                <input type="date" required />
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <button type="submit">Book Session</button>
              </form>
            </div>
            <div className="booking-info">
              <h3>Booking Information</h3>
              <div className="info-item">
                <span className="icon">📍</span>
                <div>
                  <strong>Location:</strong>
                  <p>Available worldwide - Online sessions</p>
                  <p>In-person: Major cities (travel available)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials">
        <div className="container">
          <h2>Client Reviews</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Amazing experience! Kathy is professional and knows exactly what she's doing. Highly recommended!"</p>
              <span className="client-name">- JP</span>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Best mistress I've ever worked with. Discrete, professional, and incredibly skilled."</p>
              <span className="client-name">- AD</span>
            </div>
            <div className="testimonial-card">
              <div className="stars">⭐⭐⭐⭐⭐</div>
              <p>"Kathy helped me explore my limits in a safe and exciting way. Will definitely book again!"</p>
              <span className="client-name">- KS</span>
            </div>
          </div>
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
                <li onClick={() => setPaymentModal({ open: true, service: 'Online Sessions', price: 140, selectedOption: 'Orgasm Control (45min)' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Orgasm Control (45min) - $140</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Online Sessions', price: 180, selectedOption: 'Role-play Session (60min)' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Role-play Session (60min) - $180</li>
              </ul>
            </div>
            
            <div className="pricing-card">
              <div className="service-badge">👗 SISSY</div>
              <h3>Sissy Training</h3>
              <div className="price">$60 - $300</div>
              <ul>
                <li onClick={() => setPaymentModal({ open: true, service: 'Sissy Training', price: 80, selectedOption: 'Makeup Tutorial' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Makeup Tutorial - $80</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Sissy Training', price: 60, selectedOption: 'Walking in Heels Training' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Walking in Heels Training - $60</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Sissy Training', price: 90, selectedOption: 'Voice Feminization' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Voice Feminization - $90</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Sissy Training', price: 70, selectedOption: 'Outfit Styling Session' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Outfit Styling Session - $70</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Sissy Training', price: 300, selectedOption: 'Complete Transformation' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Complete Transformation - $300</li>
              </ul>
            </div>
            
            <div className="pricing-card">
              <div className="service-badge">💰 FINDOM</div>
              <h3>Financial Domination</h3>
              <div className="price">$25 - $200</div>
              <ul>
                <li onClick={() => setPaymentModal({ open: true, service: 'Financial Domination', price: 25, selectedOption: 'Tribute $25' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Tribute $25 - $25</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Financial Domination', price: 50, selectedOption: 'Tribute $50' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Tribute $50 - $50</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Financial Domination', price: 100, selectedOption: 'Tribute $100' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Tribute $100 - $100</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Financial Domination', price: 150, selectedOption: 'Wallet Inspection' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Wallet Inspection - $150</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Financial Domination', price: 200, selectedOption: 'Budget Control Session' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Budget Control Session - $200</li>
              </ul>
            </div>
            
            <div className="pricing-card">
              <div className="service-badge">👠 FEET</div>
              <h3>Foot Worship</h3>
              <div className="price">$40 - $80</div>
              <ul>
                <li onClick={() => setPaymentModal({ open: true, service: 'Foot Worship', price: 40, selectedOption: 'Foot Massage Instructions' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Foot Massage Instructions - $40</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Foot Worship', price: 50, selectedOption: 'Toe Sucking Training' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Toe Sucking Training - $50</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Foot Worship', price: 45, selectedOption: 'Shoe Worship Session' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Shoe Worship Session - $45</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Foot Worship', price: 60, selectedOption: 'Custom Foot Photos (5 pics)' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Custom Foot Photos (5 pics) - $60</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Foot Worship', price: 80, selectedOption: 'Worn Socks/Stockings' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Worn Socks/Stockings - $80</li>
              </ul>
            </div>
            
            <div className="pricing-card">
              <div className="service-badge">🔒 CHASTITY</div>
              <h3>Chastity Training</h3>
              <div className="price">$75 - $400</div>
              <ul>
                <li onClick={() => setPaymentModal({ open: true, service: 'Chastity Training', price: 75, selectedOption: 'Device Fitting Guidance' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Device Fitting Guidance - $75</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Chastity Training', price: 120, selectedOption: 'Weekly Lock-up Program' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Weekly Lock-up Program - $120</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Chastity Training', price: 400, selectedOption: 'Monthly Control Package' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Monthly Control Package - $400</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Chastity Training', price: 200, selectedOption: 'Key Holding Service' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Key Holding Service - $200</li>
                <li onClick={() => setPaymentModal({ open: true, service: 'Chastity Training', price: 100, selectedOption: 'Release Training Session' })} style={{cursor: 'pointer', padding: '8px', borderRadius: '5px', transition: 'background 0.3s'}} onMouseEnter={(e) => e.target.style.background = '#333'} onMouseLeave={(e) => e.target.style.background = 'transparent'}>Release Training Session - $100</li>
              </ul>
            </div>
            
            <div className="pricing-card featured">
              <div className="service-badge premium">🏛️ ELITE</div>
              <h3>In-Person Sessions</h3>
              <div className="price">$700 - $5000</div>
              <ul>
                <li>Basic Meeting (2hr) - $700</li>
                <li>Extended Session (4hr) - $1200</li>
                <li>Overnight Experience (8hr) - $2000</li>
                <li>Weekend Package (48hr) - $5000</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-item">
                <span className="icon">📧</span>
                <span>kathtri57@gmail.com</span>
              </div>
              <div className="contact-item">
                <span className="icon">⏰</span>
                <span>24/7 Professional Service</span>
              </div>
              <div className="social-links">
                <a href="https://twitter.com/tshungkatherine" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://t.me/tshungkathy10" target="_blank" rel="noopener noreferrer">Telegram</a>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send a Message / Book Session</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <select>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Book Session</option>
                  <option value="payment">Payment Confirmation</option>
                </select>
                <textarea placeholder="Your Message / Special Requests" rows="5" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <div id="lightbox" className="lightbox" onClick={() => window.closeLightbox()}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-lightbox" onClick={() => window.closeLightbox()}>&times;</span>
          <img id="lightbox-img" className="lightbox-img" alt="Gallery" />
        </div>
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>TshungKath</h3>
              <p>Professional companion services with discretion and excellence.</p>
            </div>
            <div className="footer-section">
              <h4>Services</h4>
              <ul>
                <li>Online Sessions</li>
                <li>Sissy Training</li>
                <li>In-Person Meetings</li>
                <li>Dungeon Play</li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Contact</h4>
              <p>Email: kathtri57@gmail.com</p>
              <p>Available: 24/7</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 TshungKath Professional Services. All rights reserved.</p>
          </div>
        </div>
      </footer>

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
                alert(`💵 Send $${paymentModal.price} to CashApp: ${cashappHandle}\n\nAfter sending, contact me with confirmation.`)
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
        body { font-family: Arial, sans-serif; background: #000; color: #fff; line-height: 1.6; overflow-x: hidden; }
        
        .social-top { background: #111; padding: 0.5rem 0; text-align: center; }
        .social-links a { margin: 0 10px; font-size: 1.2rem; text-decoration: none; }
        
        .navbar { background: #000; padding: 1rem 0; border-bottom: 2px solid #ff1493; position: sticky; top: 0; z-index: 100; }
        .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 1rem; }
        .left-section { display: flex; align-items: center; }
        .logo { color: #ff1493; font-size: 1.8rem; font-weight: bold; }
        .mobile-menu-btn { background: #ff1493; border: none; color: white; font-size: 18px; padding: 8px 12px; border-radius: 5px; cursor: pointer; margin-left: 15px; display: none; }
        .auth-buttons { display: flex; gap: 1rem; }
        .login-btn { background: linear-gradient(135deg, #ff1493, #ff6b9d); border: none; color: white; padding: 8px 16px; border-radius: 20px; cursor: pointer; }
        .nav-wrapper { display: block; }
        .nav-menu { display: flex; list-style: none; gap: 1.5rem; margin: 0; padding: 0; }
        .nav-menu li { margin: 0; }
        .nav-menu a { color: #fff; text-decoration: none; padding: 0.5rem 1rem; border-radius: 20px; transition: all 0.3s; }
        .nav-menu a:hover { background: linear-gradient(135deg, #ff1493, #ff6b9d); }
        
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
        
        .about, .services, .gallery, .booking, .testimonials, .pricing, .contact { padding: 5rem 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        h2 { font-size: 3rem; text-align: center; margin-bottom: 4rem; color: #ff1493; }
        
        .about-text { max-width: 800px; margin: 0 auto; text-align: center; }
        .about-text p { font-size: 1.2rem; margin-bottom: 2rem; }
        .about-text ul { list-style: none; display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-top: 3rem; }
        .about-text li { background: linear-gradient(135deg, #111, #222); padding: 1.5rem; border-radius: 15px; border: 2px solid #ff1493; }
        
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
        .service-card { background: linear-gradient(135deg, #111, #222); padding: 2.5rem; border-radius: 20px; border: 2px solid #ff1493; text-align: center; transition: all 0.5s; cursor: pointer; }
        .service-card:hover { transform: translateY(-10px); }
        .service-card h3 { color: #ff1493; margin-bottom: 1rem; }
        .service-icon { font-size: 3rem; margin-bottom: 1rem; }
        
        .gallery-folder { background: linear-gradient(135deg, #111, #222); padding: 4rem; border-radius: 20px; text-align: center; cursor: pointer; border: 2px solid #ff1493; max-width: 500px; margin: 0 auto; }
        .folder-icon { font-size: 4rem; margin-bottom: 1rem; }
        .gallery-content { margin-top: 3rem; }
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
        .gallery-item { position: relative; border-radius: 15px; overflow: hidden; cursor: pointer; border: 2px solid #ff1493; }
        .gallery-item img { width: 100%; height: 250px; object-fit: cover; }
        .media-type { position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.8); padding: 8px; border-radius: 8px; }
        
        .booking-content { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .booking-form { background: linear-gradient(135deg, #111, #222); padding: 3rem; border-radius: 20px; border: 2px solid #ff1493; }
        .booking-form input, .booking-form select, .booking-form textarea { width: 100%; padding: 1rem; margin-bottom: 1rem; background: #333; border: 2px solid #ff1493; border-radius: 8px; color: #fff; }
        .booking-form button { background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; padding: 1rem 2rem; border: none; border-radius: 8px; cursor: pointer; width: 100%; }
        
        .testimonials { background: linear-gradient(135deg, #111, #0a0a0a); }
        .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .testimonial-card { background: linear-gradient(135deg, #222, #333); padding: 2rem; border-radius: 15px; border: 2px solid #ff1493; text-align: center; }
        .stars { font-size: 1.5rem; margin-bottom: 1rem; }
        .client-name { color: #ff1493; font-weight: bold; }
        
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; }
        .pricing-card { background: linear-gradient(135deg, #111, #222); padding: 2.5rem; border-radius: 20px; border: 2px solid #ff1493; position: relative; }
        .service-badge { position: absolute; top: -15px; left: 25px; background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; padding: 8px 20px; border-radius: 20px; font-size: 0.9rem; font-weight: bold; }
        .popular { background: linear-gradient(135deg, #ff6b35, #ff8c42); }
        .premium { background: linear-gradient(135deg, #8e44ad, #9b59b6); }
        .price { font-size: 2.5rem; color: #ff1493; font-weight: bold; margin: 1.5rem 0; text-align: center; }
        
        .contact-content { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .contact-item { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
        .contact-form { background: linear-gradient(135deg, #111, #222); padding: 3rem; border-radius: 20px; border: 2px solid #ff1493; }
        .contact-form input, .contact-form select, .contact-form textarea { width: 100%; padding: 1rem; margin-bottom: 1rem; background: #333; border: 2px solid #ff1493; border-radius: 8px; color: #fff; }
        .contact-form button { background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; padding: 1rem 2rem; border: none; border-radius: 8px; cursor: pointer; width: 100%; }
        
        .hidden { display: none !important; }
        
        .lightbox { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 1000; align-items: center; justify-content: center; }
        .lightbox-content { position: relative; max-width: 90%; max-height: 90%; }
        .lightbox-img { max-width: 100%; max-height: 100%; border-radius: 10px; }
        .close-lightbox { position: absolute; top: -50px; right: 0; color: white; font-size: 2.5rem; cursor: pointer; }
        
        .footer { background: linear-gradient(135deg, #111, #0a0a0a); padding: 4rem 0 2rem; border-top: 2px solid #ff1493; }
        .footer-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 3rem; }
        .footer-section h3, .footer-section h4 { color: #ff1493; margin-bottom: 1rem; }
        .footer-section ul { list-style: none; }
        .footer-section li { margin-bottom: 0.5rem; }
        .footer-bottom { text-align: center; padding-top: 2rem; border-top: 1px solid #333; }
        
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block !important; }
          .nav-wrapper { display: none; position: absolute; top: 100%; left: 0; width: 100%; background: #000; border: 1px solid #ff1493; }
          .nav-menu { flex-direction: column; gap: 0; }
          .nav-menu li { border-bottom: 1px solid #333; text-align: center; }
          .hero-content h1 { font-size: 2.5rem; }
          .services-grid { grid-template-columns: 1fr; }
          .booking-content { grid-template-columns: 1fr; }
          .contact-content { grid-template-columns: 1fr; }
          .pricing-grid { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  )
}