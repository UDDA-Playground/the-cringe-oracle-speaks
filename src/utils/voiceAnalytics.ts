
import { supabase } from "@/integrations/supabase/client";

export type VoiceAnalyticsData = {
  conversation_id: string;
  duration_seconds?: number;
  word_count?: number;
  user_query_count?: number;
  ai_response_count?: number;
  device_type?: string;
  browser?: string;
};

/**
 * Records voice analytics data to Supabase
 */
export const recordVoiceAnalytics = async (data: VoiceAnalyticsData) => {
  try {
    const { error } = await supabase
      .from('voice_analytics')
      .insert(data);
    
    if (error) {
      console.error('Error recording voice analytics:', error);
      return false;
    }
    
    return true;
  } catch (err) {
    console.error('Failed to record voice analytics:', err);
    return false;
  }
};

/**
 * Detects browser and device information
 */
export const detectClientInfo = (): { deviceType: string; browser: string } => {
  const ua = navigator.userAgent;
  let deviceType = 'desktop';
  let browser = 'unknown';
  
  // Simple device detection
  if (/mobile/i.test(ua)) {
    deviceType = 'mobile';
  } else if (/tablet/i.test(ua)) {
    deviceType = 'tablet';
  }
  
  // Browser detection
  if (/firefox/i.test(ua)) {
    browser = 'firefox';
  } else if (/chrome/i.test(ua)) {
    browser = 'chrome';
  } else if (/safari/i.test(ua)) {
    browser = 'safari';
  } else if (/edge/i.test(ua)) {
    browser = 'edge';
  }
  
  return { deviceType, browser };
};
