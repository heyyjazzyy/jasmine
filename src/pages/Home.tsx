import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import FridgeBoard from "@/components/FridgeBoard";
import { useMode } from "@/context/ModeContext";
import { pmProjects, allItems, education, courses, tools } from "@/data/portfolio";

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
      <SiteHeader />

      <main className="flex-1 pt-20 md:pt-24">
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
              <p className="body-text max-w-lg">
                I'm a product manager based in the Bay Area. I ship AI-driven product experiences —
                and design refreshing digital things packed with delightful interactions along the way.
              </p>
              <a
                href="#about"
                className="inline-flex items-center gap-1 mt-6 font-ui text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About Me <ArrowUpRight className="w-4 h-4" />
              </a>
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

          {/* Right: contact */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 p-6 lg:p-10 flex flex-col justify-between"
          >
            <div>
              <h2 className="font-display text-4xl md:text-5xl leading-tight">
                Get in<br />touch
              </h2>
            </div>
            <div className="flex items-end justify-between gap-6 mt-16">
              <div className="font-ui text-sm text-muted-foreground">
                <p>Bay Area, CA</p>
                <p>hello@jasmineliao.com</p>
              </div>
              <a
                href="mailto:hello@jasmineliao.com"
                className="group"
                aria-label="Send email"
              >
                <ArrowUpRight className="w-20 h-20 md:w-28 md:h-28 text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* About */}
        <section id="about" className="border-t border-border/60">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-2 border-r border-border/60" />
            <div className="lg:col-span-10 p-6 lg:p-10 py-16 lg:py-20">
              <h2 className="section-header">About Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-5xl">
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
                <div>
                  <h3 className="font-display text-2xl mb-4">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((t) => (
                      <span key={t} className="tool-badge">{t}</span>
                    ))}
                  </div>
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
