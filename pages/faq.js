import Head from 'next/head'
import { useState } from 'react'

export default function FAQ() {
  const [openFAQ, setOpenFAQ] = useState(null)

  const faqs = [
    {
      category: "General Questions",
      questions: [
        {
          q: "What services do you offer?",
          a: "I offer a wide range of professional domination services including online sessions, sissy training, in-person meetings, chastity training, financial domination, foot worship, and mobile dungeon experiences. Each service is tailored to your specific needs and limits."
        },
        {
          q: "Are you available 24/7?",
          a: "Yes, I'm available 24/7 for bookings and consultations. However, session times may vary based on availability. I recommend booking in advance to secure your preferred time slot."
        },
        {
          q: "Do you offer services worldwide?",
          a: "Online services are available worldwide. For in-person sessions, I'm available in major cities and can travel for elite clients. Travel fees may apply for distant locations."
        },
        {
          q: "How do I know if this is right for me?",
          a: "If you're curious about BDSM, domination, or exploring your submissive side, we can start with a consultation to discuss your interests and boundaries. There's no pressure, and we'll go at your pace."
        }
      ]
    },
    {
      category: "Booking & Payment",
      questions: [
        {
          q: "How do I book a session?",
          a: "You can book through the website, email me directly at kathtri57@gmail.com, or contact me via Telegram @tshungkathy. I'll respond within 24 hours to confirm availability and discuss details."
        },
        {
          q: "What payment methods do you accept?",
          a: "I accept credit cards, PayPal, and Bitcon. Payment is required in advance to secure your booking. For in-person sessions, a 50% deposit is required."
        },
        {
          q: "What's your cancellation policy?",
          a: "Cancellations made 24+ hours in advance receive a full refund. Cancellations within 24 hours are subject to a 50% fee. No-shows forfeit the full payment."
        },
        {
          q: "Are there any additional fees?",
          a: "Listed prices include all standard services. Travel fees may apply for distant locations. Special equipment or custom requests may incur additional charges, which will be discussed beforehand."
        }
      ]
    },
    {
      category: "Safety & Privacy",
      questions: [
        {
          q: "Is my privacy protected?",
          a: "Absolutely. Complete discretion is guaranteed. I never share client information, photos, or details about our sessions. Your privacy and confidentiality are my top priorities."
        },
        {
          q: "How do you ensure safety during sessions?",
          a: "Safety is paramount. I follow strict SSC (Safe, Sane, Consensual) principles, use safe words, conduct health screenings, maintain sanitized equipment, and provide proper aftercare."
        },
        {
          q: "What if I'm nervous or inexperienced?",
          a: "That's completely normal! I specialize in working with beginners. We'll start slowly, discuss everything beforehand, and I'll guide you through the experience at your comfort level."
        },
        {
          q: "Can I set limits and boundaries?",
          a: "Yes, absolutely! Setting clear boundaries is essential. We'll discuss your limits, desires, and any concerns before any session. Your boundaries will always be respected."
        }
      ]
    },
    {
      category: "Specific Services",
      questions: [
        {
          q: "What does sissy training involve?",
          a: "Sissy training includes makeup tutorials, feminine behavior coaching, voice training, wardrobe guidance, and complete feminization programs. Each program is customized to your goals and experience level."
        },
        {
          q: "How does chastity training work?",
          a: "Chastity training involves wearing a chastity device while I control your releases. We start with short periods and gradually increase duration. I provide guidance on device selection, hygiene, and mental preparation."
        },
        {
          q: "What's included in the mobile dungeon service?",
          a: "My mobile dungeon includes professional BDSM equipment, restraints, impact play tools, medical equipment, and complete setup at your location. It's fully sanitized and discreet."
        },
        {
          q: "What happens during financial domination?",
          a: "Financial domination involves tribute payments, budget control, and financial tasks. We'll establish your financial limits beforehand, and I never pressure clients beyond their means."
        }
      ]
    },
    {
      category: "Technical & Logistics",
      questions: [
        {
          q: "What do I need for online sessions?",
          a: "You'll need a computer or smartphone with camera, microphone, and stable internet connection. I'll provide instructions for the platform we'll use and any specific requirements."
        },
        {
          q: "Where do in-person sessions take place?",
          a: "Sessions can take place at your location (hotel, residence) or at approved private venues. For mobile dungeon services, I bring everything to your preferred location."
        },
        {
          q: "How far in advance should I book?",
          a: "For online sessions, 24-48 hours is usually sufficient. In-person sessions require 48-72 hours notice. Mobile dungeon services need 48+ hours for setup and location approval."
        },
        {
          q: "Do you provide aftercare?",
          a: "Yes, proper aftercare is included in all sessions. This includes emotional support, physical care if needed, and follow-up communication to ensure your well-being."
        }
      ]
    }
  ]

  const toggleFAQ = (categoryIndex, questionIndex) => {
    const key = `${categoryIndex}-${questionIndex}`
    setOpenFAQ(openFAQ === key ? null : key)
  }

  return (
    <>
      <Head>
        <title>FAQ - TshungKath Professional Services</title>
        <meta name="description" content="Frequently asked questions about professional domination services" />
      </Head>

      <nav style={{ background: '#000', padding: '1rem 0', borderBottom: '2px solid #ff1493' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
          <a href="/" style={{ color: '#ff1493', fontSize: '1.8rem', fontWeight: 'bold', textDecoration: 'none' }}>TshungKath</a>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', padding: '8px 16px', background: '#ff1493', borderRadius: '20px' }}>← Back to Home</a>
        </div>
      </nav>

      <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '50px 0' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '30px', color: '#ff1493' }}>
            ❓ Frequently Asked Questions
          </h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '50px', color: '#ccc' }}>
            Find answers to common questions about my services, booking, and what to expect
          </p>

          {faqs.map((category, categoryIndex) => (
            <div key={categoryIndex} style={{ marginBottom: '40px' }}>
              <h2 style={{ color: '#ff1493', fontSize: '1.8rem', marginBottom: '25px', borderBottom: '2px solid #ff1493', paddingBottom: '10px' }}>
                {category.category}
              </h2>
              
              {category.questions.map((faq, questionIndex) => {
                const isOpen = openFAQ === `${categoryIndex}-${questionIndex}`
                return (
                  <div key={questionIndex} style={{ marginBottom: '15px', background: 'linear-gradient(135deg, #111, #222)', borderRadius: '10px', border: '2px solid rgba(255,20,147,0.3)' }}>
                    <button
                      onClick={() => toggleFAQ(categoryIndex, questionIndex)}
                      style={{
                        width: '100%', padding: '20px', background: 'none', border: 'none', 
                        color: '#fff', textAlign: 'left', cursor: 'pointer', fontSize: '16px',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        fontWeight: 'bold'
                      }}
                    >
                      <span>{faq.q}</span>
                      <span style={{ color: '#ff1493', fontSize: '20px', transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
                        +
                      </span>
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 20px 20px', color: '#ccc', lineHeight: '1.6', borderTop: '1px solid rgba(255,20,147,0.2)' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          ))}

          <div style={{ textAlign: 'center', marginTop: '60px', padding: '40px', background: 'rgba(255,20,147,0.1)', borderRadius: '15px', border: '2px solid rgba(255,20,147,0.3)' }}>
            <h3 style={{ color: '#ff1493', fontSize: '1.5rem', marginBottom: '20px' }}>Still Have Questions?</h3>
            <p style={{ color: '#ccc', marginBottom: '25px', lineHeight: '1.6' }}>
              Can't find what you're looking for? I'm here to help! Contact me directly and I'll answer any questions you have about my services.
            </p>
            <div style={{ display: 'flex', gap: '15px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:kathtri57@gmail.com" style={{ background: 'linear-gradient(45deg, #ff1493, #ff69b4)', color: 'white', padding: '12px 24px', textDecoration: 'none', borderRadius: '25px', fontWeight: 'bold' }}>
                📧 Email Me
              </a>
              <a href="https://t.me/tshungkathy" target="_blank" style={{ background: 'linear-gradient(45deg, #0088cc, #00aaff)', color: 'white', padding: '12px 24px', textDecoration: 'none', borderRadius: '25px', fontWeight: 'bold' }}>
                📱 Telegram
              </a>
            </div>
          </div>

          <div style={{ marginTop: '40px', padding: '30px', background: 'linear-gradient(135deg, #111, #222)', borderRadius: '15px', border: '2px solid #ff1493' }}>
            <h3 style={{ color: '#ff1493', marginBottom: '20px' }}>🔞 Important Disclaimers</h3>
            <ul style={{ listStyle: 'none', padding: 0, color: '#ccc', lineHeight: '1.8' }}>
              <li>• All services are for consenting adults 18+ only</li>
              <li>• Services are for entertainment and personal exploration</li>
              <li>• Complete discretion and confidentiality guaranteed</li>
              <li>• All activities follow strict safety protocols</li>
              <li>• Boundaries and limits are always respected</li>
              <li>• Professional, non-sexual services only</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}