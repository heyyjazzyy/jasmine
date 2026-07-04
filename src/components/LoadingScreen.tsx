import { motion } from "framer-motion";

const LoadingScreen = ({ label = "Loading" }: { label?: string }) => (
  <div className="min-h-screen bg-background flex items-center justify-center">
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
      className="flex items-center gap-3 font-ui text-sm text-muted-foreground"
    >
      <span className="inline-block w-2 h-2 rounded-full bg-current animate-pulse" />
      {label}…
    </motion.div>
  </div>
);

export default LoadingScreen;
