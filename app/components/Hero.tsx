"use client";

import Image from "next/image";
import { motion, type Transition } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

import {
  SiStripe,
  SiPaypal,
  SiVisa,
  SiGooglecloud,
  SiGithub,
  SiGitlab,
} from "react-icons/si";

import { FaMicrosoft } from "react-icons/fa";

const partners = [
  {
    name: "Stripe",
    icon: SiStripe,
  },
  {
    name: "PayPal",
    icon: SiPaypal,
  },
  {
    name: "Visa",
    icon: SiVisa,
  },
  {
    name: "Google Cloud",
    icon: SiGooglecloud,
  },
  {
    name: "Microsoft Azure",
    icon: FaMicrosoft,
  },
  {
    name: "GitHub",
    icon: SiGithub,
  },
  {
    name: "GitLab",
    icon: SiGitlab,
  },
];

const baseTransition: Transition = {
  duration: 1,
  ease: [0.25, 0.1, 0.25, 1],
};

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen overflow-hidden pt-28 sm:pt-32 md:pt-40 pb-16 sm:pb-24 md:pb-32">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.jpeg"
          alt="Hero Background"
          fill
          className="object-cover"
          style={{
            objectPosition: "center",
          }}
          priority
        />

        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 text-center flex flex-col items-center">
        <motion.div
          initial={{ y: 0, opacity: 0, scale: 0.6 }}
          whileInView={{ y: -110, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={baseTransition}
          className="bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)] p-[1px] rounded-[8px] mb-2"
        >
          <div className="px-4 py-2 bg-[#070A12] rounded-[7px] text-sm text-white">
            {t("hero.label")}
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: -70, opacity: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={baseTransition}
          className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-2"
        >
          {t("hero.titleLine1")}
          <br />
          {t("hero.titleLine2")}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0, scale: 0.95 }}
          whileInView={{ y: -10, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed mb-3"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0, scale: 0.95 }}
          whileInView={{ y: 25, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Link
            href="/contact"
            className="
            inline-block
            px-8
            py-3
            rounded-full
            bg-[#A78C35]
            text-white
            mb-4
            transition-all
            duration-300
            transform
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-[0_10px_25px_rgba(212,175,55,0.5)]
            active:translate-y-0
            active:scale-95
            active:shadow-none"
          >
            {t("hero.button")}
          </Link>
        </motion.div>

        <motion.h3
          initial={{ y: 40, opacity: 0, scale: 0.3 }}
          whileInView={{ y: 60, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={baseTransition}
          className="text-lg md:text-xl font-semibold mb-4"
        >
          {t("hero.partnership")}
        </motion.h3>

        <motion.div
          initial={{ y: 60, opacity: 0, scale: 0.6 }}
          whileInView={{ y: 120, opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={baseTransition}
          className="w-full overflow-hidden"
        >
          <Swiper
            modules={[Autoplay]}
            dir="rtl"
            loop={true}
            speed={1000}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 12,
              },

              640: {
                slidesPerView: 3,
                spaceBetween: 16,
              },

              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
          >
            {partners.map((partner, i) => {
              const Icon = partner.icon;

              return (
                <SwiperSlide key={i}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={baseTransition}
                    className="
                    h-24 sm:h-28
                    rounded-xl
                    bg-white/5
                    border
                    border-white/10
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    sm:gap-3
                    hover:bg-white/10
                    transition-all
                    duration-300"
                  >
                    <Icon className="text-3xl sm:text-4xl text-[#D4AF37]" />

                    <span className="text-xs sm:text-sm text-gray-300 text-center">
                      {partner.name}
                    </span>
                  </motion.div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
