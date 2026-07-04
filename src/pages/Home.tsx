import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ListView from "@/components/ListView";
import FridgeBoard from "@/components/FridgeBoard";
import { useMode } from "@/context/ModeContext";
import { allItems, pmProjects, education, courses, tools } from "@/data/portfolio";

const HeroSentence = () => (
  <p className="display-heading">
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

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="max-w-6xl mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="font-ui text-xs uppercase tracking-[0.2em] text-primary mb-6">
              Product Manager · Composer · Photographer
            </div>
            <HeroSentence />
            <p className="body-text mt-8 max-w-2xl">
              By day I ship AI-driven product experiences. By evening I'm usually somewhere between
              a Logic Pro session and a hot pan. This site is both — flip the header switch to see
              it as a clean list or as a fridge full of magnets.
            </p>
          </motion.div>
        </section>

        {/* Work */}
        <section id="work" className="max-w-6xl mx-auto px-6 md:px-10">
          <div className="flex items-end justify-between mb-6">
            <h2 className="section-header !mb-0">Selected Work</h2>
            <span className="font-ui text-xs text-muted-foreground">
              {mode === "list" ? "Professional Mode" : "Fridge Mode"}
            </span>
          </div>

          {mode === "list" ? (
            <ListView items={allItems} />
          ) : (
            <FridgeBoard items={allItems} title="everything, on the fridge" />
          )}
        </section>

        {/* About */}
        <section id="about" className="max-w-6xl mx-auto px-6 md:px-10 mt-24">
          <h2 className="section-header">About Me</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            {/* Education */}
            <div>
              <h3 className="font-display text-2xl mb-4">Education</h3>
              <ul className="space-y-4">
                {education.map((e) => (
                  <li key={e.degree}>
                    <div className="font-ui text-sm text-muted-foreground">{e.dateRange}</div>
                    <div className="text-base font-medium">{e.degree}</div>
                    <div className="text-sm text-muted-foreground">{e.institution}</div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Courses */}
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

            {/* Tools */}
            <div>
              <h3 className="font-display text-2xl mb-4">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((t) => (
                  <span key={t} className="tool-badge">{t}</span>
                ))}
              </div>
              <p className="font-ui text-xs text-muted-foreground mt-4">
                {pmProjects.length} PM case studies · always adding more
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
};

export default Home;
