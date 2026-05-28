import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import ResumeBtn from "../components/ResumeBtn";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-full">
      {/* text */}
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        
        <div className="text-center flex flex-col justify-start pt-32 pb-[80px] xl:justify-center xl:pt-40 xl:pb-0 xl:text-left h-full container mx-auto relative z-20 overflow-y-auto xl:overflow-visible scrollbar-hide">
          <motion.h1
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="text-4xl xl:text-4xl font-bold leading-tight mb-4"
          >
            Architecting intelligent solutions <br /> as a versatile{" "}
            
            <br className="block xl:hidden" />
            
            {/* The Typing Animation Component */}
            <TypeAnimation
              sequence={[
                "AI Engineer",
                2000,
                "Software Developer",
                2000,
                "Graphic Designer",
                2000,
                "Product Manager",
                2000,
              ]}
              wrapper="span"
              speed={50}
              className="text-accent text-4xl xl:text-4xl brightness-200 drop-shadow-md"
              repeat={Infinity}
            />
          </motion.h1>

          {/* subtitle */}
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-4 xl:mb-16 "
          >
            Hi, I am <b>Sanchari Mukherjee</b>, an AI Software Engineer and Computer Science
            student skilled in Agentic AI architectures and modern web development. 
            From engineering complex RAG pipelines to writing maintainable backend APIs,
            I bridge the gap between advanced LLM logic and scalable full-stack applications.
          </motion.p>

          {/* RESUME BUTTON */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 xl:mb-0"
          >
            <ResumeBtn />
          </motion.div>

          {/* btn */}
          <div className="flex justify-center xl:hidden relative mt-4">
            <ProjectsBtn />
          </div>
          
          <motion.div 
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex xl:hidden justify-center mt-8 w-full relative z-10"
          >
             <div className="w-[125%] max-w-[125%] shrink-0 flex justify-center">
               <Avatar />
             </div>
          </motion.div>

          {/* Desktop projects button */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      
      {/* image */}
      <div className="w-[1280px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div
          role="img"
          className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0 sepia-[.4] hue-rotate-[45deg] saturate-[1.5] brightness-110 transition-all duration-500"
          aria-hidden
        />

        {/* particles */}
        <ParticlesContainer />

        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="hidden xl:flex w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;