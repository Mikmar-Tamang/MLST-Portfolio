import React, { useEffect, useRef } from 'react';
import type { GoogleCallbackResponse } from '../type/types';

interface GoogleLoginProps {
  onSuccess: (response: GoogleCallbackResponse) => void;
}

declare global {
  interface Window {
    google?: {
      accounts: {
        id: {
          initialize: (config: {
            client_id: string;
            callback: (response: GoogleCallbackResponse) => void;
            auto_select: boolean;
          }) => void;
          renderButton: (element: HTMLElement, options: {
            theme: string;
            size: string;
            text: string;
            shape: string;
            width: string;
          }) => void;
          cancel: () => void;
        };
      };
    };
  }
}

const GoogleLogin = ({ onSuccess }: GoogleLoginProps): React.ReactElement => {
  const buttonRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      if (buttonRef.current && window.google) {
        window.google.accounts.id.initialize({
          client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
          callback: (response: GoogleCallbackResponse) => {
            onSuccess(response);
          },
          auto_select: false,
        });

        window.google.accounts.id.renderButton(
          buttonRef.current,
          { 
            theme: 'outline',
            size: 'large',
            text: 'continue_with',
            shape: 'rectangular',
            width: '250'
          }
        );
      }
    };

    return () => {
      if (window.google) {
        window.google.accounts.id.cancel();
      }
    };
  }, [onSuccess]);

  return <div ref={buttonRef}></div>;
};

export default GoogleLogin;