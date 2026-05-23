import Comment from '../models/comment.model.js';
import Client from '../models/client.model.js';

// Create a new comment
const createComment = async (userId, content, rating = null) => {
  try {
    const comment = new Comment({
      userId,
      content,
      rating
    });
    
    await comment.save();
    
    // Populate user info before returning
    const populatedComment = await Comment.findById(comment._id)
      .populate('userId', 'name email picture');
    
    return populatedComment;
  } catch (error) {
    throw new Error(`Error creating comment: ${error.message}`);
  }
};

// Get all comments (with user info)
const getAllComments = async () => {
  try {
    const comments = await Comment.find()
      .populate('userId', 'name email picture')
      .sort({ createdAt: -1 }); // Newest first
    
    return comments;
  } catch (error) {
    throw new Error(`Error fetching comments: ${error.message}`);
  }
};

// Get comments by user
const getCommentsByUser = async (userId) => {
  try {
    const comments = await Comment.find({ userId })
      .populate('userId', 'name email picture')
      .sort({ createdAt: -1 });
    
    return comments;
  } catch (error) {
    throw new Error(`Error fetching user comments: ${error.message}`);
  }
};

// Delete comment (only if user owns it or admin)
const deleteComment = async (commentId, userId) => {
  try {
    const comment = await Comment.findById(commentId);
    
    if (!comment) {
      throw new Error('Comment not found');
    }
    
    // Check if user owns the comment
    if (comment.userId.toString() !== userId) {
      throw new Error('Unauthorized to delete this comment');
    }
    
    await Comment.findByIdAndDelete(commentId);
    return { success: true, message: 'Comment deleted successfully' };
  } catch (error) {
    throw new Error(`Error deleting comment: ${error.message}`);
  }
};

// Update comment
const updateComment = async (commentId, userId, content) => {
  try {
    const comment = await Comment.findById(commentId);
    
    if (!comment) {
      throw new Error('Comment not found');
    }
    
    if (comment.userId.toString() !== userId) {
      throw new Error('Unauthorized to update this comment');
    }
    
    comment.content = content;
    comment.updatedAt = Date.now();
    await comment.save();
    
    const updatedComment = await Comment.findById(commentId)
      .populate('userId', 'name email picture');
    
    return updatedComment;
  } catch (error) {
    throw new Error(`Error updating comment: ${error.message}`);
  }
};

export default {
  createComment,
  getAllComments,
  getCommentsByUser,
  deleteComment,
  updateComment
};