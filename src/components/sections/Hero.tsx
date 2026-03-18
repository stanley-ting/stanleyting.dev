"use client";

import { motion } from "framer-motion";
import { ArrowDown, FileText } from "lucide-react";
import Image from "next/image";

export function Hero() {
  return (
    <section
      id="hero"
      className="section-snap relative flex items-center justify-center px-6 noise-overlay"
    >
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6"
            >
              <span className="inline-block px-4 py-1.5 text-xs font-medium tracking-wider uppercase bg-primary/10 text-primary rounded-full border border-primary/20">
                Software Engineer
              </span>
            </motion.div>

            <h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="block text-foreground"
              >
                Stanley Ting
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed space-y-4"
              style={{ fontFamily: "var(--font-body)" }}
            >
              <p>
                Information Systems student specialising in{" "}
                <span className="text-primary font-medium">Artificial Intelligence</span> at the{" "}
                <span className="text-foreground font-medium">National University of Singapore</span>.
              </p>
              <p>
                My areas of focus include{" "}
                <span className="text-foreground font-medium">problem-solving</span>,{" "}
                <span className="text-foreground font-medium">AI applications</span>, and{" "}
                <span className="text-foreground font-medium">cloud infrastructure</span>.
              </p>
              <p>
                With a detail-oriented approach, I enjoy creating simple but effective solutions
                to improve application performance, ease of maintenance, and user experience.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4"
            >
              <motion.a
                href="https://docs.google.com/document/d/your-resume-id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <FileText className="w-4 h-4" />
                View Resume
              </motion.a>
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-muted transition-colors"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                See my work
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right side - Profile Picture */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80">
              {/* Back square - offset */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute top-4 left-4 sm:top-5 sm:left-5 lg:top-6 lg:left-6 w-full h-full rounded-xl bg-primary/20 border-2 border-primary/30"
              />
              {/* Front square - image */}
              <div className="relative w-full h-full rounded-xl overflow-hidden border-2 border-border shadow-2xl">
                <Image
                  src="/images/me/me.jpeg"
                  alt="Stanley Ting"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#techstack"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowDown className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
