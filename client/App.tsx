import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Solutions from "./pages/Solutions";
import ToolA from "./pages/ToolA";
import PerformanceTool from "./pages/PerformanceTool";
import ReputationTool from "./pages/ReputationTool";
import DespreNotch from "./pages/DespreNotch";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Gdpr from "./pages/Gdpr";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Plans from "./pages/Plans";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/solutii" element={<Solutions />} />
          <Route path="/instrumente" element={<Solutions />} />
          <Route path="/tools" element={<Solutions />} />
          <Route path="/solutii/vizibilitate-ai" element={<ToolA />} />
          <Route path="/solutii/performanta" element={<PerformanceTool />} />
          <Route path="/solutii/reputatie" element={<ReputationTool />} />
          <Route path="/instrumente/vizibilitate-ai" element={<ToolA />} />
          <Route
            path="/instrumente/performanta"
            element={<PerformanceTool />}
          />
          <Route path="/instrumente/reputatie" element={<ReputationTool />} />
          <Route path="/tool-a" element={<ToolA />} />
          <Route path="/despre-notch" element={<DespreNotch />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/gdpr" element={<Gdpr />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/planuri" element={<Plans />} />
          <Route path="/preturi" element={<Plans />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

// Avoid double mounting in development
const container = document.getElementById("root")!;

// Check if root is already defined on the container
if (!(container as any)._reactRoot) {
  const root = createRoot(container);
  (container as any)._reactRoot = root;
  root.render(<App />);
} else {
  // Reuse existing root
  (container as any)._reactRoot.render(<App />);
}
