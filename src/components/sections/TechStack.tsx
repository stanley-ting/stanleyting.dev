"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { useEffect, useState } from "react";

export function TechStack() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="techstack"
      className="section-snap relative flex items-center justify-center px-6 py-20 noise-overlay"
    >
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Tech Stack
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Technologies I work with to bring ideas to life.
          </p>
        </motion.div>

        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-4">
                {category.name}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: catIndex * 0.05 + skillIndex * 0.03,
                        duration: 0.3,
                      }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="group flex items-center gap-2.5 px-4 py-2.5 bg-card border border-border rounded-lg hover:border-primary/40 hover:bg-card/80 transition-all cursor-default"
                    >
                      {mounted && (
                        <Icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                      {!mounted && (
                        <div className="w-5 h-5 bg-muted rounded" />
                      )}
                      <span className="text-sm font-medium text-card-foreground">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
