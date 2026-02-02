import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
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
            <a href="https://telegram.me/tshungkathy" target="_blank" rel="noopener noreferrer">📱</a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <div className="left-section">
            <h1 className="logo">TshungKath</h1>
            <button className="mobile-menu-btn" onClick={() => window.toggleMobileMenu()}>☰</button>
          </div>
          <div className="auth-buttons">
            <button className="login-btn">👤 Login</button>
          </div>
          <div className="nav-wrapper" id="mobileNav">
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#services">🏰 Dungeon</a></li>
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
            <div className="service-card">
              <div className="service-icon">💻</div>
              <h3>Online Sessions</h3>
              <p>Providing you with the most intimate and kinky virtual experience</p>
            </div>
            <div className="service-card">
              <div className="service-icon">👗</div>
              <h3>Sissy Training Programs</h3>
              <p>Complete feminization and sissy transformation programs</p>
            </div>
            <div className="service-card">
              <div className="service-icon">🏛️</div>
              <h3>In-Person Sessions</h3>
              <p>Discreet luxury meetings for ultimate domination experiences</p>
            </div>
            <div className="service-card">
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
            <p>15 items - 🔞 18+ Content Only</p>
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
              <div className="price">$150 - $750</div>
              <ul>
                <li>HD Video chat sessions</li>
                <li>Custom requests & scenarios</li>
                <li>24/7 flexible scheduling</li>
                <li>Screen recording available</li>
              </ul>
            </div>
            
            <div className="pricing-card featured">
              <div className="service-badge popular">🎭 SPECIALTY</div>
              <h3>Training Programs</h3>
              <div className="price">$300 - $1500</div>
              <ul>
                <li>Personalized training protocols</li>
                <li>Progress tracking & assessments</li>
                <li>24/7 ongoing support</li>
                <li>Certification upon completion</li>
              </ul>
            </div>
            
            <div className="pricing-card">
              <div className="service-badge premium">🏛️ ELITE</div>
              <h3>In-Person Sessions</h3>
              <div className="price">$700 - $5000</div>
              <ul>
                <li>Private luxury meetings</li>
                <li>Professional dungeon sessions</li>
                <li>Worldwide travel available</li>
                <li>Discretion & confidentiality guaranteed</li>
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
                <a href="https://t.me/tshungkathy" target="_blank" rel="noopener noreferrer">Telegram</a>
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
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/Sn_n_1080.jpg') center/cover;
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