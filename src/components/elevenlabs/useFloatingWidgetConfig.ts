
import { useEffect } from 'react';

export const useFloatingWidgetConfig = (preventFloatingWidget: boolean) => {
  useEffect(() => {
    if (preventFloatingWidget) {
      // Set global configuration to disable the floating widget
      window.ELEVENLABS_CONVAI_SETTINGS = {
        disableFloatingButton: true
      };
      
      // Remove any existing floating widgets
      document.querySelectorAll('elevenlabs-convai-button').forEach(widget => {
        if (widget.parentNode) {
          widget.parentNode.removeChild(widget);
        }
      });
    }
    
    return () => {
      // Clean up when the component unmounts
      if (window.ELEVENLABS_CONVAI_SETTINGS) {
        delete window.ELEVENLABS_CONVAI_SETTINGS.disableFloatingButton;
      }
    };
  }, [preventFloatingWidget]);
};
