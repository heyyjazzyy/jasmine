import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ExperienceCardProps {
  company: string;
  dateRange: string;
  role: string;
  icon: React.ReactNode;
  link?: string;
  index: number;
}

const ExperienceCard = ({ company, dateRange, role, icon, link, index }: ExperienceCardProps) => {
  const content = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="experience-card group"
    >
      <div className="experience-card-icon flex items-center justify-center">
        {icon}
      </div>
      <div className="flex-1 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="experience-card-title">{company}</span>
          <div className="experience-card-meta">
            <span className="experience-card-date">{dateRange}</span>
            <span className="text-muted-foreground/50">·</span>
            <span className="experience-card-role">{role}</span>
          </div>
        </div>
        {link && (
          <ArrowUpRight className="experience-card-arrow" />
        )}
      </div>
    </motion.div>
  );

  if (link) {
    return <Link to={link}>{content}</Link>;
  }

  return content;
};

export default ExperienceCard;
