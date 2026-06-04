import { motion } from "framer-motion";
import { useState } from "react";
import CountUp from "react-countup";

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import { fadeIn } from "../../variants";

// data
export const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: (
          <>
            <span className="font-bold text-white">AI/LLM Architecture:</span> Agentic AI, LangChain, Retrieval-Augmented Generation (RAG), Natural Language Processing (NLP), VoiceAI, Machine Learning, ChromaDB
          </>
        ),
      },
      {
        title: (
          <>
            <span className="font-bold text-white">Programming Languages:</span> Python, C, SQL
          </>
        ),
      },
      {
        title: (
          <>
            <span className="font-bold text-white">Product Management:</span> Software Development Life Cycle (SDLC), Agile, Waterfall, Rapid Prototyping, Notion
          </>
        ),
      },
      {
        title: (
          <>
            <span className="font-bold text-white">Relevant Coursework:</span> Data Structures & Algorithms, Operating Systems, AI-ML, Computer Networks
          </>
        ),
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: (
          <>
            <span className="font-bold text-white">AI PM Intern</span> - KartaAI
          </>
        ),
        stage: "Apr 2026",
      },
      {
        title: (
          <>
            <span className="font-bold text-white">AI/ML Research Intern</span> - IEEE EMBS
          </>
        ),
        stage: "Jun 2025",
      },
      {
        title: (
          <>
            <span className="font-bold text-white">Scrum Master</span> - Agile Project
          </>
        ),
        stage: "2024",
      },
    ],
  },
  {
    title: "credentials",
    info: [
      {
        title: (
          <>
            <span className="font-bold text-white">B.Tech CSE (AI)</span> - IEM Kolkata
          </>
        ),
        stage: "2022 - 2026",
      },
      {
        title: (
          <>
            <span className="font-bold text-white">12th (WBCHSE)</span> - Kolaghat Thermal Power Plant High School
          </>
        ),
        stage: "2022",
      },
      {
        title: (
          <>
            <span className="font-bold text-white">10th (WBBSE)</span> - Kolaghat Thermal Power Plant High School
          </>
        ),
        stage: "2020",
      },
    ],
  },
  {
    title: "awards & achievements",
    info: [
      {
        title: (
          <>
            <span className="font-bold text-white">Mrs. Maya Chakrabarti Award for Academic Excellence</span>
          </>
        ),
        stage: "2026",
      },
      {
        title: (
          <>
            <span className="font-bold text-white">Academic Ranks:</span> Rank 1 (1st Year) / Rank 3 (2nd Year) / Rank 1 (3rd Year)
          </>
        ),
        stage: "2022 - 2025",
      },
    ],
  },,
];

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col justify-start xl:justify-center pt-[150px] xl:pt-0 overflow-y-auto xl:overflow-hidden scrollbar-hide h-full container mx-auto text-center xl:text-left">
      <Circles />

      {/* avatar img */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 left-[-100px] max-w-[450px]"
      >
        <Avatar />
      </motion.div>

      <div className="container mx-auto h-auto xl:h-full flex flex-col items-center xl:flex-row gap-x-6">
        
        {/* text */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Intelligent <span className="text-accent">architectures</span> build scalable solutions.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-white/80"
          >
            Bridging the gap between complex LLM logic and robust web development. 
            From orchestrating multi-agent systems to engineering secure databases, I build autonomous 
            workflows that solve real-world problems.
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              
              {/* CGPA */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={9.86} decimals={2} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Current CGPA.
                </div>
              </div>

              {/* Projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={5} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Major Projects.
                </div>
              </div>

              {/* Events*/}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={10} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Events organised (college).
                </div>
              </div>

              {/* Ranks */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Top 3 Academic Ranks.
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-auto xl:h-[480px] pb-[120px] xl:pb-0"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemI) => (
              <div
                key={itemI}
                className={`${
                  index === itemI &&
                  "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                onClick={() => setIndex(itemI)}
              >
                {item.title}
              </div>
            ))}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-4 items-start w-full">
            {aboutData[index].info.map((item, itemI) => (
              <div
                key={itemI}
                className="flex flex-col md:flex-row md:items-start gap-x-3 w-full text-white/60"
              >
                {/* title */}
                <div className="font-light text-sm xl:text-base text-left leading-relaxed flex-1">
                  {item.title}
                </div>
                
                {/* Conditionally render the dash and stage only if there is a stage */}
                {item.stage && (
                  <div className="flex items-center gap-x-3 mt-1 md:mt-0 shrink-0">
                    <div className="hidden md:flex text-accent">-</div>
                    <div className="text-sm xl:text-base font-medium text-white/80">{item.stage}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;