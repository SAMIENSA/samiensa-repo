"use client"

import { useLanguage } from "@/hooks/use-language";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { portfolioData, skills } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function SkillsSection() {
  const { language } = useLanguage();
  const skillsContent = portfolioData[language].skills;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="skills"
      ref={ref}
      className={cn("py-16 md:py-24 scroll-fade-in", { "is-visible": isVisible })}
    >
      <div className="circuit-board-bg"></div>
      <div className="container text-center">
        <h2 className="text-3xl font-bold font-headline mb-4 relative inline-block">
          {skillsContent.title}
          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-2/3 h-1 bg-primary rounded-full"></div>
        </h2>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-card/80 backdrop-blur-sm text-left p-6 transition-all duration-300 ease-in-out hover:shadow-primary/20 hover:shadow-lg hover:-translate-y-2 transform-gpu group border-primary/20"
            >
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <skill.icon className="h-8 w-8 text-primary mt-1 transition-all duration-300 group-hover:text-accent group-hover:scale-110" />
                  <div>
                    <h3 className="text-lg font-bold font-headline mb-2">{skill.name}</h3>
                    <p className="text-muted-foreground">{skillsContent.descriptions[skill.descriptionKey]}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
