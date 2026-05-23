import express from 'express';
import authController from '../controllers/auth.controller.js'

const router = express.Router();

router.post('/auth/google', authController.googleLogin);
router.get('/auth/verify', authController.verifySession);
router.post('/auth/logout', authController.logout);

export default router;