
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CmoFaqSection: React.FC = () => {
  const faqs = [
    {
      question: "How is the advice personalized to my business?",
      answer: "When you click the mic to start, the AI asks a few quick context questions—your industry, goals, current campaigns—and then tailors each response to that info plus whatever you ask in-session. It filters its global marketing knowledgebase to give recommendations that fit your unique situation."
    },
    {
      question: "What does the free plan include?",
      answer: "Individual Free Tier: 10 minutes of voice chat per day. You can pause and pick up the same conversation 24 hours later by entering your email.\n\nTeam Free Tier: Your team (up to 10 seats, 5 simultaneous speakers) shares a collective 10 min/day. Any member can resume the same convo after 24 hours by signing up with their email."
    },
    {
      question: "How accurate and reliable is the AI's guidance?",
      answer: "CMO on Demand is trained on proven marketing frameworks, award-winning case studies and continuously updated industry data. Early users report its recommendations closely mirror what seasoned CMOs would advise. You can rate answers in-app, helping the system learn and improve over time."
    },
    {
      question: "How does voice-based interaction differ from text AI tools?",
      answer: "Speaking is faster and often more natural than typing—especially when you're brainstorming. Voice lets you convey nuance (tone, emphasis) that pure text misses, creating a conversational flow and follow-up questions just like chatting with a human CMO."
    },
    {
      question: "Is my data safe and private?",
      answer: "Yes. All conversations and context data are encrypted in transit and at rest. We never share your data with third parties. Only you can access your session history, and we're fully GDPR-compliant."
    },
    {
      question: "Can I upgrade, downgrade, or cancel at any time?",
      answer: "Absolutely:\n\nDay Pass (individual $11.95, team $19.50) gives 24 hours of unlimited chat and ends automatically.\n\nMonthly (individual $14.95/mo, team $29.95/mo) and Annual (individual $99.50/yr, team $299.50/yr) subscriptions auto-renew but can be canceled any time with no penalties.\n\nYou can purchase or switch plans at any point in a session. Downgrades or cancellations take effect next billing cycle (or simply let your Day Pass expire)."
    },
    {
      question: "How is CMO on Demand different from hiring a consultant or full-time CMO?",
      answer: "You get instant, 24/7 access without scheduling hassles or retainer fees. Pay only for what you need—whether a one-day pass or a monthly plan—rather than salaries, benefits, or long-term contracts."
    },
    {
      question: "Are there usage limits or premium features planned?",
      answer: "Usage limits vary by plan: free tiers cap at 10 min/day; Day Pass, Monthly and Annual plans are unlimited for their duration.\n\nPremium features coming soon include advanced analytics, team collaboration dashboards, and in-depth account reviews—while core voice-based strategy Q&A remains available at every tier."
    },
    {
      question: "What industries or business sizes does it serve best?",
      answer: "Optimized for startups, solo founders, freelancers, SMEs and boutique agencies across sectors—from SaaS and e-commerce to professional services. The AI adapts its advice to your market context."
    },
    {
      question: "Do I need any special hardware or software to use it?",
      answer: "No. Just a smartphone or computer with a microphone. Click the mic icon in our web or mobile app—no prior install or signup required. You only enter your email later if you want to save, resume or email your chat summary."
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-cabinet font-bold text-4xl mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about your CMO on Demand</p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-left font-cabinet font-bold text-lg py-4 hover:text-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer.split('\n\n').map((paragraph, i) => (
                    <p key={i} className={i > 0 ? "mt-3" : ""}>{paragraph}</p>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default CmoFaqSection;
