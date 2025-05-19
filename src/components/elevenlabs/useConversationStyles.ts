
import { useEffect } from 'react';

export const useConversationStyles = () => {
  useEffect(() => {
    // Create a style element
    const style = document.createElement('style');
    
    // Add CSS for ElevenLabs widget
    style.textContent = `
      .elevenlabs-widget-container {
        position: relative;
        width: 100%;
      }
      
      .elevenlabs-controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 1rem;
        padding: 0.5rem;
      }
      
      .elevenlabs-mic-container {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      
      .elevenlabs-mic-button {
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        color: white;
        cursor: pointer;
        transition: all 0.2s ease;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
      }
      
      .elevenlabs-status {
        flex-grow: 1;
        font-size: 0.9rem;
        color: #666;
      }
      
      .elevenlabs-language {
        display: flex;
        align-items: center;
      }
      
      .elevenlabs-loading {
        padding: 1rem;
        text-align: center;
        color: #666;
      }
      
      /* Sound wave animations */
      @keyframes soundwave1 {
        0% { height: 3px; }
        50% { height: 15px; }
        100% { height: 5px; }
      }
      
      @keyframes soundwave2 {
        0% { height: 5px; }
        50% { height: 12px; }
        100% { height: 4px; }
      }
      
      @keyframes soundwave3 {
        0% { height: 2px; }
        50% { height: 19px; }
        100% { height: 3px; }
      }
      
      @keyframes soundwave4 {
        0% { height: 7px; }
        50% { height: 10px; }
        100% { height: 5px; }
      }
      
      .animate-soundwave1 {
        animation: soundwave1 0.9s infinite ease-in-out alternate;
      }
      
      .animate-soundwave2 {
        animation: soundwave2 1.2s infinite ease-in-out alternate;
      }
      
      .animate-soundwave3 {
        animation: soundwave3 0.7s infinite ease-in-out alternate;
      }
      
      .animate-soundwave4 {
        animation: soundwave4 1s infinite ease-in-out alternate;
      }
    `;
    
    // Add the style to the document head
    document.head.appendChild(style);
    
    // Clean up
    return () => {
      document.head.removeChild(style);
    };
  }, []);
};
