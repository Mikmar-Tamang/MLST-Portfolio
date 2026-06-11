import React, { useEffect } from 'react';
import GoogleLogin from './GoogleLogin';
import type { GoogleCallbackResponse } from '../type/types';

interface GoogleAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: (response: GoogleCallbackResponse) => void;
}

const GoogleAuthModal = ({ isOpen, onClose, onSuccess }: GoogleAuthModalProps): React.ReactElement | null => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with blur - click on background closes modal */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}  // ← Click background closes
      />
      
      {/* Modal container */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4 pointer-events-none">
        {/* Modal content - prevent click from closing */}
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-md w-full pointer-events-auto"
          onClick={(e:React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}  // ← Prevents closing when clicking inside modal
        >
          {/* Close button */}
          <div className="flex justify-end pt-4 pr-4">
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
            >
              ×
            </button>
          </div>
          
          <div className="px-8 pb-8 text-center">
            {/* Icon */}
            <div className="mb-4">
              <div className="w-20 h-20 mx-auto bg-blue-50 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
            </div>
            
            {/* Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Sign in to Review
            </h2>
            
            {/* Description */}
            <p className="text-gray-500 mb-6">
              Please sign in with Google to write a review or comment
            </p>
            
            {/* Google Sign-In Button */}
            <div className="flex justify-center">
              <GoogleLogin onSuccess={onSuccess} />
            </div>
            
            {/* Divider */}
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-400">or</span>
              </div>
            </div>
            
            {/* Close link */}
            <button 
              onClick={onClose}
              className="text-sm text-gray-400 hover:text-gray-600"
            >
              Continue browsing without signing in
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoogleAuthModal;