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

    window.handleContactForm = function(event) {
      event.preventDefault();
      const name = document.getElementById('contactName').value;
      const email = document.getElementById('contactEmail').value;
      const message = document.getElementById('contactMessage').value;
      
      window.location.href = `mailto:kathtri57@gmail.com?subject=Contact&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    };
  }, []);

  return (
    <>
      <Head>
        <title>Kathy - Your Kinky Trans Dominatrix & Sissy Trainer</title>
        <meta name="description" content="Kinky trans mistress specializing in BDSM, sissy training, and domination sessions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <nav className="navbar">
        <div className="nav-container">
          <h1 className="logo">TshungKath</h1>
          <button className="mobile-menu-btn" onClick={() => window.toggleMobileMenu()}>☰</button>
          <div className="nav-wrapper" id="mobileNav">
            <ul className="nav-menu">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
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
              <h3>Sissy Training</h3>
              <p>Engaging in role-play sessions focus on dominance and submission</p>
            </div>
            <div className="service-card">
              <h3>Meet Ups & Playdates</h3>
              <p>Discreet in-person meetings for kinky playdates and sessions</p>
            </div>
            <div className="service-card">
              <h3>Dungeon Play Sessions</h3>
              <p>Engaging in BDSM activities and domination sessions</p>
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
          </div>
          
          <div className="gallery-content hidden" id="galleryContent">
            <div className="gallery-grid">
              <div className="gallery-item">📷 Gallery Image 1</div>
              <div className="gallery-item">📷 Gallery Image 2</div>
              <div className="gallery-item">📷 Gallery Image 3</div>
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

      <style jsx global>{`
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body { font-family: Arial, sans-serif; background: #000; color: #fff; }
        
        .navbar { background: #000; padding: 1rem 0; border-bottom: 2px solid #ff1493; }
        .nav-container { max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; padding: 0 1rem; }
        .logo { color: #ff1493; font-size: 1.8rem; }
        .mobile-menu-btn { background: #ff1493; border: none; color: white; padding: 8px 12px; border-radius: 5px; cursor: pointer; }
        .nav-wrapper { display: none; }
        .nav-menu { display: flex; list-style: none; gap: 2rem; }
        .nav-menu a { color: #fff; text-decoration: none; padding: 0.5rem 1rem; }
        .nav-menu a:hover { background: #ff1493; border-radius: 5px; }
        
        .hero { background: linear-gradient(135deg, #ff1493, #000); padding: 6rem 0; text-align: center; }
        .hero h1 { font-size: 3rem; margin-bottom: 1rem; }
        .hero p { font-size: 1.2rem; margin-bottom: 2rem; }
        .cta-button { background: #ff1493; color: white; padding: 1rem 2rem; text-decoration: none; border-radius: 25px; }
        
        .about, .services, .gallery, .contact { padding: 4rem 0; }
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
        .gallery-item { background: #111; padding: 3rem 1rem; text-align: center; border-radius: 10px; border: 1px solid #ff1493; }
        
        .contact-content { display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; }
        .contact-item { margin-bottom: 1rem; }
        .contact-form { background: #111; padding: 2rem; border-radius: 15px; border: 1px solid #ff1493; }
        .contact-form input, .contact-form textarea { width: 100%; padding: 1rem; margin-bottom: 1rem; background: #222; border: 1px solid #ff1493; border-radius: 5px; color: #fff; }
        .contact-form button { background: #ff1493; color: white; padding: 1rem 2rem; border: none; border-radius: 5px; cursor: pointer; width: 100%; }
        
        .hidden { display: none !important; }
        
        @media (max-width: 768px) {
          .nav-wrapper { display: none; position: absolute; top: 100%; left: 0; width: 100%; background: #000; }
          .nav-menu { flex-direction: column; gap: 0; }
          .hero h1 { font-size: 2rem; }
          .services-grid { grid-template-columns: 1fr; }
          .contact-content { grid-template-columns: 1fr; }
          .about ul { flex-direction: column; align-items: center; }
        }
      `}</style>
    </>
  )
}
