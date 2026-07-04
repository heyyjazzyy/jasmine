import { Link } from "react-router-dom";
import ModeSwitch from "./ModeSwitch";

const SiteHeader = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-40">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex items-center justify-between gap-4">
        <ModeSwitch />
        <Link
          to="/"
          className="font-display text-lg md:text-xl leading-none hover:text-primary transition-colors"
        >
          Jasmine Liao
        </Link>
      </div>
    </header>
  );
};

export default SiteHeader;
