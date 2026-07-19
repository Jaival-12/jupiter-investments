import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { faqData } from "../../data/faqData";

import { Link } from "react-scroll";

import {
  Plus,
  Minus,
  CalendarDays,
  ArrowRight,
  MessageCircle,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";



function FAQ() {

  const whatsappMessage = encodeURIComponent(
    `Hello Mr. Vipul,

I came across the Jupiter Investments website and would like to know more about your financial planning and investment services.

Please let me know a convenient time to connect.

Thank you.`
  );

  const whatsappURL = `https://wa.me/919328602322?text=${whatsappMessage}`;


  const [openFAQ, setOpenFAQ] = useState(0);

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? -1 : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-[#FAF8FF] py-20 sm:py-24 lg:py-28"
    >
      {/* Background */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-200 blur-[130px] opacity-30" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-100 blur-[120px] opacity-40" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-6 lg:px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center sm:mb-16 lg:mb-20"
        >
          <p className="font-semibold uppercase tracking-[4px] sm:tracking-[6px] text-[#D4AF37]">
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2 className="
            mt-4
            text-3xl
            font-black
            leading-tight
            text-[#101827]
            sm:mt-5
            sm:text-4xl
            lg:text-5xl
            ">
            Have Questions?
            <span className="text-[#6F2DBD]"> We Have Answers</span>
          </h2>

          <p className="
            mx-auto
            mt-5
            max-w-3xl
            text-base
            leading-7
            text-gray-600
            sm:mt-6
            sm:text-lg
            sm:leading-8
            lg:leading-9
            ">
            Everything you need to know before beginning your financial journey
            with Jupiter Investments.
          </p>
        </motion.div>

        {/* FAQ */}

        <div className="space-y-4 sm:space-y-5 lg:space-y-6">

          {faqData.map((faq, index) => {

            const isOpen = openFAQ === index;

            return (

              <motion.div
                key={faq.id}
                layout
                transition={{
                  duration: 0.35,
                }}
                whileHover={{
                  y: -3,
                }}
                className={`
                  overflow-hidden
                  rounded-2xl sm:rounded-[28px]
                  border
                  bg-white/90
                  backdrop-blur-xl
                  shadow-lg
                  transition-all
                  duration-300

                  ${
                    isOpen
                      ? "border-[#6F2DBD] shadow-2xl"
                      : "border-purple-100 hover:border-[#D4AF37]"
                  }
                `}
              >

                {/* Gold Accent */}

                {isOpen && (

                  <motion.div
                    layoutId="goldLine"
                    className="h-1 bg-gradient-to-r from-[#D4AF37] to-[#6F2DBD]"
                  />

                )}

                {/* Question */}

                <button
                  onClick={() => toggleFAQ(index)}
                  aria-expanded={isOpen}
                  aria-label={
                    isOpen
                      ? `Collapse: ${faq.question}`
                      : `Expand: ${faq.question}`
                  }
                  className="flex w-full items-center justify-between px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-7 text-left"
                >

                  <h3 className="
                    pr-4
                    text-base
                    font-bold
                    leading-7
                    text-[#101827]
                    sm:pr-6
                    sm:text-lg
                    lg:text-xl
                    ">

                    {faq.question}

                  </h3>

                  <motion.div
                    animate={{
                      rotate: isOpen ? 180 : 0,
                    }}
                    transition={{
                      duration: 0.25,
                    }}
                    className={`
                      flex
                      h-10
                      w-10
                      sm:h-11
                      sm:w-11
                      lg:h-12
                      lg:w-12
                      items-center
                      justify-center
                      rounded-full
                      transition-all

                      ${
                        isOpen
                          ? "bg-[#6F2DBD] text-white"
                          : "bg-[#F5EEFF] text-[#6F2DBD]"
                      }
                    `}
                  >

                    {isOpen ? (
                      <Minus size={18} className="sm:w-[22px] sm:h-[22px]" />
                    ) : (
                      <Plus size={18} className="sm:w-[22px] sm:h-[22px]" />
                    )}

                  </motion.div>

                </button>

                {/* Answer */}

                <AnimatePresence>

                  {isOpen && (

                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="overflow-hidden"
                    >

                      <div className="px-5 pb-5 sm:px-6 sm:pb-6 lg:px-8 lg:pb-8">

                        <div className="mb-6 h-px bg-gradient-to-r from-[#6F2DBD]/20 to-transparent" />

                        <p className="
                          text-base
                          leading-7
                          text-gray-600
                          sm:text-lg
                          sm:leading-8
                          lg:leading-9
                          ">

                          {faq.answer}

                        </p>

                      </div>

                    </motion.div>

                  )}

                </AnimatePresence>

              </motion.div>

            );

          })}

        </div>

        {/* CTA */}

        <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mt-14 sm:mt-16 lg:mt-20"
        >
        <div className="
          relative
          overflow-hidden
          rounded-[28px]
          bg-gradient-to-r
          from-[#5A189A]
          via-[#6F2DBD]
          to-[#8E44EC]
          p-6
          shadow-2xl
          sm:rounded-[32px]
          sm:p-8
          lg:rounded-[34px]
          lg:p-12
          ">

            {/* Decorative Glow */}

            <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#D4AF37]/20 blur-3xl" />

            <div className="relative text-center">

            <p className="uppercase tracking-[5px] text-[#F8E08E] font-semibold">

                STILL HAVE QUESTIONS?

            </p>

            <h2 className="
              mt-4
              text-3xl
              font-black
              leading-tight
              text-white
              sm:text-4xl
              lg:text-5xl
              ">

                Let's Build Your

                <span className="text-[#F8E08E]">

                {" "}Financial Future

                </span>

            </h2>

            <p className="
              mx-auto
              mt-5
              max-w-3xl
              text-base
              leading-7
              text-white/80
              sm:mt-6
              sm:text-lg
              sm:leading-8
              lg:leading-9
              ">

                Our team is here to answer your questions and help you choose the right
                investment strategy based on your financial goals.

            </p>

            <div className="
              mt-8
              flex
              flex-col
              gap-4
              sm:mt-10
              sm:flex-row
              sm:flex-wrap
              sm:justify-center
              sm:gap-5
              ">

                {/* Primary Button */}

                <a href="#contact">
                  <button
                    className="
                      group
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      border-2
                      border-white/30
                      bg-white/10
                      px-6
                      py-4
                      font-semibold
                      text-white
                      backdrop-blur-md
                      transition-all
                      duration-300
                      hover:bg-white
                      hover:text-[#6F2DBD]
                      sm:w-auto
                      sm:px-8
                    "
                  >
                    <CalendarDays size={21} />

                    Book Consultation

                    <ArrowRight
                      size={22}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </button>
                </a>

                {/* Secondary Button */}
          
                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border-2
                    border-white/30
                    bg-white/10
                    px-6
                    py-4
                    font-semibold
                    text-white
                    backdrop-blur-md
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-[#6F2DBD]
                    sm:w-auto
                    sm:px-8
                    "
                >
                  <FaWhatsapp size={20} />

                Chat on WhatsApp
                </a>

            </div>

            </div>

        </div>
        </motion.div>

      </div>

    </section>
  );
}

export default FAQ;