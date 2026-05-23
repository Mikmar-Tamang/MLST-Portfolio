import commentService from '../services/comment.service.js';

// Create a new comment
const createComment = async (req, res) => {
  try {
    const { content, rating } = req.body;
    const userId = req.user.userId; // From auth middleware
    
    if (!content || content.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Comment content is required'
      });
    }
    
    const comment = await commentService.createComment(userId, content, rating);
    
    res.status(201).json({
      success: true,
      message: 'Comment posted successfully',
      comment
    });
    
  } catch (error) {
    console.error('Create comment error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get all comments
const getAllComments = async (req, res) => {
  try {
    const comments = await commentService.getAllComments();
    
    res.json({
      success: true,
      count: comments.length,
      comments
    });
    
  } catch (error) {
    console.error('Get comments error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Get comments by current user
const getMyComments = async (req, res) => {
  try {
    const userId = req.user.userId;
    const comments = await commentService.getCommentsByUser(userId);
    
    res.json({
      success: true,
      count: comments.length,
      comments
    });
    
  } catch (error) {
    console.error('Get my comments error:', error);
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};

// Delete a comment
const deleteComment = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.user.userId;
    
    const result = await commentService.deleteComment(id, userId);
    
    res.json({
      success: true,
      message: result.message
    });
    
  } catch (error) {
    console.error('Delete comment error:', error);
    res.status(403).json({
      success: false,
      error: error.message
    });
  }
};

// Update a comment
const updateComment = async (req, res) => {
  try {
    const { id } = req.params;
    const { content } = req.body;
    const userId = req.user.userId;
    
    if (!content || content.trim() === '') {
      return res.status(400).json({
        success: false,
        error: 'Comment content is required'
      });
    }
    
    const comment = await commentService.updateComment(id, userId, content);
    
    res.json({
      success: true,
      message: 'Comment updated successfully',
      comment
    });
    
  } catch (error) {
    console.error('Update comment error:', error);
    res.status(403).json({
      success: false,
      error: error.message
    });
  }
};

export default {
  createComment,
  getAllComments,
  getMyComments,
  deleteComment,
  updateComment
};