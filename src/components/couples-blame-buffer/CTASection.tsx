
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import ElevenLabsWidget from '../ElevenLabsWidget';
import AuthModal from '../auth/AuthModal';

const CTASection: React.FC = () => {
  const [spotsLeft, setSpotsLeft] = useState(10);
  const [email, setEmail] = useState('');
  const [isWaitlisted, setIsWaitlisted] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  // Simulate scarcity counter (in real app, this would come from your backend)
  useEffect(() => {
    const savedSpots = localStorage.getItem('spotsLeft');
    if (savedSpots) {
      setSpotsLeft(parseInt(savedSpots, 10));
    }
    
    // Check if user is signed in
    const savedUser = localStorage.getItem('userEmail');
    if (savedUser) {
      setIsSignedIn(true);
      setUserEmail(savedUser);
    }
  }, []);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // In real app, save to waitlist
      setIsWaitlisted(true);
      console.log('Added to waitlist:', email);
    }
  };

  const handleSignIn = (email: string, password?: string) => {
    // In real app, authenticate with Supabase
    setIsSignedIn(true);
    setUserEmail(email);
    localStorage.setItem('userEmail', email);
    console.log('User signed in:', email);
  };

  const handleSignOut = () => {
    setIsSignedIn(false);
    setUserEmail('');
    localStorage.removeItem('userEmail');
  };

  const handleConversationStart = () => {
    if (spotsLeft > 0) {
      const newSpots = spotsLeft - 1;
      setSpotsLeft(newSpots);
      localStorage.setItem('spotsLeft', newSpots.toString());
    }
  };

  return (
    <section className="py-16 bg-gradient-to-r from-coral-600 to-coral-500 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-6">
            Ready to strengthen your relationship?
          </h2>
          
          {/* User status */}
          <div className="mb-4">
            {isSignedIn ? (
              <div className="inline-flex items-center space-x-2 bg-white/20 px-4 py-2 rounded-full">
                <span className="text-sm">Welcome back, {userEmail}</span>
                <button 
                  onClick={handleSignOut}
                  className="text-xs hover:underline"
                >
                  Sign out
                </button>
              </div>
            ) : (
              <Button 
                onClick={() => setShowAuthModal(true)}
                variant="outline" 
                className="bg-white/20 border-white/30 text-white hover:bg-white/30"
              >
                Sign in to save conversations
              </Button>
            )}
          </div>
          
          {/* Scarcity Counter */}
          <div className="mb-6">
            <div className="inline-block bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg">
              <div className="flex items-center space-x-2 text-coral-700">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-bold text-lg">
                  Only {spotsLeft} spots left today
                </span>
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>

          {spotsLeft > 0 ? (
            <>
              <p className="text-xl mb-8">
                Start your free conversation today. Limited to 10 users per day.
                {isSignedIn && <span className="block text-lg mt-2">Your previous conversations will be automatically loaded.</span>}
              </p>
              
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-lg mx-auto mb-8">
                <h3 className="font-cabinet font-bold text-xl mb-4 text-coral-700">Start a conversation</h3>
                
                <div className="mb-6 h-96">
                  <ElevenLabsWidget 
                    agentId="cXEiaJLsMXO8XFzOQh8m" 
                    accentColor="coral"
                    className="h-full"
                  />
                </div>
                
                <p className="text-xs text-gray-500">
                  By starting, you agree to our terms and acknowledge that UDDA will record and transcribe
                  audio for this session only. GDPR compliant.
                </p>
              </div>
            </>
          ) : (
            <div className="bg-white/90 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-lg mx-auto mb-8">
              <h3 className="font-cabinet font-bold text-xl mb-4 text-coral-700">
                Today's spots are full!
              </h3>
              <p className="text-gray-600 mb-4">
                Get notified when new spots become available tomorrow.
              </p>
              
              {!isWaitlisted ? (
                <form onSubmit={handleEmailSubmit} className="space-y-3">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full"
                    required
                  />
                  <Button 
                    type="submit" 
                    className="w-full bg-coral-600 hover:bg-coral-700"
                  >
                    Join Waitlist
                  </Button>
                </form>
              ) : (
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-green-700 font-semibold">
                    You're on the waitlist! We'll email you tomorrow.
                  </p>
                </div>
              )}
            </div>
          )}
          
          <Button variant="outline" className="bg-white hover:bg-gray-100 text-coral-700">
            Learn more about our approach
          </Button>
        </div>
      </div>

      <AuthModal 
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        onSignIn={handleSignIn}
      />
    </section>
  );
};

export default CTASection;
