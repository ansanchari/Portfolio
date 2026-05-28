import { motion } from "framer-motion";

import Bulb from "../../components/Bulb";
import Circles from "../../components/Circles";
import WorkSlider from "../../components/WorkSlider";
import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="flex flex-col justify-start xl:justify-center pt-[150px] pb-[150px] xl:pt-0 xl:pb-0 overflow-y-auto xl:overflow-hidden scrollbar-hide h-full container mx-auto text-center xl:text-left">
      <Circles />
      
      <div className="container mx-auto h-auto xl:h-full flex flex-col justify-center">
        <div className="flex flex-col xl:flex-row gap-x-8">
          
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-12"
            >
              Featured <span className="text-accent">Projects.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 max-w-[400px] mx-auto lg:mx-0 text-white/80"
            >
              Explore my portfolio of AI-driven applications and full-stack platforms. 
              From orchestrating multi-agent systems and RAG pipelines to engineering 
              secure, real-time dashboards, these builds showcase my ability to 
              transform complex LLM logic into scalable, user-centric solutions.
            </motion.p>
          </div>

          {/* slider */}
          <div className="w-full xl:max-w-[65%] overflow-hidden max-h-[400px] xl:max-h-[500px]">
  
            <motion.div 
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }} 
              className="w-full h-full"
            >
              <WorkSlider />
            </motion.div>

          </div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;