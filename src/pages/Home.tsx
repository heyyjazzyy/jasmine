import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";

import { useMode } from "@/context/ModeContext";
import { pmProjects, education } from "@/data/portfolio";


const toolGroups: { category: string; subgroups: { label?: string; items: string[] }[] }[] = [
  {
    category: "Business",
    subgroups: [
      { items: ["Accounting", "Statistics", "Linear Regression", "Logistic Regression", "Hypothesis Testing", "A/B Testing", "Forecasting", "Econometrics", "Financial Modeling", "Jira", "Economics", "Google Analytics", "Hootsuite", "Tableau", "Power BI", "Excel"] },
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


const HeroSentence = () => (
  <p className="body-text max-w-3xl">
    In my free time, I{" "}
    <Link to="/music" className="inline-link">compose music for video games</Link>,{" "}
    <Link to="/media-log" className="inline-link">host dinners</Link>,{" "}
    <Link to="/singing" className="inline-link">sing</Link>,{" "}
    <Link to="/photography" className="inline-link">take photos</Link>, and{" "}
    <Link to="/writing" className="inline-link">write about tech</Link>.
  </p>
);

const Home = () => {
  const { mode, toggle } = useMode();
  const [openTools, setOpenTools] = useState<Set<string>>(new Set());

  const toggleTool = (cat: string) => {
    setOpenTools((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  if (mode === "fridge") {
    return (
      <div className="min-h-screen bg-background">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen pt-10 md:pt-14">
          <aside className="lg:col-span-2 border-r border-border/60 p-6 lg:p-8">
            <Link to="/" className="font-display text-2xl leading-tight hover:text-primary transition-colors block whitespace-nowrap">
              Jasmine Liao
            </Link>
            <button
              onClick={toggle}
              className="font-display text-sm text-muted-foreground hover:text-foreground transition-colors mt-2"
            >
              professional mode →
            </button>
          </aside>
          <div className="lg:col-span-10" />
        </div>
      </div>
    );
  }



  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1 pt-10 md:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[70vh]">
          {/* Left: name + nav */}
          <motion.aside
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 border-r border-border/60 p-6 lg:p-8 flex flex-col justify-between"
          >
            <div>
              <Link to="/" className="font-display text-2xl leading-tight hover:text-primary transition-colors block">
                Jasmine Liao
              </Link>
              <button
                onClick={toggle}
                className="font-display text-sm text-muted-foreground hover:text-foreground transition-colors mt-2"
              >
                fun mode →
              </button>

            </div>
            <nav className="flex flex-col gap-2 font-ui text-sm mt-8 mb-4">
              <a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About</a>
              <a href="#work" className="text-muted-foreground hover:text-foreground transition-colors">Work</a>
              <a href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</a>
            </nav>
          </motion.aside>

          {/* Center: intro + work + free time */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="lg:col-span-10 p-6 lg:p-10 flex flex-col"
          >
            <section className="mb-14">
              <p className="body-text max-w-lg whitespace-pre-line">
                Hi, I'm Jasmine! I strive to build impactful tech with heart and vision.{"\n\n"}
                I'm so glad you're here!
              </p>
            </section>

            <section id="work" className="mb-10">
              <h2 className="template-header">Work</h2>
              <ul className="space-y-6">
                {pmProjects.map((p, i) => (
                  <motion.li
                    key={p.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  >
                    <Link to={`/work/${p.slug}`} className="group block">
                      <div className="font-display text-3xl md:text-4xl leading-tight transition-colors group-hover:text-primary">
                        {p.title}
                      </div>
                      <div className="font-ui text-xs text-muted-foreground mt-1">{p.year}</div>
                    </Link>

                  </motion.li>
                ))}
              </ul>
            </section>

            <section id="free-time" className="mt-auto">
              <HeroSentence />
            </section>
          </motion.div>

        </div>


        <section id="about" className="border-t border-border/60">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-2 border-r border-border/60" />
            <div className="lg:col-span-10">
              <div className="px-6 lg:px-10 pt-16 lg:pt-20 pb-16 lg:pb-20">
                <h2 className="template-header">About</h2>
                <p className="body-text max-w-3xl whitespace-pre-line">
                  I'm a problem solver, strategist, and creator passionate about building tools and products that make an impact.{"\n\n"}
                  From motion graphics to machine learning, and data visualisation to business strategy, my interdisciplinary education has given me a comprehensive foundation, preparing me to build and lead in a rapidly evolving digital landscape.
                </p>
              </div>

              <div className="border-b border-border/60 -mx-6 lg:-mx-10" />

              <div className="px-6 lg:px-10 pt-16 lg:pt-20 pb-16 lg:pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
                  <div>
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

                  <div>
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
          </div>
        </section>

      </main>

      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="hidden lg:block lg:col-span-2 border-r border-border/60" />
        <div className="lg:col-span-10">
          <SiteFooter />
        </div>
      </div>
    </div>
  );

};

export default Home;
