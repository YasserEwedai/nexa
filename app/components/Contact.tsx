"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";

export default function Contact() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.name) {
      newErrors.name = t("contact.errors.name");
    }

    if (!formData.email) {
      newErrors.email = t("contact.errors.email");
    }

    if (!formData.phone) {
      newErrors.phone = t("contact.errors.phone");
    }

    if (!formData.message) {
      newErrors.message = t("contact.errors.message");
    }

    setErrors(newErrors);

    if (
      newErrors.name ||
      newErrors.email ||
      newErrors.phone ||
      newErrors.message
    ) {
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setStatus(t("contact.messages.success"));

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setErrors({
          name: "",
          email: "",
          phone: "",
          message: "",
        });

        setTimeout(() => {
          setStatus("");
        }, 3000);
      } else {
        setStatus(t("contact.messages.failed"));

        setTimeout(() => {
          setStatus("");
        }, 3000);
      }
    } catch {
      setStatus(t("contact.messages.error"));

      setTimeout(() => {
        setStatus("");
      }, 3000);
    }

    setLoading(false);
  };

  const contactCards = [
    {
      icon: MapPin,
      title: t("contact.cards.address"),
      value: t("contact.cards.addressValue"),
      href: "https://maps.google.com/?q=Tanta,Egypt",
    },
    {
      icon: Phone,
      title: t("contact.cards.call"),
      value: t("contact.cards.phone"),
      href: "tel:01505294544",
    },
    {
      icon: Mail,
      title: t("contact.cards.email"),
      value: t("contact.cards.emailValue"),
      href: "mailto:info@believe-agency.net",
    },
    {
      icon: MessageCircle,
      title: t("contact.cards.whatsapp"),
      value: t("contact.cards.whatsappValue"),
      href: "https://wa.me/201505294544",
    },
  ];

  return (
    <main className="bg-[#070A12] text-white overflow-x-hidden">
      <section className="max-w-6xl mx-auto py-20 px-4 sm:px-6">
        <div className="flex flex-col gap-14">
          <div className="text-center flex flex-col items-center gap-5">
            <div
              className="
              bg-[linear-gradient(to_right,#5A4526,#D4AF37,#2F2F2F)]
              p-[1px]
              rounded-[8px]
              mb-2
              "
            >
              <div
                className="
                px-6
                py-2
                bg-[#070A12]
                rounded-[7px]
                text-sm
                text-white
                "
              >
                {t("contact.label")}
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold leading-tight">
              {t("contact.titleLine1")}

              <br />

              {t("contact.titleLine2")}
            </h2>

            <p className="text-gray-400 max-w-xl">{t("contact.description")}</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {contactCards.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.a
                  key={index}
                  href={item.href}
                  target={
                    item.title === t("contact.cards.address")
                      ? "_blank"
                      : undefined
                  }
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                  className="
                  group
                  relative
                  overflow-hidden
                  rounded-2xl
                  border border-white/10
                  bg-[#0B1020]
                  p-8
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  transition-all
                  duration-500
                  hover:border-[#A78C35]/50
                  hover:-translate-y-1
                  "
                >
                  <div
                    className="
                    absolute
                    inset-0
                    bg-gradient-to-br
                    from-black/90
                    via-black/70
                    to-[#D4AF37]/20
                    opacity-0
                    group-hover:opacity-100
                    transition-all
                    duration-500
                    "
                  />

                  <div className="relative z-10 flex flex-col items-center">
                    <div
                      className="
                      w-16
                      h-16
                      rounded-full
                      bg-[#111B35]
                      flex
                      items-center
                      justify-center
                      mb-5
                      transition
                      group-hover:bg-white/10
                      "
                    >
                      <Icon className="w-7 h-7 text-[#A78C35]" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-gray-400 group-hover:text-gray-200 transition">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              viewport={{ once: true }}
              className="
              group
              relative
              overflow-hidden
              rounded-xl
              p-6
              sm:p-8
              flex
              flex-col
              gap-5
              border
              border-[#A78C35]/40
              bg-[#0B1020]
              "
            >
              <div
                className="
                absolute
                inset-0
                bg-gradient-to-br
                from-black/95
                via-black/80
                to-[#D4AC37]/15
                opacity-0
                group-hover:opacity-100
                transition-all
                duration-500
                "
              />

              <div className="relative z-10 flex flex-col gap-5">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder={t("contact.form.name")}
                  className="
                  w-full
                  p-3
                  rounded-xl
                  bg-[#070A12]
                  border
                  border-white/10
                  focus:border-[#A78C35]
                  outline-none
                  "
                />

                {errors.name && (
                  <p className="text-red-400 text-sm mt-[-10px] ml-1">
                    {errors.name}
                  </p>
                )}

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder={t("contact.form.email")}
                  className="
                  w-full
                  p-3
                  rounded-xl
                  bg-[#070A12]
                  border
                  border-white/10
                  focus:border-[#A78C35]
                  outline-none
                  "
                />

                {errors.email && (
                  <p className="text-red-400 text-sm mt-[-10px] ml-1">
                    {errors.email}
                  </p>
                )}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder={t("contact.form.phone")}
                  className="
                  w-full
                  p-3
                  rounded-xl
                  bg-[#070A12]
                  border
                  border-white/10
                  focus:border-[#A78C35]
                  outline-none
                  "
                />

                {errors.phone && (
                  <p className="text-red-400 text-sm mt-[-10px] ml-1">
                    {errors.phone}
                  </p>
                )}

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder={t("contact.form.message")}
                  rows={8}
                  className="
                  w-full
                  p-3
                  rounded-xl
                  bg-[#070A12]
                  border
                  border-white/10
                  focus:border-[#A78C35]
                  outline-none
                  "
                />

                {errors.message && (
                  <p className="text-red-400 text-sm mt-[-10px] ml-1">
                    {errors.message}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="
                  w-full
                  py-3
                  rounded-full
                  cursor-pointer
                  disabled:cursor-not-allowed
                  bg-gradient-to-r from-[#D0AC37] via-[#A78C35] to-[#5A4526]
                  hover:opacity-90
                  transition
                  "
                >
                  {loading ? t("contact.form.sending") : t("contact.form.send")}
                </button>
              </div>
            </motion.form>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: 0.1,
              }}
              viewport={{ once: true }}
              className="
              relative
              overflow-hidden
              rounded-2xl
              border border-[#A78C35]/40
              bg-[#0B1020]
              min-h-[560px]
              "
            >
              <Image
                src="/images/companycontact.jpg"
                alt="Believe Agency"
                fill
                className="object-cover"
              />

              <div
                className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#070A12]
                via-[#070A12]/40
                to-transparent
                "
              />

              <div
                className="
                absolute
                bottom-8
                left-0
                translate-x-6
                bg-gradient-to-r from-[#D0AC37] via-[#A78C35] to-[#5A4526]
                px-8
                py-5
                rounded-r-2xl
                rounded-l-md
                shadow-2xl
                border
                border-white/10
                backdrop-blur-md
                z-20
                "
              >
                <p
                  className="
                  text-xs
                  uppercase
                  tracking-[4px]
                  text-white/70
                  "
                >
                  {t("contact.agency.label")}
                </p>

                <h3 className="text-3xl font-bold mt-1">
                  {t("contact.agency.name")}
                </h3>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {status && (
        <div
          className="
          fixed
          bottom-6
          right-6
          z-50
          bg-green-500/20
          border
          border-green-500/40
          text-green-400
          px-6
          py-4
          rounded-xl
          shadow-lg
          backdrop-blur-md
          "
        >
          {status}
        </div>
      )}
    </main>
  );
}
