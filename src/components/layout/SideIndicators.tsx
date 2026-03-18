"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const sections = ["hero", "techstack", "projects", "experience", "contact"];

export function SideIndicators() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveSection(section);
              }
            });
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3"
    >
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section}`}
          className="group flex items-center gap-3"
          aria-label={`Go to ${section}`}
        >
          <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity capitalize">
            {section === "hero" ? "about" : section}
          </span>
          <motion.div
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              activeSection === section
                ? "bg-primary"
                : "bg-muted-foreground/30 group-hover:bg-muted-foreground"
            }`}
            animate={{
              scale: activeSection === section ? 1.3 : 1,
            }}
            transition={{ duration: 0.2 }}
          />
        </a>
      ))}
    </motion.nav>
  );
}
