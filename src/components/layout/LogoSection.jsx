import { motion } from "framer-motion";
import logo from "../../assets/images/logo.png";
import { COMPANY } from "../../constants/theme";

function LogoSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: -25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative bg-[#FCFCFD] py-8 text-center"
    >
      <img
        src={logo}
        alt="Jupiter Investments"
        className="mx-auto h-44 object-contain"
      />

      <div className="mt-4 flex justify-center">
        <div className="h-[2px] w-32 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent" />
      </div>

      <p className="mt-4 text-sm uppercase tracking-[6px] text-gray-500">
        {COMPANY.tagline}
      </p>
    </motion.section>
  );
}

export default LogoSection;