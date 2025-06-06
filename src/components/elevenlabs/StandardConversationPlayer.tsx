
import React, { useState, useEffect } from 'react';
import { Mic, MicOff, Play, Pause, Trash2, Send, Volume2, VolumeX, MoreHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useLanguage } from '@/context/LanguageContext';
import { useElevenLabsConnection } from './useElevenLabsConnection';
import SoundWavesNative from './SoundWavesNative';

interface StandardConversationPlayerProps {
  agentId: string;
  accentColor?: string;
  className?: string;
}

const StandardConversationPlayer: React.FC<StandardConversationPlayerProps> = ({
  agentId,
  accentColor = 'blue',
  className = ''
}) => {
  const { language } = useLanguage();
  const [textInput, setTextInput] = useState('');
  const [isMuted, setIsMuted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [audioInputDevices, setAudioInputDevices] = useState<MediaDeviceInfo[]>([]);
  const [audioOutputDevices, setAudioOutputDevices] = useState<MediaDeviceInfo[]>([]);
  const [selectedInputDevice, setSelectedInputDevice] = useState<string>('');
  const [selectedOutputDevice, setSelectedOutputDevice] = useState<string>('');
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  
  const {
    conversation,
    isInitialized,
    startConversation,
    endConversation,
    resetConversation
  } = useElevenLabsConnection({ agentId });
  
  const isConnected = conversation.status === 'connected';
  const isConnecting = conversation.status === 'connecting';
  const isSpeaking = conversation.isSpeaking;
  
  // Get available audio input and output devices
  useEffect(() => {
    const getAudioDevices = async () => {
      try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        const audioInputs = devices.filter(device => device.kind === 'audioinput');
        const audioOutputs = devices.filter(device => device.kind === 'audiooutput');
        
        setAudioInputDevices(audioInputs);
        setAudioOutputDevices(audioOutputs);
        
        if (audioInputs.length > 0 && !selectedInputDevice) {
          setSelectedInputDevice(audioInputs[0].deviceId);
        }
        if (audioOutputs.length > 0 && !selectedOutputDevice) {
          setSelectedOutputDevice(audioOutputs[0].deviceId);
        }
      } catch (error) {
        console.error('Error getting audio devices:', error);
      }
    };

    getAudioDevices();
  }, []);

  // Handle text input submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (textInput.trim() && isConnected) {
      // Send text message to ElevenLabs
      textInput.trim();
      setTextInput('');
    }
  };
  
  // Handle mute toggle - mutes user's microphone
  const handleMuteToggle = async () => {
    if (mediaStream) {
      const audioTracks = mediaStream.getAudioTracks();
      audioTracks.forEach(track => {
        track.enabled = isMuted; // Toggle the opposite
      });
      setIsMuted(!isMuted);
    }
  };
  
  // Handle pause toggle - pauses the conversation
  const handlePauseToggle = () => {
    if (isConnected) {
      setIsPaused(!isPaused);
      if (!isPaused) {
        // Pause the conversation by stopping audio processing
        if (mediaStream) {
          const audioTracks = mediaStream.getAudioTracks();
          audioTracks.forEach(track => {
            track.enabled = false;
          });
        }
        console.log('Conversation paused');
      } else {
        // Resume the conversation
        if (mediaStream && !isMuted) {
          const audioTracks = mediaStream.getAudioTracks();
          audioTracks.forEach(track => {
            track.enabled = true;
          });
        }
        console.log('Conversation resumed');
      }
    }
  };

  // Handle input device selection
  const handleInputDeviceChange = async (deviceId: string) => {
    setSelectedInputDevice(deviceId);
    if (isConnected) {
      try {
        const newStream = await navigator.mediaDevices.getUserMedia({
          audio: { deviceId: { exact: deviceId } }
        });
        if (mediaStream) {
          mediaStream.getTracks().forEach(track => track.stop());
        }
        setMediaStream(newStream);
      } catch (error) {
        console.error('Error switching audio input device:', error);
      }
    }
  };

  // Handle output device selection
  const handleOutputDeviceChange = async (deviceId: string) => {
    setSelectedOutputDevice(deviceId);
    // Note: Output device switching would need additional audio context management
    console.log('Output device changed to:', deviceId);
  };

  // Start conversation with selected audio device
  const handleStartConversation = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: selectedInputDevice ? { deviceId: { exact: selectedInputDevice } } : true
      });
      setMediaStream(stream);
      await startConversation();
    } catch (error) {
      console.error('Error starting conversation:', error);
    }
  };

  // End conversation and cleanup
  const handleEndConversation = async () => {
    await endConversation();
    if (mediaStream) {
      mediaStream.getTracks().forEach(track => track.stop());
      setMediaStream(null);
    }
    setIsPaused(false);
    setIsMuted(false);
  };
  
  // Get button colors based on accent
  const getButtonColor = (variant: 'primary' | 'danger' | 'warning' | 'muted') => {
    const colors = {
      primary: `bg-${accentColor}-500 hover:bg-${accentColor}-600`,
      danger: 'bg-red-500 hover:bg-red-600',
      warning: 'bg-yellow-500 hover:bg-yellow-600',
      muted: 'bg-gray-500 hover:bg-gray-600'
    };
    return colors[variant];
  };
  
  return (
    <div className={`flex flex-col h-full bg-white rounded-lg shadow ${className}`}>
      {/* Voice conversation visualization area */}
      <div className="flex-1 p-4 overflow-y-auto flex items-center justify-center">
        <div className="text-center">
          <div className="mb-4 relative">
            <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center mx-auto">
              {(isSpeaking || isConnecting) && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <SoundWavesNative isActive={true} color={accentColor} />
                </div>
              )}
              <Mic className="h-12 w-12 text-gray-400" />
            </div>
          </div>
          
          <p className="text-gray-500 mb-4">
            {isConnecting ? 
              (language === 'sv' ? 'Ansluter...' : 'Connecting...') :
              !isConnected ? 
                (language === 'sv' ? 'Klicka för att starta konversation' : 'Click to start conversation') :
                isPaused ?
                  (language === 'sv' ? 'Pausad' : 'Paused') :
                  isSpeaking ?
                    (language === 'sv' ? 'AI talar...' : 'AI speaking...') :
                    (language === 'sv' ? 'Lyssnar...' : 'Listening...')
            }
          </p>
        </div>
      </div>
      
      {/* Main controls */}
      <div className="p-4 border-t">
        {/* Primary control row */}
        <div className="flex mb-2 space-x-2 items-center">
          {/* Main conversation button */}
          {!isConnected ? (
            <Button
              onClick={handleStartConversation}
              className={`${getButtonColor('primary')} flex-1`}
              disabled={isConnecting}
            >
              <Mic size={18} className="mr-2" />
              {isConnecting ? 
                (language === 'sv' ? 'Ansluter...' : 'Connecting...') :
                (language === 'sv' ? 'Starta Konversation' : 'Start Conversation')
              }
            </Button>
          ) : (
            <Button
              onClick={handleEndConversation}
              className={`${getButtonColor('danger')} flex-1`}
            >
              <MicOff size={18} className="mr-2" />
              {language === 'sv' ? 'Stoppa' : 'Stop'}
            </Button>
          )}
          
          {/* Mute microphone button with input device selector */}
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`px-3 ${isMuted ? 'bg-red-500 text-white border-red-500 hover:bg-red-600' : ''}`}
                disabled={!isConnected}
              >
                {isMuted ? <MicOff size={16} /> : <Mic size={16} />}
                <span className="ml-1 text-xs">
                  {isMuted ? (language === 'sv' ? 'Tystad' : 'Muted') : (language === 'sv' ? 'Mikrofon' : 'Mute')}
                </span>
                <MoreHorizontal size={12} className="ml-1" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Button
                    onClick={handleMuteToggle}
                    variant={isMuted ? "destructive" : "outline"}
                    size="sm"
                    className="flex-1"
                  >
                    {isMuted ? <MicOff size={14} /> : <Mic size={14} />}
                    <span className="ml-1">
                      {isMuted ? (language === 'sv' ? 'Slå på' : 'Unmute') : (language === 'sv' ? 'Tysta' : 'Mute')}
                    </span>
                  </Button>
                </div>
                {audioInputDevices.length > 1 && (
                  <div>
                    <label className="text-sm font-medium">
                      {language === 'sv' ? 'Välj mikrofon:' : 'Select microphone:'}
                    </label>
                    <Select value={selectedInputDevice} onValueChange={handleInputDeviceChange}>
                      <SelectTrigger className="w-full mt-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {audioInputDevices.map((device) => (
                          <SelectItem key={device.deviceId} value={device.deviceId}>
                            {device.label || `Microphone ${device.deviceId.slice(-4)}`}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            </PopoverContent>
          </Popover>
        </div>

        {/* Secondary controls row - only show when connected */}
        {isConnected && (
          <div className="flex mb-2 space-x-2">
            {/* Pause/Play button with output device selector */}
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="flex items-center"
                >
                  {isPaused ? <Play size={16} className="mr-1" /> : <Pause size={16} className="mr-1" />}
                  <span className="text-sm mr-1">
                    {isPaused ? 
                      (language === 'sv' ? 'Fortsätt' : 'Play') : 
                      (language === 'sv' ? 'Pausa' : 'Pause')
                    }
                  </span>
                  <MoreHorizontal size={12} />
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-64">
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Button
                      onClick={handlePauseToggle}
                      variant={isPaused ? "default" : "outline"}
                      size="sm"
                      className="flex-1"
                    >
                      {isPaused ? <Play size={14} /> : <Pause size={14} />}
                      <span className="ml-1">
                        {isPaused ? 
                          (language === 'sv' ? 'Fortsätt' : 'Resume') : 
                          (language === 'sv' ? 'Pausa' : 'Pause')
                        }
                      </span>
                    </Button>
                  </div>
                  {audioOutputDevices.length > 1 && (
                    <div>
                      <label className="text-sm font-medium">
                        {language === 'sv' ? 'Välj högtalare:' : 'Select speaker:'}
                      </label>
                      <Select value={selectedOutputDevice} onValueChange={handleOutputDeviceChange}>
                        <SelectTrigger className="w-full mt-1">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {audioOutputDevices.map((device) => (
                            <SelectItem key={device.deviceId} value={device.deviceId}>
                              {device.label || `Speaker ${device.deviceId.slice(-4)}`}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}
                </div>
              </PopoverContent>
            </Popover>
            
            {/* Delete conversation button */}
            <Button
              onClick={resetConversation}
              variant="outline"
              className="flex items-center"
            >
              <Trash2 size={16} className="mr-1" />
              {language === 'sv' ? 'Radera' : 'Delete'}
            </Button>
          </div>
        )}
        
        {/* Text input */}
        <form onSubmit={handleSubmit} className="flex space-x-2">
          <Input
            value={textInput}
            onChange={(e) => setTextInput(e.target.value)}
            placeholder={language === 'sv' ? 'Skriv ett meddelande...' : 'Type a message...'}
            className="flex-1"
            disabled={!isConnected}
          />
          <Button 
            type="submit" 
            size="icon"
            className={getButtonColor('primary')}
            disabled={!textInput.trim() || !isConnected}
          >
            <Send size={16} />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default StandardConversationPlayer;
