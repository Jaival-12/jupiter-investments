import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock3,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

function Contact() {

  const whatsappMessage = encodeURIComponent(
    `Hello Mr. Vipul,

I came across the Jupiter Investments website and would like to know more about your financial planning and investment services.

Please let me know a convenient time to connect.

Thank you.`
  );

  const whatsappURL = `https://wa.me/919328602322?text=${whatsappMessage}`;


  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    if (
      !formData.from_name ||
      !formData.from_email ||
      !formData.phone ||
      !formData.service ||
      !formData.message
    ) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await emailjs.send(
        "service_171176",
        "template_171178",
        formData,
        "FD0SO3DcyKwOuv1LO"
      );

      setSuccess("Consultation request sent successfully! We'll get in touch with you shortly.");

      setTimeout(() => {
        setSuccess("");
      }, 3000);

      setFormData({
        from_name: "",
        from_email: "",
        phone: "",
        service: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setError("Failed to send message.");
    }

    setTimeout(() => {
      setError("");
    }, 3000);

    setLoading(false);
  };

  const contactCards = [
    {
      icon: <Phone size={30} />,
      title: "Call Us",
      content: [
        {
          label: "+91 93286 02322",
          href: "tel:+919328602322",
        },
        {
          label: "+91 98259 06255",
          href: "tel:+919825906255",
        },
      ],
    },
    {
      icon: <Mail size={30} />,
      title: "Email",
      content: [
        {
          label: "tamakuwala.vipul@gmail.com",
          href: "mailto:tamakuwala.vipul@gmail.com",
        },
      ],
    },
    {
      icon: <MapPin size={30} />,
      title: "Office",
      content: [
        "Vacanza Trade Centre",
        "308, 4th Floor ",
        "Opp. Ratnajyoti Apt.",
        "Nr. Siddhi Vinayak Temple",
        "Vesu, Surat",
      ],
    },
    {
      icon: <Clock3 size={30} />,
      title: "Office Hours",
      content: [
        "Monday - Saturday",
        "10:00 AM - 7:00 PM",
      ],
    },
  ];

  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-white
        py-20
        sm:py-24
        lg:py-28
        "
    >
      {/* Background Glow */}

      <div className="absolute -left-40 top-0 h-[420px] w-[420px] rounded-full bg-purple-200 blur-[140px] opacity-30"></div>

      <div className="absolute right-0 bottom-0 h-[380px] w-[380px] rounded-full bg-yellow-100 blur-[120px] opacity-50"></div>

      <div className="
        relative
        mx-auto
        max-w-7xl
        px-5
        sm:px-6
        lg:px-8
        ">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="
            mb-14
            text-center
            sm:mb-16
            lg:mb-20
            "
        >

          <p className="uppercase tracking-[4px] sm:tracking-[6px] text-[#D4AF37] font-semibold">

            CONTACT US

          </p>

          <h2 className="
            mt-4
            text-3xl
            font-black
            leading-tight
            text-[#101827]
            sm:text-4xl
            lg:mt-5
            lg:text-6xl
            ">

            Ready To Secure

            <span className="text-[#6F2DBD]">

              {" "}Your Financial Future?

            </span>

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
            lg:mt-8
            lg:leading-9
            ">

            Let's discuss your financial goals and create a personalized
            investment strategy that helps you achieve long-term wealth.

          </p>

        </motion.div>

        {/* Main Grid */}

        <div className="
          grid
          gap-10
          lg:grid-cols-[0.9fr_1.1fr]
          lg:gap-12
          items-start
          ">

          {/* Left Side */}

          <div className="
            grid
            grid-cols-1
            gap-5
            sm:grid-cols-2
            sm:gap-6
            lg:gap-7
            ">

            {contactCards.map((card, index) => (

              <motion.div
                key={card.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * .1,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="
                  group
                  rounded-2xl
                  lg:rounded-[30px]
                  border
                  border-purple-100
                  bg-white
                  p-6
                  sm:p-7
                  lg:p-8
                  shadow-xl
                  transition-all
                  duration-300
                  hover:border-[#D4AF37]
                  hover:shadow-2xl
                "
              >

                <div className="mb-6 h-[3px] w-16 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#6F2DBD]"></div>

                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-2xl bg-[#F5EEFF] text-[#6F2DBD] transition group-hover:scale-110">

                  <div className="scale-90 sm:scale-100">
                    {card.icon}
                  </div>

                </div>

                <h3 className="
                  mt-5
                  text-xl
                  font-bold
                  sm:mt-6
                  sm:text-2xl
                  ">

                  {card.title}

                </h3>

                <div className="
                  mt-4
                  space-y-2
                  text-sm
                  leading-6
                  text-gray-600
                  sm:mt-5
                  sm:text-base
                  sm:leading-7
                  ">

                  {card.content.map((item) =>

                    typeof item === "string" ? (

                      <p key={item}>{item}</p>

                    ) : (

                      <a
                        key={item.label}
                        href={item.href}
                        className="
                          block
                          transition
                          hover:text-[#6F2DBD]
                        "
                      >
                        {item.label}
                      </a>

                    )

                  )}

                </div>

              </motion.div>

            ))}

          </div>

          {/* Contact Form */}

          <motion.div
            initial={{
              opacity: 0,
              x: 60,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
            }}
            className="
              relative
              overflow-hidden
              rounded-[28px]
              border
              border-white/40
              bg-white/80
              backdrop-blur-xl
              p-6
              shadow-[0_20px_50px_rgba(111,45,189,0.15)]
              sm:p-8
              lg:rounded-[34px]
              lg:p-10
              lg:shadow-[0_30px_70px_rgba(111,45,189,0.18)]
            "
          >

            {/* Decorative Glow */}

            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-purple-200 blur-[120px] opacity-40"></div>

            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-yellow-200 blur-[110px] opacity-30"></div>

            <div className="relative z-10">

              <h3 className="
                text-2xl
                font-bold
                text-[#101827]
                sm:text-3xl
                ">

                Book Your Consultation

              </h3>

              <p className="
                mt-3
                text-sm
                leading-6
                text-gray-600
                sm:text-base
                ">

                Fill in your details and we'll connect with you shortly.

              </p>

              <form onSubmit={sendEmail} className="mt-8 space-y-5 sm:mt-10 sm:space-y-6">

                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="w-full rounded-2xl border border-purple-100 bg-white/80 px-4 py-3.5 sm:px-5 sm:py-4 outline-none transition-all duration-300 focus:border-[#6F2DBD] focus:ring-4 focus:ring-[#6F2DBD]/10"
                />

                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full rounded-2xl border border-purple-100 bg-white/80 px-4 py-3.5 sm:px-5 sm:py-4 outline-none transition-all duration-300 focus:border-[#6F2DBD] focus:ring-4 focus:ring-[#6F2DBD]/10"
                />

                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full rounded-2xl border border-purple-100 bg-white/80 px-4 py-3.5 sm:px-5 sm:py-4 outline-none transition-all duration-300 focus:border-[#6F2DBD] focus:ring-4 focus:ring-[#6F2DBD]/10"
                />

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-purple-100 bg-white/80 px-4 py-3.5 sm:px-5 sm:py-4 outline-none transition-all duration-300 focus:border-[#6F2DBD] focus:ring-4 focus:ring-[#6F2DBD]/10"
                >
                  <option value="">Select Investment Goal</option>
                  <option>Wealth Creation</option>
                  <option>Mutual Funds</option>
                  <option>SIP Planning</option>
                  <option>Retirement Planning</option>
                  <option>Insurance</option>
                  <option>Retirement Planning</option>
                  <option>Portfolio Review</option>
                  <option>Other</option>
                </select>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell us about your financial goals..."
                  className="w-full rounded-2xl border border-purple-100 bg-white/80 px-5 py-4 outline-none transition-all duration-300 focus:border-[#6F2DBD] focus:ring-4 focus:ring-[#6F2DBD]/10"
                />

                <button
                  type="submit"
                  disabled={loading}
                  className="
                    group
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
                    sm:py-5
                    font-semibold
                    text-white
                    shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-1
                  "
                >
                  <CalendarDays
                    size={18}
                    className="sm:w-5 sm:h-5 transition group-hover:rotate-12"
                  />

                  {loading ? "Sending..." : "Schedule Consultation"}

                  <ArrowRight
                    size={16}
                    className="
                      transition
                      group-hover:translate-x-1
                      sm:w-[18px]
                      sm:h-[18px]
                    "
                  />
                </button>

                {success && (

                  <motion.div
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                    }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                    }}
                    className="
                      rounded-2xl
                      border
                      border-green-200
                      bg-green-50
                      p-4 sm:p-5
                      text-center
                      shadow-lg
                    "
                  >

                    <h4 className="font-bold text-green-700">

                      Consultation Request Sent

                    </h4>

                    <p className="
                      mt-2
                      text-sm
                      leading-6
                      text-green-600
                      sm:text-base
                      ">

                      Thank you for contacting Jupiter Investments.
                      We'll reach out to you shortly.

                    </p>

                  </motion.div>

                )}

                {error && (
                  <p className="
                    text-center
                    text-sm
                    font-medium
                    text-red-600
                    sm:text-base
                    ">
                    {error}
                  </p>
                )}

                

                <a
                  href={whatsappURL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-3
                    rounded-xl
                    border-2
                    border-[#25D366]
                    bg-white
                    py-3.5
                    sm:py-4
                    font-semibold
                    text-[#25D366]
                    transition-all
                    duration-300
                    hover:bg-[#25D366]
                    hover:text-white
                  "
                >
                  <FaWhatsapp
                    size={18}
                    className="sm:w-5 sm:h-5"
                  />

                  Chat on WhatsApp
                </a>

              </form>

            </div>
          </motion.div>
        </div>

        {/* Google Map */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            mt-16
            sm:mt-20
            lg:mt-24
            "
        >
          <div className="mb-8 text-center">
            <p className="
              text-xs
              font-semibold
              uppercase
              tracking-[4px]
              text-[#D4AF37]
              sm:text-sm
              sm:tracking-[6px]
              ">
              VISIT OUR OFFICE
            </p>

            <h3 className="
              mt-4
              text-3xl
              font-black
              leading-tight
              text-[#101827]
              sm:text-4xl
              ">
              We'd Love To Meet You
            </h3>

            <p className="
              mx-auto
              mt-4
              max-w-2xl
              text-base
              leading-7
              text-gray-600
              sm:text-lg
              sm:leading-8
              ">
              Visit our office in Vesu, Surat, for a personalized financial
              consultation and let us help you build your financial future.
            </p>
          </div>

          <div className="
            overflow-hidden
            rounded-[24px]
            border
            border-purple-100
            shadow-xl
            sm:rounded-[28px]
            lg:rounded-[34px]
            lg:shadow-2xl
            ">
            <iframe
              title="Jupiter Investments Location"
              src="https://www.google.com/maps?q=Vacanza+Trade+Centre+Vesu+Surat&output=embed"
              className="h-[300px] w-full sm:h-[360px] lg:h-[430px]"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>

          <div className="
            mt-6
            flex
            justify-center
            sm:mt-8
            ">
            <a
              href="https://maps.app.goo.gl/fMz7SfCtecQa5Rub9"
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
                hover:shadow-2xl
                sm:w-auto
                sm:px-8
                "
            >
              <MapPin size={20} />

              Get Directions

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;