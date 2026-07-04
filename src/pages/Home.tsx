import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import SideNav from "@/components/SideNav";

import { useMode } from "@/context/ModeContext";
import { pmProjects, education } from "@/data/portfolio";
import headshot from "@/assets/headshot.jpg.asset.json";

const toolGroups: { category: string; subgroups: { label?: string; items: string[] }[] }[] = [
  {
    category: "Business",
    subgroups: [
      { items: ["Accounting", "Statistics", "Linear Regression", "Logistic Regression", "Hypothesis Testing", "A/B Testing", "Financial Modeling", "Jira", "Economics", "Google Analytics", "Hootsuite", "Tableau", "Excel"] },
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
  <p className="body-text max-w-3xl text-base md:text-lg">
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


  const fridgeContent = (
    <motion.div
      key="fridge"
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="min-h-screen bg-background"
    >
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
    </motion.div>
  );

  return (
    <AnimatePresence mode="wait">
      {mode === "fridge" ? (
        fridgeContent
      ) : (
        <motion.div
          key="pro"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative min-h-screen flex flex-col bg-background"
        >
      <div className="hidden lg:block absolute left-[16.666667%] top-0 bottom-0 z-10 w-px bg-border/60 pointer-events-none" />
      <main className="flex-1 pt-10 md:pt-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[70vh]">
          {/* Left: name + nav */}
          <SideNav />

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
                    >
                      <Link to={`/work/${p.slug}`} className="group block">
                        <div className={`font-display text-3xl md:text-4xl leading-tight transition-colors ${hoverColor}`}>
                          {p.title}
                        </div>
                        <div className="font-ui text-xs text-muted-foreground mt-1">{p.year}</div>
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </section>

            <section id="free-time" className="mt-auto">
              <HeroSentence />
            </section>

          </motion.div>

        </div>




      </main>


      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-full border-t border-border/60" />
        <div className="lg:col-start-3 lg:col-end-13">
          <SiteFooter />
        </div>
      </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

};

export default Home;
