import { motion } from "framer-motion";
import { whyChooseData } from "../../data/whyChooseData";

import AnimatedCounter from "../common/AnimatedCounter";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Link } from "react-scroll";

const stats = [
  {
    number: 15,
    suffix: "+ Cr",
    title: "Assets Under Management",
  },
  {
    number: 200,
    suffix: "+",
    title: "Happy Families",
  },
  {
    number: 10,
    suffix: "+",
    title: "Years Experience",
  },
  {
    number: 100,
    suffix: "%",
    title: "Personalized Planning",
  },
];

function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-white py-28"
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-purple-200 blur-[140px] opacity-30"></div>

      <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-yellow-100 blur-[120px] opacity-60"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .7 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[8px] text-[#D4AF37] font-semibold">

            WHY CHOOSE US

          </p>

          <h2 className="mt-5 text-5xl lg:text-6xl font-bold text-[#111827] leading-tight">

            Why Families Trust

            <br />

            <span className="text-[#6F2DBD]">

              Jupiter Investments

            </span>

          </h2>

          <p className="mt-8 max-w-3xl mx-auto text-lg leading-9 text-gray-600">

            We combine expertise, transparency and personalized financial
            strategies to help individuals and families achieve long-term
            financial success.

          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {whyChooseData.map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  y: 60,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: .6,
                  delay: index * .08,
                }}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-purple-100
                bg-white
                p-8
                shadow-lg
                transition-all
                duration-500
                hover:border-[#D4AF37]
                hover:shadow-2xl
                "
              >

                {/* Glow */}

                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-200 blur-3xl opacity-0 transition duration-500 group-hover:opacity-40"></div>

                {/* Icon */}

                <div
                  className="
                  flex
                  h-20
                  w-20
                  items-center
                  justify-center
                  rounded-3xl
                  bg-[#F5EEFF]
                  text-[#6F2DBD]
                  transition-all
                  duration-500
                  group-hover:rotate-6
                  group-hover:scale-110
                  "
                >

                  <Icon size={34} />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-gray-900">

                  {item.title}

                </h3>

                {/* Description */}

                <p className="mt-5 leading-8 text-gray-600">

                  {item.description}

                </p>

                {/* Gold Divider */}

                <div className="mt-8 h-[2px] w-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#6F2DBD] transition-all duration-500 group-hover:w-full"></div>

              </motion.div>

            );

          })}

        </div>

        {/* Statistics */}

        <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-24"
        >
        <div className="rounded-[36px] bg-gradient-to-r from-[#5A189A] via-[#6F2DBD] to-[#8E44EC] p-10 shadow-2xl">

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">

            {stats.map((item) => (

                <div key={item.title}>

                <h3 className="text-5xl font-black text-white">

                  <AnimatedCounter
                    end={item.number}
                    suffix={item.suffix}
                  />
                  
                </h3>

                <p className="mt-3 text-white/80">

                    {item.title}

                </p>

                </div>

            ))}

            </div>

        </div>

        </motion.div>


        {/* CTA */}

        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: .2 }}
        className="mt-24"
        >

        <div className="rounded-[36px] border border-purple-100 bg-gradient-to-br from-white to-[#F8F3FF] p-14 text-center shadow-xl">

            <h2 className="text-4xl lg:text-5xl font-bold text-[#101827]">

            Ready To Build Your

            <span className="text-[#6F2DBD]">

                {" "}Financial Future?

            </span>

            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">

            Let's discuss your financial goals and create an investment strategy
            that helps you achieve long-term wealth with confidence.

            </p>

            <div className="mt-10 flex flex-wrap justify-center gap-5">

            <Link
              to="contact"
              smooth={true}
              offset={-100}
              duration={700}
            >
              <button
                className="
                  flex
                  cursor-pointer
                  items-center
                  gap-4
                  rounded-md
                  bg-[#6424b8]
                  px-7
                  py-4
                  font-bold
                  text-white
                  shadow-xl
                  shadow-purple-900/25
                  transition
                  hover:bg-[#4A148C]
                "
              >
                <CalendarDays size={21} />

                Book Consultation

                <ArrowRight size={22} />
              </button>
            </Link>

            <Link
              to="services"
              smooth={true}
              offset={-100}
              duration={700}
            >
              <button
                className="
                  group
                  flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-xl
                  border-2
                  border-[#6F2DBD]
                  px-8
                  py-4
                  font-semibold
                  text-[#6F2DBD]
                  transition-all
                  duration-300
                  hover:bg-[#6F2DBD]
                  hover:text-white
                  hover:-translate-y-1
                  hover:shadow-lg
                "
              >
                Learn More

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>
            </Link>

            </div>

        </div>

        </motion.div>

      </div>
    </section>
  );
}

export default WhyChooseUs;