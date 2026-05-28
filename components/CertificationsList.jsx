import Image from "next/image";
import { FaCertificate } from "react-icons/fa"; // Swapped Quote for Certificate icon
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Certification Data from your resume
const credentialData = [
  {
    image: "/linkedin-logo.png",
    name: "Prompt Engineering: How to Talk to the AIs",
    position: <b>LinkedIn</b>,
    message:
      "Validated advanced skills in crafting effective prompts, understanding LLM behaviors, and optimizing AI interactions for productive and predictable outputs.",
  },
  {
    image: "/linkedin-logo.png",
    name: "Project Management with AI Agents",
    position: <b>LinkedIn</b>,
    message:
      "Explored the integration of AI agents into software development lifecycles, focusing on automating complex workflows and enhancing team efficiency.",
  },
  {
    image: "/nptel-logo.png",
    name: "Python for Data Science",
    position: <b>NPTEL</b>,
    message:
      "Mastered core Python programming concepts, data manipulation frameworks, and analytical techniques essential for modern machine learning applications.",
  },
  {
    image: "/nptel-logo.png",
    name: "Programming in JAVA",
    position: <b>NPTEL</b>,
    message:
      "Built a foundation in object-oriented programming, Java syntax, complex data structures, and efficient algorithm implementation.",
  },
];

const CertificationsList = () => {
  return (
    <Swiper
      navigation
      pagination={{
        clickable: true,
      }}
      modules={[Navigation, Pagination]}
      // CHANGED: Increased mobile height to 480px so the vertically stacked text doesn't hit the dots. 
      // md:h-[400px] perfectly locks it back to the original height for tablets/desktops!
      className="h-[480px] md:h-[400px]"
    >
      {credentialData.map((cert, i) => (
        <SwiperSlide key={i}>
          <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
            
            {/* Logo, name, position */}
            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0">
              <div className="flex flex-col justify-center text-center">
                {/* Logo */}
                <div className="mb-4 mx-auto bg-white rounded-full flex items-center justify-center w-[90px] h-[90px] overflow-hidden">
                  <Image
                    src={cert.image}
                    width={90}
                    height={90}
                    alt={cert.position}
                    className="object-cover w-full h-full"
                  />
                </div>

                {/* name */}
                <div className="text-lg font-semibold">{cert.name}</div>

                {/* position */}
                <div className="text-[12px] uppercase font-extralight tracking-widest mt-1 text-accent">
                  {cert.position}
                </div>
              </div>
            </div>

            {/* Icon & message */}
            <div className="flex-1 flex flex-col justify-center before:w-[1px] xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
              {/* Certificate icon */}
              {/* Certificate icon */}
              <div className="mb-4">
                <FaCertificate
                  // CHANGED: text-white/20 to text-accent/50
                  className="text-4xl xl:text-5xl text-accent/50 mx-auto md:mx-0"
                  aria-hidden
                />
              </div>

              {/* message */}
              <div className="xl:text-lg text-center md:text-left text-white/80">
                {cert.message}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CertificationsList;