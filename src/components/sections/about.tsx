"use client"

import { useLanguage } from "@/hooks/use-language";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { portfolioData } from "@/lib/data";
import { GraduationCap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  const { language } = useLanguage();
  const aboutContent = portfolioData[language].about;
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section 
      id="about" 
      ref={ref}
      className={cn("overflow-hidden scroll-fade-in", { "is-visible": isVisible })}
    >
       <div className="section-bg" />
       <div className="container text-center">
        <h2 className="text-3xl font-bold font-headline mb-4">{aboutContent.title}</h2>
        <p className="max-w-3xl mx-auto text-lg text-muted-foreground mb-12">
          {aboutContent.bio}
        </p>
        <div className="inline-flex items-center gap-3 rounded-lg bg-card p-4 border shadow-sm transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
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
