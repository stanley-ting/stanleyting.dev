import { Hero } from "@/components/sections/Hero";
import { TechStack } from "@/components/sections/TechStack";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Socials } from "@/components/sections/Socials";

export default function Home() {
  return (
    <main>
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Socials />
    </main>
  );
}
