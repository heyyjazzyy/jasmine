import { useMode } from "@/context/ModeContext";

const ModeSwitch = () => {
  const { mode, setMode } = useMode();
  return (
    <div className="mode-switch font-display" role="tablist" aria-label="View mode">
      <button
        role="tab"
        data-active={mode === "list"}
        aria-selected={mode === "list"}
        onClick={() => setMode("list")}
      >
        professional
      </button>
      <span className="text-muted-foreground/60 px-0.5">⇄</span>
      <button
        role="tab"
        data-active={mode === "fridge"}
        aria-selected={mode === "fridge"}
        onClick={() => setMode("fridge")}
      >
        fun
      </button>
    </div>
  );
};

export default ModeSwitch;
