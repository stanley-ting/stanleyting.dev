"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/projects/${project.slug}`);
  };

  return (
    <motion.article
      className="group relative bg-card border border-border rounded-xl overflow-hidden h-full flex flex-col cursor-pointer"
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      onClick={handleCardClick}
    >
      {/* Project Image */}
      {project.image && (
        <div className="relative w-full aspect-video overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Hover gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

        <div className="relative z-10 flex flex-col flex-1">
          <div className="flex items-start justify-between mb-4">
            <h3
              className="text-xl font-semibold text-card-foreground group-hover:text-primary transition-colors"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              {project.title}
            </h3>
            <span className="text-muted-foreground group-hover:text-primary transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </span>
          </div>

          <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4 mt-auto">
            {project.tags.slice(0, 4).map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          {project.github && (
            <div className="flex items-center gap-4 pt-4 border-t border-border">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-3.5 h-3.5" />
                Source
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Bottom accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
    </motion.article>
  );
}
