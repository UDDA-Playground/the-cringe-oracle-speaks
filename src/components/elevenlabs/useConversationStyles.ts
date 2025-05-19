
import { useEffect } from 'react';

export const useConversationStyles = () => {
  useEffect(() => {
    const styleEl = document.createElement('style');
    styleEl.innerText = `
      .elevenlabs-widget-container {
        position: relative;
        z-index: 10;
        width: 100%;
        min-height: 200px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .elevenlabs-controls {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
      }
      .elevenlabs-mic-container {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 8px;
      }
      .elevenlabs-mic-button {
        background-color: #3B82F6;
        color: white;
        border: none;
        border-radius: 50%;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.2s ease;
        z-index: 2;
      }
      .elevenlabs-mic-button:hover {
        background-color: #2563EB;
        transform: scale(1.05);
      }
      .elevenlabs-mic-button.is-speaking {
        background-color: #EF4444;
        animation: pulsate 2s infinite;
      }
      .elevenlabs-mic-button svg {
        width: 24px;
        height: 24px;
      }
      .elevenlabs-status {
        font-size: 14px;
        color: #4B5563;
        text-align: center;
      }
      .elevenlabs-language {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-top: 10px;
      }
      
      /* Sound waves animation */
      .sound-waves-container {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100px;
        height: 40px;
        top: -30px;
      }
      .sound-wave {
        background: #3B82F6;
        height: 100%;
        width: 3px;
        border-radius: 10px;
        margin: 0 2px;
        animation: sound-wave-animation 1s infinite ease-in-out;
      }
      .sound-wave:nth-child(2) {
        height: 30%;
        animation-delay: 0.2s;
      }
      .sound-wave:nth-child(3) {
        height: 60%;
        animation-delay: 0.4s;
      }
      .sound-wave:nth-child(4) {
        height: 40%;
        animation-delay: 0.6s;
      }
      
      @keyframes pulsate {
        0% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
        }
        50% {
          transform: scale(1.05);
          box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
        }
        100% {
          transform: scale(1);
          box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
        }
      }
      
      @keyframes sound-wave-animation {
        0% {
          height: 10%;
        }
        50% {
          height: 70%;
        }
        100% {
          height: 10%;
        }
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
};
