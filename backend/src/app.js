import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import authRoutes from './modules/auth/routes/client.auth.route.js';
import commentRoutes from './modules/client/routes/comment.route.js';

dotenv.config();

const app = express();

app.use(cors({
  origin: 'http://localhost:5173',
  origin: process.env.FRONTEND_URL,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization','cookie']
}));

// Middleware
app.use(express.json());
app.use(cookieParser());

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes
app.use('/api', authRoutes);
app.use('/api', commentRoutes);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

export default app;