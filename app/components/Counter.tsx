"use client";

import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export function Counter() {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);

  const { t } = useTranslation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setCount(0);

          let i = 0;

          const interval = setInterval(() => {
            i++;
            setCount(i);

            if (i === 15) {
              clearInterval(interval);
            }
          }, 80);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="bg-[#A78C35] rounded-xl p-6 text-center">
      <h2 className="text-4xl font-bold text-white">{count}+</h2>

      <p className="text-white mt-2">{t("counter.experience")}</p>
    </div>
  );
}
