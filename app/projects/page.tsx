"use client";

import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";

const projects = [
  {
    image: "/images/project/project1.jpg",
  },
  {
    image: "/images/project/project2.jpg",
  },
  {
    image: "/images/project/project3.jpg",
  },
];

const technologies = [
  "React",
  "Next.js",
  "Node.js",
  "Cloud",
  "Cyber Security",
  "Database",
];

export default function Projects() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#070A12] text-white overflow-x-hidden">
      <Navbar />

      {/* HERO */}

      <section className="relative h-[520px] flex items-center justify-center px-6">
        <Image
          src="/images/project/project1.jpg"
          alt="projects"
          fill
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/70" />

        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
          className="relative text-center max-w-4xl"
        >
          <div
            className="
            bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)]
            p-[1px]
            rounded-[8px]
            inline-block
            mb-5
            "
          >
            <div
              className="
              px-6
              py-2
              rounded-[7px]
              bg-[#070A12]
              text-sm
              "
            >
              {t("projects.hero.label")}
            </div>
          </div>

          <h1
            className="
            text-4xl
            md:text-6xl
            font-bold
            mb-5
            "
          >
            {t("projects.hero.title")}
          </h1>

          <p className="text-gray-300">{t("projects.hero.description")}</p>
        </motion.div>
      </section>

      {/* INTRO */}

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{
              opacity: 0,
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: false,
              amount: 0.3,
            }}
            className="
            text-4xl
            font-bold
            mb-5
            "
          >
            {t("projects.intro.title")}
          </motion.h2>

          <p className="text-gray-400 max-w-3xl mx-auto">
            {t("projects.intro.description")}
          </p>
        </div>
      </section>
      {/* PROJECT CARDS */}

      <section className="px-6 pb-20">
        <div
          className="
          max-w-6xl
          mx-auto
          grid
          md:grid-cols-3
          gap-6
          "
        >
          {projects.map((project, index) => {
            const item = t(`projects.cards.${index}`, {
              returnObjects: true,
            }) as {
              category: string;
              title: string;
              desc: string;
            };

            return (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  y: 50,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-[#0B1020]
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-[#A78C35]/50
                "
              >
                <div className="relative h-[250px]">
                  <Image
                    src={project.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />

                  <div
                    className="
                    absolute
                    inset-0
                    bg-black/30
                    group-hover:bg-black/10
                    transition
                    "
                  />
                </div>

                <div className="p-6">
                  <span
                    className="
                    text-[#D4AF37]
                    text-sm
                    "
                  >
                    {item.category}
                  </span>

                  <h3
                    className="
                    text-2xl
                    font-bold
                    mt-3
                    mb-3
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    text-gray-400
                    text-sm
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      {/* TECHNOLOGIES */}

      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="
            text-4xl
            font-bold
            text-center
            mb-12
            "
          >
            {t("projects.technologies.title")}
          </h2>

          <div
            className="
            grid
            grid-cols-2
            md:grid-cols-6
            gap-5
            "
          >
            {technologies.map((item, index) => (
              <motion.div
                key={index}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                viewport={{
                  once: false,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="
                bg-[#0B1020]
                border
                border-white/10
                rounded-xl
                p-5
                text-center
                hover:border-[#A78C35]/50
                transition
                "
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}

      <section className="py-20 px-6 text-center">
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
        >
          <h2
            className="
            text-4xl
            md:text-5xl
            font-bold
            mb-5
            "
          >
            {t("projects.cta.title")}
          </h2>

          <p className="text-gray-400 mb-8">{t("projects.cta.description")}</p>

          <Link
            href="/contact"
            className="
            inline-block
            px-8
            py-3
            rounded-full
            bg-[#A78C35]
            transition-all
            duration-300
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-[0_10_25px_rgba(212,175,55,0.5)]
            "
          >
            {t("projects.cta.button")}
          </Link>
        </motion.div>
      </section>
      <LanguageSwitcher />
    </main>
  );
}