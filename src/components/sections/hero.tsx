"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useLanguage } from "@/hooks/use-language";
import { cvLink, portfolioData } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Download, MessageSquare } from "lucide-react";
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
      <div className="container relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] py-10 md:py-20 px-4 md:px-0 text-center">
        
        <div className="relative mb-8">
            <div className="absolute inset-0 w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto bg-primary/20 rounded-full blur-3xl"></div>
            <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden shadow-2xl shadow-primary/30">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-headline tracking-tight">
            {heroContent.name}
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
