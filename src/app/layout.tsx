import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Navbar } from "@/components/layout/Navbar";
import { SideIndicators } from "@/components/layout/SideIndicators";

export const metadata: Metadata = {
  title: "Stanley Ting | Software Engineer",
  description:
    "Personal portfolio of Stanley Ting - Software Engineer passionate about AI, blockchain, and security.",
  openGraph: {
    title: "Stanley Ting | Software Engineer",
    description:
      "Personal portfolio of Stanley Ting - Software Engineer passionate about AI, blockchain, and security.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased" suppressHydrationWarning>
        <ThemeProvider>
          <Navbar />
          <SideIndicators />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
