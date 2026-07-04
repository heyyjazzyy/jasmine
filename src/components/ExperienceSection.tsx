import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

// Company icons as gradient squares
const VerveIcon = () => (
  <div className="w-full h-full bg-gradient-to-br from-violet-500 to-purple-700 flex items-center justify-center">
    <div className="w-4 h-4 bg-white/20 rotate-45" />
  </div>
);

const SpotifyIcon = () => (
  <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
    <div className="flex gap-[2px]">
      {[12, 16, 12].map((h, i) => (
        <div key={i} className="w-[3px] bg-white/80 rounded-full" style={{ height: h }} />
      ))}
    </div>
  </div>
);

const FigmaIcon = () => (
  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center">
    <div className="flex flex-col gap-1">
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-white/80" />
        <div className="w-2 h-2 rounded-full bg-white/60" />
      </div>
      <div className="flex gap-1">
        <div className="w-2 h-2 rounded-full bg-white/60" />
        <div className="w-2 h-2 rounded-full bg-white/40" />
      </div>
    </div>
  </div>
);

const NotionIcon = () => (
  <div className="w-full h-full bg-white flex items-center justify-center">
    <span className="text-black font-bold text-lg">N</span>
  </div>
);

const ExplorationsIcon = () => (
  <div className="w-full h-full bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center">
    <div className="grid grid-cols-2 gap-[2px]">
      <div className="w-2 h-2 bg-yellow-300/80 rounded-sm" />
      <div className="w-2 h-2 bg-cyan-300/80 rounded-sm" />
      <div className="w-2 h-2 bg-green-300/80 rounded-sm" />
      <div className="w-2 h-2 bg-orange-300/80 rounded-sm" />
    </div>
  </div>
);

const experiences = [
  {
    company: "Verve",
    dateRange: "2024-Present",
    role: "Design Director",
    icon: <VerveIcon />,
    link: "/verve",
  },
  {
    company: "Spotify",
    dateRange: "2020-2024",
    role: "Staff Designer",
    icon: <SpotifyIcon />,
    link: "/spotify",
  },
  {
    company: "Figma",
    dateRange: "2016-2020",
    role: "Senior Designer",
    icon: <FigmaIcon />,
    link: "/figma",
  },
  {
    company: "Notion",
    dateRange: "2012-2016",
    role: "Senior Designer",
    icon: <NotionIcon />,
    link: "/notion",
  },
];

const personalProjects = [
  {
    company: "Explorations + Motion",
    dateRange: "",
    role: "",
    icon: <ExplorationsIcon />,
    link: undefined,
  },
];

const ExperienceSection = () => {
  return (
    <section className="max-w-3xl mx-auto px-8 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        Experience
      </motion.h2>
      
      <div className="flex flex-col gap-2 mb-16">
        {experiences.map((exp, index) => (
          <ExperienceCard
            key={exp.company}
            {...exp}
            index={index}
          />
        ))}
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        Personal Projects
      </motion.h2>
      
      <div className="flex flex-col gap-2">
        {personalProjects.map((proj, index) => (
          <ExperienceCard
            key={proj.company}
            {...proj}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
