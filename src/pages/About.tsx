import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ChevronDown } from "lucide-react";
import SiteFooter from "@/components/SiteFooter";
import { education } from "@/data/portfolio";
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

const About = () => {
  const [openTools, setOpenTools] = useState<Set<string>>(new Set());
  const toggleTool = (cat: string) => {
    setOpenTools((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  };

  return (
    <main className="relative min-h-screen bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        <motion.aside
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 border-r border-border/60 p-6 lg:p-8 flex flex-col justify-between lg:sticky lg:top-0 lg:h-screen"
        >
          <Link to="/" className="font-display text-2xl leading-tight hover:text-primary transition-colors block whitespace-nowrap">
            Jasmine Liao
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-ui text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </motion.aside>

        <div className="lg:col-span-10 flex flex-col">
          <div className="flex-1 p-6 lg:p-10 pt-10 md:pt-14">
            <h1 className="display-heading">About</h1>

            <section className="mt-10 grid grid-cols-1 md:grid-cols-[auto,1fr] gap-8 md:gap-10 items-start">
              <img
                src={headshot.url}
                alt="Portrait of Jasmine Liao"
                className="w-40 h-52 md:w-48 md:h-60 rounded-[50%] object-cover border border-border/60"
              />
              <p className="body-text max-w-3xl whitespace-pre-line">
                I'm a problem solver, strategist, and creator passionate about building tools and products that make an impact.{"\n\n"}
                From motion graphics to machine learning, and data visualisation to business strategy, my interdisciplinary education has given me a comprehensive foundation, preparing me to build and lead in a rapidly evolving digital landscape.
              </p>
            </section>

            <div className="mt-16 border-t border-border/60 pt-16">
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

          <div className="border-t border-border/60">
            <SiteFooter />
          </div>
        </div>
      </div>
    </main>
  );
};

export default About;
