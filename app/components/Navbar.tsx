"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

export default function Navbar() {
  const [openOther, setOpenOther] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();

  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenOther(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    function handleScroll() {
      setOpenOther(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkStyle = (path: string) =>
    `
    transition-all
    duration-300
    ${
      pathname === path
        ? "text-[#D0AC37]"
        : "text-gray-300 hover:text-[#D0AC37] active:text-[#5A4526]"
    }
  `;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070A12]">
      <div className="backdrop-blur-md bg-[#070A12]/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between">
          <Link href="/" className="text-white font-bold text-lg">
            {t("navbar.logo")}
          </Link>

          <nav className="hidden md:flex gap-8 text-sm text-gray-300 items-center">
            <Link className={linkStyle("/")} href="/">
              {t("navbar.home")}
            </Link>

            <Link className={linkStyle("/about")} href="/about">
              {t("navbar.about")}
            </Link>

            <Link className={linkStyle("/services")} href="/services">
              {t("navbar.services")}
            </Link>

            <Link className={linkStyle("/projects")} href="/projects">
              {t("navbar.projects")}
            </Link>

            <Link className={linkStyle("/team")} href="/team">
              {t("navbar.team")}
            </Link>

            <Link className={linkStyle("/contact")} href="/contact">
              {t("navbar.contact")}
            </Link>

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpenOther(!openOther)}
                className="
                  hover:text-[#D0AC37]
                  active:text-[#5A4526]
                  transition
                "
              >
                {t("navbar.training")}
              </button>

              {openOther && (
                <div
                  className="
                    absolute
                    top-8
                    left-0
                    w-52
                    bg-[#111827]
                    border
                    border-white/10
                    rounded-xl
                    shadow-xl
                    p-4
                  "
                >
                  <ul className="flex flex-col gap-3">
                    <li>
                      <Link
                        href="/#choose-us"
                        className={linkStyle("#choose-us")}
                      >
                        {t("navbar.chooseUs")}
                      </Link>
                    </li>

                    <li>
                      <Link href="/#Blog" className={linkStyle("/#Blog")}>
                        {t("navbar.latestArticle")}
                      </Link>
                    </li>

                    <li>
                      <Link href="/#faqs" className={linkStyle("#faqs")}>
                        {t("navbar.faqs")}
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </nav>

          <Link
            href="/contact"
            className="
              inline-block
              px-5
              py-2
              rounded-full
              bg-[#A78C35]
              hover:bg-[#D0AC37]
              active:bg-[#5A4526]
              text-white
              text-sm
              transition-all
              duration-300
              transform
              hover:-translate-y-1
              hover:scale-105
              hover:shadow-[0_10px_25px_rgba(212,175,55,0.5)]
              active:translate-y-0
              active:scale-95
              active:shadow-none
            "
          >
            {t("navbar.freeConsultation")}
          </Link>
        </div>
      </div>
    </header>
  );
}
