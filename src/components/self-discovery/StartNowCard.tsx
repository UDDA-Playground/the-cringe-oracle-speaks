
import React from 'react';
import { User, Clock, Euro } from 'lucide-react';
import ElevenLabsEmbed from '@/components/ElevenLabsEmbed';

const StartNowCard: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
      <h2 className="font-cabinet font-bold text-2xl mb-4 text-green-700">Start now</h2>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <User size={20} className="text-green-700 mr-2" />
          <p>Private one-on-one conversation</p>
        </div>
        <div className="flex items-center">
          <Clock size={20} className="text-green-700 mr-2" />
          <p>Free for 10 minutes daily</p>
        </div>
        <div className="flex items-center">
          <Euro size={20} className="text-green-700 mr-2" />
          <p>€6.95 for 24h unlimited access</p>
        </div>
      </div>
      
      <div className="relative z-10 h-12 mb-6">
        <ElevenLabsEmbed 
          agentId="agent_01jvfdv8ybemj84w5zb4yjav5y"
          className="w-full h-12"
        />
      </div>
      
      <p className="text-xs text-gray-500 mt-2">
        By starting, you agree to our terms and acknowledge that UDDA will record and transcribe 
        audio for this session only. GDPR compliant.
      </p>
    </div>
  );
};

export default StartNowCard;
