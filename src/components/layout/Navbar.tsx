"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <motion.a
          href="/"
          onClick={handleLogoClick}
          className="font-heading text-xl font-semibold tracking-tight text-foreground hover:text-primary transition-colors cursor-pointer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          style={{ fontFamily: "var(--font-heading)" }}
        >
          ST
        </motion.a>

        <div className="flex items-center gap-6">
          <NavLinks />
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}

function NavLinks() {
  const links = [
    { href: "#hero", label: "About" },
    { href: "#techstack", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <ul className="hidden md:flex items-center gap-6">
      {links.map((link, i) => (
        <motion.li
          key={link.href}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 * i, duration: 0.4 }}
        >
          <a
            href={link.href}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {link.label}
          </a>
        </motion.li>
      ))}
    </ul>
  );
}
