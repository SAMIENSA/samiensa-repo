
"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useLanguage } from "@/hooks/use-language";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { portfolioData, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";
import { MapPin, Mail, MessageCircle, Send } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ContactSection() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const contactContent = portfolioData[language].contact;
  const formContent = contactContent.form;
  const { ref, isVisible } = useScrollAnimation();

  const directContact = [
    {
      icon: Mail,
      text: "khalerdkolkolkol@gmail.com",
      href: "mailto:khalerdkolkolkol@gmail.com"
    },
    {
      icon: MessageCircle,
      text: "+201060241230",
      href: "https://wa.me/+201060241230"
    },
    {
      icon: MapPin,
      text: "Cairo, Egypt",
    }
  ];

  const formSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters." }),
    email: z.string().email({ message: "Please enter a valid email." }),
    phone: z.string().optional(),
    details: z.string().min(10, { message: "Details must be at least 10 characters." }),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      details: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values); // In a real app, you would send this data to a server
    toast({
      title: formContent.success,
      description: "I'll get back to you soon!",
    });
    form.reset();
  }

  return (
    <section 
      id="contact"
      ref={ref}
      className={cn("scroll-fade-in", { "is-visible": isVisible })}
    >
      <div className="diagonal-mesh-bg" />
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold font-headline text-center mb-12">{contactContent.title}</h2>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <p className="text-lg">
              {contactContent.description}
            </p>
            <div className="space-y-4">
              {directContact.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <item.icon className="w-6 h-6 text-primary" />
                  {item.href ? (
                     <Link href={item.href} target="_blank" rel="noopener noreferrer" className="font-medium text-lg text-muted-foreground hover:text-primary transition-colors">
                      {item.text}
                     </Link>
                  ) : (
                    <span className="font-medium text-lg text-muted-foreground">{item.text}</span>
                  )}
                </div>
              ))}
            </div>
            <div className="flex items-center gap-4 pt-4">
              {socialLinks.filter(link => ['Instagram', 'LinkedIn', 'Facebook', 'Telegram', 'WhatsApp'].includes(link.name)).map((link) => (
                <Button key={link.name} variant="outline" size="icon" asChild className="rounded-full border-2 border-border hover:bg-primary/10">
                  <Link href={link.href} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                    <link.icon className="h-5 w-5 text-muted-foreground hover:text-primary" />
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder={formContent.name} {...field} className="bg-background/80 border-border/50 h-12" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder={formContent.email} {...field} className="bg-background/80 border-border/50 h-12"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                 <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder={formContent.phone} {...field} className="bg-background/80 border-border/50 h-12"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="details"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Textarea placeholder={formContent.details} {...field} rows={5} className="bg-background/80 border-border/50"/>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" className="w-full btn-gradient">
                  {formContent.submit}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}

    