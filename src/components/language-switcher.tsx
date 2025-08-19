"use client"

import { useLanguage } from '@/hooks/use-language';
import { Button } from '@/components/ui/button';
import { Languages } from 'lucide-react';

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleLanguage} aria-label="Toggle language">
       <span className="text-xs font-semibold">{language === 'en' ? 'AR' : 'EN'}</span>
    </Button>
  );
}
