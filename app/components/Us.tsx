"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Cpu, Rocket, Radio, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
const icons = [Cpu, Rocket, Radio, ShieldCheck];
export default function Us() {
  const { t } = useTranslation();
  const cards = [
    {
      title: t("chooseUs.cards.technical.title"),
      desc: t("chooseUs.cards.technical.desc"),
    },
    {
      title: t("chooseUs.cards.innovation.title"),
      desc: t("chooseUs.cards.innovation.desc"),
    },
    {
      title: t("chooseUs.cards.communication.title"),
      desc: t("chooseUs.cards.communication.desc"),
    },
    {
      title: t("chooseUs.cards.security.title"),
      desc: t("chooseUs.cards.security.desc"),
    },
  ];
  return (
    <section
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16 bg-[#070A12]"
      id="choose-us"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-10 md:gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl p-4 sm:p-8 text-center space-y-5 sm:space-y-6"
        >
          <div className="bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)] p-[1px] rounded-[8px] inline-block">
            <div className="bg-[#070A12] rounded-[7px] py-2 px-4 text-white text-sm">
              {t("chooseUs.label")}
            </div>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white capitalize">
            {t("chooseUs.title")}
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xl mx-auto">
            {t("chooseUs.description")}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-5 sm:gap-6 w-full items-stretch">
          <div className="flex flex-col gap-5 sm:gap-6">
            {cards.slice(0, 2).map((card, index) => {
              const Icon = icons[index];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="
bg-[#0B1020]
border border-[#D4AF37]/30
rounded-xl
p-5 sm:p-6
min-h-[150px] sm:min-h-[170px]
flex
justify-between
items-center
gap-4
"
                >
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{card.desc}</p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Icon className="text-[#D4AF37] w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </motion.div>
              );
            })}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.7, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 120 }}
            className="
relative
rounded-xl
overflow-hidden
min-h-[280px]
sm:min-h-[380px]
md:min-h-[460px]
lg:min-h-[520px]
md:-mt-16
border
border-white/10
"
          >
            <Image
              src="/images/Tech.jpeg"
              alt="Company Image"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black/25" />
          </motion.div>
          <div className="flex flex-col gap-5 sm:gap-6">
            {cards.slice(2, 4).map((card, index) => {
              const Icon = icons[index + 2];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="
bg-[#0B1020]
border border-[#D4AF37]/30
rounded-xl
p-5 sm:p-6
min-h-[150px] sm:min-h-[170px]
flex
justify-between
items-center
gap-4
"
                >
                  <div>
                    <h3 className="text-white font-semibold mb-2">
                      {card.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{card.desc}</p>
                  </div>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 shrink-0 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Icon className="text-[#D4AF37] w-6 h-6 sm:w-8 sm:h-8" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
