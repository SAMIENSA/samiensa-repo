"use client"

import Image from "next/image";
import type { Project } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/use-language";
import { portfolioData } from "@/lib/data";

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
      className="overflow-hidden group cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2"
      onClick={onCardClick}
    >
      <CardContent className="p-0">
        <div className="relative aspect-video">
          <Image
            src={project.thumbnail}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            data-ai-hint={project.aiHint}
          />
        </div>
        <div className="p-4">
          <h3 className="font-headline text-lg font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">{project.year}</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {project.categories.map((cat) => (
              <Badge key={cat} variant="secondary">{cat}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
