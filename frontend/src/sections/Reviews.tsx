import React, { useState, useEffect } from 'react';
import GoogleAuthModal from '../components/GoogleAuthModel';
import Comment from '../components/Comment';
import { googleLogin, checkAuth, getComments, createComment } from '../type/api';
import type { User, CommentData, GoogleCallbackResponse, ApiResponse } from '../type/types';

const Reviews = (): React.ReactElement => {
  const [user, setUser] = useState<User | null>(null);
  const [comments, setComments] = useState<CommentData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [commentText, setCommentText] = useState<string>('');
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [pendingComment, setPendingComment] = useState<string>('');

  const loadComments = async (isMounted: { current: boolean }): Promise<void> => {
    try {
      const data: ApiResponse = await getComments();
      if (isMounted.current && data.success && data.comments) {
        setComments(data.comments);
      }
    } catch (error) {
      console.error('Failed to load comments:', error);
    } finally {
      if (isMounted.current) {
        setLoading(false);
      }
    }
  };

  const checkAuthStatus = async (isMounted: { current: boolean }): Promise<void> => {
    try {
      const data: ApiResponse = await checkAuth();
      if (isMounted.current && data.success && data.user) {
        setUser(data.user);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
    }
  };

  const handleGoogleSuccess = async (response: GoogleCallbackResponse): Promise<void> => {
    try {
      const data: ApiResponse = await googleLogin(response.credential);
      if (data.success && data.user) {
        setUser(data.user);
        setIsModalOpen(false);
        
        // If there was a pending comment, submit it
        if (pendingComment.trim()) {
          await submitCommentAfterLogin(pendingComment);
          setPendingComment('');
          setCommentText('');
        }
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const submitCommentAfterLogin = async (content: string): Promise<void> => {
    setSubmitting(true);
    try {
      const data: ApiResponse = await createComment(content);
      if (data.success && data.comment) {
        setComments([data.comment, ...comments]);
      }
    } catch (error) {
      console.error('Submit failed:', error);
      alert('Failed to post comment');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCommentClick = (): void => {
    if (!user) {
      // Store the current comment text before showing modal
      if (commentText.trim()) {
        setPendingComment(commentText);
      }
      setIsModalOpen(true);
    }
  };

  const handleSubmitComment = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    
    if (!commentText.trim()) {
      alert('Please write a comment');
      return;
    }
    
    if (!user) {
      setPendingComment(commentText);
      setIsModalOpen(true);
      return;
    }
    
    setSubmitting(true);
    try {
      const data: ApiResponse = await createComment(commentText);
      if (data.success && data.comment) {
        setComments([data.comment, ...comments]);
        setCommentText('');
      }
    } catch (error) {
      console.error('Submit failed:', error);
      alert('Failed to post comment');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCommentDeleted = (commentId: string): void => {
    setComments(comments.filter((c: CommentData) => c._id !== commentId));
  };

  const handleCommentUpdated = (commentId: string, newContent: string): void => {
    setComments(comments.map((c: CommentData) => 
      c._id === commentId ? { ...c, content: newContent } : c
    ));
  };

  useEffect((): (() => void) => {
    const isMounted = { current: true };

    const init = async (): Promise<void> => {
      await checkAuthStatus(isMounted);
      await loadComments(isMounted);
    };

    init();

    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <section id="reviews" className="min-h-screen py-16 px-5">
      <div className="max-w-4xl pt-16 mx-auto px-6">
        {/* Header */}
        <div className="bg-white rounded-lg shadow p-6 mb-8">

        {/* Comments List */}
        {loading ? (
            <p className="text-gray-500">Loading reviews...</p>
        ) : comments.length === 0 ? (
          <div className='border-b-2 border-b-gray-500'>
          <h2 className="text-xl text-black font-semibold mb-4">
              Reviews ({comments.length})
            </h2>
            <p className="text-gray-500">No reviews yet. Be the first to comment!</p>
          </div>
        ) : (
          <div className='border-b-2 border-b-gray-500'>
            <h2 className="text-xl text-black font-semibold mb-4">
              Reviews ({comments.length})
            </h2>
            <div className="h-48 overflow-y-auto">
              {comments.map((comment: CommentData) => (
                <Comment
                  key={comment._id}
                  comment={comment}
                  currentUserId={user?._id?.toString()}
                  onCommentDeleted={handleCommentDeleted}
                  onCommentUpdated={handleCommentUpdated}
                />
              ))}
            </div>
          </div>
        )}

         {/* Comment Form - Always visible */}
          <form className='mt-3' onSubmit={handleSubmitComment}>
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <textarea
                  value={commentText}
                  onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setCommentText(e.target.value)}
                  onClick={handleCommentClick}
                  placeholder="Write your review..."
                  className="w-full max-h-20 text-black border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows={4}
                  disabled={submitting}
                />
                <div className="flex justify-end mt-3">
                  <button
                    type="submit"
                    onClick={handleCommentClick}
                    disabled={submitting || !commentText.trim()}
                    className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    {submitting ? 'Posting...' : 'Post Review'}
                  </button>
                </div>
              </div>
            </div>
          </form> 
      </div>
        {/* Google Auth Modal */}
        <GoogleAuthModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setPendingComment('');
          }}
          onSuccess={handleGoogleSuccess}
        />
      </div>
    </section>
  );
};

export default Reviews;