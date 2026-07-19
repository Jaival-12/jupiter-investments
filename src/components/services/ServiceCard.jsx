import { motion, AnimatePresence } from "framer-motion";
import {
  FaArrowRight,
  FaChevronUp,
  FaCheckCircle,
} from "react-icons/fa";

function ServiceCard({
  service,
  expandedCard,
  setExpandedCard,
}) {
  const Icon = service.icon;

  const isExpanded = expandedCard === service.id;

  const toggleCard = () => {
    if (isExpanded) {
      setExpandedCard(null);
    } else {
      setExpandedCard(service.id);
    }
  };

  return (
    <motion.div
      layout
      onClick={toggleCard}
      transition={{
        layout: {
          duration: 0.45,
          ease: "easeInOut",
        },
      }}
      whileHover={
        window.innerWidth >= 1024
          ? !isExpanded
            ? {
                y: -12,
                scale: 1.025,
              }
            : {
                y: -4,
                scale: 1.01,
              }
          : {}
      }

      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
      }}
      className={`
        relative
        flex
        h-full
        flex-col
        cursor-pointer
        overflow-hidden
        rounded-[28px]
        bg-white
        p-6
        sm:p-7
        lg:p-8
        transition-all
        duration-500

        ${
          isExpanded
            ? "z-30 lg:scale-[1.03] border border-[#6F2DBD] shadow-[0_30px_70px_rgba(111,45,189,0.25)] ring-2 ring-[#6F2DBD]/20"
            : "border border-purple-100 shadow-xl hover:border-[#6F2DBD]/40 hover:shadow-[0_30px_70px_rgba(111,45,189,0.18)]"
        }
      `}
    >
      {/* Purple Glow */}

      <div
        className={`
          absolute
          -right-16
          -top-16
          h-56
          w-56
          rounded-full
          bg-[#E9D8FF]
          blur-[90px]
          transition-all
          duration-500
          ${
            isExpanded
              ? "opacity-50"
              : "opacity-0 group-hover:opacity-40"
          }
        `}
      />

      {/* Icon */}

      <motion.div
        whileHover={{
            rotate: 8,
            scale: 1.12,
        }}

        transition={{
            type:"spring",
            stiffness:300
        }}
        className="
          relative
          flex
          h-14
          w-14
          sm:h-16
          sm:w-16
          items-center
          justify-center
          rounded-2xl
          bg-[#F3E9FF]
          text-[#6F2DBD]
          "
      >
        <Icon size={28} className="sm:w-[34px] sm:h-[34px]" />
      </motion.div>

      {/* Badge */}

      {isExpanded && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-5 sm:mt-6 inline-flex rounded-full bg-[#F3E9FF] px-4 py-2 text-xs sm:text-sm font-semibold text-[#6F2DBD]"
        >
          Financial Solution
        </motion.div>
      )}

      {/* Title */}

      <h3 className="
        mt-5
        text-xl
        font-bold
        text-gray-900
        sm:mt-6
        sm:text-2xl
        ">
        {service.title}
      </h3>

      {/* Short Description */}

      <p className="
        mt-4
        text-sm
        leading-7
        text-gray-600
        sm:mt-5
        sm:text-base
        sm:leading-8
        ">
        {service.shortDescription}
      </p>

      {/* Expanded Content */}

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{
              opacity: 0,
              height: 0,
            }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{
              opacity: 0,
              height: 0,
            }}
            transition={{
              duration: 0.35,
            }}
            className="overflow-hidden"
          >
            <div className="mt-8 border-t border-purple-100 pt-8">

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="leading-8 text-gray-600"
              >
                {service.longDescription}
              </motion.p>

              {/* Benefits */}

              <div className="mt-8 space-y-4">

                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{
                      opacity: 0,
                      x: -20,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.08,
                    }}
                    className="flex items-center gap-3"
                  >
                    <FaCheckCircle className="text-[#6F2DBD]" />

                    <span>{benefit}</span>
                  </motion.div>
                ))}

              </div>

              {/* Schedule Consultation */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{
                  delay: 0.25,
                }}
              >
              

              <a
                href="#contact"
                onClick={(e) => e.stopPropagation()}
                className="
                  group
                  mt-8
                  inline-flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-xl
                  bg-gradient-to-r
                  from-[#6F2DBD]
                  to-[#8E44EC]
                  px-6
                  py-3
                  font-semibold
                  text-white
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-xl
                "
              >
                Schedule Consultation

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        animate={{
          x: isExpanded ? 4 : 0,
        }}
        className="
          absolute
          bottom-7
          right-7
          text-[#6F2DBD]
          opacity-60
          transition-all
          duration-300
          group-hover:opacity-100
        "
      >
        <FaArrowRight
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </motion.div>

      {/* Gold Accent */}

      <motion.div
        animate={{
          width: isExpanded ? "100%" : "0%",
        }}
        transition={{
          duration: 0.4,
        }}
        className="
          absolute
          bottom-0
          left-0
          h-1
          bg-gradient-to-r
          from-[#D4AF37]
          to-[#F5C542]
        "
      />
    </motion.div>
  );
}

export default ServiceCard;