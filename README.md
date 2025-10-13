# eCommerce Full Stack Application

A modern eCommerce platform built with Next.js, Express, and MongoDB.

## 🚀 Quick Start

### Local Development

1. **Install dependencies**:
   ```bash
   # Install backend dependencies
   cd backend && npm install
   
   # Install frontend dependencies
   cd ../frontend && npm install
   ```

2. **Set up environment variables**:
   ```bash
   # Backend
   cp backend/.env.example backend/.env
   # Edit backend/.env with your MongoDB URI and JWT secret
   
   # Frontend
   cp frontend/.env.example frontend/.env.local
   # .env.local should have: NEXT_PUBLIC_API_URL=http://localhost:5000/api
   ```

3. **Start development servers**:
   
   **Option 1: Use the start script (recommended)**
   ```bash
   ./start-dev.sh
   ```
   
   **Option 2: Start manually in separate terminals**
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run dev
   
   # Terminal 2 - Frontend
   cd frontend && npm run dev
   ```

4. **Access the application**:
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 🌐 Production Deployment

### Prerequisites
- MongoDB Atlas account (free tier available)
- Vercel account (free tier available)

### Setup Steps

1. **Set up MongoDB Atlas**:
   - Create a cluster at https://www.mongodb.com/cloud/atlas
   - Create a database user
   - Whitelist all IPs (0.0.0.0/0)
   - Get your connection string

2. **Deploy Backend to Vercel**:
   - Push your code to GitHub
   - Import project to Vercel
   - Add environment variables:
     - `MONGO_URI`: Your MongoDB Atlas connection string
     - `JWT_SECRET`: A secure random string
   - Deploy

3. **Deploy Frontend to Vercel**:
   - Import frontend to Vercel
   - Add environment variable:
     - `NEXT_PUBLIC_API_URL`: Your backend URL (e.g., `https://ecommerce-website-backend-iota.vercel.app/api`)
   - Add custom domain if needed
   - Deploy

4. **Verify**:
   - Visit your production URL
   - Test registration and login

## 📁 Project Structure

```
eCommerce/
├── backend/
│   ├── api/
│   │   └── server.js          # Express server
│   ├── config/
│   │   └── db.js              # MongoDB connection
│   ├── controllers/
│   │   └── userController.js  # User authentication logic
│   ├── models/
│   │   └── userModel.js       # User schema
│   ├── routes/
│   │   └── userRoutes.js      # API routes
│   └── utils/
│       └── generateToken.js   # JWT token generation
│
├── frontend/
│   ├── src/app/
│   │   ├── components/        # React components
│   │   ├── slices/            # Redux slices
│   │   ├── store/             # Redux store
│   │   └── login/             # Login page
│   └── public/                # Static assets
│
├── start-dev.sh               # Development startup script
└── DEPLOYMENT_GUIDE.md        # Detailed deployment guide
```

## 🛠️ Tech Stack

### Frontend
- **Framework**: Next.js 15
- **UI**: React 19, Tailwind CSS
- **State Management**: Redux Toolkit
- **Forms**: React Hook Form
- **HTTP Client**: Axios

### Backend
- **Runtime**: Node.js
- **Framework**: Express
- **Database**: MongoDB with Mongoose
- **Authentication**: JWT (JSON Web Tokens)
- **Security**: bcryptjs, CORS

## 📝 Available Scripts

### Backend
- `npm run dev` - Start development server with nodemon
- `npm start` - Start production server

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server

## 🔧 Environment Variables

### Backend (.env)
```env
MONGO_URI=mongodb://localhost:27017/Ecommerce
JWT_SECRET=your_jwt_secret_here
PORT=5000
```

### Frontend (.env.local for development)
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

### Frontend (.env for production)
```env
NEXT_PUBLIC_API_URL=https://your-backend-url.vercel.app/api
```

## 🐛 Troubleshooting

See [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) for detailed troubleshooting steps.

### Common Issues

**Local: Backend not connecting**
- Make sure MongoDB is running
- Check if port 5000 is available
- Verify .env file exists and has correct values

**Production: 500 errors**
- Check Vercel function logs
- Verify MongoDB Atlas connection string
- Ensure all environment variables are set
- Redeploy after setting environment variables

**CORS errors**
- Verify your domain is in the `allowedOrigins` array in `backend/api/server.js`

## 📚 Documentation

- [Deployment Guide](./DEPLOYMENT_GUIDE.md) - Comprehensive deployment instructions
- [Next.js Documentation](https://nextjs.org/docs)
- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)

## 🔗 Live URLs

- **Production Frontend**: https://amboutique.pk
- **Production Backend**: https://ecommerce-website-backend-iota.vercel.app

## 📄 License

This project is private and proprietary.