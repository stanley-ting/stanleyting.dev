"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/experience";
import { TimelineItem } from "../ui/TimelineItem";

export function Experience() {
  return (
    <section
      id="experience"
      className="section-snap relative flex items-center justify-center px-6 py-20 noise-overlay"
    >
      <div className="max-w-4xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Experience
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Where I&apos;ve worked and contributed to impactful projects.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={`${experience.company}-${experience.role}`}
                experience={experience}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
