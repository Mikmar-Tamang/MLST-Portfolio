import React, { useState } from 'react';
import { updateComment, deleteComment } from '../type/api';
import type { CommentData } from '../type/types';

interface CommentProps {
  comment: CommentData;
  currentUserId?: string;
  onCommentDeleted: (commentId: string) => void;
  onCommentUpdated: (commentId: string, newContent: string) => void;
}

const Comment = ({ 
  comment, 
  currentUserId, 
  onCommentDeleted, 
  onCommentUpdated 
}: CommentProps): React.ReactElement | null => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editContent, setEditContent] = useState<string>(comment.content);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

 const commentOwnerId = comment.userId?._id?.toString();
  const loggedInUserId = currentUserId?.toString();
  // const isOwner = loggedInUserId && commentOwnerId && loggedInUserId === commentOwnerId;
  const isOwner = loggedInUserId === commentOwnerId;

  // Only show buttons if owner
  const showButtons = isOwner;

  const handleDelete = async (): Promise<void> => {
    const confirmDelete: boolean = window.confirm('Delete this comment?');
    if (!confirmDelete) return;
    
    setIsDeleting(true);
    try {
      await deleteComment(comment._id);
      onCommentDeleted(comment._id);
    } catch (error) {
      console.error('Delete failed:', error);
      window.alert('Failed to delete comment');
    } finally {
      setIsDeleting(false);
    }
  };

  const handleUpdate = async (): Promise<void> => {
    if (!editContent.trim()) return;
    
    try {
      await updateComment(comment._id, editContent);
      onCommentUpdated(comment._id, editContent);
      setIsEditing(false);
    } catch (error) {
      console.error('Update failed:', error);
      window.alert('Failed to update comment');
    }
  };

  const formatDate = (dateString: string): string => {
    const date: Date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  if (isDeleting) return null;

  return (
    <div className="border-b text-black pb-4 mb-4">
      <div className="flex items-start gap-3">
        <img 
          src={comment.userId.picture} 
          alt={comment.userId.name}
          className="w-8 h-8 rounded-full object-cover"
          referrerPolicy="no-referrer"
        />
        
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <span className="font-semibold text-[12px] text-gray-900">
              {comment.userId.name}
            </span>
            <span className="text-[10px] text-gray-500">
              {formatDate(comment.createdAt)}
            </span>
          </div>
          
          {isEditing ? (
            <div className="mt-2">
              <textarea
                value={editContent}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setEditContent(e.target.value)}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={3}
              />
              <div className="flex gap-2 mt-2">
                <button
                  onClick={handleUpdate}
                  className="px-3 py-1 bg-blue-500 text-white rounded text-sm hover:bg-blue-600"
                >
                  Save
                </button>
                <button
                  onClick={() => setIsEditing(false)}
                  className="px-3 py-1 bg-gray-300 text-gray-700 rounded text-sm hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </div>
          ) : (
            <>
              <p className="text-gray-700 mt-1">{comment.content}</p>
              
              {showButtons && (
                <div className="flex gap-3 mt-2">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="text-blue-500 text-sm hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={handleDelete}
                    className="text-red-500 text-sm hover:underline"
                  >
                    Delete
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comment;