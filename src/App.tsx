import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { ModeProvider } from "@/context/ModeContext";
import ScrollToTop from "@/components/ScrollToTop";
import PageTransition from "@/components/PageTransition";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ItemDetail from "./pages/ItemDetail";
import NotFound from "./pages/NotFound";
import JasmineSupperClub from "./pages/JasmineSupperClub";
import NowPlaying from "./pages/NowPlaying";
import ACappella from "./pages/ACappella";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />

        {/* Category listing pages */}
        <Route
          path="/work"
          element={
            <PageTransition>
              <CategoryPage
                category="pm"
                title="Product Work"
                description=""
              />
            </PageTransition>
          }
        />
        <Route
          path="/music"
          element={
            <PageTransition>
              <CategoryPage
                category="music"
                title="Music for Games"
                titleColor="#E8687B"
                description="Original scores, ambient loops, and interactive audio written for indie games and interactive media."
              />
            </PageTransition>
          }
        />
        <Route
          path="/singing"
          element={
            <PageTransition>
              <CategoryPage
                category="singing"
                title="Singing"
                titleColor="#E5B547"
                description="Live-tracked living-room sessions — folk, jazz standards, occasional originals."
              />
            </PageTransition>
          }
        />
        <Route
          path="/photography"
          element={
            <PageTransition>
              <CategoryPage
                category="photography"
                title="Photography"
                titleColor="#9B72CF"
                description=""
              />
            </PageTransition>
          }
        />
        <Route
          path="/writing"
          element={
            <PageTransition>
              <CategoryPage
                category="writing"
                title="Writing about Tech"
                titleColor="#7D9B76"
                description=""
              />
            </PageTransition>
          }
        />
        <Route path="/jasmine-supper-club" element={<PageTransition><JasmineSupperClub /></PageTransition>} />
        <Route path="/now-playing" element={<PageTransition><NowPlaying /></PageTransition>} />

        {/* Detail pages */}
        <Route path="/work/:slug" element={<PageTransition><ItemDetail /></PageTransition>} />
        <Route path="/music/:slug" element={<PageTransition><ItemDetail /></PageTransition>} />
        <Route path="/singing/:slug" element={<PageTransition><ItemDetail /></PageTransition>} />
        <Route path="/photography/:slug" element={<PageTransition><ItemDetail /></PageTransition>} />
        <Route path="/writing/:slug" element={<PageTransition><ItemDetail /></PageTransition>} />
        <Route path="/media-log/:slug" element={<PageTransition><ItemDetail /></PageTransition>} />

        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ModeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <AnimatedRoutes />
        </BrowserRouter>
      </ModeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
