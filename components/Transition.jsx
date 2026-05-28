import { motion } from "framer-motion";

const Transition = () => {
  return (
    <>
      <div className="fixed inset-0 z-40 flex pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="relative h-full w-1/5 bg-[#2A3B24]"
            initial={{ height: "100vh", bottom: 0 }}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh", top: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1 * i,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>

      <div className="fixed inset-0 z-30 flex pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`gold-${i}`}
            className="relative h-full w-[10%] bg-[#D4AF37]"
            initial={{ height: "100vh", bottom: 0 }}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh", top: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.1 * i + 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>
    </>
  );
};

export default Transition;