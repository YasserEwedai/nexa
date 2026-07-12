"use client";

import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaWhatsapp,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full py-12 sm:py-16 px-4 sm:px-6 md:px-10 lg:px-16 relative bg-[#070A12]">
      <div className="relative max-w-6xl mx-auto mt-12">
        <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr_1fr] gap-8 items-start">
          {/* Column 1 */}
          <motion.div className="min-w-0">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="Nexa Team"
                width={250}
                height={120}
                priority
                className="w-[250px] md:w-[260px] lg:w-[280px] h-auto"
              />
            </Link>

            <p className="mt-4 text-white/80 text-sm leading-relaxed transition-all duration-300 hover:text-[#D4AF37] hover:scale-[1.01] active:scale-95 cursor-pointer">
              {t("footer.description")}
            </p>
          </motion.div>

          {/* Column 2 */}
          <motion.div>
            <h3 className="text-base font-semibold mb-3 text-white transition-all duration-300 hover:text-[#D4AF37] hover:scale-[1.03] active:scale-95 cursor-pointer">
              {t("footer.quickLinks")}
            </h3>

            <ul className="space-y-1.5 text-sm text-white/80">
              <li>{t("footer.home")}</li>
              <li>{t("footer.about")}</li>
              <li>{t("footer.services")}</li>
              <li>{t("footer.pricing")}</li>
              <li>{t("footer.contactUs")}</li>
            </ul>
          </motion.div>

          {/* Column 3 */}
          <motion.div>
            <h3 className="text-base font-semibold mb-3 text-white">
              {t("footer.contact")}
            </h3>

            <div className="text-sm space-y-3 text-white/80">
              <div>
                <p className="text-white">{t("footer.phone")}</p>
                <p>0761-8523-398</p>
              </div>

              <div>
                <p className="text-white">{t("footer.email")}</p>
                <p>nexateam@gmail.com</p>
              </div>
            </div>
          </motion.div>

          {/* Column 4 */}
          <motion.div>
            <h3 className="text-base font-semibold mb-3 text-white">
              {t("footer.newsletter")}
            </h3>

            <div className="grid grid-cols-4 gap-2">
              <div className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-[#A78C35] transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer">
                <FaFacebookF />
              </div>

              <div className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-[#A78C35] transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer">
                <FaTwitter />
              </div>

              <div className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-[#A78C35] transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer">
                <FaWhatsapp />
              </div>

              <div className="w-9 h-9 flex items-center justify-center rounded-full text-white bg-[#A78C35] transition-all duration-200 hover:scale-110 active:scale-90 cursor-pointer">
                <FaLinkedinIn />
              </div>
            </div>
          </motion.div>
        </div>

        {/* COPYRIGHT */}
        <div className="mt-10 border-t border-[#D4AF37]/40 pt-6">
          <p className="text-center text-sm text-[#A78C35] transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer">
            {t("footer.copyright")}
          </p>
        </div>
      </div>
    </footer>
  );
}
