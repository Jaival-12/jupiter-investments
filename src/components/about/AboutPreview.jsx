import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

import founder from "../../assets/hero.webp";

import AboutBackground from "./AboutBackground";

function AboutPreview() {
  const features = [
    "Personalized Wealth Planning",
    "Goal Based Investment Strategy",
    "Portfolio Review & Risk Analysis",
    "Mutual Funds • SIP • Insurance • Tax Planning",
  ];

  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center min-h-[620px]"
          >
            <AboutBackground />

            <img
              src={founder}
              alt="Founder"
              className="
                relative
                z-20
                h-[620px]
                w-auto
                object-contain
                drop-shadow-[0_30px_50px_rgba(0,0,0,0.18)]
              "
            />
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="uppercase tracking-[5px] text-[#6F2DBD] font-semibold">
              About Jupiter Investments
            </p>

            <h2 className="text-5xl font-black mt-4 leading-tight">
              Helping Families Build{" "}
              <span className="text-[#6F2DBD]">
                Wealth With Confidence
              </span>
            </h2>

            <p className="mt-8 text-gray-600 text-lg leading-9">
              We help individuals and families create long-term wealth through
              disciplined investing, smart financial planning and customized
              portfolio strategies.
            </p>

            <div className="mt-10 space-y-5">
              {features.map((item) => (
                <div key={item} className="flex items-center gap-4">
                  <FaCheckCircle className="text-[#6F2DBD]" />

                  <span className="text-lg">{item}</span>
                </div>
              ))}
            </div>

            <a href="#why-us">
              <button
                className="
                  group
                  mt-12
                  flex
                  cursor-pointer
                  items-center
                  gap-3
                  rounded-xl
                  bg-[#6F2DBD]
                  px-8
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-purple-800
                  hover:shadow-xl
                "
              >
                Know More

                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;