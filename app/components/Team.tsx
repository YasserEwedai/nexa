"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Transition } from "framer-motion";
import {
  FaFacebookF,
  FaPinterestP,
  FaYoutube,
  FaTimes,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const team = [
  {
    name: "Yaser Ewida",
    role: "CEO",
    image: "/images/team/yaser.png",
  },
  {
    name: "Kamal AbuZarifa",
    role: "Full Stack Developer",
    image: "/images/team/kamal.jpeg",
  },
];

const leftItem = {
  hidden: {
    x: -120,
    opacity: 0,
    scale: 0.9,
  },
  show: {
    x: 0,
    opacity: 1,
    scale: 1,
  },
};

const leftTransition: Transition = {
  type: "spring",
  stiffness: 110,
  damping: 14,
};

export default function Team({
  showAll = false,
  showButton = true,
}: {
  showAll?: boolean;
  showButton?: boolean;
}) {
  const { t } = useTranslation();

  const displayedTeam = showAll ? team : team.slice(0, 2);

  return (
    <section className="bg-[#070A12] py-20 px-4 md:px-6">
      <div
        className={
          showAll
            ? "max-w-[1400px] mx-auto"
            : "max-w-7xl mx-auto grid lg:grid-cols-[320px_1fr] gap-10 items-start"
        }
      >
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{
            once: false,
            amount: 0.3,
          }}
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.18,
              },
            },
          }}
          className={
            showAll ? "flex flex-col items-center text-center mb-16" : ""
          }
        >
          <motion.div
            variants={leftItem}
            transition={leftTransition}
            className="inline-flex bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)] p-[1px] rounded-full mb-5"
          >
            <div className="rounded-full bg-[#070A12] px-5 py-2 text-sm text-white">
              {t("team.label")}
            </div>
          </motion.div>

          <motion.h2
            variants={leftItem}
            transition={leftTransition}
            className={
              showAll
                ? "text-3xl md:text-5xl font-semibold leading-tight"
                : "text-2xl md:text-3xl font-medium leading-snug max-w-[300px]"
            }
          >
            {t("team.titleLine1")}
            <br />
            {t("team.titleLine2")}
          </motion.h2>
          <motion.p
            variants={leftItem}
            transition={leftTransition}
            className={
              showAll
                ? "text-gray-400 max-w-xl mt-5"
                : "text-white/70 text-sm leading-6 mt-5 max-w-[280px]"
            }
          >
            {t("team.description")}
          </motion.p>

          {showButton && (
            <motion.div
              variants={leftItem}
              transition={leftTransition}
              className="mt-6"
            >
              <Link
                href="/team"
                className="
                inline-block
                rounded-full
                bg-[#A78C35]
                px-6
                py-3
                text-sm
                font-semibold
                text-white
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
                {t("team.button")}
              </Link>
            </motion.div>
          )}
        </motion.div>

        <div
          className={
            showAll
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12"
              : "grid grid-cols-1 sm:grid-cols-2 gap-10"
          }
        >
          {displayedTeam.map((member, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              whileHover={{
                y: -10,
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
              relative
              overflow-hidden
              group
              w-full
              h-[360px]
              rounded-2xl
              "
            >
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="
                object-cover
                rounded-2xl
                group-hover:scale-105
                transition
                duration-500
                "
              />

              <div
                className="
                absolute
                left-[-10px]
                right-5
                bottom-5
                bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)]
                py-4
                px-5
                rounded-2xl
                shadow-2xl
                "
              >
                <h3 className="text-lg font-medium">{member.name}</h3>

                <p className="text-sm text-white/90 mt-1">{member.role}</p>
                <div className="flex gap-3 mt-4">
                  <a className="w-8 h-8 flex items-center justify-center rounded-full border border-white/70">
                    <FaFacebookF size={14} />
                  </a>

                  <a className="w-8 h-8 flex items-center justify-center rounded-full border border-white/70">
                    <FaTimes size={13} />
                  </a>

                  <a className="w-8 h-8 flex items-center justify-center rounded-full border border-white/70">
                    <FaPinterestP size={14} />
                  </a>

                  <a className="w-8 h-8 flex items-center justify-center rounded-full border border-white/70">
                    <FaYoutube size={14} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}