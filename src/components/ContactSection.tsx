import { motion } from "framer-motion";
import { Mail, Linkedin, Dribbble, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const ContactSection = () => {
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
    <section className="max-w-3xl mx-auto px-8 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        Contact
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Contact Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h3 className="text-base font-semibold text-foreground mb-6">Get in touch</h3>
          <div className="flex flex-col gap-1">
            <a href="mailto:hello@mayachen.design" className="contact-link group">
              <Mail className="contact-link-icon" />
              <span>hello@mayachen.design</span>
            </a>
            <a 
              href="https://linkedin.com/in/mayachen" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link group"
            >
              <Linkedin className="contact-link-icon" />
              <span>linkedin.com/in/mayachen</span>
              <ArrowUpRight className="contact-link-arrow" />
            </a>
            <a 
              href="https://dribbble.com/mayachen" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-link group"
            >
              <Dribbble className="contact-link-icon" />
              <span>dribbble.com/mayachen</span>
              <ArrowUpRight className="contact-link-arrow" />
            </a>
          </div>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-base font-semibold text-foreground mb-6">Location</h3>
          <div className="flex flex-col gap-2">
            <p className="text-[17px] text-muted-foreground font-medium flex items-center gap-2">
              <span className="text-xl">🇺🇸</span>
              San Francisco, USA
            </p>
            <p className="text-[17px] text-muted-foreground/70 font-medium">
              {currentTime}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
