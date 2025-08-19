"use client"

import Image from "next/image";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Project } from "@/lib/types";
import { useLanguage } from "@/hooks/use-language";
import { portfolioData } from "@/lib/data";

interface ProjectModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  project: Project | null;
}

export function ProjectModal({ isOpen, onOpenChange, project }: ProjectModalProps) {
  const { language } = useLanguage();

  if (!project) return null;

  const { project_titles } = portfolioData[language].projects;
  const title = project_titles[project.titleKey] || project.titleKey;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0 border-0">
        {project.type === 'video' ? (
          <div className="aspect-video">
            <iframe
              src={project.url}
              title={title}
              className="w-full h-full"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="relative w-full h-auto">
            <Image 
              src={project.url} 
              alt={title} 
              width={1280} 
              height={720} 
              className="w-full h-auto object-contain rounded-lg"
              data-ai-hint={project.aiHint}
            />
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
