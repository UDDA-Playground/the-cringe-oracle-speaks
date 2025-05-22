
import { toast } from 'sonner';
import { useLanguage } from '@/context/LanguageContext';

// ElevenLabs API endpoints
const API_BASE_URL = 'https://api.elevenlabs.io/v1';

// ElevenLabs API key - in production this should be stored securely
const ELEVENLABS_API_KEY = 'sk_f5dd7d90d4065d5b728935804a193f5e1e446954520e5fbf';

// Voice options with IDs
export const VOICE_OPTIONS = {
  'en': {
    'male': 'pNInz6obpgDQGcFmaJgB', // Adam
    'female': 'EXAVITQu4vr4xnSDxMaL' // Sarah
  },
  'sv': {
    'male': 'pNInz6obpgDQGcFmaJgB', // Using Adam for Swedish too (you may want to replace with a Swedish voice)
    'female': 'EXAVITQu4vr4xnSDxMaL' // Using Sarah for Swedish too
  }
};

// Error handling wrapper
const handleApiError = (error: any, message: string) => {
  console.error(`ElevenLabs API Error (${message}):`, error);
  toast.error(`Error: ${message}. Please try again.`);
  return null;
};

/**
 * Fetches available voices from ElevenLabs API
 */
export const getVoices = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/voices`, {
      method: 'GET',
      headers: {
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json'
      }
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    console.log("Available voices:", data.voices);
    return data.voices;
  } catch (error) {
    return handleApiError(error, 'Failed to fetch voices');
  }
};

/**
 * Converts text to speech using ElevenLabs API
 */
export const textToSpeech = async (
  text: string, 
  voiceId: string = 'EXAVITQu4vr4xnSDxMaL', // Default to Sarah
  model: string = 'eleven_turbo_v2'
) => {
  try {
    console.log(`Converting text to speech with voice ${voiceId} using model ${model}`);
    console.log(`Text: "${text}"`);
    
    const response = await fetch(`${API_BASE_URL}/text-to-speech/${voiceId}`, {
      method: 'POST',
      headers: {
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        text,
        model_id: model,
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75
        }
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`ElevenLabs API error (${response.status}):`, errorText);
      throw new Error(`HTTP error! Status: ${response.status} - ${errorText}`);
    }

    // Return audio blob
    const blob = await response.blob();
    console.log("Received audio blob of size:", blob.size);
    return blob;
  } catch (error) {
    handleApiError(error, 'Text-to-speech conversion failed');
    return null;
  }
};

/**
 * Gets voice ID based on language and gender preference
 */
export const getVoiceId = (language: 'en' | 'sv', gender: 'male' | 'female' = 'female') => {
  return VOICE_OPTIONS[language][gender];
};

/**
 * Hook to get the appropriate voice ID based on current language context
 */
export const useVoiceId = (gender: 'male' | 'female' = 'female') => {
  const { language } = useLanguage();
  return getVoiceId(language === 'sv' ? 'sv' : 'en', gender);
};
