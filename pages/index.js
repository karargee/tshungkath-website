import Head from 'next/head'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    // Authentication System
    window.openAuthModal = function(type) {
      document.getElementById('authModal').classList.remove('hidden');
      showEmailStep();
    };
    
    window.closeAuthModal = function() {
      document.getElementById('authModal').classList.add('hidden');
      resetAuthModal();
    };
    
    function resetAuthModal() {
      ['emailStep', 'passwordStep', 'createStep', 'forgotStep', 'verificationForm'].forEach(id => {
        const element = document.getElementById(id);
        if (element) element.classList.add('hidden');
      });
    }
    
    function showEmailStep() {
      resetAuthModal();
      document.getElementById('emailStep').classList.remove('hidden');
    }
    
    window.nextToPassword = function() {
      const email = document.getElementById('authEmail').value;
      if (!email) {
        alert('Please enter your email');
        return;
      }
      
      resetAuthModal();
      document.getElementById('passwordStep').classList.remove('hidden');
      document.getElementById('userEmail').textContent = email;
    };
    
    window.backToEmail = function() {
      showEmailStep();
    };
    
    window.showCreateAccount = function() {
      resetAuthModal();
      document.getElementById('createStep').classList.remove('hidden');
    };
    
    window.handleLogin = function() {
      const email = document.getElementById('authEmail').value;
      const password = document.getElementById('authPassword').value;
      
      if (email === 'kathtri57@gmail.com' && password === 'Karar1234##') {
        localStorage.setItem('currentUser', JSON.stringify({email: email, role: 'admin'}));
        closeAuthModal();
        alert('Admin login successful!');
        updateAuthButtons(email, 'admin');
      } else {
        alert('Invalid credentials');
      }
    };
    
    window.handleSignup = function() {
      const name = document.getElementById('signupName').value;
      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      
      if (name && email && password) {
        localStorage.setItem('currentUser', JSON.stringify({name: name, email: email, role: 'user'}));
        closeAuthModal();
        alert('Account created successfully!');
        updateAuthButtons(email, 'user');
      }
    };
    
    window.logout = function() {
      localStorage.removeItem('currentUser');
      alert('Logged out successfully!');
      location.reload();
    };
    
    function updateAuthButtons(email, role) {
      const authButtons = document.querySelector('.auth-buttons');
      if (authButtons) {
        authButtons.innerHTML = `
          <span style="color: white; margin-right: 10px;">Welcome, ${email}</span>
          <button onclick="logout()" class="login-btn">Logout</button>
          ${role === 'admin' ? '<button onclick="openAdminPanel()" class="admin-btn">Admin</button>' : ''}
        `;
      }
    }

    // Admin Panel
    window.openAdminPanel = function() {
      document.getElementById('adminPanel').classList.remove('hidden');
    };
    
    window.closeAdminPanel = function() {
      document.getElementById('adminPanel').classList.add('hidden');
    };

    // Mobile Menu
    window.toggleMobileMenu = function() {
      const nav = document.getElementById('mobileNav');
      const btn = document.querySelector('.mobile-menu-btn');
      
      if (nav) {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
        nav.style.position = 'absolute';
        nav.style.top = '100%';
        nav.style.left = '0';
        nav.style.width = '100%';
        nav.style.background = '#000';
        nav.style.zIndex = '999';
        nav.style.border = '1px solid #ff1493';
        
        btn.textContent = nav.style.display === 'block' ? '✕' : '☰';
      }
    };

    // Gallery Functions
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

    // Pricing Functions
    window.togglePricing = function(serviceId) {
      const details = document.getElementById(serviceId);
      if (!details) return;
      
      const card = details.closest('.pricing-card');
      const icon = card ? card.querySelector('.expand-icon') : null;
      
      if (details.classList.contains('hidden')) {
        details.classList.remove('hidden');
        if (card) card.classList.add('expanded');
        if (icon) icon.textContent = '−';
      } else {
        details.classList.add('hidden');
        if (card) card.classList.remove('expanded');
        if (icon) icon.textContent = '+';
      }
    };

    // Payment Functions
    window.openPayPalPayment = function(amount) {
      document.getElementById('paypalAmount').textContent = '$' + amount;
      document.getElementById('paypalModal').classList.remove('hidden');
    };

    window.closePaypalModal = function() {
      document.getElementById('paypalModal').classList.add('hidden');
    };

    window.openBitcoinPayment = function(amount) {
      document.getElementById('bitcoinAmount').textContent = '$' + amount;
      document.getElementById('bitcoinModal').classList.remove('hidden');
    };

    window.closeBitcoinModal = function() {
      document.getElementById('bitcoinModal').classList.add('hidden');
    };

    window.copyPaypalEmail = function() {
      navigator.clipboard.writeText('kathtri57@gmail.com').then(() => {
        alert('PayPal email copied!');
      });
    };

    window.copyBitcoinAddress = function() {
      navigator.clipboard.writeText('bc1q77mna3wnsvfuts4jksua6609l2fzych6vkgejs').then(() => {
        alert('Bitcoin address copied!');
      });
    };

    // Form Handlers
    window.handleContactForm = function(event) {
      event.preventDefault();
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const message = document.getElementById('contactMessage').value;
      const inquiry = document.getElementById('inquiryType').value;
      
      const subject = `Contact Form - ${inquiry}`;
      const body = `Name: ${name}\\nEmail: ${email}\\nInquiry Type: ${inquiry}\\nMessage: ${message}`;
      
      window.location.href = `mailto:kathtri57@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    window.handleBooking = function(event) {
      event.preventDefault();
      const service = document.getElementById('serviceType').value;
      const date = document.getElementById('bookingDate').value;
      const name = document.getElementById('clientName').value;
      const email = document.getElementById('clientEmail').value;
      
      const subject = 'Session Booking Request';
      const body = `Service: ${service}\\nDate: ${date}\\nName: ${name}\\nEmail: ${email}`;
      
      window.location.href = `mailto:kathtri57@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    };

    // Scroll Functions
    window.scrollToTop = function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('scroll', function() {
      const scrollBtn = document.getElementById('scrollTop');
      if (scrollBtn) {
        if (window.pageYOffset > 300) {
          scrollBtn.classList.add('show');
        } else {
          scrollBtn.classList.remove('show');
        }
      }
    });

    // Check login status
    const user = JSON.parse(localStorage.getItem('currentUser') || 'null');
    if (user && user.email) {
      updateAuthButtons(user.email, user.role || 'user');
    }

    // Add motion effects
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
      observer.observe(el);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Kathy - Your Kinky Trans Dominatrix & Sissy Trainer</title>
        <meta name="description" content="Kinky trans mistress specializing in BDSM, sissy training, and domination sessions" />
        <meta name="keywords" content="kinky mistress, BDSM domination, sissy training, trans dominatrix, dungeon sessions, kinky escort" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="TshungKath - Kinky Trans Mistress & BDSM Domination" />
        <meta property="og:description" content="Kinky trans mistress specializing in BDSM, sissy training, and domination sessions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tshungkath.com" />
        <link rel="canonical" href="https://tshungkath.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#ff1493" />
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
          <div className="left-section">
            <h1 className="logo">TshungKath</h1>
            <button className="mobile-menu-btn" onClick={() => window.toggleMobileMenu()}>☰</button>
          </div>
          <div className="auth-buttons">
            <button onClick={() => window.openAuthModal('login')} className="login-btn">👤 Login</button>
          </div>
          <div className="nav-wrapper" id="mobileNav">
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#booking">Book Now</a></li>
              <li><a href="#pricing">Pricing</a></li>
              <li><a href="#testimonials">Reviews</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero animate-on-scroll">
        <div className="hero-content">
          <h1 className="main-title">TshungKath</h1>
          <p id="hero-text">just imagine meeting with the most elegant,dominant,hung trans..</p>
          <a href="#contact" className="cta-button">Get In Touch</a>
        </div>
      </section>

      <section id="about" className="about animate-on-scroll">
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

      <section id="services" className="services animate-on-scroll">
        <div className="container">
          <h2 className="premium-title">Premium Services</h2>
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

      <section id="gallery" className="gallery animate-on-scroll">
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
              <div className="gallery-item" onClick={() => window.openLightbox('/20250923_033902.jpg')}>
                <img src="/20250923_033902.jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/20251013_205914.jpg')}>
                <img src="/20251013_205914.jpg" alt="Gallery Image" loading="lazy" />
                <div className="media-type">📷</div>
              </div>
              <div className="gallery-item" onClick={() => window.openLightbox('/IZ1KqdnC.jpeg')}>
                <img src="/IZ1KqdnC.jpeg" alt="Gallery Image" loading="lazy" />
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

      <section id="booking" className="booking animate-on-scroll">
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
                <select id="preferredTime" required>
                  <option value="">Preferred Time</option>
                  <option value="morning">Morning (9AM-12PM)</option>
                  <option value="afternoon">Afternoon (12PM-6PM)</option>
                  <option value="evening">Evening (6PM-12AM)</option>
                  <option value="late">Late Night (12AM-6AM)</option>
                </select>
                <input type="text" id="clientName" placeholder="Your Name" required />
                <input type="email" id="clientEmail" placeholder="Your Email" required />
                <input type="tel" id="clientPhone" placeholder="Your Phone (optional)" />
                <textarea id="specialRequests" placeholder="Special Requests" rows="3"></textarea>
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
              <div className="info-item">
                <span className="icon">⏰</span>
                <div>
                  <strong>Availability:</strong>
                  <p>24/7 for online sessions</p>
                  <p>In-person: By appointment</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="testimonials animate-on-scroll">
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

      <section id="pricing" className="pricing animate-on-scroll">
        <div className="container">
          <h2>Professional Service Rates</h2>
          <div className="pricing-grid">
            <div className="pricing-card expandable" onClick={() => window.togglePricing('online')}>
              <div className="service-badge">💻 VIRTUAL</div>
              <h3>Online Sessions</h3>
              <div className="price">$150 - $750</div>
              <ul>
                <li>HD Video chat sessions</li>
                <li>Custom requests & scenarios</li>
                <li>24/7 flexible scheduling</li>
                <li>Screen recording available</li>
              </ul>
              <div className="expand-icon">+</div>
              <div id="online" className="pricing-details hidden">
                <h4>📱 Digital Services Menu:</h4>
                <div className="service-category">
                  <h5>🎥 Video Services</h5>
                  <ul>
                    <li>Video Chat (30min) - $150</li>
                    <li>Video Chat (60min) - $250</li>
                    <li>Video Chat (90min) - $350</li>
                    <li>Premium HD Sessions - $400-$750</li>
                  </ul>
                </div>
                <div className="payment-options">
                  <button onClick={() => window.openPayPalPayment(150)}>💰 PayPal</button>
                  <button onClick={() => window.openBitcoinPayment(150)}>₿ Bitcoin</button>
                </div>
              </div>
            </div>
            
            <div className="pricing-card featured expandable" onClick={() => window.togglePricing('sissy')}>
              <div className="service-badge popular">🎭 SPECIALTY</div>
              <h3>Training Programs</h3>
              <div className="price">$300 - $1500</div>
              <ul>
                <li>Personalized training protocols</li>
                <li>Progress tracking & assessments</li>
                <li>24/7 ongoing support</li>
                <li>Certification upon completion</li>
              </ul>
              <div className="expand-icon">+</div>
              <div id="sissy" className="pricing-details hidden">
                <h4>🎓 Comprehensive Training Menu:</h4>
                <div className="service-category">
                  <h5>👗 Feminization & Sissy Training</h5>
                  <ul>
                    <li>Basic Sissy Training (1 session) - $300</li>
                    <li>Advanced Sissy Program (3 sessions) - $800</li>
                    <li>Complete Feminization Course - $1200</li>
                  </ul>
                </div>
                <div className="payment-options">
                  <button onClick={() => window.openPayPalPayment(300)}>💰 PayPal</button>
                  <button onClick={() => window.openBitcoinPayment(300)}>₿ Bitcoin</button>
                </div>
              </div>
            </div>
            
            <div className="pricing-card expandable" onClick={() => window.togglePricing('inperson')}>
              <div className="service-badge premium">🏛️ ELITE</div>
              <h3>In-Person Sessions</h3>
              <div className="price">$700 - $5000</div>
              <ul>
                <li>Private luxury meetings</li>
                <li>Professional dungeon sessions</li>
                <li>Worldwide travel available</li>
                <li>Discretion & confidentiality guaranteed</li>
              </ul>
              <div className="expand-icon">+</div>
              <div id="inperson" className="pricing-details hidden">
                <h4>🏆 Premium In-Person Services:</h4>
                <div className="service-category">
                  <h5>🏰 Dungeon & BDSM Sessions</h5>
                  <ul>
                    <li>Dungeon Play Sessions - $800-$1500</li>
                    <li>Heavy BDSM Sessions - $1000-$2000</li>
                    <li>Equipment Training - $900-$1600</li>
                  </ul>
                </div>
                <div className="payment-options">
                  <button onClick={() => window.openPayPalPayment(700)}>💰 PayPal</button>
                  <button onClick={() => window.openBitcoinPayment(700)}>₿ Bitcoin</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact animate-on-scroll">
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
                <a href="https://t.me/tshungkath10" target="_blank" rel="noopener noreferrer">Telegram</a>
              </div>
            </div>
            <div className="contact-form">
              <h3>Send a Message / Book Session</h3>
              <form onSubmit={(e) => window.handleContactForm(e)}>
                <input type="text" id="contactName" placeholder="Your Name" required />
                <input type="email" id="contactEmail" placeholder="Your Email" required />
                <select id="inquiryType">
                  <option value="general">General Inquiry</option>
                  <option value="booking">Book Session</option>
                  <option value="payment">Payment Confirmation</option>
                </select>
                <textarea id="contactMessage" placeholder="Your Message / Special Requests" rows="5" required></textarea>
                <button type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Auth Modal */}
      <div id="authModal" className="auth-modal hidden">
        <div className="auth-modal-content">
          <span className="close-auth" onClick={() => window.closeAuthModal()}>&times;</span>
          
          <div id="emailStep" className="auth-form">
            <h3>Sign in</h3>
            <p>to continue to TshungKath</p>
            <input type="email" id="authEmail" placeholder="Email" required />
            <div className="auth-buttons-modal">
              <button onClick={() => window.showCreateAccount()} className="secondary-btn">Create account</button>
              <button onClick={() => window.nextToPassword()} className="primary-btn">Next</button>
            </div>
          </div>
          
          <div id="passwordStep" className="auth-form hidden">
            <div className="user-info">
              <span id="userEmail"></span>
              <button onClick={() => window.backToEmail()} className="back-btn">↩</button>
            </div>
            <h3>Welcome</h3>
            <input type="password" id="authPassword" placeholder="Enter your password" required />
            <div className="auth-buttons-modal">
              <button onClick={() => window.handleLogin()} className="primary-btn full-width">Sign in</button>
            </div>
          </div>
          
          <div id="createStep" className="auth-form hidden">
            <h3>Create account</h3>
            <p>Join TshungKath premium services</p>
            <input type="text" id="signupName" placeholder="Full name" required />
            <input type="email" id="signupEmail" placeholder="Email" required />
            <input type="password" id="signupPassword" placeholder="Password" required />
            <div className="auth-buttons-modal">
              <button onClick={() => window.backToEmail()} className="secondary-btn">Sign in instead</button>
              <button onClick={() => window.handleSignup()} className="primary-btn">Create</button>
            </div>
          </div>
        </div>
      </div>

      {/* Admin Panel */}
      <div id="adminPanel" className="admin-panel hidden">
        <div className="admin-panel-content">
          <span className="close-admin" onClick={() => window.closeAdminPanel()}>&times;</span>
          <h3>🔧 Admin Dashboard</h3>
          <div className="admin-tabs">
            <div className="admin-section">
              <h4>📊 Analytics</h4>
              <p>Total Users: 150</p>
              <p>Active Sessions: 12</p>
              <p>Revenue This Month: $15,750</p>
            </div>
            <div className="admin-section">
              <h4>👥 User Management</h4>
              <button className="admin-btn">View All Users</button>
              <button className="admin-btn">Manage Subscriptions</button>
            </div>
            <div className="admin-section">
              <h4>💰 Payments</h4>
              <button className="admin-btn">Payment History</button>
              <button className="admin-btn">Pending Payments</button>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <div id="lightbox" className="lightbox" onClick={() => window.closeLightbox()}>
        <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-lightbox" onClick={() => window.closeLightbox()}>&times;</span>
          <img id="lightbox-img" className="lightbox-img" alt="Gallery" />
        </div>
      </div>

      {/* PayPal Payment Modal */}
      <div id="paypalModal" className="payment-modal hidden">
        <div className="payment-modal-content">
          <span className="close-payment" onClick={() => window.closePaypalModal()}>&times;</span>
          <h3>💰 PayPal Payment</h3>
          <div className="payment-info">
            <div className="amount-display" id="paypalAmount">$0</div>
            <div className="paypal-email-container">
              <label>PayPal Email:</label>
              <div className="email-box">
                <input type="text" id="paypalEmail" value="kathtri57@gmail.com" readOnly />
                <button onClick={() => window.copyPaypalEmail()} className="copy-btn">📋 Copy</button>
              </div>
            </div>
            <p>Send payment to this PayPal email or contact us for invoice</p>
          </div>
        </div>
      </div>

      {/* Bitcoin Payment Modal */}
      <div id="bitcoinModal" className="payment-modal hidden">
        <div className="payment-modal-content">
          <span className="close-payment" onClick={() => window.closeBitcoinModal()}>&times;</span>
          <h3>₿ Bitcoin Payment</h3>
          <div className="payment-info">
            <div className="amount-display" id="bitcoinAmount">$0</div>
            <div className="bitcoin-address-container">
              <label>Bitcoin Address:</label>
              <div className="address-box">
                <input type="text" id="bitcoinAddress" value="bc1q77mna3wnsvfuts4jksua6609l2fzych6vkgejs" readOnly />
                <button onClick={() => window.copyBitcoinAddress()} className="copy-btn">📋 Copy</button>
              </div>
            </div>
            <p>Send payment to this address and contact <strong>kathtri57@gmail.com</strong> with transaction ID</p>
          </div>
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

      <button id="scrollTop" className="scroll-top" onClick={() => window.scrollToTop()}>↑</button>
      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #000; color: #fff; line-height: 1.6; overflow-x: hidden; }
        
        /* Motion Effects */
        .animate-on-scroll { opacity: 0; transform: translateY(50px); transition: all 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94); }
        .animate-on-scroll.animate-in { opacity: 1; transform: translateY(0); }
        
        .social-top { background: #111; padding: 0.5rem 0; text-align: center; }
        .social-links a { margin: 0 10px; font-size: 1.2rem; text-decoration: none; transition: transform 0.3s; }
        .social-links a:hover { transform: scale(1.2); }
        
        .navbar { background: #000; padding: 1rem 0; border-bottom: 2px solid #ff1493; position: sticky; top: 0; z-index: 100; backdrop-filter: blur(10px); }
        .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 1rem; }
        .left-section { display: flex; align-items: center; }
        .logo { color: #ff1493; font-size: 1.8rem; font-weight: bold; text-shadow: 0 0 10px rgba(255,20,147,0.5); }
        .mobile-menu-btn { background: #ff1493; border: none; color: white; font-size: 18px; padding: 8px 12px; border-radius: 5px; cursor: pointer; margin-left: 15px; display: none; transition: all 0.3s; }
        .mobile-menu-btn:hover { transform: scale(1.1); }
        .auth-buttons { display: flex; gap: 1rem; }
        .login-btn, .admin-btn { background: linear-gradient(135deg, #ff1493, #ff6b9d); border: none; color: white; padding: 8px 16px; border-radius: 20px; cursor: pointer; transition: all 0.3s; box-shadow: 0 2px 10px rgba(255,20,147,0.3); }
        .login-btn:hover, .admin-btn:hover { transform: translateY(-2px); box-shadow: 0 4px 15px rgba(255,20,147,0.5); }
        .nav-wrapper { display: block; }
        .nav-menu { display: flex; list-style: none; gap: 2rem; }
        .nav-menu a { color: #fff; text-decoration: none; padding: 0.5rem 1rem; border-radius: 20px; transition: all 0.3s; position: relative; }
        .nav-menu a:hover { background: linear-gradient(135deg, #ff1493, #ff6b9d); transform: translateY(-2px); }
        
        .hero { 
          background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop') center/cover;
          padding: 8rem 0; 
          text-align: center; 
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
        }
        .hero::before { content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: linear-gradient(45deg, rgba(255,20,147,0.1), rgba(0,0,0,0.8)); }
        .hero-content { max-width: 800px; position: relative; z-index: 2; }
        .hero-content h1 { font-size: 4rem; margin-bottom: 1rem; color: #fff; text-shadow: 2px 2px 4px rgba(0,0,0,0.8); animation: glow 2s ease-in-out infinite alternate; }
        @keyframes glow { from { text-shadow: 2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(255,20,147,0.5); } to { text-shadow: 2px 2px 4px rgba(0,0,0,0.8), 0 0 30px rgba(255,20,147,0.8); } }
        .hero-content p { font-size: 1.4rem; margin-bottom: 2rem; opacity: 0.9; }
        .cta-button { background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; padding: 1.2rem 2.5rem; text-decoration: none; border-radius: 30px; display: inline-block; font-weight: bold; font-size: 1.1rem; transition: all 0.3s; box-shadow: 0 4px 15px rgba(255,20,147,0.4); }
        .cta-button:hover { transform: translateY(-3px) scale(1.05); box-shadow: 0 6px 20px rgba(255,20,147,0.6); }
        
        .about, .services, .gallery, .booking, .testimonials, .pricing, .contact { padding: 5rem 0; }
        .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        h2 { font-size: 3rem; text-align: center; margin-bottom: 4rem; color: #ff1493; text-shadow: 1px 1px 2px rgba(0,0,0,0.5); position: relative; }
        h2::after { content: ''; position: absolute; bottom: -10px; left: 50%; transform: translateX(-50%); width: 100px; height: 3px; background: linear-gradient(135deg, #ff1493, #ff6b9d); border-radius: 2px; }
        
        .about-text { max-width: 800px; margin: 0 auto; text-align: center; }
        .about-text p { font-size: 1.2rem; margin-bottom: 2rem; line-height: 1.8; }
        .about-text ul { list-style: none; display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap; margin-top: 3rem; }
        .about-text li { background: linear-gradient(135deg, #111, #222); padding: 1.5rem; border-radius: 15px; border: 2px solid #ff1493; box-shadow: 0 4px 15px rgba(255,20,147,0.2); transition: all 0.3s; }
        .about-text li:hover { transform: translateY(-5px); box-shadow: 0 8px 25px rgba(255,20,147,0.4); }
        
        .services-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 2rem; }
        .service-card { background: linear-gradient(135deg, #111, #222); padding: 2.5rem; border-radius: 20px; border: 2px solid #ff1493; text-align: center; transition: all 0.5s; box-shadow: 0 4px 15px rgba(0,0,0,0.3); position: relative; overflow: hidden; }
        .service-card::before { content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; background: linear-gradient(45deg, transparent, rgba(255,20,147,0.1), transparent); transform: rotate(45deg); transition: all 0.5s; opacity: 0; }
        .service-card:hover::before { opacity: 1; animation: shimmer 1s ease-in-out; }
        .service-card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 15px 35px rgba(255,20,147,0.3); }
        @keyframes shimmer { 0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); } 100% { transform: translateX(100%) translateY(100%) rotate(45deg); } }
        .service-card h3 { color: #ff1493; margin-bottom: 1rem; font-size: 1.3rem; position: relative; z-index: 2; }
        .service-card p { position: relative; z-index: 2; }
        
        .gallery-folder { background: linear-gradient(135deg, #111, #222); padding: 4rem; border-radius: 20px; text-align: center; cursor: pointer; border: 2px solid #ff1493; max-width: 500px; margin: 0 auto; transition: all 0.5s; box-shadow: 0 4px 15px rgba(0,0,0,0.3); }
        .gallery-folder:hover { transform: scale(1.05) rotateY(5deg); box-shadow: 0 15px 35px rgba(255,20,147,0.4); }
        .folder-icon { font-size: 4rem; margin-bottom: 1rem; animation: bounce 2s infinite; }
        @keyframes bounce { 0%, 20%, 50%, 80%, 100% { transform: translateY(0); } 40% { transform: translateY(-10px); } 60% { transform: translateY(-5px); } }
        .folder-lock { font-size: 2rem; margin-top: 1rem; }
        .gallery-content { margin-top: 3rem; }
        .gallery-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
        .gallery-item { position: relative; border-radius: 15px; overflow: hidden; cursor: pointer; border: 2px solid #ff1493; transition: all 0.3s; }
        .gallery-item:hover { transform: scale(1.05) rotate(2deg); box-shadow: 0 10px 25px rgba(255,20,147,0.5); }
        .gallery-item img { width: 100%; height: 250px; object-fit: cover; transition: all 0.3s; }
        .gallery-item:hover img { transform: scale(1.1); }
        .media-type { position: absolute; top: 10px; right: 10px; background: rgba(0,0,0,0.8); padding: 8px; border-radius: 8px; font-size: 1.2rem; }
        
        .booking-content { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .booking-form { background: linear-gradient(135deg, #111, #222); padding: 3rem; border-radius: 20px; border: 2px solid #ff1493; }
        .booking-form input, .booking-form select, .booking-form textarea { width: 100%; padding: 1rem; margin-bottom: 1rem; background: #333; border: 2px solid #ff1493; border-radius: 8px; color: #fff; font-size: 1rem; transition: all 0.3s; }
        .booking-form input:focus, .booking-form select:focus, .booking-form textarea:focus { border-color: #ff6b9d; box-shadow: 0 0 10px rgba(255,20,147,0.3); }
        .booking-form button { background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; padding: 1rem 2rem; border: none; border-radius: 8px; cursor: pointer; font-size: 1.1rem; width: 100%; transition: all 0.3s; }
        .booking-form button:hover { transform: translateY(-2px); box-shadow: 0 5px 15px rgba(255,20,147,0.4); }
        .info-item { display: flex; align-items: flex-start; gap: 1rem; margin-bottom: 2rem; }
        .info-item .icon { font-size: 1.5rem; }
        
        .testimonials { background: linear-gradient(135deg, #111, #0a0a0a); }
        .testimonials-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; }
        .testimonial-card { background: linear-gradient(135deg, #222, #333); padding: 2rem; border-radius: 15px; border: 2px solid #ff1493; text-align: center; transition: all 0.3s; }
        .testimonial-card:hover { transform: translateY(-5px); box-shadow: 0 10px 25px rgba(255,20,147,0.3); }
        .stars { font-size: 1.5rem; margin-bottom: 1rem; }
        .client-name { color: #ff1493; font-weight: bold; }
        
        .pricing-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 2rem; }
        .pricing-card { background: linear-gradient(135deg, #111, #222); padding: 2.5rem; border-radius: 20px; border: 2px solid #ff1493; cursor: pointer; transition: all 0.5s; position: relative; overflow: hidden; }
        .pricing-card:hover { transform: translateY(-10px) scale(1.02); box-shadow: 0 15px 35px rgba(255,20,147,0.4); }
        .pricing-card.featured { border-color: #ff6b35; box-shadow: 0 0 20px rgba(255,107,53,0.3); }
        .pricing-card.featured:hover { box-shadow: 0 15px 35px rgba(255,107,53,0.5); }
        .service-badge { position: absolute; top: -15px; left: 25px; background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; padding: 8px 20px; border-radius: 20px; font-size: 0.9rem; font-weight: bold; }
        .popular { background: linear-gradient(135deg, #ff6b35, #ff8c42); }
        .premium { background: linear-gradient(135deg, #8e44ad, #9b59b6); }
        .price { font-size: 2.5rem; color: #ff1493; font-weight: bold; margin: 1.5rem 0; text-align: center; }
        .expand-icon { position: absolute; top: 25px; right: 25px; font-size: 1.8rem; color: #ff1493; transition: all 0.3s; }
        .pricing-card.expanded .expand-icon { transform: rotate(45deg); }
        .pricing-details { margin-top: 2rem; padding-top: 2rem; border-top: 1px solid #333; }
        .service-category { margin-bottom: 2rem; }
        .service-category h5 { color: #ff1493; margin-bottom: 1rem; font-size: 1.1rem; }
        .payment-options { display: flex; gap: 1rem; margin-top: 1.5rem; }
        .payment-options button { background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; border: none; padding: 0.8rem 1.5rem; border-radius: 8px; cursor: pointer; transition: all 0.3s; }
        .payment-options button:hover { transform: translateY(-2px); }
        
        .contact-content { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; }
        .contact-item { display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem; }
        .contact-form { background: linear-gradient(135deg, #111, #222); padding: 3rem; border-radius: 20px; border: 2px solid #ff1493; }
        .contact-form input, .contact-form select, .contact-form textarea { width: 100%; padding: 1rem; margin-bottom: 1rem; background: #333; border: 2px solid #ff1493; border-radius: 8px; color: #fff; transition: all 0.3s; }
        .contact-form input:focus, .contact-form select:focus, .contact-form textarea:focus { border-color: #ff6b9d; box-shadow: 0 0 10px rgba(255,20,147,0.3); }
        .contact-form button { background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; padding: 1rem 2rem; border: none; border-radius: 8px; cursor: pointer; width: 100%; font-size: 1.1rem; transition: all 0.3s; }
        .contact-form button:hover { transform: translateY(-2px); }
        
        .hidden { display: none !important; }
        
        /* Auth Modal */
        .auth-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 1000; display: flex; align-items: center; justify-content: center; }
        .auth-modal-content { background: linear-gradient(135deg, #111, #222); padding: 3rem; border-radius: 20px; border: 2px solid #ff1493; max-width: 400px; width: 90%; position: relative; }
        .close-auth { position: absolute; top: 15px; right: 20px; color: white; font-size: 2rem; cursor: pointer; }
        .auth-form input { width: 100%; padding: 1rem; margin-bottom: 1rem; background: #333; border: 2px solid #ff1493; border-radius: 8px; color: #fff; }
        .auth-buttons-modal { display: flex; gap: 1rem; margin-top: 1rem; }
        .primary-btn, .secondary-btn { padding: 0.8rem 1.5rem; border: none; border-radius: 8px; cursor: pointer; transition: all 0.3s; }
        .primary-btn { background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; }
        .secondary-btn { background: transparent; color: #ff1493; border: 2px solid #ff1493; }
        .full-width { width: 100%; }
        .back-btn { background: none; border: none; color: #ff1493; cursor: pointer; }
        
        /* Admin Panel */
        .admin-panel { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 1000; display: flex; align-items: center; justify-content: center; }
        .admin-panel-content { background: linear-gradient(135deg, #111, #222); padding: 3rem; border-radius: 20px; border: 2px solid #ff1493; max-width: 600px; width: 90%; position: relative; }
        .close-admin { position: absolute; top: 15px; right: 20px; color: white; font-size: 2rem; cursor: pointer; }
        .admin-section { margin-bottom: 2rem; padding: 1rem; background: #333; border-radius: 10px; }
        .admin-btn { background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer; margin: 0.5rem; }
        
        .lightbox { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.95); z-index: 1000; align-items: center; justify-content: center; }
        .lightbox-content { position: relative; max-width: 90%; max-height: 90%; }
        .lightbox-img { max-width: 100%; max-height: 100%; border-radius: 10px; }
        .close-lightbox { position: absolute; top: -50px; right: 0; color: white; font-size: 2.5rem; cursor: pointer; background: rgba(0,0,0,0.7); padding: 10px 15px; border-radius: 50%; }
        
        .payment-modal { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.9); z-index: 1000; align-items: center; justify-content: center; }
        .payment-modal.hidden { display: none; }
        .payment-modal:not(.hidden) { display: flex; }
        .payment-modal-content { background: linear-gradient(135deg, #111, #222); padding: 3rem; border-radius: 20px; border: 2px solid #ff1493; max-width: 500px; width: 90%; position: relative; }
        .close-payment { position: absolute; top: 15px; right: 20px; color: white; font-size: 2rem; cursor: pointer; }
        .amount-display { font-size: 3rem; color: #ff1493; text-align: center; margin-bottom: 2rem; font-weight: bold; }
        .paypal-email-container label, .bitcoin-address-container label { display: block; margin-bottom: 0.5rem; color: #ff1493; }
        .email-box, .address-box { display: flex; gap: 10px; margin: 1rem 0; }
        .email-box input, .address-box input { flex: 1; padding: 15px; background: #333; border: 2px solid #ff1493; color: #fff; border-radius: 8px; }
        .copy-btn { background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; border: none; padding: 15px 20px; border-radius: 8px; cursor: pointer; transition: all 0.3s; }
        .copy-btn:hover { transform: translateY(-2px); }
        
        .footer { background: linear-gradient(135deg, #111, #0a0a0a); padding: 4rem 0 2rem; border-top: 2px solid #ff1493; margin-top: 4rem; }
        .footer-content { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 3rem; margin-bottom: 3rem; }
        .footer-section h3, .footer-section h4 { color: #ff1493; margin-bottom: 1rem; }
        .footer-section ul { list-style: none; }
        .footer-section li { margin-bottom: 0.5rem; }
        .footer-section a { color: #fff; text-decoration: none; transition: color 0.3s; }
        .footer-section a:hover { color: #ff1493; }
        .footer-bottom { text-align: center; padding-top: 2rem; border-top: 1px solid #333; }
        
        .scroll-top { position: fixed; bottom: 30px; right: 30px; background: linear-gradient(135deg, #ff1493, #ff6b9d); color: white; border: none; padding: 15px; border-radius: 50%; cursor: pointer; font-size: 1.2rem; opacity: 0; transition: all 0.3s; z-index: 100; box-shadow: 0 4px 15px rgba(255,20,147,0.4); }
        .scroll-top.show { opacity: 1; }
        .scroll-top:hover { transform: translateY(-3px); box-shadow: 0 6px 20px rgba(255,20,147,0.6); }
        
        @media (max-width: 768px) {
          .mobile-menu-btn { display: block; }
          .nav-wrapper { display: none; position: absolute; top: 100%; left: 0; width: 100%; background: #000; border: 1px solid #ff1493; }
          .nav-menu { flex-direction: column; gap: 0; }
          .nav-menu li { border-bottom: 1px solid #333; text-align: center; }
          .hero-content h1 { font-size: 2.5rem; }
          .hero { padding: 4rem 0; }
          .services-grid { grid-template-columns: 1fr; }
          .booking-content { grid-template-columns: 1fr; }
          .contact-content { grid-template-columns: 1fr; }
          .pricing-grid { grid-template-columns: 1fr; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .about-text ul { flex-direction: column; align-items: center; }
          .footer-content { grid-template-columns: 1fr; text-align: center; }
          .payment-options { flex-direction: column; }
        }
      `}</style>
    </>
  )
}
