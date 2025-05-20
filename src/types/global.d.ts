
interface Window {
  dataLayer: any[];
  gtag: (...args: any[]) => void;
  ELEVENLABS_CONVAI_SETTINGS?: {
    disableFloatingButton?: boolean;
  };
}
