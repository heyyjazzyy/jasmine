import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const works = [
  { title: "Verve", year: "2024", link: "/verve" },
  { title: "Spotify", year: "2020", link: "/spotify" },
  { title: "Figma", year: "2016", link: "/figma" },
  { title: "Notion", year: "2012", link: "/notion" },
];

const Index = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "America/Los_Angeles",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <div className="grid-layout">
        {/* Left Sidebar - Name and Navigation */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="grid-sidebar flex flex-col justify-between"
        >
          <div>
            <Link to="/" className="name-display block hover:opacity-80 transition-opacity">
              Maya<br />Chen
            </Link>
          </div>
          
          <nav className="flex flex-col gap-3 mb-8">
            <a href="#about" className="nav-link">About</a>
            <a href="#work" className="nav-link">Work</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </motion.aside>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid-main flex flex-col"
        >
          {/* Hero Text */}
          <section id="about" className="mb-16 pt-8 lg:pt-16">
            <p className="body-text max-w-lg">
              I'm a product designer based in San Francisco. I design and build refreshing digital experiences, packed with delightful interactions.
            </p>
            <a href="#about-full" className="inline-flex items-center gap-1 mt-6 text-base text-muted-foreground hover:text-foreground transition-colors">
              About Me <ArrowUpRight className="w-4 h-4" />
            </a>
          </section>

          {/* Work Section */}
          <section id="work" className="flex-1">
            <h2 className="section-header">Work</h2>
            
            <div className="space-y-6">
              {works.map((work, index) => (
                <motion.div
                  key={work.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <Link to={work.link} className="work-item group">
                    <span className="work-item-title">
                      {work.title}
                      <ArrowUpRight className="work-item-arrow opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="work-item-year">{work.year}</span>
                  </Link>
                </motion.div>
              ))}
            </div>

            <a href="/work" className="inline-flex items-center gap-1 mt-12 text-base text-muted-foreground hover:text-foreground transition-colors">
              See All <ArrowUpRight className="w-4 h-4" />
            </a>
          </section>
        </motion.div>

        {/* Right Section - Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid-secondary flex flex-col justify-between"
          id="contact"
        >
          <div className="pt-8 lg:pt-16">
            <h2 className="contact-heading">
              Get in<br />touch
            </h2>
          </div>

          <div className="flex flex-col gap-8 pb-8">
            {/* Location and Time */}
            <div className="text-sm text-muted-foreground">
              <p>San Francisco, CA</p>
              <p>{currentTime}</p>
            </div>

            {/* Large Arrow */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-end"
            >
              <a 
                href="mailto:hello@mayachen.design" 
                className="group"
                aria-label="Send email"
              >
                <ArrowUpRight className="arrow-large group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* About Section - Full */}
      <section id="about-full" className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 border-r border-border p-6 lg:p-8"></div>
          <div className="lg:col-span-10 p-6 lg:p-8 py-16 lg:py-24">
            <div className="max-w-2xl">
              <h2 className="section-header">About</h2>
              <div className="space-y-6">
                <p className="body-text">
                  Over a decade of experience crafting digital products, brands and experiences that are used by millions of people every day.
                </p>
                <p className="body-text">
                  Embracing growth, I continually combine extensive experience in Product, Motion, Sound and Brand Design.
                </p>
                <p className="body-text">
                  I am dedicated to shaping a better future through Design. My approach always puts people first — from clients to users.
                </p>
                <p className="body-text italic text-muted-foreground">
                  Curious and optimistic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 border-r border-border p-6 lg:p-8"></div>
          <div className="lg:col-span-10 p-6 lg:p-8 py-16 lg:py-24">
            <div className="max-w-2xl">
              <h2 className="section-header">Education</h2>
              <div className="space-y-8">
                <div>
                  <p className="text-lg font-normal text-foreground">Master of Fine Arts (M.F.A.)</p>
                  <p className="text-sm text-muted-foreground mt-1">Rhode Island School of Design · 2010-2012</p>
                </div>
                <div>
                  <p className="text-lg font-normal text-foreground">Interaction Design</p>
                  <p className="text-sm text-muted-foreground mt-1">Copenhagen Institute of Interaction Design · 2011-2012</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="lg:col-span-2 border-r border-border p-6 lg:p-8">
            <p className="text-sm text-muted-foreground">© Maya Chen</p>
          </div>
          <div className="lg:col-span-10 p-6 lg:p-8 flex justify-between items-center">
            <div className="flex gap-6">
              <a href="mailto:hello@mayachen.design" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Email</a>
              <a href="https://linkedin.com/in/mayachen" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">LinkedIn</a>
              <a href="https://dribbble.com/mayachen" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Dribbble</a>
            </div>
            <p className="text-sm text-muted-foreground">Made in California</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
