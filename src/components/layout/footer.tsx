"use client"

import Link from "next/link";
import { useLanguage } from "@/hooks/use-language";
import { portfolioData, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";

export function Footer() {
  const { language } = useLanguage();
  const footerText = portfolioData[language].footer;

  return (
    <footer className="w-full border-t bg-background">
      <div className="container py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground text-center md:text-left">
          {footerText.copyright}
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((link) => (
            <Button key={link.name} variant="ghost" size="icon" asChild>
              <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
