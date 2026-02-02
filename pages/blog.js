import Head from 'next/head'
import { useState } from 'react'

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  const blogPosts = [
    {
      id: 1,
      title: "The Complete Guide to Sissy Training",
      excerpt: "Everything you need to know about starting your feminization journey...",
      content: `Welcome to the ultimate guide for sissy training! Whether you're just curious or ready to fully commit to your feminine side, this comprehensive guide will help you understand what sissy training involves and how to approach it safely.

**What is Sissy Training?**
Sissy training is the process of feminization where individuals explore and develop their feminine side through various methods including appearance, behavior, and mindset changes.

**Getting Started:**
1. **Mindset Preparation** - Understanding your motivations and goals
2. **Basic Feminization** - Starting with makeup, clothing, and posture
3. **Voice Training** - Developing a more feminine speaking voice
4. **Behavior Modification** - Learning feminine mannerisms and etiquette
5. **Advanced Training** - Exploring deeper aspects of femininity

**Safety and Consent:**
Always ensure all activities are consensual and safe. Set clear boundaries and communicate openly with your trainer.

**Professional Training:**
Working with an experienced mistress like myself ensures proper guidance, safety, and faster progress in your transformation journey.`,
      author: "Mistress Kathy",
      date: "December 28, 2024",
      category: "Training Guides",
      readTime: "8 min read"
    },
    {
      id: 2,
      title: "BDSM Safety: Essential Guidelines for Beginners",
      excerpt: "Learn the fundamental safety principles every BDSM practitioner should know...",
      content: `Safety is the cornerstone of any BDSM practice. Whether you're new to the scene or looking to refresh your knowledge, these guidelines are essential.

**The SSC Principle:**
- **Safe**: All activities should minimize risk
- **Sane**: Participants should be of sound mind
- **Consensual**: Everything must be agreed upon by all parties

**Before Any Session:**
1. **Negotiate Boundaries** - Discuss limits, desires, and expectations
2. **Establish Safe Words** - Use clear signals to communicate during play
3. **Health Considerations** - Discuss any medical conditions or concerns
4. **Equipment Safety** - Inspect all tools and restraints before use

**During Play:**
- Constant communication and awareness
- Regular check-ins with your partner
- Immediate response to safe words
- Monitoring for signs of distress

**Aftercare:**
Proper aftercare is crucial for physical and emotional well-being after intense sessions.

**Professional Sessions:**
When working with a professional dominatrix, you benefit from years of experience in safe practices and proper technique.`,
      author: "Mistress Kathy",
      date: "December 25, 2024",
      category: "Safety & Education",
      readTime: "6 min read"
    },
    {
      id: 3,
      title: "Understanding Financial Domination",
      excerpt: "Explore the psychology and dynamics of financial domination relationships...",
      content: `Financial domination (findom) is a unique form of BDSM that focuses on the power exchange through financial control and tribute.

**What is Financial Domination?**
Financial domination involves a submissive (pay pig/money slave) giving financial tribute to a dominant (financial dominatrix) as a form of submission and worship.

**The Psychology:**
- Power exchange through financial control
- The thrill of financial sacrifice
- Worship through monetary tribute
- Control over spending and budgets

**Types of Financial Domination:**
1. **Tribute Payments** - Regular or one-time payments
2. **Shopping Sprees** - Buying gifts or items for the dominatrix
3. **Bill Paying** - Taking care of the dominatrix's expenses
4. **Budget Control** - Having spending monitored and controlled

**Setting Boundaries:**
- Establish financial limits you can afford
- Never go into debt for findom activities
- Communicate your financial situation honestly
- Set up separate accounts for findom activities

**Red Flags to Avoid:**
- Demands for immediate large payments
- Pressure to go beyond your limits
- Requests for personal financial information
- Lack of respect for your boundaries

**Professional Financial Domination:**
Working with an experienced financial dominatrix ensures ethical practices and respect for your financial well-being.`,
      author: "Mistress Kathy",
      date: "December 22, 2024",
      category: "Lifestyle & Psychology",
      readTime: "7 min read"
    }
  ]

  return (
    <>
      <Head>
        <title>Blog - TshungKath Professional Services</title>
        <meta name="description" content="Tips, guides, and insights from Mistress Kathy" />
      </Head>

      <nav style={{ background: '#000', padding: '1rem 0', borderBottom: '2px solid #ff1493' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 1rem' }}>
          <a href="/" style={{ color: '#ff1493', fontSize: '1.8rem', fontWeight: 'bold', textDecoration: 'none' }}>TshungKath</a>
          <a href="/" style={{ color: '#fff', textDecoration: 'none', padding: '8px 16px', background: '#ff1493', borderRadius: '20px' }}>← Back to Home</a>
        </div>
      </nav>

      <div style={{ background: '#000', color: '#fff', minHeight: '100vh', padding: '50px 0' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          <h1 style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '30px', color: '#ff1493' }}>
            📝 Mistress Kathy's Blog
          </h1>
          <p style={{ textAlign: 'center', fontSize: '1.2rem', marginBottom: '50px', color: '#ccc' }}>
            Expert tips, training guides, and insights into the world of professional domination
          </p>

          {selectedPost ? (
            <div>
              <button 
                onClick={() => setSelectedPost(null)}
                style={{ background: '#ff1493', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer', marginBottom: '30px' }}
              >
                ← Back to Blog
              </button>
              <article style={{ background: 'linear-gradient(135deg, #111, #222)', padding: '40px', borderRadius: '15px', border: '2px solid #ff1493' }}>
                <div style={{ marginBottom: '20px' }}>
                  <span style={{ background: '#ff1493', color: 'white', padding: '5px 15px', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>
                    {selectedPost.category}
                  </span>
                </div>
                <h1 style={{ color: '#ff1493', fontSize: '2.5rem', marginBottom: '20px' }}>{selectedPost.title}</h1>
                <div style={{ display: 'flex', gap: '20px', marginBottom: '30px', color: '#999', fontSize: '14px' }}>
                  <span>By {selectedPost.author}</span>
                  <span>{selectedPost.date}</span>
                  <span>{selectedPost.readTime}</span>
                </div>
                <div style={{ lineHeight: '1.8', fontSize: '16px', color: '#ccc' }}>
                  {selectedPost.content.split('\n').map((paragraph, i) => {
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      return <h3 key={i} style={{ color: '#ff1493', marginTop: '30px', marginBottom: '15px' }}>{paragraph.slice(2, -2)}</h3>
                    }
                    if (paragraph.startsWith('- ')) {
                      return <li key={i} style={{ marginLeft: '20px', marginBottom: '8px' }}>{paragraph.slice(2)}</li>
                    }
                    if (paragraph.match(/^\d+\./)) {
                      return <li key={i} style={{ marginLeft: '20px', marginBottom: '8px' }}>{paragraph}</li>
                    }
                    return paragraph ? <p key={i} style={{ marginBottom: '15px' }}>{paragraph}</p> : <br key={i} />
                  })}
                </div>
              </article>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '30px' }}>
              {blogPosts.map((post) => (
                <article key={post.id} style={{ background: 'linear-gradient(135deg, #111, #222)', padding: '30px', borderRadius: '15px', border: '2px solid rgba(255,20,147,0.3)', cursor: 'pointer' }}
                  onClick={() => setSelectedPost(post)}>
                  <div style={{ marginBottom: '15px' }}>
                    <span style={{ background: '#ff1493', color: 'white', padding: '5px 15px', borderRadius: '15px', fontSize: '12px', fontWeight: 'bold' }}>
                      {post.category}
                    </span>
                  </div>
                  <h2 style={{ color: '#ff1493', fontSize: '1.8rem', marginBottom: '15px' }}>{post.title}</h2>
                  <p style={{ color: '#ccc', lineHeight: '1.6', marginBottom: '20px' }}>{post.excerpt}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#999', fontSize: '14px' }}>
                    <div style={{ display: 'flex', gap: '20px' }}>
                      <span>By {post.author}</span>
                      <span>{post.date}</span>
                    </div>
                    <span>{post.readTime}</span>
                  </div>
                </article>
              ))}
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '50px', padding: '30px', background: 'rgba(255,20,147,0.1)', borderRadius: '15px', border: '2px solid rgba(255,20,147,0.3)' }}>
            <h3 style={{ color: '#ff1493', marginBottom: '15px' }}>📧 Subscribe to My Blog</h3>
            <p style={{ color: '#ccc', marginBottom: '20px' }}>
              Get the latest tips, guides, and updates delivered to your inbox
            </p>
            <div style={{ display: 'flex', gap: '10px', maxWidth: '400px', margin: '0 auto' }}>
              <input 
                type="email" 
                placeholder="Your email address"
                style={{ flex: 1, padding: '12px', background: '#333', border: '2px solid #ff1493', borderRadius: '8px', color: '#fff' }}
              />
              <button style={{ background: 'linear-gradient(45deg, #ff1493, #ff69b4)', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}