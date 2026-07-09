import { Phone, Mail, ShieldCheck } from "lucide-react";
import { COMPANY } from "../../constants/theme";

function TopBar() {
  return (
    <div className="hidden lg:flex justify-center bg-gradient-to-r from-[#3B0A79] via-[#6F2DBD] to-[#4A148C] text-white">

      <div className="w-full max-w-7xl flex items-center justify-between px-8 py-3">

        <div className="flex items-center gap-3 text-sm font-medium tracking-wide">

          <ShieldCheck size={17} />

          <span>
            Building Wealth. Securing Futures.
          </span>

        </div>

        <div className="flex items-center gap-10">

          <div className="flex items-center gap-2 text-sm">

            <Phone size={16} />

            {COMPANY.phone}

          </div>

          <div className="flex items-center gap-2 text-sm">

            <Mail size={16} />

            {COMPANY.email}

          </div>

        </div>

      </div>

    </div>
  );
}

export default TopBar;