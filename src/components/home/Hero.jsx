import { motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  Star,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-scroll";

import TrustCard from "../hero/TrustCard";
import { heroTrustData } from "../../data/heroTrustData";

function Hero() {
  const whatsappMessage = encodeURIComponent(
`Hello Mr. Vipul,

I came across the Jupiter Investments website and would like to know more about your financial planning and investment services.

Please let me know a convenient time to connect.

Thank you.`
  );

  const whatsappURL =
`https://wa.me/919328602322?text=${whatsappMessage}`;

  const avatars = ["VT", "JI", "RT", "SP"];

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#fbf9ff]"
    >
      {/* Background */}

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_42%,rgba(111,45,189,0.10),transparent_25%),radial-gradient(circle_at_78%_35%,rgba(111,45,189,0.14),transparent_34%),linear-gradient(135deg,#ffffff_0%,#fbf8ff_45%,#f4ecff_100%)]" />

      <div className="absolute -bottom-28 -left-32 h-72 w-72 rounded-full border-[30px] border-[#e7d9ff] opacity-70 sm:-bottom-36 sm:-left-24 sm:h-96 sm:w-96 sm:border-[42px] sm:opacity-80" />

      <div className="absolute right-7 top-16 hidden grid-cols-3 gap-4 opacity-70 md:grid">
        {Array.from({ length: 9 }).map((_, index) => (
          <span
            key={index}
            className="h-1.5 w-1.5 rounded-full bg-[#6424b8]"
          />
        ))}
      </div>

      <div className="relative mx-auto max-w-[1380px] px-4 pt-20 pb-16 sm:px-6 sm:pt-24 sm:pb-20 lg:px-8 lg:pt-20 lg:pb-24">

        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mx-auto w-full text-center lg:mx-0 lg:text-left"
          >

            <span className="inline-flex items-center justify-center gap-2 rounded-full border border-[#eadffc] bg-white/80 px-5 py-2 text-xs font-bold text-[#6424b8] shadow-sm sm:text-sm">
              <Star
                size={16}
                className="fill-[#d6ad25] text-[#d6ad25]"
              />
              Welcome to Jupiter Investments
            </span>

            <h1 className="mt-6 font-serif text-[clamp(2.5rem,10vw,4.6rem)] font-black leading-[0.98] text-[#0c1b33] lg:text-[5.9rem]">

              Secure Your

              <br />

              <span className="text-[#6424b8]">
                Financial Future
              </span>

            </h1>

            <div className="mt-7 flex items-center justify-center gap-4 lg:justify-start">
              <span className="h-1 w-16 rounded-full bg-[#d6ad25] sm:w-20" />
              <span className="h-2 w-2 rounded-full bg-[#d6ad25]" />
            </div>

            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-[#45586c] sm:text-lg sm:leading-8 lg:mx-0 lg:text-xl lg:leading-9">

              Helping individuals and families create, grow and preserve wealth through smart financial planning, investment research and personalized advisory.

            </p>

            {/* Why Jupiter */}

            <div className="mx-auto mt-10 max-w-xl border-l-4 border-[#D4AF37] pl-4 text-left lg:mx-0 lg:mt-12 lg:pl-6">

              <span className="text-xs font-bold uppercase tracking-[3px] text-[#D4AF37] sm:text-sm sm:tracking-[5px]">
                WHY JUPITER INVESTMENTS
              </span>

              <p className="mt-3 text-base leading-7 text-[#45586c] sm:text-lg sm:leading-8">

                Trusted by hundreds of families for disciplined investing, transparent advice and long-term wealth creation.

              </p>

            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">

              <Link
                to="contact"
                smooth={true}
                offset={-100}
                duration={700}
              >
                <button className="group flex w-full items-center justify-center gap-4 rounded-md bg-[#6424b8] px-6 py-4 font-bold text-white shadow-xl shadow-purple-900/25 transition hover:bg-[#4A148C] sm:w-auto">

                  <CalendarDays size={20} />

                  Book Consultation

                  <ArrowRight
                    size={20}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </button>
              </Link>

              <a
                href={whatsappURL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-md border-2 border-[#6424b8] bg-white px-6 py-4 font-bold text-[#6424b8] transition hover:bg-[#6424b8] hover:text-white sm:w-auto"
              >
                <FaWhatsapp size={20} />
                Chat on WhatsApp
              </a>

            </div>

            <div className="mt-10 hidden items-center gap-5 lg:flex">

              <div className="flex -space-x-3">

                {avatars.map((avatar) => (
                  <span
                    key={avatar}
                    className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#1f2937] to-[#8b5cf6] text-xs font-bold text-white shadow-md"
                  >
                    {avatar}
                  </span>
                ))}

              </div>

              <div>

                <p className="font-extrabold text-[#6424b8]">
                  200+ Happy Families
                </p>

                <p className="mt-1 text-sm text-[#526174]">
                  Trusted for long-term financial growth.
                </p>

              </div>

            </div>

          </motion.div>

                    {/* ================= RIGHT SIDE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto w-full max-w-3xl lg:max-w-none"
          >
            {/* Background Glow */}

            <div className="absolute inset-0 -z-10">

              <div className="absolute left-10 top-6 h-72 w-72 rounded-full bg-purple-300 blur-[120px] opacity-20" />

              <div className="absolute right-10 bottom-0 h-64 w-64 rounded-full bg-violet-200 blur-[120px] opacity-20" />

              <div className="absolute right-16 top-10 hidden grid-cols-3 gap-4 opacity-50 lg:grid">
                {Array.from({ length: 9 }).map((_, i) => (
                  <span
                    key={i}
                    className="h-1.5 w-1.5 rounded-full bg-[#6424b8]"
                  />
                ))}
              </div>

            </div>

            {/* ================= MOBILE ================= */}

            <div className="lg:hidden">

              <div className="grid grid-cols-2 gap-4">

                {heroTrustData.slice(0, 4).map((item, index) => (

                  <TrustCard
                    key={item.id}
                    icon={item.icon}
                    title={item.title}
                    subtitle={item.subtitle}
                    description={item.description}
                    delay={index * 0.08}
                  />

                ))}

              </div>

              <div className="mt-12 lg:mt-6">

                <Link
                  to="why-us"
                  smooth={true}
                  offset={-100}
                  duration={700}
                >

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
                      border-[#6F2DBD]
                      bg-white
                      py-4
                      font-semibold
                      text-[#6F2DBD]
                      transition-all
                      duration-300
                      hover:bg-[#6F2DBD]
                      hover:text-white
                    "
                  >

                    View More

                    <ArrowRight
                      size={18}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </button>

                </Link>

              </div>

            </div>


            

            {/* ================= DESKTOP ================= */}

            <div className="hidden lg:grid lg:grid-cols-2 lg:gap-6">

              {heroTrustData.map((item, index) => (

                <TrustCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  subtitle={item.subtitle}
                  description={item.description}
                  delay={index * 0.08}
                />

              ))}

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Hero;