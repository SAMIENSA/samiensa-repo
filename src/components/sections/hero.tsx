"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo, useRef } from "react";
import { useLanguage } from "@/hooks/use-language";
import { cvLink, portfolioData, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const { language } = useLanguage();
  const heroContent = portfolioData[language].hero;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  
  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % heroContent.roles.length);
    }, 2000);

    return () => {
      clearInterval(roleInterval);
    };
  }, [heroContent.roles.length]);

  return (
    <section className="relative overflow-hidden bg-transparent pt-10 md:pt-20">
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-10 md:py-20 px-4 md:px-0 text-center">
        
        <div className="relative mb-8 avatar-container">
            <div 
              className="relative w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden shadow-2xl avatar-image-wrapper animated-glow"
            >
              <Image
                  src="https://up6.cc/2025/08/175543874052991.jpg"
                  alt="Khaled Mohamed"
                  width={256}
                  height={256}
                  quality={100}
                  className="object-cover w-full h-full"
                  priority
              />
            </div>
        </div>

        <div className="space-y-6">
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight animated-text-glow">
            {heroContent.name}
          </h1>
          <div className="h-10 text-xl md:text-2xl font-semibold text-primary">
            <span className="font-headline">{heroContent.roles[currentRoleIndex]}</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {heroContent.bio}
          </p>
          <div className="flex justify-center gap-2 mb-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" asChild className="rounded-full border-2 border-primary/20 hover:bg-primary/10">
                <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5 text-primary" />
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={cvLink[language]} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                {heroContent.cta}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
