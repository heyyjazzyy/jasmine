import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FridgeBoard from "@/components/FridgeBoard";
import ModeSwitch from "@/components/ModeSwitch";
import { useMode } from "@/context/ModeContext";
import { pmProjects, allItems, education, courses } from "@/data/portfolio";

const toolGroups: { category: string; subgroups: { label?: string; items: string[] }[] }[] = [
  {
    category: "Business",
    subgroups: [
      { items: ["Accounting", "Statistics", "Jira", "Economics", "Google Analytics", "Hootsuite", "Tableau"] },
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
      { label: "Visual/Multimedia", items: ["Figma", "Adobe Suite (Photoshop, Illustrator, Premiere Pro, After Effects, Lightroom, etc.)", "Procreate", "Unity"] },
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
  const { mode } = useMode();

  if (mode === "fridge") {
    return (
      <div className="min-h-screen flex flex-col">
        <SiteHeader />
        <main className="flex-1 max-w-6xl mx-auto w-full px-6 md:px-10 pt-24 md:pt-28 pb-16">
          <FridgeBoard items={allItems} title="everything on the fridge" />
        </main>
        <SiteFooter />
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
            <Link to="/" className="font-display text-lg leading-tight hover:text-primary transition-colors">
              Jasmine<br />Liao
            </Link>
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
              <div className="flex items-start justify-between gap-6">
                <p className="body-text max-w-lg whitespace-pre-line">
                  Hi, I’m Jasmine! I strive to build impactful tech with heart and vision.{"\n\n\n"}
                  I'm so glad you're here!
                </p>
                <ModeSwitch />
              </div>
            </section>

            <section id="work" className="mb-16">
              <h2 className="section-header">Work</h2>
              <ul className="space-y-6">
                {pmProjects.map((p, i) => (
                  <motion.li
                    key={p.id}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  >
                    <Link to={`/work/${p.slug}`} className="group block">
                      <div className="font-display text-3xl md:text-4xl leading-tight inline-flex items-start gap-2">
                        {p.title}
                        <ArrowUpRight className="w-5 h-5 mt-2 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
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

        {/* About */}
        <section id="about" className="border-t border-border/60">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-2 border-r border-border/60" />
            <div className="lg:col-span-10 p-6 lg:p-10 py-16 lg:py-20">
              <h2 className="section-header">About Me</h2>

              <p className="body-text max-w-3xl mb-14 whitespace-pre-line">
                I’m a problem solver, strategist, and creator passionate about building tools and products that make an impact.{"\n\n\n"}
                From motion graphics to machine learning, and data visualisation to business strategy, my interdisciplinary education has given me a comprehensive foundation that has prepared me to create and lead in a rapidly evolving digital landscape.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl mb-16">
                <div>
                  <h3 className="font-display text-2xl mb-4">Education</h3>
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
                  <h3 className="font-display text-2xl mb-4">Relevant Courses</h3>
                  <ul className="space-y-2 font-ui text-sm">
                    {courses.map((c) => (
                      <li key={c} className="flex items-start gap-2">
                        <span className="text-primary mt-1">◦</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="font-display text-2xl mb-6">Tools</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl">
                  {toolGroups.map((group) => (
                    <div key={group.category}>
                      <div className="section-header !mb-3">{group.category}</div>
                      <div className="space-y-3">
                        {group.subgroups.map((sg, i) => (
                          <div key={i}>
                            {sg.label && (
                              <div className="font-ui text-xs text-muted-foreground mb-1.5">{sg.label}</div>
                            )}
                            <div className="flex flex-wrap gap-1.5">
                              {sg.items.map((t) => (
                                <span key={t} className="tool-badge">{t}</span>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );

};

export default Home;
