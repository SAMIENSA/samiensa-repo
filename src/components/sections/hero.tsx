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
  const [transform, setTransform] = useState("translateZ(0)");
  const [isAnimating, setIsAnimating] = useState(true);
  const imageWrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % heroContent.roles.length);
    }, 2000);

    return () => {
      clearInterval(roleInterval);
    };
  }, [heroContent.roles.length]);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleMouseMove = (event: MouseEvent) => {
      if (imageWrapperRef.current) {
        setIsAnimating(false);
        clearTimeout(timeoutId);

        const { clientX, clientY } = event;
        const { innerWidth, innerHeight } = window;
        const rotateY = (clientX / innerWidth - 0.5) * 30; // Max rotation 15deg
        const rotateX = -(clientY / innerHeight - 0.5) * 30; // Max rotation 15deg
        
        setTransform(`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.1)`);
        
        timeoutId = setTimeout(() => {
          setIsAnimating(true);
          setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
        }, 100);
      }
    };
    
    const handleMouseLeave = () => {
        setIsAnimating(true);
        setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)');
    }

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className="relative overflow-hidden bg-transparent pt-10 md:pt-20">
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-10 md:py-20 px-4 md:px-0 text-center">
        
        <div className="relative mb-8 avatar-container">
            <div 
              ref={imageWrapperRef}
              className={cn(
                "relative w-44 h-44 md:w-56 md:h-56 lg:w-64 lg:h-64 mx-auto rounded-full overflow-hidden shadow-2xl avatar-image-wrapper animated-glow",
                 isAnimating && "animated-float"
              )}
              style={{ transform: isAnimating ? undefined : transform }}
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
           <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight">
            {heroContent.name}
          </h1>
          <div className="h-10 text-xl md:text-2xl font-semibold text-muted-foreground">
            <span className="font-headline">{heroContent.roles[currentRoleIndex]}</span>
          </div>
          <p className="text-lg max-w-2xl mx-auto">
            {heroContent.bio}
          </p>
          <div className="flex justify-center gap-2 mb-4">
            {socialLinks.map((link) => (
              <Button key={link.name} variant="outline" size="icon" asChild className="rounded-full border-2 border-border hover:bg-primary/10">
                <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="btn-gradient">
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

    