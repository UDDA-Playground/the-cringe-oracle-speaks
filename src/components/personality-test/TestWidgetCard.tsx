
import React from 'react';
import { User, Clock, Euro } from 'lucide-react';
import ElevenLabsWidget from '../ElevenLabsWidget';

const TestWidgetCard: React.FC = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-purple-100 transform rotate-2 hover:rotate-0 transition-transform duration-300">
      <div className="mb-4">
        <h2 className="font-cabinet font-bold text-2xl text-gradient bg-gradient-to-r from-purple-700 to-pink-500 bg-clip-text text-transparent">Take the Weirdness Test</h2>
        <p className="text-gray-600">Fun, revealing & slightly unsettling</p>
      </div>
      
      <div className="space-y-4 mb-6">
        <div className="flex items-center">
          <User size={20} className="text-purple-700 mr-2" />
          <p>Private one-on-one conversation</p>
        </div>
        <div className="flex items-center">
          <Clock size={20} className="text-purple-700 mr-2" />
          <p>Free for 10 minutes daily</p>
        </div>
        <div className="flex items-center">
          <Euro size={20} className="text-purple-700 mr-2" />
          <p>€6.95 for 24h unlimited access</p>
        </div>
      </div>
      
      {/* ElevenLabs widget - using a special weirdness test agent */}
      <div className="mb-4">
        <ElevenLabsWidget agentId="kG2jw3qnuZUiBuIvm5AC" />
      </div>
      
      <p className="text-xs text-gray-500">
        By starting, you agree to our terms and acknowledge that UDDA will record and transcribe 
        audio for this session only. GDPR compliant.
      </p>
    </div>
  );
};

export default TestWidgetCard;
