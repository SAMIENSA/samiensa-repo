"use client";

import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import ExperienceSection from '@/components/sections/experience';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';
import { ParticleBackground } from '@/components/background/particle-background';

export default function Home() {
  return (
    <>
      <ParticleBackground />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
