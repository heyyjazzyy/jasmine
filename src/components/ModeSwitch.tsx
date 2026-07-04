import { useMode } from "@/context/ModeContext";
import { List, Sparkles } from "lucide-react";

const ModeSwitch = () => {
  const { mode, setMode } = useMode();
  return (
    <div className="mode-switch" role="tablist" aria-label="View mode">
      <button
        role="tab"
        data-active={mode === "list"}
        aria-selected={mode === "list"}
        onClick={() => setMode("list")}
      >
        <List className="inline w-3 h-3 mr-1 -mt-0.5" />
        List
      </button>
      <span className="text-muted-foreground/60 px-0.5">⇄</span>
      <button
        role="tab"
        data-active={mode === "fridge"}
        aria-selected={mode === "fridge"}
        onClick={() => setMode("fridge")}
      >
        <Sparkles className="inline w-3 h-3 mr-1 -mt-0.5" />
        Fridge
      </button>
    </div>
  );
};

export default ModeSwitch;
