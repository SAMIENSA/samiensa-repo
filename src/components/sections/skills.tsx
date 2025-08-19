"use client"

import { useLanguage } from "@/hooks/use-language";
import { portfolioData, skills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export default function SkillsSection() {
  const { language } = useLanguage();
  const skillsContent = portfolioData[language].skills;

  return (
    <section id="skills">
      <div className="container text-center">
        <h2 className="text-3xl font-bold font-headline mb-8">{skillsContent.title}</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <Badge key={index} className="text-base md:text-lg px-6 py-3 border-2 border-primary/50 bg-primary/10 hover:bg-primary/20 transition-colors text-foreground">
              <skill.icon className="mr-3 h-5 w-5" />
              {skill.name}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
}
