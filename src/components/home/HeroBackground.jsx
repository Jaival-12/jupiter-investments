import { motion } from "framer-motion";

function HeroBackground() {
  return (
    <>
      {/* Left Blob */}

      <motion.div
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="absolute -left-48 top-10 w-[450px] h-[450px] rounded-full bg-purple-300 blur-[120px] opacity-20"
      />

      {/* Right Blob */}

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
        }}
        className="absolute right-0 top-0 w-[550px] h-[550px] rounded-full bg-violet-300 blur-[150px] opacity-20"
      />

      {/* Circle */}

      <div className="absolute right-24 top-24 w-[550px] h-[550px] rounded-full border-[40px] border-purple-200 opacity-30"></div>

      <div className="absolute right-36 top-36 w-[400px] h-[400px] rounded-full border-[25px] border-purple-300 opacity-40"></div>
    </>
  );
}

export default HeroBackground;