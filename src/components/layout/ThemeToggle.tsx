"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../providers/ThemeProvider";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="p-2 rounded-full bg-secondary w-8 h-8" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative p-2 rounded-full bg-secondary hover:bg-muted transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === "dark" ? 0 : 180 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {theme === "dark" ? (
          <Moon className="w-4 h-4 text-foreground" />
        ) : (
          <Sun className="w-4 h-4 text-foreground" />
        )}
      </motion.div>
    </motion.button>
  );
}
