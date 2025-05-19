
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const ProductExperienceSection: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleExperienceSection = () => {
    setIsOpen(!isOpen);
  };

  const experienceOptions = [
    {
      title: "Self Discovery",
      description: "Work through personal challenges with AI-guided insights",
      path: "/self-discovery",
      color: "bg-udda-mint",
      textColor: "text-udda-green",
      buttonVariant: "green" as const
    },
    {
      title: "Couple's Therapy",
      description: "Navigate relationship challenges with a neutral third party",
      path: "/couples-blame-buffer",
      color: "bg-udda-lavender/20",
      textColor: "text-udda-purple",
      buttonVariant: "purple" as const
    },
    {
      title: "Ex-Couple Sheriff",
      description: "Find closure and set boundaries after a relationship ends",
      path: "/ex-couple-entanglement",
      color: "bg-udda-yellow/20",
      textColor: "text-udda-coral",
      buttonVariant: "coral" as const
    },
    {
      title: "Party Conversation",
      description: "Practice social skills and build conversation confidence",
      path: "/party-conversation",
      color: "bg-udda-blue/20",
      textColor: "text-udda-blue",
      buttonVariant: "blue" as const
    },
    {
      title: "Weirdness Test",
      description: "Discover your hidden traits and strange personality quirks",
      path: "/personality-test",
      color: "bg-purple-100",
      textColor: "text-purple-700",
      buttonVariant: "purple" as const
    },
    {
      title: "Youth Mentor",
      description: "Evidence-based guidance for young people ages 10-25",
      path: "/youth-mentor",
      color: "bg-blue-100",
      textColor: "text-blue-700",
      buttonVariant: "blue" as const
    }
  ];

  return (
    <div className="w-full max-w-3xl mx-auto">
      <button 
        onClick={toggleExperienceSection}
        className="flex items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-udda-purple transition-colors w-full py-2"
      >
        Choose your experience {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      
      {isOpen && (
        <div className="bg-white/80 backdrop-blur-md rounded-lg shadow-lg p-4 mt-2 grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in-0 slide-in-from-top-5 duration-300">
          {experienceOptions.map((option, index) => (
            <div key={index} className={`p-4 rounded-lg ${option.color} hover:shadow-md transition-all`}>
              <h3 className={`font-cabinet font-bold text-lg mb-1 ${option.textColor}`}>
                {option.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {option.description}
              </p>
              <Link to={option.path}>
                <Button variant={option.buttonVariant} size="sm" className="w-full">
                  Start Now
                </Button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductExperienceSection;
