import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, Menu, X } from "lucide-react";

import { navigationLinks } from "../../data/navigationData";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <section className="sticky top-4 z-50 px-4 lg:px-6 pb-8">
      {/* ================= DESKTOP ================= */}

      <motion.div
        initial={{ opacity: 0, y: -25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          relative
          hidden
          lg:flex
          max-w-7xl
          mx-auto
          items-center
          justify-between
          rounded-[24px]
          border
          border-[#EEE7FA]
          bg-white/85
          backdrop-blur-xl
          shadow-[0_25px_70px_rgba(0,0,0,0.08)]
          px-10
          py-5
        "
      >
        {/* Gold Accent */}

        <div className="absolute left-10 right-10 top-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />

        {/* Navigation */}

        <div className="flex items-center gap-10">
          {navigationLinks.map((item) => (
            <a
              key={item.to}
              href={`#${item.to}`}
              className="
                nav-link
                text-[15px]
                font-medium
                tracking-wide
                text-gray-700
                transition-all
                duration-300
                hover:text-[#6F2DBD]
              "
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* CTA */}

        <a href="#contact">
          <button
            className="
              group
              flex
              cursor-pointer
              items-center
              gap-3
              rounded-xl
              bg-gradient-to-r
              from-[#6F2DBD]
              to-[#8E44EC]
              px-8
              py-4
              font-semibold
              text-white
              shadow-lg
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-2xl
            "
          >
            <CalendarDays
              size={18}
              className="transition group-hover:rotate-12"
            />
            Schedule Meeting
          </button>
        </a>
      </motion.div>

      {/* ================= MOBILE ================= */}

      <div className="lg:hidden">

        {/* Mobile Top Bar */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="
            mx-auto
            flex
            items-center
            justify-between
            rounded-[26px]
            border
            border-[#EEE7FA]
            bg-white/90
            backdrop-blur-xl
            px-6
            py-4
            shadow-[0_20px_50px_rgba(0,0,0,0.08)]
          "
        >
          <div>

            <p className="text-xs font-semibold tracking-[4px] text-[#D4AF37] uppercase">
              Navigation
            </p>

            <h3 className="mt-1 text-lg font-bold text-[#6F2DBD]">
              Menu
            </h3>

          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-[#F5EEFF]
              text-[#6F2DBD]
              transition-all
              duration-300
              hover:bg-[#6F2DBD]
              hover:text-white
            "
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </motion.div>

        <AnimatePresence>

          {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.97 }}
            transition={{ duration: 0.25 }}
            className="
              mt-4
              overflow-hidden
              rounded-[28px]
              border
              border-[#EEE7FA]
              bg-white/95
              backdrop-blur-xl
              shadow-[0_25px_60px_rgba(0,0,0,0.08)]
            "
          >
            <div className="p-8">

              <div className="space-y-1">

                {navigationLinks.map((item, index) => (

                  <div key={item.to}>

                    <a
                      href={`#${item.to}`}
                      onClick={() => setMobileOpen(false)}
                      className="
                        block
                        rounded-xl
                        px-4
                        py-4
                        text-lg
                        font-semibold
                        text-gray-700
                        transition-all
                        duration-300
                        hover:bg-[#F7F2FF]
                        hover:text-[#6F2DBD]
                      "
                  >
                    {item.label}
                  </a>

                    {index !== navigationLinks.length - 1 && (
                      <div className="mx-4 h-px bg-gradient-to-r from-transparent via-purple-200 to-transparent" />
                    )}

                  </div>

                ))}

              </div>

              <div className="mt-8">

                <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                >
                  <button
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-3
                      rounded-xl
                      bg-gradient-to-r
                      from-[#6F2DBD]
                      to-[#8E44EC]
                      py-4
                      font-semibold
                      text-white
                      shadow-lg
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:shadow-xl
                    "
                  >
                    <CalendarDays size={18} />

                    Book Consultation
                  </button>
                </a>

              </div>

            </div>
          </motion.div>
        )}

      </AnimatePresence>

      </div>

    </section>
  );
}

export default Navbar;