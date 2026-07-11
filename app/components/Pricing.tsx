"use client";

import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Starter",
    badge: "Basic",
    price: "$120",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit. Curabitur cursus porttitor mattis. Cras id consequat eros.",
    features: [
      "Basic Security Monitoring",
      "Website & Server Protection",
      "Basic Firewall Protection",
      "Email Support (Business Hours)",
    ],
  },
  {
    name: "Professional",
    badge: "Most Popular",
    price: "$120",
    featured: true,
    description:
      "Lorem ipsum dolor sit amet, consectetur elit. Curabitur cursus porttitor mattis. Cras id consequat eros.",
    features: [
      "Advanced Security Monitoring (24/7)",
      "Web Application Firewall (WAF)",
      "Cloud Infrastructure Protection",
      "Monthly Security & Performance Report",
    ],
  },
  {
    name: "Corporate",
    badge: "Basic",
    price: "$150",
    description:
      "Lorem ipsum dolor sit amet, consectetur elit. Curabitur cursus porttitor mattis. Cras id consequat eros.",
    features: [
      "Full 24/7 Security Operations Center (SOC)",
      "Real-Time Threat Intelligence",
      "Custom Security Architecture",
      "Custom Integration & API Access",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="bg-[#070A12] py-24 px-6">
      {/* Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center justify-center px-5 py-2 rounded-full border border-white/30 text-sm mb-6">
          Pricing Plan
        </div>

        <h2 className="text-5xl font-semibold leading-tight">
          Advanced Digital Security
          <br />
          Solutions For Sustainable Growth
        </h2>

        <p className="text-white/70 text-sm mt-5 max-w-xl mx-auto leading-6">
          We begin by conducting a comprehensive needs assessment to understand
          your specific requirements, challenges, and goals.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-[1450px] mx-auto grid md:grid-cols-3 gap-5 mt-16">
        {plans.map((plan, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -15,
              transition: { duration: 0.3 },
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className={`
              rounded-xl
              px-6
              py-5
              border
              cursor-pointer
              transition-all
              duration-300
              ${
                plan.featured
                  ? "bg-[#111111] border-fuchsia-600 shadow-[0_0_30px_rgba(168,85,247,.15)] hover:border-blue-500"
                  : "bg-[#151515] border-white/10 hover:border-blue-500"
              }
              hover:-translate-y-3
              hover:shadow-[0_15px_40px_rgba(59,130,246,.25)]
            `}
          >
            {/* Top */}
            <div className="flex justify-between items-center">
              <h3 className="text-[28px] font-medium">{plan.name}</h3>

              <span className="border border-fuchsia-600 rounded-md px-3 py-1 text-[11px]">
                {plan.badge}
              </span>
            </div>

            {/* Price */}
            <div className="mt-6 flex items-end">
              <span className="text-5xl font-light">{plan.price}</span>

              <span className="text-fuchsia-600 text-xs mb-1 ml-1">/month</span>
            </div>

            <div className="h-[1px] w-full bg-fuchsia-600 mt-4 mb-4" />

            {/* Description */}
            <p className="text-white/70 text-sm leading-5">
              {plan.description}
            </p>

            {/* Features */}
            <div className="space-y-3 mt-5">
              {plan.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-4 h-4 rounded-full bg-fuchsia-600 flex items-center justify-center flex-shrink-0">
                    <FaCheck size={7} />
                  </div>

                  <span className="text-[13px] text-white/90 leading-5">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Button */}
            <button
              className="
              mt-6
              inline-block
              rounded-full
              bg-[#A78C35]
              px-8
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
              View All
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}