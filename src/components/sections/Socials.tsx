"use client";

import { motion } from "framer-motion";
import { socials } from "@/data/socials";
import { SocialLink } from "../ui/SocialLink";

export function Socials() {
  return (
    <section
      id="contact"
      className="section-snap relative flex items-center justify-center px-6 py-20 noise-overlay"
    >
      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
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
            Let&apos;s Connect
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Always open to new opportunities, collaborations, or just a chat about tech.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {socials.map((social, index) => (
            <motion.div
              key={social.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index, duration: 0.4 }}
            >
              <SocialLink social={social} />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.5 }}
          className="mt-16 text-sm text-muted-foreground"
        >        </motion.p>
      </div>
    </section>
  );
}
