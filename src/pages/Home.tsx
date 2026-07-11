import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

import flowerAsset from "@/assets/flower.png.asset.json";
import portraitAsset from "@/assets/jasmine-portrait.jpg.asset.json";
import duolingoHover from "@/assets/duolingo-hover.png.asset.json";
import loopHover from "@/assets/loop-hover.png.asset.json";
import paypalHover from "@/assets/paypal-hover.png.asset.json";

const workHoverImages: Record<string, string> = {
  duolingo: duolingoHover.url,
  loop: loopHover.url,
  paypal: paypalHover.url,
};

import { useMode } from "@/context/ModeContext";
import { pmProjects, education } from "@/data/portfolio";


const toolGroups: { category: string; subgroups: { label?: string; items: string[] }[] }[] = [
  {
    category: "Business",
    subgroups: [
      { items: ["Accounting", "Statistics", "Linear Regression", "A/B Testing", "Financial Modeling", "Jira", "Economics", "Google Analytics", "Hootsuite", "Tableau", "Excel"] },
    ],
  },
  {
    category: "Technology",
    subgroups: [
      { label: "Dev", items: ["Web (CSS, HTML, JS)", "iOS (Swift)", "PHP", "Python", "Git"] },
      { label: "Data", items: ["Node.js", "SQL", "MongoDB"] },
      { label: "Creative", items: ["Unity (C#)", "AutoCAD", "Blender"] },
    ],
  },
  {
    category: "Art and Design",
    subgroups: [
      { label: "Visual/Multimedia", items: ["Figma", "Photoshop", "Illustrator", "Premiere Pro", "After Effects", "Lightroom", "InDesign", "Procreate", "Unity"] },
      { label: "Music Creation", items: ["Logic Pro", "Ableton Live", "Wwise", "Musescore", "Piano"] },
    ],
  },
];


const linkBase =
  "underline decoration-2 underline-offset-4 decoration-foreground/40 transition-colors";

const HeroSentence = () => (
  <p className="body-text max-w-lg text-base md:text-lg">
    In my free time, I{" "}
    <Link to="/music" className={`${linkBase} hover:text-[#E8687B] hover:decoration-[#E8687B]`}>
      compose music for video games
    </Link>,{" "}
    <Link to="/jasmine-supper-club" className={`${linkBase} hover:text-[#2D8A9E] hover:decoration-[#2D8A9E]`}>
      host dinners
    </Link>,{" "}
    <Link to="/singing" className={`${linkBase} hover:text-[#F0CE6E] hover:decoration-[#F0CE6E]`}>
      sing
    </Link>,{" "}
    <Link to="/photography" className={`${linkBase} hover:text-[#9B72CF] hover:decoration-[#9B72CF]`}>
      take photos
    </Link>, and{" "}
    <Link to="/writing" className={`${linkBase} hover:text-[#7D9B76] hover:decoration-[#7D9B76]`}>
      write about tech
    </Link>.
  </p>
);


const Home = () => {
  const { mode, toggle } = useMode();
  const [openTools, setOpenTools] = useState<Set<string>>(new Set());
  const [mobileNavOpen, setMobileNavOpen] = useState(false);


  const [hoveredWork, setHoveredWork] = useState<string | null>(null);

  const toggleTool = (cat: string) => {
    setOpenTools((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
      {/* Persistent left sidebar */}
      <aside className="lg:col-span-2 bg-background border-b lg:border-b-0 lg:border-r border-border/60 p-6 pt-16 md:pt-20 lg:p-8 lg:pt-24 flex flex-row lg:flex-col justify-between items-start lg:sticky lg:top-0 lg:h-screen">
        <div className="flex items-center gap-2 lg:block">
          <Link to="/">
            <img src={flowerAsset.url} alt="" className="w-10 h-10 lg:w-16 lg:h-16 mb-0 lg:mb-3" />
          </Link>
          <Link to="/" className="font-display text-2xl leading-tight hover:text-primary transition-colors block whitespace-nowrap">
            Jasmine Liao
          </Link>
        </div>
        {mode !== "fridge" && (
          <>
            {/* Desktop nav */}
            <nav className="hidden lg:flex flex-col gap-2 font-ui text-sm mt-8 mb-4">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</a>
              <Link to="/now-playing" className="text-muted-foreground hover:text-foreground transition-colors">Now Playing</Link>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileNavOpen(true)}
              aria-label="Open menu"
              className="lg:hidden text-foreground p-2 -mr-2"
            >
              <Menu className="w-6 h-6" />
            </button>
          </>
        )}
      </aside>

      {/* Mobile nav overlay */}
      <AnimatePresence>
        {mobileNavOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 bg-background lg:hidden flex flex-col p-6 pt-16"
          >
            <button
              onClick={() => setMobileNavOpen(false)}
              aria-label="Close menu"
              className="absolute top-6 right-6 p-2"
            >
              <X className="w-6 h-6" />
            </button>
            <nav className="flex flex-col gap-6 font-display text-3xl mt-8">
              <a href="#about" onClick={() => setMobileNavOpen(false)} className="hover:text-primary transition-colors">About</a>
              <a href="#work" onClick={() => setMobileNavOpen(false)} className="hover:text-primary transition-colors">Work</a>
              <Link to="/now-playing" onClick={() => setMobileNavOpen(false)} className="hover:text-primary transition-colors">Now Playing</Link>
              <a href="#contact" onClick={() => setMobileNavOpen(false)} className="hover:text-primary transition-colors">Contact</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>



      {/* Right side: only this area animates on mode switch */}
      <div className="lg:col-span-10 relative">
        <AnimatePresence mode="wait">
          {mode === "fridge" ? (
            <motion.div
              key="fridge"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="min-h-screen"
            />
          ) : (
            <motion.div
              key="pro"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="relative min-h-screen flex flex-col bg-background"
            >
              <main className="flex-1 pt-4 md:pt-6 lg:pt-14">
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.05 }}
                  className="relative p-6 lg:p-10 flex flex-col min-h-[70vh]"
                >
                  <section className="mb-14">
                    <p className="body-text max-w-lg whitespace-pre-line">
                      Hi, I'm Jasmine!{"\n"}
                      I strive to build impactful tech with heart and vision.{"\n\n"}
                      I'm so glad you're here!
                    </p>
                  </section>

                  <section id="work" className="mb-10 relative">
                    <h2 className="template-header">Work</h2>
                    <ul className="space-y-6 mt-4">
                      {pmProjects.map((p, i) => {
                        const hoverColor =
                          p.slug === "duolingo"
                            ? "group-hover:text-[#58CC02]"
                            : p.slug === "loop"
                              ? "group-hover:text-[#DF7FB9]"
                              : p.slug === "paypal"
                                ? "group-hover:text-[#0079C1]"
                                : "group-hover:text-primary";
                        return (
                          <motion.li
                            key={p.id}
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                            onMouseEnter={() => setHoveredWork(p.slug)}
                            onMouseLeave={() => setHoveredWork((cur) => (cur === p.slug ? null : cur))}
                          >
                            <Link to={`/work/${p.slug}`} className="group inline-block">
                              <div className={`font-display text-3xl md:text-4xl leading-tight transition-colors ${hoverColor}`}>
                                {p.title}
                              </div>
                              <div className="font-ui text-xs text-muted-foreground mt-1">{p.year}</div>
                            </Link>
                          </motion.li>
                        );
                      })}
                    </ul>

                    {/* Desktop-only hover preview */}
                    <div className="hidden lg:block pointer-events-none absolute top-1/2 -translate-y-1/2 left-[260px] xl:left-[320px] w-[440px] h-[350px]">
                      {pmProjects.map((p) => {
                        const src = workHoverImages[p.slug];
                        if (!src) return null;
                        return (
                          <img
                            key={p.slug}
                            src={src}
                            alt=""
                            className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-300 ${hoveredWork === p.slug ? "opacity-100" : "opacity-0"}`}
                          />
                        );
                      })}
                    </div>
                  </section>

                  <section id="free-time" className="mt-auto">
                    <HeroSentence />
                  </section>
                </motion.div>

              </main>

              <section id="about" className="border-t border-border/60">
                <div className="grid grid-cols-1 lg:grid-cols-12">
                  <div className="lg:col-start-1 lg:col-end-13 px-6 lg:px-10 pt-16 lg:pt-20 pb-16 lg:pb-20">
                    <h2 className="template-header">About</h2>
                    <div className="mt-4 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                      <img
                        src={portraitAsset.url}
                        alt="Portrait of Jasmine Liao"
                        className="w-36 h-48 md:w-[180px] md:h-[240px] lg:w-[220px] lg:h-[300px] object-cover rounded-sm flex-shrink-0"
                      />
                      <p className="body-text whitespace-pre-line md:pl-0 lg:max-w-xl">
                        I'm a problem solver, strategist, and creator passionate about building tools and products that make an impact.{"\n\n"}
                        From motion graphics to machine learning, and data visualisation to business strategy, my interdisciplinary education has given me a comprehensive foundation, preparing me to build and lead in a rapidly evolving digital landscape.
                      </p>
                    </div>
                  </div>

                  <div className="col-span-full border-b border-border/60" />

                  <div className="lg:col-start-1 lg:col-end-13 px-6 lg:px-10 pt-16 lg:pt-20 pb-16 lg:pb-20">
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-6 lg:gap-6">
                      <div className="lg:col-span-3 max-w-lg">
                        <h3 className="template-header">Education</h3>
                        <ul className="space-y-4">
                          {education.map((e) => (
                            <li key={e.degree}>
                              <div className="font-ui text-xs text-muted-foreground">{e.dateRange}</div>
                              <div className="text-base font-medium mt-0.5">{e.degree}</div>
                              <div className="text-sm text-muted-foreground">{e.institution}</div>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="lg:col-span-2">
                        <h3 className="template-header">Tools</h3>
                        <div className="space-y-0">
                          {toolGroups.map((group) => {
                            const isOpen = openTools.has(group.category);
                            return (
                              <div key={group.category} className="border-b border-border/60">
                                <button
                                  onClick={() => toggleTool(group.category)}
                                  className="w-full flex items-center justify-between py-3 text-left group"
                                >
                                  <span className="font-display text-base">{group.category}</span>
                                  <ChevronDown
                                    className={`w-5 h-5 text-muted-foreground transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                                  />
                                </button>
                                {isOpen && (
                                  <div className="pb-4 space-y-4">
                                    {group.subgroups.map((sg, i) => (
                                      <div key={i}>
                                        {sg.label && (
                                          <div className="font-ui text-xs uppercase tracking-wider text-muted-foreground mb-2">
                                            {sg.label}
                                          </div>
                                        )}
                                        <div className="flex flex-wrap gap-2">
                                          {sg.items.map((item) => (
                                            <span key={item} className="tool-badge">
                                              {item}
                                            </span>
                                          ))}
                                        </div>
                                      </div>
                                    ))}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="col-span-full border-t border-border/60" />
                <div className="lg:col-start-1 lg:col-end-13">
                  <SiteFooter />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Home;
