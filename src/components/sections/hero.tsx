"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { cvLink, portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const { language } = useLanguage();
  const heroContent = portfolioData[language].hero;
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % heroContent.roles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [heroContent.roles.length]);

  return (
    <section className="relative overflow-hidden bg-background pt-10 md:pt-20">
      <div className="absolute inset-0 z-0 opacity-20 dark:opacity-30">
        <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary rounded-full filter blur-3xl animate-blob"></div>
        <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent rounded-full filter blur-3xl animate-blob animation-delay-2000"></div>
      </div>
      <div className="container relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)] py-10 md:py-20">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight">
            {heroContent.name}
          </h1>
          <div className="h-10 text-xl md:text-2xl font-semibold text-primary">
            <span className="font-headline">{heroContent.roles[currentRoleIndex]}</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto md:mx-0">
            {heroContent.bio}
          </p>
          <Button size="lg" asChild>
            <Link href={cvLink[language]} target="_blank" rel="noopener noreferrer">
              <Download className="mr-2 h-5 w-5" />
              {heroContent.cta}
            </Link>
          </Button>
        </div>
        <div className="relative flex justify-center items-center">
            <div className="absolute w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl shadow-primary/30">
            <Image
                src="https://up6.cc/2025/08/175543874052991.jpg"
                alt="Khaled Mohamed"
                width={384}
                height={384}
                quality={100}
                className="object-cover w-full h-full"
                priority
            />
            </div>
        </div>
      </div>
    </section>
  );
}
