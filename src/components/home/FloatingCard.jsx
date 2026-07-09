import { motion } from "framer-motion";

function FloatingCard({ icon, title, subtitle, className = "", delay = 0 }) {
  return (
    <motion.div
      animate={{
        y: [-8, 8, -8],
      }}
      transition={{
        repeat: Infinity,
        duration: 5,
        delay,
      }}
      className={`absolute z-30 w-40 sm:w-48 rounded-2xl border border-white/80 bg-white/90 p-5 shadow-2xl shadow-purple-900/10 backdrop-blur ${className}`}
    >
      <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#f0e4ff] text-[#6424b8]">
        {icon}
      </div>

      <h3 className="text-sm font-extrabold text-[#101827]">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-[#334155]">{subtitle}</p>
    </motion.div>
  );
}

export default FloatingCard;
