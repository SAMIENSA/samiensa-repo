"use client"

import Link from "next/link";
import { Menu } from "lucide-react";

import { useLanguage } from "@/hooks/use-language";
import { portfolioData, socialLinks } from "@/lib/data";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LanguageSwitcher } from "@/components/language-switcher";
import { ThemeSwitcher } from "../theme-switcher";

export function Header() {
  const { language, direction } = useLanguage();
  const navItems = portfolioData[language].nav;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold font-headline">Khaled Mohamed</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            {navItems.map((item: { name: string; href: string }) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-foreground/80 text-foreground/60"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side={direction === 'ltr' ? 'left' : 'right'}>
            <Link href="/" className="flex items-center">
              <span className="font-bold font-headline">Khaled Mohamed</span>
            </Link>
            <div className="mt-8 flex flex-col gap-4">
              {navItems.map((item: { name: string; href: string }) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex items-center gap-2">
                {socialLinks.map((link) => (
                    <Button key={link.name} variant="ghost" size="icon" asChild>
                    <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                        <link.icon className="h-5 w-5" />
                    </Link>
                    </Button>
                ))}
            </div>
          </SheetContent>
        </Sheet>
        
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
             <Link href="/" className="flex items-center space-x-2 md:hidden">
                <span className="font-bold font-headline">Khaled Mohamed</span>
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <div className="hidden md:flex items-center gap-1">
                {socialLinks.map((link) => (
                    <Button key={link.name} variant="ghost" size="icon" asChild>
                    <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                        <link.icon className="h-5 w-5" />
                    </Link>
                    </Button>
                ))}
            </div>
            <LanguageSwitcher />
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
