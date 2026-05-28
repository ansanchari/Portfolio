import Link from "next/link";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Custom404 = () => {
  return (
    <div className="h-full bg-primary/30 flex flex-col items-center justify-center text-center px-4">
      <motion.h1 variants={fadeIn("up", 0.2)} initial="hidden" animate="show" className="text-6xl md:text-9xl font-bold text-accent mb-4 tracking-widest font-mono">
        404
      </motion.h1>
      <motion.h2 variants={fadeIn("up", 0.4)} initial="hidden" animate="show" className="h2 mb-6">
        These aren't the <span className="text-accent">pages</span> you're looking for.
      </motion.h2>
      <motion.div variants={fadeIn("up", 0.6)} initial="hidden" animate="show">
        <Link href="/" className="btn rounded-full border border-white/50 px-8 py-3 transition-all duration-300 hover:border-accent hover:text-accent">
          Return to Base
        </Link>
      </motion.div>
    </div>
  );
};

export default Custom404;