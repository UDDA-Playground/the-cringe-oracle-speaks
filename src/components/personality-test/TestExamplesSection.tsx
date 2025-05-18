
import React from 'react';

const TestExamplesSection: React.FC = () => {
  const exampleInsights = [
    {
      title: "The Secret Contrarian",
      description: "You outwardly agree with others but secretly enjoy when their plans fail. This creates cognitive dissonance you resolve by telling yourself you're just being 'realistic'.",
      color: "bg-purple-100",
      textColor: "text-purple-700"
    },
    {
      title: "The Spotlight Paradox",
      description: "While claiming to hate attention, you meticulously craft social media posts to maximize engagement. You feel validation from likes but pretend they don't matter.",
      color: "bg-yellow-100",
      textColor: "text-yellow-700"
    },
    {
      title: "The Comfort Collector",
      description: "You have an unusual relationship with personal belongings, assigning them emotional significance far beyond their practical value. This creates anxiety about loss.",
      color: "bg-blue-100",
      textColor: "text-blue-700"
    },
    {
      title: "The Inner Judge",
      description: "You're far more judgmental than you admit. While appearing accepting, your inner monologue constantly evaluates others against arbitrary standards you've created.",
      color: "bg-green-100",
      textColor: "text-green-700"
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-64 h-64 bg-purple-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block rotate-1 bg-udda-lavender/20 px-4 py-1 rounded-lg mb-4">
              <span className="text-udda-purple font-bold">Example insights from our test</span>
            </div>
            <h2 className="font-cabinet font-bold text-3xl md:text-4xl mb-4">
              The weird traits we might find in you
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our AI analyzes subtle patterns in your speech, reactions, and thought processes to reveal 
              insights about your personality that typical tests miss.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exampleInsights.map((insight, index) => (
              <div 
                key={index}
                className={`${insight.color} p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow transform ${index % 3 === 0 ? 'rotate-1' : '-rotate-1'}`}
              >
                <h3 className={`font-cabinet font-bold text-xl mb-2 ${insight.textColor}`}>
                  {insight.title}
                </h3>
                <p className="text-gray-700">
                  {insight.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="italic text-gray-500">
              "The personality test was both hilariously accurate and disturbingly insightful. 
              I didn't expect to laugh so hard while learning so much about myself."
            </p>
            <p className="font-bold mt-2">— Emma, 34</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestExamplesSection;
