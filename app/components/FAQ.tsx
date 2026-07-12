"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Counter } from "./Counter";
import { FaChevronDown } from "react-icons/fa";
import Image from "next/image";
import { useTranslation } from "react-i18next";
type FAQItem = {
  q: string;
  a: string;
};
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const isAnyOpen = openIndex !== null;
  const { t } = useTranslation();
  const faqs = t("faq.items", {
    returnObjects: true,
  }) as FAQItem[];
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#070A12] overflow-hidden"
      id="faqs"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-start">
        <motion.div
          initial={{ opacity: 0, x: -200, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          animate={{
            scale: isAnyOpen ? 1.06 : 1,
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="relative h-[260px] sm:h-[360px] md:h-[500px] flex items-center justify-center overflow-hidden rounded-xl"
        >
          <Image
            src="/images/Tech.jpeg"
            alt="FAQ"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/30 to-black/60" />
          <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 w-[160px] sm:w-[200px]">
            <Counter />
          </div>
        </motion.div>
        <div className="space-y-6 w-full flex flex-col items-start">
          <div className="bg-[#A78C35] p-[1px] rounded-[6px]">
            <div className="bg-[#070A12] rounded-[5px] px-4 py-2 text-white text-sm">
              {t("faq.label")}
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            {t("faq.title")}
          </h2>
          <div className="space-y-3 w-full">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className="border border-white/10 rounded-lg overflow-hidden w-full"
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="
w-full
flex
justify-between
items-center
gap-3
bg-[#A78C35]
px-4 sm:px-5
py-3 sm:py-4
text-white
text-start
"
                  >
                    <span className="text-sm">{item.q}</span>
                    <span
                      className={`shrink-0 text-xl transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    >
                      <FaChevronDown />
                    </span>
                  </button>
                  <div
                    className={`px-4 sm:px-5 text-sm text-white transition-all duration-300 overflow-hidden ${
                      isOpen ? "max-h-[600px] py-4" : "max-h-0"
                    }`}
                  >
                    {item.a}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
