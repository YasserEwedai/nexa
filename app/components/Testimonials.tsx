"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Mohamed Ali",
    text: "The team delivered a fast and clean web app. Performance is excellent.",
  },
  {
    name: "Sara Ahmed",
    text: "Great UI design and smooth development process from start to finish.",
  },
  {
    name: "Omar Khaled",
    text: "They built our SaaS platform with strong architecture and stability.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-10 px-6 bg-[#070A12]">

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2 className="text-4xl font-bold">What Clients Say</h2>
        <p className="text-gray-400 mt-4">
          Real feedback from real projects
        </p>
      </div>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">

        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-[#0B1020] border border-white/10 rounded-2xl p-6 hover:scale-[1.03] transition"
          >
            <p className="text-gray-300 text-sm mb-6">
              "{item.text}"
            </p>

            <h4 className="text-purple-400 font-semibold">
              {item.name}
            </h4>
          </motion.div>
        ))}

      </div>
    </section>
  );
}