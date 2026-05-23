import authService from '../services/auth.service.js';

export const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.authToken;
    
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        error: 'Authentication required' 
      });
    }
    
    const decoded = authService.verifyToken(token);
    
    if (!decoded) {
      return res.status(401).json({ 
        success: false, 
        error: 'Invalid or expired token' 
      });
    }
    
    req.user = decoded;
    next();
    
  } catch (error) {
    res.status(401).json({ 
      success: false, 
      error: 'Authentication failed' 
    });
  }
};