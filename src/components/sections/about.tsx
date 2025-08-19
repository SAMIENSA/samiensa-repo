"use client"

import { useLanguage } from "@/hooks/use-language";
import { portfolioData } from "@/lib/data";
import { GraduationCap } from "lucide-react";

export default function AboutSection() {
  const { language, direction } = useLanguage();
  const aboutContent = portfolioData[language].about;
  
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-full w-full bg-gradient-to-br from-primary/5 via-background to-background -z-10"></div>
       <div className="container text-center">
        <h2 className="text-3xl font-bold font-headline mb-4">{aboutContent.title}</h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12">
          {aboutContent.bio}
        </p>
        <div className="inline-flex items-center gap-3 rounded-lg bg-card p-4 border shadow-sm">
            <GraduationCap className="h-8 w-8 text-primary"/>
            <div className="text-left">
                <p className="font-semibold font-headline">{aboutContent.educationTitle}</p>
                <p className="text-muted-foreground">{aboutContent.education}</p>
            </div>
        </div>
      </div>
    </section>
  );
}
