import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    window.toggleMobileMenu = function() {
      const nav = document.getElementById('mobileNav');
      if (nav) {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
      }
    };

    window.openGalleryFolder = function() {
      if (confirm('🔞 Age Verification Required. You must be 18+. Click OK if you are 18+')) {
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

    window.togglePricing = function(serviceId) {
      const details = document.getElementById(serviceId);
      if (!details) return;
      
      if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
      } else {
        details.classList.add('hidden');
      }
    };

    window.openPayPalPayment = function(amount) {
      document.getElementById('paypalAmount').textContent = '$' + amount;
      document.getElementById('paypalModal').classList.remove('hidden');
    };

    window.closePaypalModal = function() {
      document.getElementById('paypalModal').classList.add('hidden');
    };

    window.copyPaypalEmail = function() {
      navigator.clipboard.writeText('kathtri57@gmail.com').then(() => {
        alert('PayPal email copied!');
      });
    };

    window.handleContactForm = function(event) {
      event.preventDefault();
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const message = document.getElementById('contactMessage').value;
      
      window.location.href = `mailto:kathtri57@gmail.com?subject=Contact&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    };

    window.handleBooking = function(event) {
      event.preventDefault();
      const service = document.getElementById('serviceType').value;
      const date = document.getElementById('bookingDate').value;
      const name = document.getElementById('clientName').value;
      
      alert(`Booking request submitted for ${service} on ${date}. We'll contact you soon!`);
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
            <a href="https://snapchat.com/add/tshungkathy25" target="_blank" rel="noopener noreferrer">👻</a>
            <a href="https://telegram.me/tshungkath10" target="_blank" rel="noopener noreferrer">📱</a>
          </div>
        </div>
      </div>

      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">TshungKath</h1>
          <button className="mobile-menu-btn" onClick={() => window.toggleMobileMenu()}>☰</button>
          <div className="nav-wrapper" id="mobileNav">
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#booking">Book Now</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="hero-content">
          <h1>TshungKath</h1>
          <p>just imagine meeting with the most elegant,dominant,hung trans..</p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </section>

      <section id="about" className="about">
        <div className="container">
          <h2>About Me</h2>
          <p>Hello! I'm Kathy, a professional mistress, providing exceptional experience to kinky, dedicated sluts and subs helping them explore all their kinks and limits... im also a vers trans and can be all kinky and slutty for the right person... you can be the lucky one.</p>
          <ul>
            <li>Professional and discreet</li>
            <li>kinky with no limits</li>
            <li>experienced in sissy training</li>
          </ul>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <h2>Premium Services</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Online Sessions</h3>
              <p>Providing you with the most intimate and kinky experience</p>
            </div>
            <div className="service-card">
              <h3>Sissy Training Roulettes</h3>
              <p>Engaging in role-play sessions focus on dominance and submission</p>
            </div>
            <div className="service-card">
              <h3>Meet Ups & Playdates</h3>
              <p>Discreet in-person meetings for kinky playdates and sessions</p>
            </div>
            <div className="service-card">
              <h3>Dungeon Play Sessions</h3>
              <p>Engaging in role-play sessions focus on dominance and submission and BDSM activities</p>
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
              <div className="gallery-item" onClick={() => window.openLightbox('https://via.placeholder.com/300x400/ff1493/ffffff?text=Gallery+1')}>
                <img src="https://via.placeholder.com/300x400/ff1493/ffffff?text=Gallery+1" alt="Gallery Image" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('https://via.placeholder.com/300x400/ff1493/ffffff?text=Gallery+2')}>
                <img src="https://via.placeholder.com/300x400/ff1493/ffffff?text=Gallery+2" alt="Gallery Image" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('https://via.placeholder.com/300x400/ff1493/ffffff?text=Dungeon+Equipment')}>
                <img src="https://via.placeholder.com/300x400/ff1493/ffffff?text=Dungeon+Equipment" alt="Dungeon Equipment" />
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
              <form onSubmit={(e) => window.handleBooking(e)}>
                <select id="serviceType" required>
                  <option value="">Select Service</option>
                  <option value="online">Online Session ($150-$750)</option>
                  <option value="sissy">Sissy Training ($300)</option>
                  <option value="inperson">In-Person Session ($700-$1200)</option>
                  <option value="dungeon">Dungeon Play Session ($800-$1500)</option>
                </select>
                <input type="date" id="bookingDate" required />
                <input type="text" id="clientName" placeholder="Your Name" required />
                <input type="email" id="clientEmail" placeholder="Your Email" required />
                <textarea id="specialRequests" placeholder="Special Requests" rows="3"></textarea>
                <button type="submit">Book Session</button>
              </form>
            </div>
            <div className="booking-info">
              <h3>Booking Information</h3>
              <div className="info-item">
                <span>📍 Available worldwide - Online sessions</span>
              </div>
              <div className="info-item">
                <span>⏰ 24/7 for online sessions</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <h2>Professional Service Rates</h2>
          <div className="pricing-grid">
            <div className="pricing-card" onClick={() => window.togglePricing('online')}>
              <div className="service-badge">💻 VIRTUAL</div>
              <h3>Online Sessions</h3>
              <div className="price">$150 - $750</div>
              <ul>
                <li>HD Video chat sessions</li>
                <li>Custom requests & scenarios</li>
                <li>24/7 flexible scheduling</li>
              </ul>
              <div id="online" className="pricing-details hidden">
                <h4>Digital Services:</h4>
                <ul>
                  <li>Video Chat (30min) - $150</li>
                  <li>Video Chat (60min) - $250</li>
                  <li>Premium HD Sessions - $400-$750</li>
                </ul>
                <button onClick={() => window.openPayPalPayment(150)}>💰 PayPal Payment</button>
              </div>
            </div>
            
            <div className="pricing-card" onClick={() => window.togglePricing('sissy')}>
              <div className="service-badge">🎭 SPECIALTY</div>
              <h3>Training Programs</h3>
              <div className="price">$300 - $1500</div>
              <ul>
                <li>Personalized training protocols</li>
                <li>Progress tracking & assessments</li>
                <li>24/7 ongoing support</li>
              </ul>
              <div id="sissy" className="pricing-details hidden">
                <h4>Training Menu:</h4>
                <ul>
                  <li>Basic Sissy Training - $300</li>
                  <li>Advanced Program - $800</li>
                  <li>Complete Course - $1200</li>
                </ul>
                <button onClick={() => window.openPayPalPayment(300)}>💰 PayPal Payment</button>
              </div>
            </div>
            
            <div className="pricing-card" onClick={() => window.togglePricing('inperson')}>
              <div className="service-badge">🏛️ ELITE</div>
              <h3>In-Person & Dungeon Sessions</h3>
              <div className="price">$700 - $5000</div>
              <ul>
                <li>Private luxury meetings</li>
                <li>Professional dungeon sessions</li>
                <li>BDSM equipment training</li>
              </ul>
              <div id="inperson" className="pricing-details hidden">
                <h4>Premium Services:</h4>
                <ul>
                  <li>Basic Session (1 hour) - $700</li>
                  <li>Dungeon Play Sessions - $800-$1500</li>
                  <li>Heavy BDSM Sessions - $1000-$2000</li>
                </ul>
                <button onClick={() => window.openPayPalPayment(700)}>💰 PayPal Payment</button>
              </div>
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
                <span>📧 kathtri57@gmail.com</span>
              </div>
              <div className="contact-item">
                <span>⏰ 24/7 Professional Service</span>
              </div>
              <div className="social-links">
                <a href="https://twitter.com/tshungkatherine" target="_blank">Twitter</a>
                <a href="https://t.me/tshungkath10" target="_blank">Telegram</a>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send a Message</h3>
              <form onSubmit={(e) => window.handleContactForm(e)}>
                <input type="text" id="contactName" placeholder="Your Name" required />
                <input type="email" id="contactEmail" placeholder="Your Email" required />
                <textarea id="contactMessage" placeholder="Your Message" rows="5" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div id="lightbox" className="lightbox" onClick={() => window.closeLightbox()}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-lightbox" onClick={() => window.closeLightbox()}>&times;</span>
          <img id="lightbox-img" className="lightbox-img" alt="Gallery" />
        </div>
      </div>

      <div id="paypalModal" className="payment-modal hidden">
        <div className="payment-modal-content">
          <span className="close-payment" onClick={() => window.closePaypalModal()}>&times;</span>
          <h3>💰 PayPal Payment</h3>
          <div className="amount-display" id="paypalAmount">$0</div>
          <div className="email-box">
            <input type="text" value="kathtri57@gmail.com" readOnly />
            <button onClick={() => window.copyPaypalEmail()}>📋 Copy</button>
          </div>
          <p>Send payment to this PayPal email</p>
        </div>
      </div>

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #000; color: #fff; }
        
        .social-top { background: #111; padding: 0.5rem 0; text-align: center; }
        .social-links a { margin: 0 10px; font-size: 1.2rem; text-decoration: none; }
        
        .navbar { background: #000; padding: 1rem 0; border-bottom: 2px solid #ff1493; }
        .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 1rem; }
        .logo { color: #ff1493; font-size: 1.8rem; }
        .mobile-menu-btn { background: #ff1493; border: none; color: white; padding: 8px 12px; border-radius: 5px; cursor: pointer; }
        .nav-wrapper { display: block; }
        .nav-menu { display: flex; list-style: none; gap: 2rem; }
        .nav-menu a { color: #fff; text-decoration: none; padding: 0.5rem 1rem; }
        .nav-menu a:hover { background: #ff1493; border-radius: 5px; }
        
        .hero { background: linear-gradient(135deg, #ff1493, #000); padding: 6rem 0; text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.2rem; margin-bottom: 2rem; }
        .cta-button { background: #ff1493; color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 25px; }
        
        .about, .services, .gallery, .booking, .pricing, .contact { padding: 4rem 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        h2 { font-size: 2.5rem; text-align: center; margin-bottom: 3rem; color: #ff1493; }
        
        .about p { text-align: center; font-size: 1.1rem; margin-bottom: 2rem; }
        .about ul { list-style: none; display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; }
        .about li { background: #111; padding: 1rem; border-radius: 10px; border: 1px solid #ff1493; }
        
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 2rem; }
        .service-card { background: #111; padding: 2rem; border-radius: 15px; border: 2px solid #ff1493; text-align: center; }
        .service-card h3 { color: #ff1493; margin-bottom: 1rem; }
        
        .gallery-folder { background: #111; padding: 3rem; border-radius: 15px; text-align: center; cursor: pointer; border: 2px solid #ff1493; max-width: 400px; margin: 0 auto; }
        .folder-icon { font-size: 3rem; margin-bottom: 1rem; }
        .gallery-content { margin-top: 2rem; }
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
        .gallery-item { position: relative; border-radius: 10px; overflow: hidden; cursor: pointer; border: 1px solid #ff1493; }
        .gallery-item img { width: 100%; height: 200px; object-fit: cover; }
        .media-type { position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.7); padding: 5px; border-radius: 5px; }
        
        .booking-content { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        .booking-form { background: #111; padding: 2rem; border-radius: 15px; border: 1px solid #ff1493; }
        .booking-form input, .booking-form select, .booking-form textarea { width: 100%; padding: 1rem; margin-bottom: 1rem; background: #222; border: 1px solid #ff1493; border-radius: 5px; color: #fff; }
        .booking-form button { background: #ff1493; color: white; padding: 1rem 2rem; border: none; border-radius: 5px; cursor: pointer; width: 100%; }
        .info-item { margin-bottom: 1rem; }
        
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .pricing-card { background: #111; padding: 2rem; border-radius: 15px; border: 2px solid #ff1493; cursor: pointer; position: relative; }
        .service-badge { position: absolute; top: -10px; left: 20px; background: #ff1493; color: white; padding: 5px 15px; border-radius: 15px; font-size: 0.8rem; }
        .price { font-size: 2rem; color: #ff1493; font-weight: bold; margin: 1rem 0; }
        .pricing-details { margin-top: 2rem; }
        .pricing-details button { background: #ff1493; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; margin-top: 1rem; }
        
        .contact-content { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        .contact-item { margin-bottom: 1rem; }
        .contact-form { background: #111; padding: 2rem; border-radius: 15px; border: 1px solid #ff1493; }
        .contact-form input, .contact-form textarea { width: 100%; padding: 1rem; margin-bottom: 1rem; background: #222; border: 1px solid #ff1493; border-radius: 5px; color: #fff; }
        .contact-form button { background: #ff1493; color: white; padding: 1rem 2rem; border: none; border-radius: 5px; cursor: pointer; width: 100%; }
        
        .hidden { display: none !important; }
        
        .lightbox { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 1000; align-items: center; justify-content: center; }
        .lightbox-content { position: relative; max-width: 90%; max-height: 90%; }
        .lightbox-img { max-width: 100%; max-height: 100%; border-radius: 10px; }
        .close-lightbox { position: absolute; top: -40px; right: 0; color: white; font-size: 2rem; cursor: pointer; }
        
        .payment-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); z-index: 1000; align-items: center; justify-content: center; }
        .payment-modal.hidden { display: none; }
        .payment-modal:not(.hidden) { display: flex; }
        .payment-modal-content { background: #111; padding: 2rem; border-radius: 15px; border: 2px solid #ff1493; max-width: 400px; position: relative; }
        .close-payment { position: absolute; top: 10px; right: 15px; color: white; font-size: 1.5rem; cursor: pointer; }
        .amount-display { font-size: 2rem; color: #ff1493; text-align: center; margin-bottom: 1rem; }
        .email-box { display: flex; gap: 10px; margin: 1rem 0; }
        .email-box input { flex: 1; padding: 10px; background: #222; border: 1px solid #ff1493; color: #fff; }
        .email-box button { background: #ff1493; color: white; border: none; padding: 10px; cursor: pointer; }
        
        @media (max-width: 768px) {
          .nav-wrapper { display: none; }
          .hero h1 { font-size: 2rem; }
          .services-grid { grid-template-columns: 1fr; }
          .booking-content { grid-template-columns: 1fr; }
          .contact-content { grid-template-columns: 1fr; }
          .pricing-grid { grid-template-columns: 1fr; }
          .about ul { flex-direction: column; align-items: center; }
        }
      `}</style>
    </>
  )
}
