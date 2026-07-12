"use client";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export default function HeroBanner() {
  const { t } = useTranslation();
  return (
    <section className="py-16 sm:py-20 md:py-10 relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden min-h-[320px] sm:min-h-[380px] md:h-[420px] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/80" />
      <div className="absolute inset-0 backdrop-blur-[2px]" />
      <div className="relative z-10 max-w-3xl text-center text-white px-4 sm:px-6">
        <div className="inline-block bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)] p-[2px] rounded-full mb-6 sm:mb-8">
          <div className="bg-black rounded-full px-4 sm:px-6 py-2 text-xs sm:text-sm">
            {t("heroBanner.label")}
          </div>
        </div>
        {/* Fixed: mobile-first scaling — was text-5xl on mobile shrinking to text-4xl on desktop (inverted) */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
          {t("heroBanner.title")}
        </h1>
        <p className="mt-4 sm:mt-6 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed md:leading-8">
          {t("heroBanner.description")}
        </p>
        <Link
          href="/contact"
          className="inline-block mt-6 sm:mt-8 md:mt-10 px-6 sm:px-8 md:px-10 py-3 md:py-4 rounded-full bg-[#A78C35] hover:bg-[#D0AC37] active:bg-[#5A4526] text-white text-sm sm:text-base md:text-lg transition-all duration-300"
        >
          {t("heroBanner.button")}
        </Link>
      </div>
    </section>
  );
}
