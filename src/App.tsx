import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ModeProvider } from "@/context/ModeContext";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import ItemDetail from "./pages/ItemDetail";
import NotFound from "./pages/NotFound";
import JasmineSupperClub from "./pages/JasmineSupperClub";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ModeProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />

            {/* Category listing pages */}
            <Route
              path="/work"
              element={
                <CategoryPage
                  category="pm"
                  title="Product Work"
                  description=""
                />
              }
            />
            <Route
              path="/music"
              element={
                <CategoryPage
                  category="music"
                  title="Music for Games"
                  titleColor="#E8687B"
                  description="Original scores, ambient loops, and interactive audio written for indie games and interactive media."
                />
              }
            />
            <Route
              path="/singing"
              element={
                <CategoryPage
                  category="singing"
                  title="Singing"
                  titleColor="#E5B547"
                  description="Live-tracked living-room sessions — folk, jazz standards, occasional originals."
                />
              }
            />
            <Route
              path="/photography"
              element={
                <CategoryPage
                  category="photography"
                  title="Photography"
                  titleColor="#9B72CF"
                  description=""
                />
              }
            />
            <Route
              path="/writing"
              element={
                <CategoryPage
                  category="writing"
                  title="Writing about Tech"
                  titleColor="#7D9B76"
                  description="Essays and field notes on product management, AI, and building software that respects the person using it."
                />
              }
            />
            <Route path="/jasmine-supper-club" element={<JasmineSupperClub />} />

            {/* Detail pages */}
            <Route path="/work/:slug" element={<ItemDetail />} />
            <Route path="/music/:slug" element={<ItemDetail />} />
            <Route path="/singing/:slug" element={<ItemDetail />} />
            <Route path="/photography/:slug" element={<ItemDetail />} />
            <Route path="/writing/:slug" element={<ItemDetail />} />
            <Route path="/media-log/:slug" element={<ItemDetail />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ModeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
