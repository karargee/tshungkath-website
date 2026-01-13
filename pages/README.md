# TshungKath Professional Services Website

A complete professional companion services website built with Next.js, featuring real-time community, payment gateways, and mobile dungeon services.

## 🚀 Live Demo
- **Frontend**: [Your Vercel/Netlify URL]
- **Community**: Real-time kinky community platform
- **Mobile Dungeon**: Dedicated service page

## ✨ Features

### 🔥 Core Features
- **Professional Homepage** with animated backgrounds
- **Service Booking System** with payment integration
- **Real-time Community Platform** (like Reddit/FetLife)
- **Mobile Dungeon Services** with equipment gallery
- **Live Chat Support** with instant messaging
- **Payment Gateways** (Bitcoin, PayPal, Credit Cards)

### 💰 Service Categories
- Online Domination Sessions
- Sissy Transformation Programs  
- Financial Domination & Control
- Foot Worship & Training
- Chastity Control & Denial
- Private Mobile Dungeon Experience

### 🛠 Technical Features
- **Next.js 14** for frontend
- **Socket.io** for real-time features
- **Express.js** backend with authentication
- **Image upload** and gallery system
- **Responsive design** for all devices
- **SEO optimized** with meta tags

## 🏗 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Frontend Setup
```bash
# Clone repository
git clone https://github.com/yourusername/tshungkath-website.git
cd tshungkath-website

# Install dependencies
npm install

# Start development server
npm run dev
```

### Backend Setup
```bash
# Navigate to backend
cd backend

# Install backend dependencies
npm install

# Start backend server
node server-simple.js
```

## 🌐 Deployment

### Vercel (Recommended for Frontend)
1. Connect GitHub repository to Vercel
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Deploy automatically on push

### Backend Deployment Options

#### Railway/Render
1. Connect GitHub repository
2. Set start command: `cd backend && node server-simple.js`
3. Add environment variables if needed

#### Heroku
```bash
# Create Heroku app
heroku create tshungkath-backend

# Deploy backend
git subtree push --prefix backend heroku main
```

## 📁 Project Structure

```
tshungkath-website/
├── pages/
│   ├── index.js              # Main homepage
│   ├── community.js          # Community platform
│   └── mobile-dungeon.js     # Mobile dungeon page
├── backend/
│   ├── server-simple.js      # Backend server
│   ├── package.json          # Backend dependencies
│   └── uploads/              # Image uploads
├── public/                   # Static assets
├── package.json              # Frontend dependencies
└── README.md                 # This file
```

## 🔧 Configuration

### Environment Variables
Create `.env.local` for frontend:
```
NEXT_PUBLIC_API_URL=http://localhost:5001
NEXT_PUBLIC_SOCKET_URL=http://localhost:5001
```

### Backend Configuration
Update API URLs in:
- `pages/community.js` (lines 5-6)
- Backend server port in `server-simple.js`

## 🚀 Production Deployment

### 1. Frontend (Vercel)
- Push to GitHub
- Connect to Vercel
- Auto-deploys on push

### 2. Backend (Railway/Render)
- Deploy backend separately
- Update frontend API URLs to production backend URL

### 3. Domain Setup
- Point custom domain to Vercel
- Update all URLs in code to match domain

## 📱 Features Overview

### Community Platform
- User registration/login
- Real-time posting with images
- Live likes and comments
- Category filtering
- Socket.io for instant updates

### Payment System
- Bitcoin payments
- PayPal integration
- Credit card processing
- Custom amount tributes

### Mobile Dungeon
- Equipment gallery
- Detailed service descriptions
- Integrated booking system
- Professional presentation

## 🛡 Security Features
- JWT authentication
- Input validation
- Image upload restrictions
- CORS protection
- Rate limiting ready

## 📞 Support
- **Email**: kathtri57@gmail.com
- **Telegram**: @tshungkath10
- **Twitter**: @tshungkatherine

## 📄 License
© 2024 TshungKath Professional Services. All rights reserved.

---

**Note**: This is a complete professional business website. Customize content and styling according to your specific needs.