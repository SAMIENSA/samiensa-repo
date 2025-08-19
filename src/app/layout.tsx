import type { Metadata } from 'next';
import { ThemeProvider as NextThemesProvider } from "next-themes";

import './globals.css';
import { LanguageProvider } from '@/components/providers/language-provider';
import { Toaster } from "@/components/ui/toaster";
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Khaled Mohamed | Portfolio',
  description: 'A passionate creator with a Computer Science background. I craft visually compelling content across 3D, VFX, motion graphics, and short-form edits.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&family=PT+Sans:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className={cn("font-body antialiased")}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
        >
          <LanguageProvider>
            <div className="flex min-h-screen flex-col">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            <Toaster />
          </LanguageProvider>
        </NextThemesProvider>
      </body>
    </html>
  );
}
