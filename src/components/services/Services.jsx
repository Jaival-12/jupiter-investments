import { useState } from "react";
import { motion } from "framer-motion";

import { services } from "../../data/servicesData";
import ServiceCard from "./ServiceCard";

function Services() {
  const [expandedCard, setExpandedCard] = useState(null);

  return (
    <section
      id="services"
      className="
        bg-gradient-to-b
        from-[#FCFCFD]
        to-[#F7F2FF]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14 text-center sm:mb-16 lg:mb-20"
        >
          <p className="
            text-xs
            font-semibold
            uppercase
            tracking-[4px]
            text-[#D4AF37]
            sm:text-sm
            sm:tracking-[8px]
          ">
            SERVICES
          </p>

          <h2 className="
            mt-4
            text-4xl
            font-bold
            leading-tight
            text-gray-900
            sm:mt-5
            sm:text-5xl
            lg:text-6xl
          ">
            Financial Solutions
            <br />

            <span className="text-[#6F2DBD]">
              Tailored For You
            </span>

          </h2>

          <p className="
            mx-auto
            mt-6
            max-w-3xl
            text-base
            leading-7
            text-gray-600
            sm:mt-8
            sm:text-lg
            sm:leading-9
          ">
            Every financial journey is unique. We provide personalized
            investment strategies designed to help individuals and families
            build, protect and grow their wealth with confidence.
          </p>
        </motion.div>

        {/* Services */}

        <div className="grid items-start gap-8 md:grid-cols-2 lg:grid-cols-3">

          {services.map((service, index) => (

            <motion.div
              key={service.id}
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
                delay: index * .1,
              }}
            >

              <ServiceCard
                service={service}
                expandedCard={expandedCard}
                setExpandedCard={setExpandedCard}
              />

            </motion.div>

          ))}

        </div>

        {/* Bottom CTA */}

        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: .3,
          }}
          className="mt-14 text-center sm:mt-16 lg:mt-20"
        >

          <a href="#contact">
            <button
              className="
                rounded-xl
                bg-gradient-to-r
                from-[#6F2DBD]
                to-[#8E44EC]
                px-7
                py-4
                text-base
                font-semibold
                text-white
                shadow-xl
                transition
                duration-300
                hover:-translate-y-1
                hover:shadow-2xl
                sm:px-8
                sm:py-4
                sm:text-lg
                lg:px-10
                lg:py-5
              "
            >
              Schedule a Free Consultation
            </button>
          </a>

        </motion.div>

      </div>
    </section>
  );
}

export default Services;