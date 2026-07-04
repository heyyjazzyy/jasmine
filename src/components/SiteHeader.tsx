import { Link, NavLink } from "react-router-dom";
import ModeSwitch from "./ModeSwitch";

const nav = [
  { to: "/work", label: "Work" },
  { to: "/music", label: "Music" },
  { to: "/photography", label: "Photos" },
  { to: "/writing", label: "Writing" },
  { to: "/media-log", label: "Dinners" },
];

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-background/80 border-b border-border/60">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-4 flex items-center justify-between gap-4">
        <Link to="/" className="font-display text-xl md:text-2xl leading-none">
          <span className="text-primary">◉</span> Portfolio
        </Link>
        <nav className="hidden md:flex items-center gap-6 font-ui text-sm">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `transition-colors ${isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <ModeSwitch />
      </div>
    </header>
  );
};

export default SiteHeader;
