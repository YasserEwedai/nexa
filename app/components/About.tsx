"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
export default function About() {
  const { t } = useTranslation();
  const items = [
    t("abouts.items.0"),
    t("abouts.items.1"),
    t("abouts.items.2"),
    t("abouts.items.3"),
  ];
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#070A12]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-12 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5 sm:gap-6"
        >
          <div className="bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)] p-[1px] rounded-[8px] w-fit">
            <div className="bg-[#070A12] rounded-[7px] px-4 py-2 text-white text-sm">
              {t("abouts.label")}
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            {t("abouts.title")}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            {t("abouts.description")}
          </p>
          <div className="flex flex-col gap-3">
            {items.map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-3 text-gray-300 text-sm"
              >
                <div className="w-5 h-5 shrink-0 rounded-full bg-[#A78C35] flex items-center justify-center">
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="3"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/about"
              className="
px-6 py-3 rounded-full
bg-[#A78C35]
text-white text-sm
transition-all duration-300
hover:-translate-y-1
hover:scale-105
hover:shadow-[0_10px_25px_rgba(212,175,55,0.5)]
active:scale-95
"
            >
              {t("abouts.learnMore")}
            </Link>
            <Link
              href="/services"
              className="
px-6 py-3 rounded-full
border border-[#A78C35]
text-white text-sm
transition-all duration-300
hover:bg-[#A78C35]
hover:-translate-y-1
hover:scale-105
hover:shadow-[0_10px_25px_rgba(212,175,55,0.5)]
active:bg-[#A78C35]
active:scale-95
"
            >
              {t("abouts.services")}
            </Link>
          </div>
        </motion.div>
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="
relative
h-[260px]
sm:h-[340px]
md:h-[420px]
lg:h-[500px]
rounded-xl
overflow-hidden
border border-white/10
"
        >
          <Image
            src="/images/Company.jpeg"
            alt="Company"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </motion.div>
      </div>
    </section>
  );
}
