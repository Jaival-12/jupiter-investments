import AnimatedCounter from "../common/AnimatedCounter";
import { motion } from "framer-motion";
import {
  Award,
  Target,
  Users,
  WalletCards,
} from "lucide-react";

const stats = [
  {
    icon: <WalletCards size={42} />,
    number: 15,
    suffix: "+ Cr",
    title: "Assets Under",
    subtitle: "Management",
  },
  {
    icon: <Users size={42} />,
    number: 200,
    suffix: "+",
    title: "Happy",
    subtitle: "Families",
  },
  {
    icon: <Award size={42} />,
    number: 10,
    suffix: "+",
    title: "Years of",
    subtitle: "Experience",
  },
  {
    icon: <Target size={42} />,
    number: 100,
    suffix: "%",
    title: "Personalized",
    subtitle: "Financial Planning",
  },
];

function Stats() {
  return (
    <section className="relative z-20 -mt-6 lg:-mt-20 pb-16">
      <div className="max-w-[1320px] mx-auto px-5 sm:px-8">

        {/* ================= MOBILE ================= */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            lg:hidden
            rounded-[28px]
            border
            border-purple-100
            bg-white
            shadow-xl
            overflow-hidden
          "
        >
          <div className="grid grid-cols-2 gap-4 p-4">

            {stats.map((item) => (

              <div
                key={item.title}
                className="
                  rounded-2xl
                  border
                  border-purple-100
                  bg-white
                  p-5
                  text-center
                  shadow-sm
                "
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#F5EEFF] text-[#6424b8]">
                  {item.icon}
                </div>

                <h3 className="mt-4 text-3xl font-black text-[#111827]">
                  <AnimatedCounter
                    end={item.number}
                    suffix={item.suffix}
                    duration={2000}
                  />
                </h3>

                <p className="mt-2 text-sm font-semibold text-[#526174] leading-5">
                  {item.title}
                  <br />
                  {item.subtitle}
                </p>
              </div>

            ))}

          </div>
        </motion.div>




        {/* ================= DESKTOP ================= */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="
            hidden
            lg:grid
            lg:grid-cols-4
            overflow-hidden
            rounded-2xl
            border
            border-purple-100
            bg-white
            shadow-2xl
            shadow-purple-900/10
          "
        >
          {stats.map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                y: -5,
                scale: 1.02,
              }}
              transition={{ duration: 0.25 }}
              className="
                group
                flex
                items-center
                gap-7
                border-r
                border-purple-100
                p-9
                last:border-r-0
              "
            >
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full bg-[#efe2ff] text-[#6424b8] transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                {item.icon}
              </div>

              <div>
                <h2 className="text-4xl font-bold text-gray-900">
                  <AnimatedCounter
                    end={item.number}
                    suffix={item.suffix}
                    duration={2000}
                  />
                </h2>

                <p className="mt-2 text-base font-medium leading-6 text-[#45586c]">
                  {item.title}
                  <br />
                  {item.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

export default Stats; 