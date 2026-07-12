"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import Image from "next/image";
export default function Navbar() {
  const [openOther, setOpenOther] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileOtherOpen, setMobileOtherOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close desktop "training" dropdown on outside click
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown/mobile menu on scroll
  useEffect(() => {
    function handleScroll() {
      setOpenOther(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
    setMobileOtherOpen(false);
  }, [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const linkStyle = (path: string) =>
    `transition-all duration-300 ${
      pathname === path
        ? "text-[#D0AC37]"
        : "text-gray-300 hover:text-[#D0AC37] active:text-[#5A4526]"
    }`;

  const mobileLinkStyle = (path: string) =>
    `block w-full py-3 text-base border-b border-white/5 transition-all duration-300 ${
      pathname === path
        ? "text-[#D0AC37]"
        : "text-gray-300 hover:text-[#D0AC37] active:text-[#5A4526]"
    }`;

  const navItems = [
    { href: "/", label: t("navbar.home") },
    { href: "/about", label: t("navbar.about") },
    { href: "/services", label: t("navbar.services") },
    { href: "/projects", label: t("navbar.projects") },
    { href: "/team", label: t("navbar.team") },
    { href: "/contact", label: t("navbar.contact") },
  ];

  const otherItems = [
    { href: "/#choose-us", label: t("navbar.chooseUs") },
    { href: "/#Blog", label: t("navbar.latestArticle") },
    { href: "/#faqs", label: t("navbar.faqs") },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#070A12]">
      <div className="backdrop-blur-md bg-[#070A12]/70 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="shrink-0">
            <Image
              src="/images/logo.jpeg"
              alt="Nexa Team"
              width={150}
              height={45}
              priority
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop nav (lg and up) */}
          <nav className="hidden lg:flex gap-6 xl:gap-8 text-sm text-gray-300 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                className={linkStyle(item.href)}
                href={item.href}
              >
                {item.label}
              </Link>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => setOpenOther(!openOther)}
                className="flex items-center gap-1 hover:text-[#D0AC37] active:text-[#5A4526] transition"
                aria-expanded={openOther}
                aria-haspopup="true"
              >
                {t("navbar.training")}
                <FaChevronDown
                  size={14}
                  className={`transition-transform duration-300 ${
                    openOther ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openOther && (
                <div className="absolute top-8 left-0 w-52 bg-[#111827] border border-white/10 rounded-xl shadow-xl p-4">
                  <ul className="flex flex-col gap-3">
                    {otherItems.map((item) => (
                      <li key={item.href}>
                        <Link href={item.href} className={linkStyle(item.href)}>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </nav>

          {/* Right side: CTA (desktop) + hamburger (mobile/tablet) */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="
                hidden lg:inline-block
                px-5 py-2
                rounded-full
                bg-[#A78C35]
                hover:bg-[#D0AC37]
                active:bg-[#5A4526]
                text-white
                text-sm
                whitespace-nowrap
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

            {/* Hamburger toggle — visible below lg */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg text-white hover:text-[#D0AC37] hover:bg-white/5 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
            >
              {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / tablet slide-down menu (below lg) */}
      <div
        id="mobile-menu"
        className={`lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out bg-[#070A12]/95 backdrop-blur-md border-b border-white/10 ${
          mobileOpen
            ? "max-h-[calc(100vh-4rem)] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex flex-col overflow-y-auto max-h-[calc(100vh-4rem)]">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={mobileLinkStyle(item.href)}
            >
              {item.label}
            </Link>
          ))}

          {/* Collapsible "training / other" group */}
          <button
            type="button"
            onClick={() => setMobileOtherOpen((v) => !v)}
            className="flex items-center justify-between w-full py-3 text-base text-gray-300 border-b border-white/5 hover:text-[#D0AC37] transition-all duration-300"
            aria-expanded={mobileOtherOpen}
          >
            {t("navbar.training")}
            <FaChevronDown
              size={16}
              className={`transition-transform duration-300 ${
                mobileOtherOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <div
            className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
              mobileOtherOpen ? "max-h-60" : "max-h-0"
            }`}
          >
            <ul className="flex flex-col pl-4">
              {otherItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={mobileLinkStyle(item.href)}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Link
            href="/contact"
            className="
              inline-block
              text-center
              mt-4 mb-6
              px-5 py-3
              rounded-full
              bg-[#A78C35]
              hover:bg-[#D0AC37]
              active:bg-[#5A4526]
              text-white
              text-sm
              transition-all
              duration-300
            "
          >
            {t("navbar.freeConsultation")}
          </Link>
        </nav>
      </div>
    </header>
  );
}
