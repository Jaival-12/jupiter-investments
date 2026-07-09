import { motion } from "framer-motion";
import {
  BadgeCheck,
  Play,
  Star,
} from "lucide-react";

function VideoCard({
  testimonial,
  setActiveVideo,
}) {
  return (
    <motion.div
      whileHover={{
        scale: 1.015,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        w-full
        cursor-pointer
      "
    >
      <div
        className="
          overflow-hidden
          rounded-[30px]
          border
          border-purple-100
          bg-white
          shadow-xl
          transition-all
          duration-300
          group-hover:border-[#D4AF37]
          group-hover:shadow-[0_25px_60px_rgba(111,45,189,0.20)]
        "
      >
        {/* Video Preview */}

        <div
          className="
            relative
            h-[220px] sm:h-[280px] lg:h-[300px]
            overflow-hidden
            rounded-t-[30px]
            bg-black
          "
        >

          <video
            src={testimonial.video}
            muted
            playsInline
            preload="metadata"
            className="
              h-full
              w-full
              object-cover
              object-top
              transition-transform
              duration-500
              group-hover:scale-105
            "
          />
          {/* Dark Overlay */}

          <div
            className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/20
              to-black/30
            "
          />

          {/* Play Button */}

          <button
            onClick={() => setActiveVideo(testimonial)}
            className="
              absolute
              inset-0
              flex
              flex-col
              items-center
              justify-center
            "
          >
            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              className="
                flex
                h-16
                w-16
                sm:h-20
                sm:w-20
                items-center
                justify-center
                rounded-full
                border
                border-white/20
                bg-white/15
                backdrop-blur-xl
                shadow-2xl
              "
            >
              <Play
                size={28}
                fill="white"
                className="ml-1 text-white"
              />
            </motion.div>

            <p
              className="
                mt-4
                text-base
                font-semibold
                tracking-wide
                text-white
                sm:text-lg
                "
            >
              Watch Success Story
            </p>
          </button>

          {/* Duration */}

          <div
            className="
              absolute
              right-4
              top-4
              rounded-full
              bg-black/60
              px-3
              py-1
              text-sm
              font-semibold
              text-white
              backdrop-blur-md
            "
          >
            {testimonial.duration}
          </div>

        </div>

                {/* Bottom Information */}

        <div className="p-4">

          {/* Rating */}

          <div className="flex items-center gap-1">

            {Array.from({ length: 5 }).map((_, index) => (
              <Star
                key={index}
                size={15}
                fill="#D4AF37"
                className="text-[#D4AF37]"
              />
            ))}

          </div>

          {/* Client Name */}

          <h3 className="mt-3 text-lg font-bold text-[#101827] sm:text-xl">

            {testimonial.designation}

          </h3>

          {/* Verified Row */}

          <div className="mt-3 flex items-center justify-between">

            <div className="flex items-center gap-2 text-[#6F2DBD]">

              <BadgeCheck size={17} />

              <span className="text-sm font-semibold">

                Verified Client

              </span>

            </div>

            <span className="hidden sm:inline-flex rounded-full bg-[#F5EEFF] px-3 py-1 text-xs font-semibold text-[#6F2DBD]">
              Jupiter Investments
            </span>

          </div>

          {/* Divider */}

          <div className="mt-3 h-px w-full bg-gradient-to-r from-[#6F2DBD]/20 via-[#D4AF37]/40 to-transparent" />

        </div>

      </div>

    </motion.div>

  );
}

export default VideoCard;