"use client"

import { useLanguage } from "@/hooks/use-language";
import { experiences, portfolioData } from "@/lib/data";
import { Briefcase } from "lucide-react";

export default function ExperienceSection() {
  const { language } = useLanguage();
  const experienceContent = portfolioData[language].experience;
  const experienceList = experiences[language];

  return (
    <section id="experience">
      <div className="container">
        <h2 className="text-3xl font-bold font-headline text-center mb-12">{experienceContent.title}</h2>
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
          {experienceList.map((exp, index) => (
            <div key={index} className="relative mb-8 flex items-center justify-between w-full">
              {index % 2 === 0 ? (
                <>
                  <div className="w-5/12">
                    <div className="p-4 bg-card border rounded-lg shadow-sm text-right">
                      <h3 className="font-semibold font-headline">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="w-5/12"></div>
                </>
              ) : (
                <>
                  <div className="w-5/12"></div>
                  <div className="absolute left-1/2 -translate-x-1/2 z-10 flex items-center justify-center w-10 h-10 bg-primary rounded-full">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div className="w-5/12">
                    <div className="p-4 bg-card border rounded-lg shadow-sm text-left">
                      <h3 className="font-semibold font-headline">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground">{exp.period}</p>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
