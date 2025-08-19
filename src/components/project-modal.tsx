"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog";
import type { Project } from "@/lib/types";

interface ProjectModalProps {
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
  project: Project | null;
}

export function ProjectModal({ isOpen, onOpenChange, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl w-full p-0 border-0">
        <div className="aspect-video">
          <iframe
            src={project.url}
            title={project.titleKey}
            className="w-full h-full"
            allow="autoplay; fullscreen"
            allowFullScreen
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
