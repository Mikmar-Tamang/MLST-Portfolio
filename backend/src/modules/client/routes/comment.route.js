import express from 'express';
import commentController from '../controllers/comment.controller.js';
import { authenticate } from '../../auth/middleware/auth.middleware.js';

const router = express.Router();

// Public routes
router.get('/comments', commentController.getAllComments);

// Protected routes (require authentication)
router.post('/comments', authenticate, commentController.createComment);
router.get('/comments/me', authenticate, commentController.getMyComments);
router.put('/comments/:id', authenticate, commentController.updateComment);
router.delete('/comments/:id', authenticate, commentController.deleteComment);

export default router;