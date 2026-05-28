import { HiDownload } from "react-icons/hi";

const ResumeBtn = () => {
  return (
    <div className="flex justify-center xl:justify-start mt-4 xl:-mt-12 relative z-50">
      <a
        href="/Sanchari_Mukherjee_Resume.pdf" 
        download="Sanchari_Mukherjee_Resume.pdf" 
        className="group flex items-center gap-x-2 px-6 py-2 rounded-full border border-[#39FF14] text-[#39FF14] uppercase tracking-[0.2em] text-xs font-bold transition-all duration-300 hover:bg-[#39FF14] hover:text-[#121212] shadow-[0_0_10px_rgba(57,255,20,0.3)] hover:shadow-[0_0_25px_rgba(57,255,20,0.7)]"
      >
        <span>Download CV</span>
        <HiDownload className="text-lg transition-transform duration-300 group-hover:-translate-y-1" />
      </a>
    </div>
  );
};

export default ResumeBtn;