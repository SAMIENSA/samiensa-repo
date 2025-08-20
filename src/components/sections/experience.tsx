"use client"

import { useLanguage } from "@/hooks/use-language";
import { experiences, portfolioData } from "@/lib/data";
import { CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExperienceSection() {
  const { language, direction } = useLanguage();
  const experienceContent = portfolioData[language].experience;
  const experienceList = experiences[language];

  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold font-headline mb-4 relative inline-block">
                {experienceContent.title}
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></div>
            </h2>
        </div>

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-primary/50 to-primary/10"></div>
          {experienceList.map((exp, index) => (
            <div 
              key={index} 
              className={cn(
                "relative mb-12 flex items-start w-full",
                index % 2 === 0 ? "justify-start" : "justify-end",
                direction === "rtl" && (index % 2 !== 0 ? "justify-start" : "justify-end")
              )}
            >
              <div 
                className={cn(
                  "absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-4 h-4 bg-primary rounded-full ring-8 ring-background",
                  "top-1"
                )}
              />

              <div 
                className={cn(
                  "w-[calc(50%-2rem)]",
                  index % 2 === 0 ? (direction === "rtl" ? "mr-auto" : "ml-auto") : (direction === "rtl" ? "ml-auto" : "mr-auto")
                )}
              >
                <div 
                  className={cn(
                    "bg-card/80 backdrop-blur-sm border border-border/20 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-primary/20 hover:border-primary/40",
                    index % 2 === 0 ? (direction === 'rtl' ? "text-right" : "text-left") : (direction === 'rtl' ? "text-left" : "text-right")
                  )}
                >
                  <h3 className="font-headline text-lg font-bold text-primary">{exp.role}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{exp.company} • {exp.period}</p>
                  <ul className="space-y-2">
                    {exp.details.map((detail, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-primary/80 mt-1 shrink-0" />
                        <span className="text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
