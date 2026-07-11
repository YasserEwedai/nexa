"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function HeroBanner() {
  const { t } = useTranslation();

  return (
    <section className="py-10 relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden h-[420px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/80" />

      <div className="absolute inset-0 backdrop-blur-[2px]" />

      <div className="relative z-10 max-w-3xl text-center text-white px-6">
        <div className="inline-block bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)] p-[2px] rounded-full mb-8">
          <div className="bg-black rounded-full px-6 py-2 text-sm">
            {t("heroBanner.label")}
          </div>
        </div>

        <h1 className="text-5xl md:text-4xl font-semibold leading-tight">
          {t("heroBanner.title")}
        </h1>

        <p className="mt-6 text-white/90 text-lg leading-8">
          {t("heroBanner.description")}
        </p>

        <Link
          href="/contact"
          className="inline-block mt-10 px-10 py-4 rounded-full bg-[#A78C35] text-white text-lg"
        >
          {t("heroBanner.button")}
        </Link>
      </div>
    </section>
  );
}
