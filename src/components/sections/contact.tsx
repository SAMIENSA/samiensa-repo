"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

import { useLanguage } from "@/hooks/use-language";
import { portfolioData, socialLinks } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import Link from "next/link";

export default function ContactSection() {
  const { language } = useLanguage();
  const { toast } = useToast();
  const contactContent = portfolioData[language].contact;
  const formContent = contactContent.form;

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
    <section id="contact" className="bg-card border-t border-b">
      <div className="container grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold font-headline">{contactContent.title}</h2>
          <div className="space-y-4">
            {socialLinks.map((link) => (
              <div key={link.name} className="flex items-center gap-4">
                <div className="bg-primary/10 text-primary p-3 rounded-full">
                  <link.icon className="w-6 h-6" />
                </div>
                <Link href={link.href} target="_blank" rel="noopener noreferrer" className="font-medium hover:text-primary transition-colors">
                  {link.name}
                </Link>
              </div>
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
                    <FormLabel>{formContent.name}</FormLabel>
                    <FormControl>
                      <Input placeholder={formContent.name} {...field} />
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
                    <FormLabel>{formContent.email}</FormLabel>
                    <FormControl>
                      <Input placeholder={formContent.email} {...field} />
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
                    <FormLabel>{formContent.phone}</FormLabel>
                    <FormControl>
                      <Input placeholder={formContent.phone} {...field} />
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
                    <FormLabel>{formContent.details}</FormLabel>
                    <FormControl>
                      <Textarea placeholder={formContent.details} {...field} rows={5} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" size="lg" className="w-full">
                {formContent.submit}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
}
