"use client";

import { useEffect, useRef } from 'react';
import AboutSection from '@/components/sections/about';
import ContactSection from '@/components/sections/contact';
import ExperienceSection from '@/components/sections/experience';
import HeroSection from '@/components/sections/hero';
import ProjectsSection from '@/components/sections/projects';
import SkillsSection from '@/components/sections/skills';

export default function Home() {
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      if (backgroundRef.current) {
        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const xPercent = (clientX / innerWidth) * 100;
        const yPercent = (clientY / innerHeight) * 100;
        
        backgroundRef.current.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, hsl(var(--primary) / 0.15), transparent 40%), radial-gradient(circle at ${100 - xPercent}% ${100 - yPercent}%, hsl(var(--accent) / 0.15), transparent 40%)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div 
        ref={backgroundRef}
        className="fixed inset-0 z-[-1] opacity-70 dark:opacity-100 transition-all duration-300"
        style={{
          background: 'radial-gradient(circle at 50% 50%, hsl(var(--primary) / 0.15), transparent 40%), radial-gradient(circle at 50% 50%, hsl(var(--accent) / 0.15), transparent 40%)',
        }}
      ></div>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
}
