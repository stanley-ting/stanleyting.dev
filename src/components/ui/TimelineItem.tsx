"use client";

import { motion } from "framer-motion";
import type { Experience } from "@/data/experience";

interface TimelineItemProps {
  experience: Experience;
  index: number;
  isLeft: boolean;
}

export function TimelineItem({ experience, index, isLeft }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`relative pl-8 md:pl-0 ${
        isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:ml-1/2"
      } md:w-1/2 ${isLeft ? "" : "md:ml-auto"}`}
    >
      {/* Timeline dot */}
      <div
        className={`absolute left-0 md:left-auto ${
          isLeft ? "md:right-0 md:translate-x-1/2" : "md:left-0 md:-translate-x-1/2"
        } top-2 w-3 h-3 bg-primary rounded-full border-4 border-background`}
      />

      <div className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 transition-colors">
        <div className={`flex flex-col ${isLeft ? "md:items-end" : "md:items-start"}`}>
          <span className="text-xs text-primary font-medium mb-1">
            {experience.period}
          </span>
          <h3
            className="text-lg font-semibold text-card-foreground mb-1"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {experience.role}
          </h3>
          <p className="text-sm text-muted-foreground mb-3">
            {experience.company} · {experience.location}
          </p>
        </div>

        <ul
          className={`space-y-2 text-sm text-muted-foreground mb-4 ${
            isLeft ? "md:text-right" : "md:text-left"
          }`}
        >
          {experience.description.map((item, i) => (
            <li key={i} className="leading-relaxed">
              {item}
            </li>
          ))}
        </ul>

        <div
          className={`flex flex-wrap gap-2 ${
            isLeft ? "md:justify-end" : "md:justify-start"
          }`}
        >
          {experience.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
