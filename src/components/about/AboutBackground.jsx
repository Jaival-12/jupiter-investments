import { motion } from "framer-motion";

function AboutBackground() {
  return (
    <>
      {/* Purple Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#7C3AED]
          blur-[110px]
          opacity-20
        "
      />

      {/* Outer Ring */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[520px]
          w-[520px]
          rounded-full
          border-[24px]
          border-[#E8DBFF]
          opacity-80
        "
      />

      {/* Inner Ring */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[410px]
          w-[410px]
          rounded-full
          border-[14px]
          border-[#DCCBFF]
          opacity-60
        "
      />

      {/* Soft Purple Circle */}

      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          h-[360px]
          w-[360px]
          rounded-full
          bg-[#6F2DBD]
          opacity-95
        "
      />

      {/* Decorative Dots */}

      <div className="absolute left-3 top-10 hidden md:grid grid-cols-3 gap-3 opacity-50">
        {Array.from({ length: 9 }).map((_, i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-[#6F2DBD]"
          />
        ))}
      </div>

      {/* Gold Accent */}

      <div
        className="
          absolute
          bottom-10
          left-0
          h-40
          w-40
          rounded-full
          border
          border-[#D4AF37]/30
        "
      />
    </>
  );
}

export default AboutBackground;