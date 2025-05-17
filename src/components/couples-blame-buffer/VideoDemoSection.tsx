
import React from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger, DialogContent } from '@/components/ui/dialog';

const VideoDemoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-udda-coral/10 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              See Couples Blame Buffer in action
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how our AI helps couples navigate conflicts and strengthen their relationship
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden relative aspect-video">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f825cd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Couple in thoughtful reflection"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="coral" className="rounded-full p-4 h-16 w-16">
                    <Heart size={32} />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[70vh]">
                  <div className="relative w-full h-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                      title="Couples Blame Buffer Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="rounded-lg"
                    ></iframe>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoDemoSection;
