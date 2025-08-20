"use client"

import Image from "next/image";
import type { Project } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/hooks/use-language";
import { portfolioData } from "@/lib/data";
import { Eye } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  onCardClick: () => void;
}

export function ProjectCard({ project, onCardClick }: ProjectCardProps) {
  const { language } = useLanguage();
  const { project_titles } = portfolioData[language].projects;
  const title = project_titles[project.titleKey] || project.titleKey;

  return (
    <Card 
      className="overflow-hidden group cursor-pointer transition-all duration-300 relative aspect-video"
      onClick={onCardClick}
    >
      <Image
        src={project.thumbnail}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        data-ai-hint={project.aiHint}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      <div className="absolute inset-0 flex flex-col justify-end p-4 transition-all duration-300">
        <div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out delay-100">
          <h3 className="font-headline text-lg font-bold text-white">{title}</h3>
          <p className="text-sm text-primary-foreground/80">{project.year}</p>
        </div>
        <div className="absolute top-4 right-4 bg-primary/80 text-primary-foreground p-2 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out delay-200">
          <Eye className="h-5 w-5" />
        </div>
      </div>
    </Card>
  );
}
