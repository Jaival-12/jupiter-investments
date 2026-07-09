import { AnimatePresence, motion } from "framer-motion";
import { X, BadgeCheck, Star } from "lucide-react";
import { useEffect } from "react";

function VideoModal({
  activeVideo,
  setActiveVideo,
}) {

  useEffect(() => {

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setActiveVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );

  }, [setActiveVideo]);

  return (

    <AnimatePresence>

      {activeVideo && (

        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-center
            justify-center
            bg-black/75
            backdrop-blur-md
            p-4
          "
          onClick={() => setActiveVideo(null)}
        >

          <motion.div
            initial={{
              scale: .9,
              opacity: 0,
              y: 30,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              y: 0,
            }}
            exit={{
              scale: .9,
              opacity: 0,
            }}
            transition={{
              duration: .3,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              relative
              w-full
              max-w-md
              overflow-hidden
              rounded-[30px]
              bg-white
              shadow-[0_30px_80px_rgba(0,0,0,.45)]
            "
          >

            {/* Close Button */}

            <button
              onClick={() => setActiveVideo(null)}
              className="
                absolute
                right-4
                top-4
                z-20
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                bg-white/90
                shadow-lg
                transition
                hover:rotate-90
                hover:bg-red-500
                hover:text-white
              "
            >

              <X size={22} />

            </button>

            {/* Video */}

            <div className="bg-black">

              <video
                src={activeVideo.video}
                controls
                autoPlay
                playsInline
                className="
                  max-h-[78vh]
                  w-full
                  object-contain
                  bg-black
                "
              />

            </div>

            {/* Footer */}

            <div className="p-6">

              <div className="flex items-center gap-1">

                {Array.from({ length: 5 }).map((_, i) => (

                  <Star
                    key={i}
                    size={15}
                    fill="#D4AF37"
                    className="text-[#D4AF37]"
                  />

                ))}

              </div>

              <h3 className="mt-4 text-2xl font-bold text-[#101827]">

                {activeVideo.designation}

              </h3>

              <div className="mt-3 flex items-center gap-2 text-[#6F2DBD]">

                <BadgeCheck size={18} />

                <span className="font-semibold">

                  Verified Jupiter Investments Client

                </span>

              </div>

              <p className="mt-5 leading-8 text-gray-600">

                Thank you for trusting Jupiter Investments
                with your financial journey.

              </p>

            </div>

          </motion.div>

        </motion.div>

      )}

    </AnimatePresence>

  );

}

export default VideoModal;