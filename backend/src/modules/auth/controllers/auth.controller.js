import authService from '../services/auth.service.js';
import Client from '../../client/models/client.model.js';

const googleLogin = async (req, res) => {
  try {
    const { token } = req.body;

    if (!token) {
      return res.status(400).json({ 
        success: false, 
        error: 'No token provided' 
      });
    }

    const payload = await authService.verifyGoogleToken(token);
    const user = await authService.findOrCreateUser(payload);
    const sessionToken = authService.generateToken(user);

    res.cookie('authToken', sessionToken, {
      httpOnly: true,
      secure: false,
      sameSite: 'none',
      maxAge: 7 * 24 * 60 * 60 * 1000,
      path: '/'
    });

    res.status(200).json({
      success: true,
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        picture: user.picture
      },
    });
  } catch (error) {
    console.error('Google login error:', error);
    res.status(401).json({
      success: false,
      error: error.message || 'Authentication failed'
    });
  }
};

const verifySession = async (req, res) => {
  try {
    const token = req.cookies.authToken;
    
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        error: 'No token provided' 
      });
    }
    
    const decoded = authService.verifyToken(token);
    
    if (!decoded) {
      return res.status(401).json({ 
        success: false, 
        error: 'Invalid token' 
      });
    }
    
    const user = await Client.findById(decoded.userId).select('-__v');
    
    if (!user) {
      return res.status(401).json({ 
        success: false, 
        error: 'User not found' 
      });
    }
    
    res.json({ 
      success: true, 
      user: {
        _id: user._id,
        email: user.email,
        name: user.name,
        picture: user.picture
      }
    });
    
  } catch (error) {
    console.error('Session verification error:', error);
    res.status(401).json({ 
      success: false, 
      error: 'Invalid session' 
    });
  }
};

const logout = (req, res) => {
  res.clearCookie('authToken', {
    httpOnly: true,
    secure: false,
    sameSite: 'none',
    path: '/'
  });

  res.json({ 
    success: true, 
    message: 'Logged out successfully' 
  });
};

export default {
  googleLogin,
  verifySession,
  logout
};