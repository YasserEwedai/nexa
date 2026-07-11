"use client";

import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  useEffect(() => {
    const savedLang = localStorage.getItem("language");

    if (savedLang) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  useEffect(() => {
    const direction = i18n.language === "ar" ? "rtl" : "ltr";

    document.documentElement.dir = direction;
    document.documentElement.lang = i18n.language;

    localStorage.setItem("language", i18n.language);
  }, [i18n.language]);

  const changeLanguage = () => {
    const nextLang = i18n.language === "en" ? "ar" : "en";

    i18n.changeLanguage(nextLang);
  };

  return (
    <button
      onClick={changeLanguage}
      className="
        fixed
        bottom-6
        left-6
        z-50
        w-14
        h-14
        rounded-full
        bg-[#A78C35]
        text-white
        font-bold
        border-2
        border-[#D4AF37]
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
        active:scale-95
      "
    >
      {i18n.language === "en" ? "AR" : "EN"}
    </button>
  );
}
