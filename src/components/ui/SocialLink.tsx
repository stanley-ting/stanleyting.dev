"use client";

import { motion } from "framer-motion";
import type { Social } from "@/data/socials";

interface SocialLinkProps {
  social: Social;
}

export function SocialLink({ social }: SocialLinkProps) {
  const Icon = social.icon;

  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-3 px-5 py-3 bg-card border border-border rounded-xl hover:border-primary/30 transition-all duration-200"
      whileHover={{ scale: 1.02, y: -2 }}
      whileTap={{ scale: 0.98 }}
    >
      <span className="p-2 bg-secondary rounded-lg group-hover:bg-primary/10 transition-colors">
        <Icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
      </span>
      <span className="text-left">
        <span className="block font-medium text-card-foreground text-sm">{social.name}</span>
        <span className="block text-xs text-muted-foreground">{social.label}</span>
      </span>
    </motion.a>
  );
}
