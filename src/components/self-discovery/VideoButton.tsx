
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const VideoButton: React.FC = () => {
  const [videoOpen, setVideoOpen] = useState(false);
  
  return (
    <div className="mt-8 space-y-4">
      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogTrigger asChild>
          <Button 
            variant="outline" 
            className="border-green-600 text-green-700 hover:bg-green-50 hover:text-green-800"
          >
            <Play className="mr-2" /> Watch Demo
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-4xl h-[70vh]">
          <div className="relative w-full h-full">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="Self Discovery Demo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default VideoButton;
