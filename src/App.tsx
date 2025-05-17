
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CmoOnDemand from "./pages/CmoOnDemand";
import NotFound from "./pages/NotFound";
import PartyConversation from "./pages/PartyConversation";
import SelfDiscovery from "./pages/SelfDiscovery";
import CouplesBlameBuffer from "./pages/CouplesBlameBuffer";
import ExCoupleEntanglement from "./pages/ExCoupleEntanglement";
import ConflictFixer from "./pages/ConflictFixer";
import Admin from "./pages/Admin";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/cmo" element={<CmoOnDemand />} />
          <Route path="/party-conversation" element={<PartyConversation />} />
          <Route path="/self-discovery" element={<SelfDiscovery />} />
          <Route path="/couples-blame-buffer" element={<CouplesBlameBuffer />} />
          <Route path="/ex-couple-entanglement" element={<ExCoupleEntanglement />} />
          <Route path="/conflict-fixer" element={<ConflictFixer />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
