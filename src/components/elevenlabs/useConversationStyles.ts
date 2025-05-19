
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
      .elevenlabs-buttons {
        display: flex;
        gap: 10px;
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
      }
      .elevenlabs-mic-button:hover {
        background-color: #2563EB;
        transform: scale(1.05);
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
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);
};
