///
"use client";
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "../components/LanguageSwitcher";
const cards = [
  {
    title: "about.mission.title",
    desc: "about.mission.desc",
  },
  {
    title: "about.vision.title",
    desc: "about.vision.desc",
  },
];
const choose = [
  {
    title: "about.choose.team.title",
    desc: "about.choose.team.desc",
  },
  {
    title: "about.choose.technology.title",
    desc: "about.choose.technology.desc",
  },
  {
    title: "about.choose.support.title",
    desc: "about.choose.support.desc",
  },
  {
    title: "about.choose.customer.title",
    desc: "about.choose.customer.desc",
  },
];
const statistics = [
  {
    number: "150+",
    title: "about.statistics.projects",
  },
  {
    number: "50+",
    title: "about.statistics.clients",
  },
  {
    number: "10+",
    title: "about.statistics.experience",
  },
  {
    number: "98%",
    title: "about.statistics.satisfaction",
  },
];
const process = [
  "about.process.analysis",
  "about.process.planning",
  "about.process.development",
  "about.process.support",
];
function SectionTitle({
  label,
  title,
  desc,
}: {
  label: string;
  title: string;
  desc: string;
}) {
  return (
    <div
      className="
text-center
max-w-3xl
mx-auto
mb-14
"
    >
      <div
        className="
inline-block
bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)]
p-[1px]
rounded-full
mb-5
"
      >
        <div
          className="
bg-[#070A12]
rounded-full
px-6
py-2
text-sm
"
        >
          {label}
        </div>
      </div>
      <h2
        className="
text-2xl
sm:text-3xl
md:text-[42px]
font-bold
leading-tight
mb-5
"
      >
        {title}
      </h2>
      <p
        className="
text-gray-400
leading-7
"
      >
        {desc}
      </p>
    </div>
  );
}
export default function AboutPage() {
  const { t } = useTranslation();
  return (
    <main
      className="
bg-[#070A12]
text-white
overflow-x-hidden
"
    >
      <Navbar />
      {/* HERO */}
      <section
        className="
relative
min-h-[420px]
sm:min-h-[460px]
md:h-[520px]
flex
items-center
justify-center
px-4 sm:px-6 md:px-10 lg:px-16
py-20 md:py-0
"
      >
        <Image
          src="/images/Company.jpeg"
          alt="company"
          fill
          className="object-cover"
        />
        <div
          className="
absolute
inset-0
bg-black/70
"
        />
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
          className="
relative
text-center
max-w-4xl
"
        >
          <div
            className="
bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)]
p-[1px]
rounded-full
inline-block
mb-5
"
          >
            <div
              className="
px-6
py-2
rounded-full
bg-[#070A12]
text-sm
"
            >
              {t("about.hero.label")}
            </div>
          </div>
          <h1
            className="
text-3xl
sm:text-4xl
md:text-6xl
font-bold
mb-5
"
          >
            {t("about.hero.title")}
          </h1>
          <p
            className="
text-gray-300
leading-7
"
          >
            {t("about.hero.desc")}
          </p>
        </motion.div>
      </section>
      {/* MISSION & VISION */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            label={t("about.purpose.label")}
            title={t("about.purpose.title")}
            desc={t("about.purpose.desc")}
          />
          <div className="grid md:grid-cols-2 gap-6">
            {cards.map((item, i) => (
              <motion.div
                key={i}
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
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="
group
relative
overflow-hidden
rounded-2xl
border
border-white/10
bg-[#0B1020]
p-8
transition-all
duration-500
hover:-translate-y-2
hover:border-[#A78C35]/50
"
              >
                <div
                  className="
absolute
inset-0
bg-gradient-to-br
from-[#D0AC37]/70
via-[#A78C35]/60
to-[#5A4526]/70
opacity-0
group-hover:opacity-100
transition
duration-500
"
                />
                <div
                  className="
relative
z-10
"
                >
                  <h3
                    className="
text-2xl
font-bold
mb-3
"
                  >
                    {t(item.title)}
                  </h3>
                  <p
                    className="
text-gray-400
group-hover:text-gray-200
transition
"
                  >
                    {t(item.desc)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* WHY CHOOSE US */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            label={t("about.choose.label")}
            title={t("about.choose.title")}
            desc={t("about.choose.desc")}
          />
          <div
            className="
grid
grid-cols-1
sm:grid-cols-2
lg:grid-cols-4
gap-6
"
          >
            {choose.map((item, i) => (
              <motion.div
                key={i}
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
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                }}
                className="
group
relative
overflow-hidden
rounded-2xl
border
border-white/10
bg-[#0B1020]
p-6
transition-all
duration-500
hover:-translate-y-2
hover:border-[#A78C35]/50
"
              >
                <div
                  className="
absolute
inset-0
bg-gradient-to-br
from-[#D0AC37]/80
via-[#A78C35]/70
to-[#5A4526]/80
opacity-0
group-hover:opacity-100
transition
duration-500
"
                />
                <div
                  className="
relative
z-10
"
                >
                  <h3
                    className="
text-xl
font-semibold
mb-3
"
                  >
                    {t(item.title)}
                  </h3>
                  <p
                    className="
text-gray-400
text-sm
group-hover:text-gray-200
"
                  >
                    {t(item.desc)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* STATISTICS */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            label={t("about.statistics.label")}
            title={t("about.statistics.title")}
            desc={t("about.statistics.desc")}
          />
          <div
            className="
grid
grid-cols-2
md:grid-cols-4
gap-6
"
          >
            {statistics.map((item, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: false,
                  amount: 0.3,
                }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                }}
                className="
text-center
rounded-2xl
border
border-white/10
bg-[#0B1020]
py-8
"
              >
                <h3
                  className="
text-3xl
sm:text-4xl
font-bold
text-[#D4AF37]
mb-2
"
                >
                  {item.number}
                </h3>
                <p
                  className="
text-gray-400
"
                >
                  {t(item.title)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* HOW WE WORK */}
      <section className="py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            label={t("about.process.label")}
            title={t("about.process.title")}
            desc={t("about.process.desc")}
          />
          <div
            className="
grid
grid-cols-1
md:grid-cols-4
gap-6
"
          >
            {process.map((item, i) => (
              <motion.div
                key={i}
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
                transition={{
                  duration: 0.4,
                  delay: i * 0.1,
                }}
                className="
rounded-2xl
border
border-white/10
bg-[#0B1020]
p-7
text-center
hover:border-[#A78C35]/50
transition
"
              >
                <div
                  className="
text-[#D4AF37]
text-3xl
font-bold
mb-4
"
                >
                  0{i + 1}
                </div>
                <p className="text-gray-200">{t(item)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA */}
      <section
        className="
py-14
sm:py-16
md:py-20
px-4 sm:px-6 md:px-10 lg:px-16
text-center
"
      >
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
text-3xl
sm:text-4xl
md:text-5xl
font-bold
mb-5
"
          >
            {t("about.cta.title")}
          </h2>
          <p
            className="
text-gray-400
mb-8
max-w-2xl
mx-auto
"
          >
            {t("about.cta.desc")}
          </p>
          <Link
            href="/contact"
            className="
inline-block
px-8
py-3
rounded-full
bg-[#A78C35]
text-black
font-semibold
transition-all
duration-300
hover:-translate-y-1
hover:scale-105
hover:shadow-[0_10px_25px_rgba(212,175,55,0.5)]
"
          >
            {t("about.cta.button")}
          </Link>
        </motion.div>
      </section>
      <LanguageSwitcher />
    </main>
  );
}
