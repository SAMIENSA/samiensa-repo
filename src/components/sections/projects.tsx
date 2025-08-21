"use client"

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/hooks/use-language';
import { portfolioData, projects as allProjects, projectCategories, folderLinks } from '@/lib/data';
import type { Project } from '@/lib/types';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ProjectCard } from '../project-card';
import { ProjectModal } from '../project-modal';

type ProjectType = 'video' | 'photo';

export default function ProjectsSection() {
  const { language } = useLanguage();
  const projectsContent = portfolioData[language].projects;
  const categories = projectCategories[language];

  const [activeTab, setActiveTab] = useState<ProjectType>('video');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCategoryClick = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
  };

  const filteredProjects = useMemo(() => {
    const projectsInTab = allProjects.filter(p => p.type === activeTab);
    if (selectedCategory === 'all') {
      return projectsInTab;
    }
    return projectsInTab.filter(project => 
      project.categories.includes(selectedCategory)
    );
  }, [activeTab, selectedCategory]);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const availableCategories = useMemo(() => {
    const projectTypes = allProjects.filter(p => p.type === activeTab).flatMap(p => p.categories);
    const uniqueCategories = ['all', ...Array.from(new Set(projectTypes))];
    return categories.filter(c => uniqueCategories.includes(c.key));
  }, [activeTab, categories]);

  return (
    <section id="projects" className="bg-background/50 backdrop-blur-sm">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold font-headline mb-4">{projectsContent.title}</h2>
          <div className="flex justify-center gap-4">
            <Button asChild>
              <Link href={folderLinks.video} target='_blank' rel='noopener noreferrer'>{projectsContent.video_folder}</Link>
            </Button>
            <Button asChild>
              <Link href={folderLinks.photo} target='_blank' rel='noopener noreferrer'>{projectsContent.photo_folder}</Link>
            </Button>
          </div>
        </div>

        <Tabs
          defaultValue="video"
          className="w-full"
          onValueChange={(value) => {
            setActiveTab(value as ProjectType);
            setSelectedCategory('all');
          }}
        >
          <TabsList className="grid w-full grid-cols-2 md:w-1/2 mx-auto">
            <TabsTrigger value="video">{projectsContent.tabs.videos}</TabsTrigger>
            <TabsTrigger value="photo">{projectsContent.tabs.photos}</TabsTrigger>
          </TabsList>
          
          <div className="my-8 flex flex-wrap justify-center gap-2">
            {availableCategories.map(category => (
              <Button
                key={category.key}
                variant={selectedCategory === category.key ? 'default' : 'outline'}
                onClick={() => handleCategoryClick(category.key)}
              >
                {category.name}
              </Button>
            ))}
          </div>
          
          <TabsContent value="video">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onCardClick={() => handleCardClick(project)} />
              ))}
            </div>
          </TabsContent>
          <TabsContent value="photo">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} onCardClick={() => handleCardClick(project)} />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <ProjectModal 
          isOpen={modalOpen} 
          onOpenChange={setModalOpen} 
          project={selectedProject} 
        />
      </div>
    </section>
  );
}
