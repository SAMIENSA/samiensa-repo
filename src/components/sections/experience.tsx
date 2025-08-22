"use client"

import { useLanguage } from "@/hooks/use-language";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { experiences, portfolioData } from "@/lib/data";
import { Briefcase, CheckCircle } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ExperienceSection() {
  const { language } = useLanguage();
  const experienceContent = portfolioData[language].experience;
  const experienceList = experiences[language];
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="experience"
      ref={ref}
      className={cn("bg-background/50 backdrop-blur-sm scroll-fade-in", { "is-visible": isVisible })}
    >
      <div className="container">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-headline mb-4 relative inline-block">
                {experienceContent.title}
                <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></div>
            </h2>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <div 
            className="absolute left-1/2 top-0 h-full w-0.5 bg-border -translate-x-1/2"
          ></div>

          {experienceList.map((exp, index) => (
            <div 
              key={index} 
              className={cn(
                "relative mb-12 flex items-center w-full",
                index % 2 === 0 ? "justify-start" : "justify-end"
              )}
            >
              <div 
                className={cn(
                  "w-1/2",
                  index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"
                )}
              >
                <div 
                  className={cn(
                    "absolute z-10 flex items-center justify-center w-12 h-12 bg-primary rounded-full ring-8 ring-background transition-all duration-300 group-hover:ring-primary/20",
                    "left-1/2 -translate-x-1/2"
                  )}
                >
                    <Briefcase className="h-6 w-6 text-primary-foreground"/>
                </div>

                <div 
                  className={cn(
                    "bg-card border border-border/50 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/40 hover:-translate-y-2"
                  )}
                >
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-2">
                      <h3 className="font-headline text-xl font-bold text-primary">{exp.role}</h3>
                      <p className="text-sm font-semibold text-muted-foreground bg-primary/10 px-3 py-1 rounded-full mt-2 sm:mt-0">{exp.period}</p>
                  </div>
                    <p className="text-md text-muted-foreground mb-4 font-semibold">{exp.company}</p>
                    <ul className="space-y-2">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                          <span className="text-sm md:text-base text-foreground/80">{detail}</span>
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
