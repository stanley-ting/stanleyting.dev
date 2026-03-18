import { Github, Linkedin, Mail, FileText } from "lucide-react";

export interface Social {
  name: string;
  url: string;
  icon: typeof Github;
  label: string;
}

export const socials: Social[] = [
  {
    name: "GitHub",
    url: "https://github.com/stanley-ting",
    icon: Github,
    label: "View my code",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/stanleyting",
    icon: Linkedin,
    label: "Connect with me",
  },
  {
    name: "Email",
    url: "mailto:stanleyting.work@gmail.com",
    icon: Mail,
    label: "Get in touch",
  },
  {
    name: "Resume",
    url: "https://docs.google.com/document/d/your-resume-id",
    icon: FileText,
    label: "Download CV",
  },
];
