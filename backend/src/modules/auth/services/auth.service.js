import Client from '../../client/models/client.model.js';  // ← Fixed path
import { OAuth2Client } from 'google-auth-library';
import jwt from 'jsonwebtoken';

const googleClient = new OAuth2Client();

const verifyGoogleToken = async (token) => {
  try {
    const ticket = await googleClient.verifyIdToken({
      idToken: token,
      audience: process.env.GOOGLE_CLIENT_ID,
    });
    
    return ticket.getPayload();
  } catch (error) {
    throw new Error("Invalid Google Token");
  }
};

const findOrCreateUser = async (payload) => {
  let user = await Client.findOne({ googleId: payload.sub });
  
  if (!user) {
    user = new Client({
      googleId: payload.sub,
      email: payload.email,
      name: payload.name,
      picture: payload.picture
    });
    
    await user.save();
    console.log(`✨ New user created: ${user.email}`);
  } else {
    user.lastLoginAt = new Date();
    await user.save();
    console.log(`👋 Welcome back: ${user.email}`);
  }
  
  return user;
};

const generateToken = (user) => {
  return jwt.sign(
    { 
      userId: user._id, 
      email: user.email,
      name: user.name 
    },
    process.env.JWT_SECRET,
    { expiresIn: '7d' }
  );
};

const verifyToken = (token) => {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    return null;
  }
};

export default {
  verifyGoogleToken,
  findOrCreateUser,
  generateToken,
  verifyToken
};