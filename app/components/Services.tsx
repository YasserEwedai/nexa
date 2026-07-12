"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTranslation } from "react-i18next";
const images = [
  "/images/services/services1.jpeg",
  "/images/services/services1.jpeg",
  "/images/services/services1.jpeg",
  "/images/services/services1.jpeg",
  "/images/services/services1.jpeg",
  "/images/services/services1.jpeg",
  "/images/services/services1.jpeg",
  "/images/services/services1.jpeg",
  "/images/services/services1.jpeg",
  "/images/services/services1.jpeg",
  "/images/services/services1.jpeg",
  "/images/services/services1.jpeg",
  "/images/services/services1.jpeg",
];
export default function Services({
  showButton = true,
  showAll = false,
}: {
  showButton?: boolean;
  showAll?: boolean;
}) {
  const { t } = useTranslation();
  const services = t("services.items", {
    returnObjects: true,
  }) as {
    title: string;
    desc: string;
  }[];
  const displayedServices = showAll ? services : services.slice(0, 3);
  return (
    <section className="py-20 px-4 sm:px-6 text-white">
      <div className="max-w-[1400px] mx-auto flex flex-col gap-14">
        <div className="text-start sm:text-center flex flex-col items-start sm:items-center gap-5">
          <div className="bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)] p-[1px] rounded-full w-fit">
            <div className="px-6 py-2 bg-[#070A12] rounded-full text-sm text-white/90">
              {t("services.label")}
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
            {t("services.titleLine1")}
            <br />
            {t("services.titleLine2")}
          </h2>
          <p className="text-gray-400 max-w-xl">{t("services.description")}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
          {displayedServices.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
              className="
group relative overflow-hidden rounded-xl
p-4 sm:p-5
flex flex-col justify-between
border border-[#D4AF37]/40
bg-[#0B1020]
hover:border-transparent
transition-all duration-500
min-h-[260px] sm:min-h-[280px] lg:min-h-[300px]
"
            >
              <div
                className="
absolute inset-0 bg-cover bg-center
opacity-0 group-hover:opacity-100
scale-100 group-hover:scale-110
transition-all duration-700
"
                style={{
                  backgroundImage: `url(${images[i]})`,
                }}
              />
              <div
                className="
absolute inset-0
bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)]
opacity-0 group-hover:opacity-80
transition duration-500
"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition duration-500" />
              <div className="relative z-10 flex flex-col gap-2">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base">
                  {item.desc}
                </p>
              </div>
              <div className="relative z-10 border-t border-[#D4AF37]/40 my-2" />
              <div className="relative z-10 flex items-center gap-2 cursor-pointer group/link text-sm hover:text-[#D4AF37] transition-colors">
                {t("services.learnMore")}
                <span className="transition-transform group-hover/link:translate-x-1">
                  →
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        {showButton && (
          <div className="flex justify-center pt-6">
            <Link
              href="/services"
              className="
inline-block
px-8
py-3
rounded-full
bg-[#A78C35]
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
              {t("services.allServices")}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
