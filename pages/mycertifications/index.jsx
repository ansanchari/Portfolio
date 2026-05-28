import { motion } from "framer-motion";

import CertificationsList from "../../components/CertificationsList";
import { fadeIn } from "../../variants";

const Certifications = () => {
  return (
    <div className="h-full bg-primary/30 py-32 text-center">
      <div className="container mx-auto h-full flex flex-col justify-center">
        <motion.h2
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="h2 mb-8 xl:mb-0"
        >
          My <span className="text-accent">certifications.</span>
        </motion.h2>

        {/* slider */}
        <div className="w-full h-full overflow-hidden max-h-[500px] xl:max-h-[600px]">
  
          <motion.div 
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, display: "none", transition: { duration: 0 } }} 
            className="w-full h-full"
          >
            <CertificationsList /> 
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default Certifications;
