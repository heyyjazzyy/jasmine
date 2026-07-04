import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useMode } from "@/context/ModeContext";

const SideNav = () => {
  const { toggle } = useMode();
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const link = (hash: string) => (isHome ? `#${hash}` : `/#${hash}`);

  return (
    <motion.aside
      initial={{ opacity: 0, x: -12 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="lg:col-span-2 p-6 lg:p-8 flex flex-col justify-between"
    >
      <div>
        <Link
          to="/"
          className="font-display text-2xl leading-tight hover:text-primary transition-colors block"
        >
          Jasmine Liao
        </Link>
        {isHome && (
          <button
            onClick={toggle}
            className="font-display text-sm text-muted-foreground hover:text-foreground transition-colors mt-2"
          >
            fun mode →
          </button>
        )}
      </div>
      <nav className="flex flex-col gap-2 font-ui text-sm mt-8 mb-4">
        <a href={link("about")} className="text-muted-foreground hover:text-foreground transition-colors">About</a>
        <a href={link("work")} className="text-muted-foreground hover:text-foreground transition-colors">Work</a>
        <a href={link("contact")} className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
      </nav>
    </motion.aside>
  );
};

export default SideNav;
