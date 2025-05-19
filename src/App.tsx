
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PartyConversation from "./pages/PartyConversation";
import SelfDiscovery from "./pages/SelfDiscovery";
import CouplesBlameBuffer from "./pages/CouplesBlameBuffer";
import ExCoupleEntanglement from "./pages/ExCoupleEntanglement";
import ConflictFixer from "./pages/ConflictFixer";
import Admin from "./pages/Admin";
import PersonalityTest from "./pages/PersonalityTest";
import YouthMentor from "./pages/YouthMentor";
import { useEffect } from "react";

const queryClient = new QueryClient();

const App = () => {
  // Initialize Google Analytics
  useEffect(() => {
    // Add Google Analytics script
    const gtagScript1 = document.createElement('script');
    gtagScript1.async = true;
    gtagScript1.src = "https://www.googletagmanager.com/gtag/js?id=G-67VWJXCLHJ";
    
    const gtagScript2 = document.createElement('script');
    gtagScript2.textContent = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-67VWJXCLHJ');
    `;
    
    document.head.appendChild(gtagScript1);
    document.head.appendChild(gtagScript2);
    
    return () => {
      // Clean up if component unmounts (though in practice App never unmounts)
      document.head.removeChild(gtagScript1);
      document.head.removeChild(gtagScript2);
    };
  }, []);
  
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/party-conversation" element={<PartyConversation />} />
              <Route path="/self-discovery" element={<SelfDiscovery />} />
              <Route path="/couples-blame-buffer" element={<CouplesBlameBuffer />} />
              <Route path="/ex-couple-entanglement" element={<ExCoupleEntanglement />} />
              <Route path="/conflict-fixer" element={<ConflictFixer />} />
              <Route path="/personality-test" element={<PersonalityTest />} />
              <Route path="/youth-mentor" element={<YouthMentor />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </LanguageProvider>
    </QueryClientProvider>
  );
};

export default App;
