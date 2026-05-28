import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const workSlides = {
  slides: [
    {
      // SLIDE 1: Your top 4 projects
      images: [
        {
          title: "Empathia - Deepen your connection",
          path: "/empathia.jpg", // Note: Ensure you save a screenshot named 'empathia.jpg' in your /public folder
          link: "https://empathia-app.vercel.app/", // Replace with your actual project link when ready
        },
        {
          title: "Proacquis",
          path: "/proacquis.jpg", // Note: Ensure you save a screenshot named 'proacquis.jpg' in your /public folder
          link: "https://proacquis.streamlit.app/",
        },
        {
          title: "Automated Video Generator",
          path: "/video-gen.jpg", // Note: Ensure you save a screenshot named 'video-gen.jpg' in your /public folder
          link: "https://github.com/ansanchari/AI-Video-Automation",
        },
        {
          title: "Aura",
          path: "/aura.jpg", // Note: Ensure you save a screenshot named 'aura.jpg' in your /public folder
          link: "https://auraforyou.streamlit.app/",
        },
      ],
    },
    {
      // SLIDE 2: Overflow projects
      images: [
        {
          title: "Imperial Decryptor",
          path: "/imperial.jpg", // Note: Ensure you save a screenshot named 'imperial.jpg' in your /public folder
          link: "https://github.com/ansanchari/Imperial-Decryptor",
        },
        // You can add up to 3 more placeholders or future projects here to fill out the 2x2 grid on Slide 2
        //{
          //title: "Future Project",
          //path: "/thumb2.jpg", // Keeping template placeholder until you build something new!
          //link: "https://github.com/ansanchari",
        //},
        //{
          //title: "Future Project",
          //path: "/thumb3.jpg",
          //link: "https://github.com/ansanchari",
        //},
        //{
          //title: "Future Project",
          //path: "/thumb4.jpg",
          //link: "https://github.com/ansanchari",
        //},
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[320px] sm:h-[500px] pb-12"
    >
      {workSlides.slides.map((slide, i) => (
        <SwiperSlide key={i}>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 h-[calc(100%-40px)]">
            {slide.images.map((image, imageI) => (
              <div
                className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                key={imageI}
              >
                <div className="flex items-center justify-center relative overflow-hidden group w-full h-full">
                  {/* image */}
                  <Image
                    src={image.path}
                    alt={image.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover rounded-lg" 
                  />

                  {/* overlay gradient*/}
                  <div
                    className="absolute inset-0 bg-gradient-to-l from-transparent via-[#829460] to-[#2A3B24] opacity-0 group-hover:opacity-90 transition-all duration-700"
                    aria-hidden
                  />

                  {/* title container*/}
                  <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-6 group-hover:xl:-translate-y-20 transition-all duration-300 w-full text-center">
                    
                    {/* Project Title Text*/}
                    <div className="text-white font-bold text-xs xl:text-lg mb-1 xl:mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 px-2 xl:px-4">
                      {image.title}
                    </div>

                    <Link
                      href={image.link}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center justify-center gap-x-1 xl:gap-x-2 text-[10px] xl:text-[13px] tracking-[0.2em]"
                    >
                      {/* title part 1 */}
                      <div className="delay-100">VIEW</div>
                      {/* title part 2 */}
                      <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        PROJECT
                      </div>
                      {/* icon */}
                      <div className="text-sm xl:text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                        <BsArrowRight aria-hidden />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;