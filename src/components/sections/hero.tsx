"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useMemo } from "react";
import { useLanguage } from "@/hooks/use-language";
import { cvLink, portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const { language } = useLanguage();
  const heroContent = portfolioData[language].hero;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [textAnimationComplete, setTextAnimationComplete] = useState(false);

  const nameChars = useMemo(() => heroContent.name.split(''), [heroContent.name]);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % heroContent.roles.length);
    }, 2000);

    const animationTimeout = setTimeout(() => {
      setTextAnimationComplete(true);
    }, nameChars.length * 100 + 1000); // Wait for char animation + 1s

    return () => {
      clearInterval(roleInterval);
      clearTimeout(animationTimeout);
    };
  }, [heroContent.roles.length, nameChars.length]);

  return (
    <section className="relative overflow-hidden bg-background pt-10 md:pt-20">
       <div 
        className="absolute inset-0 z-0 opacity-50 dark:opacity-70"
        style={{
          backgroundImage: 'radial-gradient(circle at 25% 30%, hsl(var(--primary) / 0.3), transparent 30%), radial-gradient(circle at 75% 70%, hsl(var(--accent) / 0.3), transparent 30%)',
          animation: 'animated-gradient 15s ease infinite'
        }}
      ></div>
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-10 md:py-20 px-4 md:px-0 text-center">
        
        <div className="relative mb-8 avatar-container">
            <div 
              className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden shadow-2xl avatar-image-wrapper animated-glow"
            >
              <Image
                  src="https://up6.cc/2025/08/175543874052991.jpg"
                  alt="Khaled Mohamed"
                  width={192}
                  height={192}
                  quality={100}
                  className="object-cover w-full h-full"
                  priority
              />
            </div>
        </div>

        <div className="space-y-6">
          <h1 className={cn(
            "text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight char-glow-animation",
            textAnimationComplete && "animated-text-glow"
          )}>
            {nameChars.map((char, index) => (
              <span
                key={index}
                className="inline-block"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <div className="h-10 text-xl md:text-2xl font-semibold text-primary">
            <span className="font-headline">{heroContent.roles[currentRoleIndex]}</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {heroContent.bio}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href={cvLink[language]} target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-5 w-5" />
                {heroContent.cta}
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                <MessageSquare className="mr-2 h-5 w-5" />
                {heroContent.contact_cta}
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
