import Image from "next/image";

const TopLeftImg = () => {
  return (
    <div className="absolute left-0 top-0 mix-blend-color-dodge z-10 w-[200px] xl:w-[400px] opacity-60 pointer-events-none select-none">
      <Image
        src="/top-left-img.png"
        alt="left cover bg"
        width={400}
        height={400}
        className="w-full h-auto sepia-[.4] hue-rotate-[45deg] saturate-[1.5] brightness-110 transition-all duration-500"
        priority={true}
        style={{ width: "auto", height: "auto" }}
      />
    </div>
  );
};

export default TopLeftImg;