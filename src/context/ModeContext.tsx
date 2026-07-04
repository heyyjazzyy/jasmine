import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type ViewMode = "list" | "fridge";

interface ModeCtx {
  mode: ViewMode;
  setMode: (m: ViewMode) => void;
  toggle: () => void;
}

const Ctx = createContext<ModeCtx | null>(null);

export const ModeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<ViewMode>(() => {
    if (typeof window === "undefined") return "list";
    return (localStorage.getItem("portfolio-mode") as ViewMode) || "list";
  });

  useEffect(() => {
    localStorage.setItem("portfolio-mode", mode);
  }, [mode]);

  return (
    <Ctx.Provider value={{ mode, setMode, toggle: () => setMode(mode === "list" ? "fridge" : "list") }}>
      {children}
    </Ctx.Provider>
  );
};

export const useMode = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useMode must be used inside ModeProvider");
  return ctx;
};
