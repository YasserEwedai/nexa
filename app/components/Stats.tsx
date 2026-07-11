"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const values = [120, 80, 5, 24];

export default function Stats() {
  const { t } = useTranslation();

  const statsData = [
    {
      value: values[0],
      label: t("stats.projects"),
    },
    {
      value: values[1],
      label: t("stats.clients"),
    },
    {
      value: values[2],
      label: t("stats.experience"),
    },
    {
      value: values[3],
      label: t("stats.support"),
    },
  ];

  const [counts, setCounts] = useState(statsData.map(() => 0));

  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: false,
    amount: 0.3,
  });

  useEffect(() => {
    if (!isInView) return;

    setCounts(statsData.map(() => 0));

    let start = 0;

    const duration = 1200;
    const interval = 20;
    const steps = duration / interval;

    const timer = setInterval(() => {
      start++;

      setCounts(
        statsData.map((item) =>
          Math.min(item.value, Math.floor((item.value / steps) * start)),
        ),
      );

      if (start >= steps) {
        clearInterval(timer);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="
      my-10
      relative
      overflow-hidden
      flex
      items-center
      justify-center
      px-6
      rounded-[50px]
      bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)]
      h-[170px]
      w-full
      max-w-6xl
      mx-auto
      "
    >
      <div className="absolute inset-0 bg-black/30" />

      <div
        className="
      relative
      z-10
      w-full
      grid
      grid-cols-2
      md:grid-cols-4
      gap-6
      text-center
      "
      >
        {statsData.map((item, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20,
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
            flex
            flex-col
            items-center
            justify-center
            "
          >
            <h3
              className="
            text-2xl
            md:text-3xl
            font-bold
            text-white
            "
            >
              {counts[index]}+
            </h3>

            <p
              className="
            text-white/90
            text-xs
            md:text-sm
            "
            >
              {item.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
