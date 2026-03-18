"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github, Lightbulb, Target, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { projects } from "@/data/projects";
import { ImageCarousel } from "@/components/ui/ImageCarousel";

export default function ProjectPage() {
  const params = useParams();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link href="/#projects" className="text-primary hover:underline">
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-16 px-6 noise-overlay">
      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to projects
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {project.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-lg text-muted-foreground mb-6"
          >
            {project.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-6"
          >
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm bg-secondary text-secondary-foreground rounded-md"
              >
                {tag}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="flex gap-4 mb-12"
          >
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-muted transition-colors"
              >
                <Github className="w-4 h-4" />
                View Source
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
          </motion.div>

          {/* Project Gallery or Single Image */}
          {(project.gallery && project.gallery.length > 0) ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="mb-8"
            >
              <ImageCarousel images={project.gallery} title={project.title} />
            </motion.div>
          ) : project.image ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.5 }}
              className="relative w-full aspect-video rounded-xl overflow-hidden mb-8 border border-border"
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                priority
              />
            </motion.div>
          ) : null}

          <div className="space-y-6">
            {/* Problem / Motivation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Target className="w-5 h-5 text-primary" />
                </div>
                <h2
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Problem / Motivation
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.problem}
              </p>
            </motion.div>

            {/* What We Built */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Wrench className="w-5 h-5 text-primary" />
                </div>
                <h2
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Solution
                </h2>
              </div>
              <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {project.solution}
              </div>
            </motion.div>

            {/* What We Learned */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Lightbulb className="w-5 h-5 text-primary" />
                </div>
                <h2
                  className="text-xl font-semibold"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  What I Learned
                </h2>
              </div>
              <ul className="space-y-3">
                {project.learnings.map((learning, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-muted-foreground"
                  >
                    <span className="text-primary mt-1.5 text-xs">&#9679;</span>
                    <span className="leading-relaxed">{learning}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
