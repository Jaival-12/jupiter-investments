import { motion } from "framer-motion";
import {
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  ChevronUp,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import logo from "../../assets/images/logo.png";

import { navigationLinks } from "../../data/navigationData";



const services = [
  {
    label: "Mutual Funds",
    to: "services",
  },
  {
    label: "SIP Planning",
    to: "services",
  },
  {
    label: "Insurance",
    to: "services",
  },
  {
    label: "Tax Planning",
    to: "services",
  },
  {
    label: "Retirement Planning",
    to: "services",
  },
  {
    label: "Goal-Based Planning",
    to: "services",
  },
];

function Footer() {
  return (
    <footer className="
      relative
      overflow-hidden
      bg-[#140A2E]
      text-white
      ">

      {/* Background Glow */}

      <div className="absolute -left-32 top-0 h-96 w-96 rounded-full bg-[#6F2DBD] blur-[150px] opacity-30"></div>

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#D4AF37] blur-[130px] opacity-10"></div>

      <div className="
        relative
        mx-auto
        max-w-7xl
        px-5
        sm:px-6
        lg:px-8
        ">

        {/* Top CTA */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="
            py-16
            text-center
            sm:py-20
            lg:py-24
            "
        >

          <img
            src={logo}
            alt="Jupiter Investments"
            className="
              mx-auto
              h-16
              sm:h-20
              lg:h-24
              w-auto
              transition
              duration-500
              hover:scale-105
            "
          />

          <h2 className="
            mt-6
            text-3xl
            font-black
            leading-tight
            sm:mt-7
            sm:text-4xl
            lg:mt-8
            lg:text-5xl
            ">

            Helping Families Build

            <span className="text-[#D4AF37]">

              {" "}Wealth With Confidence

            </span>

          </h2>

          <p className="
            mx-auto
            mt-5
            max-w-3xl
            text-base
            leading-7
            text-gray-300
            sm:mt-6
            sm:text-lg
            sm:leading-8
            lg:mt-8
            lg:leading-9
            ">

            Trusted financial planning, disciplined investing and
            personalized wealth management tailored to your goals.

          </p>

          <a href="#contact">
            <button
              className="
                group
                mt-8
                inline-flex
                w-full
                items-center
                justify-center
                gap-3
                rounded-xl
                bg-gradient-to-r
                from-[#6F2DBD]
                to-[#8E44EC]
                px-6
                py-4
                font-semibold
                text-white
                shadow-xl
                transition-all
                duration-300
                hover:-translate-y-1
                sm:mt-10
                sm:w-auto
                sm:px-8
                "
            >
              Schedule Consultation

              <ArrowRight
                size={20}
                className="transition group-hover:translate-x-1"
              />
            </button>
          </a>

        </motion.div>

        {/* Divider */}

        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
        />

        {/* Footer Grid */}

        <div className="
          grid
          grid-cols-1
          gap-12
          py-14
          sm:gap-14
          sm:py-16
          lg:grid-cols-4
          lg:py-20
          ">

          {/* Company */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >

            <h3 className="text-xl sm:text-2xl font-bold">

              Jupiter Investments

            </h3>

            <p className="
              mt-5
              text-sm
              leading-7
              text-gray-300
              sm:mt-6
              sm:text-base
              sm:leading-8
              ">

              Building long-term financial security through trusted advice,
              smart investing and personalized planning.

            </p>

            <div className="
              mt-6
              flex
              gap-3
              sm:mt-8
              lg:justify-start
              lg:gap-4
              ">

              <button className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-[#6F2DBD]">

                <FaFacebookF />

              </button>

              <button className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-[#6F2DBD]">

                <FaInstagram />

              </button>

              <button className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:bg-[#6F2DBD]">

                <FaLinkedinIn />

              </button>

            </div>

          </motion.div>

          {/* Quick Links */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: .1 }}
            viewport={{ once: true }}
          >

            <h3 className="text-2xl font-bold">

              Quick Links

            </h3>

            <ul className="
              mt-5
              space-y-3
              sm:mt-7
              sm:space-y-4
              ">

              {navigationLinks.map((item) => (

                <a
                  key={item.to}
                  href={`#${item.to}`}
                  className="
                    group
                    flex
                    cursor-pointer
                    items-center
                    gap-2
                    sm:gap-3
                    text-gray-300
                    text-sm
                    sm:text-base
                    transition-all
                    duration-300
                    hover:translate-x-2
                    hover:text-[#D4AF37]
                  "
                >

                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] opacity-0 transition group-hover:opacity-100"></span>

                  {item.label}

                </a>

              ))}

            </ul>

          </motion.div>

          {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">
              Services
            </h3>

            <ul className="mt-5 space-y-3 sm:mt-7 sm:space-y-4">
              {services.map((service) => (
                <a
                  key={service.label}
                  href={`#${service.to}`}
                  className="
                    group
                    flex
                    cursor-pointer
                    items-center
                    gap-2 sm:gap-3
                    text-sm
                    sm:text-base
                    text-gray-300
                    transition-all
                    duration-300
                    hover:translate-x-2
                    hover:text-[#D4AF37]
                  "
                >

                  <span className="h-1.5 w-1.5 rounded-full bg-[#D4AF37] opacity-0 transition group-hover:opacity-100"></span>

                  {service.label}

                </a>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold">
              Contact
            </h3>

            <div className="
              mt-5
              space-y-5
              sm:mt-7
              sm:space-y-6
              ">

              <div className="group flex items-start gap-4">

                <div className="mt-1 rounded-xl bg-[#241347] p-2.5 sm:p-3 text-[#D4AF37] transition duration-300 group-hover:scale-110">
                  <Phone
                    size={16}
                    className="sm:w-[18px] sm:h-[18px]"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium sm:text-base text-white">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm text-gray-300 sm:text-base">
                    +91 93286 02322
                  </p>

                  <p className="mt-1 text-sm text-gray-300 sm:text-base">
                    +91 98259 06255
                  </p>
                </div>

              </div>

              <div className="group flex items-start gap-4">

                <div className="mt-1 rounded-xl bg-[#241347] p-3 text-[#D4AF37] transition duration-300 group-hover:scale-110">
                  <Mail
                    size={16}
                    className="sm:w-[18px] sm:h-[18px]"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium sm:text-base text-white">
                    Email
                  </p>

                  <p className="mt-1 break-all text-sm text-gray-300 sm:text-base">
                    tamakuwala.vipul@gmail.com
                  </p>
                </div>

              </div>

              <div className="group flex items-start gap-4">

                <div className="mt-1 rounded-xl bg-[#241347] p-3 text-[#D4AF37] transition duration-300 group-hover:scale-110">
                  <MapPin
                    size={16}
                    className="sm:w-[18px] sm:h-[18px]"
                  />
                </div>

                <div>
                  <p className="text-sm font-medium sm:text-base text-white">
                    Office
                  </p>

                  <p className="mt-1 text-sm text-gray-300 sm:text-base leading-7">
                    Vacanza Trade Centre
                    <br />
                    308, 4th Floor
                    <br />
                    Vesu, Surat
                  </p>
                </div>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom Bar */}

        <div className="relative border-t border-white/10 py-8">

          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              })
            }
            className="
              absolute
              -top-8
              right-8
              group
              flex
              h-12
              w-12
              sm:h-14
              sm:w-14
              items-center
              justify-center
              rounded-full
              bg-gradient-to-r
              from-[#6F2DBD]
              to-[#8E44EC]
              shadow-2xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:scale-110
            "
          >
            <ChevronUp
              size={26}
              className="transition-transform duration-300 group-hover:-translate-y-1"
            />
          </button>

            <div
              className="
                flex flex-col
                items-start
                gap-4
                text-left
                md:flex-row
                md:items-center
                md:justify-between
              "
            >

              {/* Left */}

              <div className="space-y-2">
                <p className="text-sm leading-7 text-gray-400">
                  Mutual fund investments are subject to market risks.
                  <br className="sm:hidden" />
                  <span className="hidden sm:inline"> </span>
                  Read all scheme-related documents carefully.
                </p>

                <p className="text-sm text-gray-400">
                  © 2026 Jupiter Investments. All Rights Reserved.
                </p>
              </div>

              {/* Right */}

              <p className="text-sm text-gray-400">
                Designed &amp; Developed by{" "}
                <span className="font-semibold text-[#D4AF37]">
                  Jaival Tamakuwala
                </span>
              </p>

            </div>
          </div>

        </div>


    </footer>
  );
}

export default Footer;