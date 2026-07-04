import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="max-w-3xl mx-auto px-8 py-24">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="section-header"
      >
        About
      </motion.h2>
      
      <div className="flex flex-col gap-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="body-text"
        >
          Over a decade of experience crafting digital products, brands and experiences that are used by millions of people every day.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="body-text"
        >
          Embracing growth, I continually combine extensive experience in{" "}
          <span className="body-text-emphasis">Product</span>,{" "}
          <span className="body-text-emphasis">Motion</span>,{" "}
          <span className="body-text-emphasis">Sound</span> and{" "}
          <span className="body-text-emphasis">Brand</span>-Design.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="body-text"
        >
          I am dedicated to shaping a better future through Design. My approach always puts people first — from clients to users.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="body-text italic"
        >
          Curious and optimistic.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
