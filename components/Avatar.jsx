import Image from "next/image";

const Avatar = () => {
  return (
    <div className="xl:flex xl:max-w-none pointer-events-none select-none">
      <Image
        src="/san_avatar.png"
        alt="avatar"
        width={0}
        height={0}
        sizes="100vw"
        className="translate-z-0 w-full h-auto"
        priority={true}
      />
    </div>
  );
};

export default Avatar;
