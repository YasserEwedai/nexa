"use client";

import { ReactNode, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import "../i18n";

export default function I18nProvider({ children }: { children: ReactNode }) {
  const { i18n } = useTranslation();

  const [ready, setReady] = useState(false);

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "en";

    i18n.changeLanguage(savedLanguage).then(() => {
      document.documentElement.lang = savedLanguage;

      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr";

      setReady(true);
    });
  }, [i18n]);

  useEffect(() => {
    const handleLanguageChange = (lng: string) => {
      localStorage.setItem("language", lng);

      document.documentElement.lang = lng;

      document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
    };

    i18n.on("languageChanged", handleLanguageChange);

    return () => {
      i18n.off("languageChanged", handleLanguageChange);
    };
  }, [i18n]);

  if (!ready) {
    return null;
  }

  return children;
}
