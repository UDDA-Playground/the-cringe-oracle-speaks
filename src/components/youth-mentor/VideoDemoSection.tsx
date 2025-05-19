
import React from 'react';
import { Play } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const VideoDemoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-udda-blue/10 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              See the Youth Mentor in action
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
              Watch how our AI mentor provides supportive guidance for young people
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-xl overflow-hidden relative aspect-video">
            <img 
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
              alt="Teenager talking with mentor" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-udda-blue text-white rounded-full p-4 h-16 w-16">
                    <Play size={32} />
                  </button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl h-[70vh]">
                  <div className="relative w-full h-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                      title="Youth Mentor Demo"
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
