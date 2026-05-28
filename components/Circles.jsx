import Image from "next/image";

const Circles = () => {
  return (
    <div className="w-[200px] xl:w-[300px] absolute -right-16 -bottom-2 mix-blend-color-dodge animate-pulse duration-75 z-10">
      <Image
        src={"/circles.png"}
        width={260}
        height={200}
        // ADDED: The same filter classes we used on the homepage to shift the red to sage/gold
        className="w-full h-full sepia-[.4] hue-rotate-[45deg] saturate-[1.5] brightness-110 transition-all duration-500"
        alt="Decorative circles"
      />
    </div>
  );
};

export default Circles;