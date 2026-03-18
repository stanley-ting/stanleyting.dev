export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
  tags: string[];
}

export const experiences: Experience[] = [
  {
    company: "GovTech Singapore",
    role: "Software Engineer Intern",
    period: "Jan 2026 - May 2026",
    location: "Singapore",
    description: [
      "Developed automated disamenity detection pipeline processing large volumes of videos concurrently",
      "Fullstack development of agency prompt library"
    ],
    tags: ["FastAPI", "PostgreSQL",  "Docker", "AWS/GCP", "Multi-Modal AI"],
  },
  {
    company: "NUS Fintech Society",
    role: "AI/ML Engineer",
    period: "Jan 2025 - Dec 2025",
    location: "Singapore",
    description: [
      "Stock Analysis with RAG pipeline for enhanced retrieval accuracy"
    ],
    tags: ["Natural Language Processing", "RAG"],
  },
  {
    company: "ShopBack",
    role: "Business Analyst Intern",
    period: "Dec 2023 - Feb 2023",
    location: "Singapore",
    description: [
      "Data Analytics to identify churning merchants and competitor analysis"
    ],
    tags: ["SQL", "Salesforce", "Metabase", "Selanium"],
  },
];
