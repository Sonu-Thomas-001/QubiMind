"use client";

import { motion } from "motion/react";

const STATS = [
  { value: "10k+", label: "Projects Deployed" },
  { value: "50k+", label: "AI Agents Active" },
  { value: "2M+", label: "Documents Processed" },
  { value: "100k+", label: "Users Worldwide" },
];

export function Statistics() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-primary-foreground/80 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
