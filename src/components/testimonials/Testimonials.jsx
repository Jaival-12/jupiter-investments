import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import VideoCard from "./VideoCard";
import { testimonials } from "../../data/testimonialsData";

import VideoModal from "./VideoModal";

function Testimonials() {
  const [activeVideo, setActiveVideo] = useState(null);

  const sliderRef = useRef(null);

  const scroll = (direction) => {
    if (!sliderRef.current) return;

    const card = sliderRef.current.querySelector(".video-card");

    if (!card) return;

    const gap = 32;
    const cardWidth = card.offsetWidth + gap;

    sliderRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-[#FAF8FF] py-28"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-200 blur-[130px] opacity-30" />

      <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-yellow-100 blur-[120px] opacity-50" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="px-6 text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-[#D4AF37]">
            CLIENT SUCCESS STORIES
          </p>

          <h2 className="mt-5 text-5xl font-black text-[#101827]">
            Hear From
            <span className="text-[#6F2DBD]"> Our Clients</span>
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-9 text-gray-600">
            Real experiences shared by families who trusted Jupiter Investments
            to guide their financial journey.
          </p>
        </motion.div>

        {/* Navigation */}

        <div className="mt-14 flex justify-end gap-4 px-6">

          <button
            onClick={() => scroll("left")}
            className="rounded-full border border-purple-100 bg-white p-3 shadow-lg transition hover:bg-[#6F2DBD] hover:text-white"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            onClick={() => scroll("right")}
            className="rounded-full border border-purple-100 bg-white p-3 shadow-lg transition hover:bg-[#6F2DBD] hover:text-white"
          >
            <ChevronRight size={22} />
          </button>

        </div>

        {/* Slider */}

        <div className="relative mt-10">

          {/* Left Fade */}

          <div className="pointer-events-none absolute left-0 top-0 bottom-0 z-20 w-16 bg-gradient-to-r from-[#FAF8FF] to-transparent" />

          {/* Right Fade */}

          <div className="pointer-events-none absolute right-0 top-0 bottom-0 z-20 w-16 bg-gradient-to-l from-[#FAF8FF] to-transparent" />

          <div
            ref={sliderRef}
            className="
              flex
              gap-8
              overflow-x-auto
              scroll-smooth
              snap-x
              snap-mandatory
              no-scrollbar
              px-[9%] sm:px-20
              pb-6
            "
          >
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="
                  video-card
                  snap-center
                  flex-shrink-0
                  w-[82%]
                  sm:w-[70%]
                  md:w-[46%]
                  lg:w-[35%]
                "
              >
                <VideoCard
                  testimonial={testimonial}
                  activeVideo={activeVideo}
                  setActiveVideo={setActiveVideo}
                />
              </div>
            ))}
          </div>

        </div>

      </div>

      <VideoModal
        activeVideo={activeVideo}
        setActiveVideo={setActiveVideo}
      />
    </section>
  );
}

export default Testimonials;