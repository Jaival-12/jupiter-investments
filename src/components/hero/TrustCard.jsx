import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function TrustCard({
  icon: Icon,
  title,
  subtitle,
  description,
  delay = 0,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -10,
      }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-[28px]
        border
        border-purple-100
        bg-white/80
        backdrop-blur-xl
        p-5
        shadow-xl
        transition-all
        duration-500
        hover:border-[#D4AF37]
        hover:shadow-[0_25px_60px_rgba(111,45,189,0.18)]
        sm:p-6
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10
          h-32
          w-32
          rounded-full
          bg-purple-200
          blur-3xl
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-40
        "
      />

      {/* Gold Accent */}

      <div
        className="
          absolute
          bottom-0
          left-0
          h-1
          w-0
          bg-gradient-to-r
          from-[#D4AF37]
          to-[#F6D365]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Icon */}

      <div
        className="
          relative
          flex
          h-14
          w-14
          items-center
          justify-center
          rounded-2xl
          bg-[#F3ECFF]
          text-[#6F2DBD]
          transition-all
          duration-500
          group-hover:scale-110
          group-hover:rotate-6
          sm:h-16
          sm:w-16
        "
      >
        <Icon className="text-[26px] sm:text-[30px]" />
      </div>

      {/* Title */}

      <h3 className="mt-5 text-2xl font-black text-[#101827] sm:mt-6 sm:text-3xl">
        {title}
      </h3>

      {/* Subtitle */}

      <h4 className="mt-1 text-base font-semibold text-[#6F2DBD] sm:text-lg">
        {subtitle}
      </h4>

      {/* Description */}

      <p className="mt-3 text-sm leading-6 text-gray-600 sm:mt-4 sm:text-base sm:leading-7">
        {description}
      </p>

      {/* Arrow */}

      <div
        className="
          mt-auto
          pt-6
          flex
          justify-end
          text-[#6F2DBD]
        "
      >
        <FaArrowRight
          className="
            transition-all
            duration-300
            group-hover:translate-x-2
          "
        />
      </div>
    </motion.div>
  );
}

export default TrustCard;
