"use client";

import { motion } from "framer-motion";
import { User, CalendarDays } from "lucide-react";
import { useTranslation } from "react-i18next";

const images = [
  "/images/Fintech.jpeg",
  "/images/Tech.jpeg",
  "/images/Company.jpeg",
];

export default function Blog() {
  const { t } = useTranslation();

  const posts = t("blog.posts", {
    returnObjects: true,
  }) as {
    category: string;
    author: string;
    date: string;
    title: string;
    desc: string;
  }[];

  return (
    <section className="py-10 px-6 bg-[#070A12]" id="Blog">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-10 mb-14">
          <div className="max-w-2xl">
            <div
              className="
            inline-block
            bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)]
            p-[1px]
            rounded-full
            mb-6
            "
            >
              <div
                className="
              bg-[#070A12]
              rounded-full
              px-6
              py-2
              text-sm
              text-white
              "
              >
                {t("blog.label")}
              </div>
            </div>

            <h2
              className="
            text-4xl
            md:text-[42px]
            font-semibold
            leading-tight
            mb-5
            "
            >
              {t("blog.title")}
            </h2>

            <p className="text-gray-400">{t("blog.description")}</p>
          </div>

          <button
            className="
            px-9
            py-3.5
            text-sm
            rounded-full
            bg-[#A78C35]
            text-white
            transition-all
            duration-300
            transform
            hover:-translate-y-1
            hover:scale-105
            hover:shadow-[0_10px_25px_rgba(212,175,55,0.5)]
            active:translate-y-0
            active:scale-95
            "
          >
            {t("blog.button")}
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
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
                duration: 0.45,
                delay: index * 0.15,
              }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src={images[index]}
                  alt={post.title}
                  className="
                  w-full
                  h-[240px]
                  object-cover
                  transition
                  duration-500
                  group-hover:scale-105
                  "
                />

                <div
                  className="
                absolute
                left-4
                bottom-4
                bg-[#A78C35]
                rounded-xl
                px-5
                py-2
                text-white
                text-sm
                "
                >
                  {post.category}
                </div>
              </div>

              <div
                className="
              mt-5
              flex
              items-center
              gap-6
              text-[13px]
              text-gray-400
              "
              >
                <div className="flex items-center gap-2">
                  <User size={15} className="text-[#A78C35]" />

                  <span>{post.author}</span>
                </div>

                <div className="flex items-center gap-2">
                  <CalendarDays size={15} className="text-[#A78C35]" />

                  <span>{post.date}</span>
                </div>
              </div>

              <h3
                className="
              mt-5
              mb-4
              text-[22px]
              leading-tight
              font-medium
              group-hover:text-[#A78C35]
              transition-colors
              "
              >
                {post.title}
              </h3>

              <p
                className="
              text-[14px]
              leading-7
              text-gray-400
              "
              >
                {post.desc}
              </p>

              <button
                className="
                mt-7
                flex
                items-center
                gap-2
                text-[16px]
                font-semibold
                text-white
                hover:text-[#A78C35]
                transition-colors
                "
              >
                {t("blog.readMore")}
                <span className="text-xl">↗</span>
              </button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
