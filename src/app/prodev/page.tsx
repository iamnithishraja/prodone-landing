"use client";

import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Spotlight } from "@/components/ui/spotlight";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/moving-border";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import Link from "next/link";
import { useCallback, useEffect } from "react";
import {
  IconBrain,
  IconCode,
  IconDeviceMobile,
  IconRobot,
  IconServer,
  IconCloud,
  IconCalendar,
  IconClock,
  IconMessages,
  IconReportAnalytics,
  IconShieldCheck,
  IconTools,
} from "@tabler/icons-react";

// Calendly popup function
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/rnithish248/30min";

const navItems = [
  { name: "Home", link: "/" },
  { name: "Services", link: "/#services" },
  { name: "Portfolio", link: "/#portfolio" },
  { name: "Pricing", link: "/#pricing" },
  { name: "Testimonials", link: "/#testimonials" },
];

const developerTypes = [
  {
    title: "AI & ML Engineers",
    description:
      "Build intelligent systems with our AI specialists. From LLMs and chatbots to computer vision and predictive analytics.",
    icon: <IconBrain className="h-12 w-12 text-red-500" />,
    skills: ["OpenAI/GPT Integration", "LangChain", "RAG Systems", "Fine-tuning", "Vector Databases"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
  },
  {
    title: "Full-Stack Web Developers",
    description:
      "Modern web applications built with the latest technologies. React, Next.js, Node.js, and more.",
    icon: <IconCode className="h-12 w-12 text-red-500" />,
    skills: ["React/Next.js", "Node.js", "TypeScript", "PostgreSQL", "REST & GraphQL APIs"],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop",
  },
  {
    title: "Mobile App Developers",
    description:
      "Native and cross-platform mobile apps for iOS and Android. Fast, beautiful, and user-friendly.",
    icon: <IconDeviceMobile className="h-12 w-12 text-red-500" />,
    skills: ["React Native", "Flutter", "Swift", "Kotlin", "App Store Optimization"],
    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
  },
  {
    title: "AI Agent Developers",
    description:
      "Autonomous AI agents that automate workflows, handle tasks, and work 24/7 for your business.",
    icon: <IconRobot className="h-12 w-12 text-red-500" />,
    skills: ["AutoGPT", "CrewAI", "Custom Agents", "Tool Integration", "Workflow Automation"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
  },
  {
    title: "Backend Engineers",
    description:
      "Scalable backend systems and APIs. High-performance architectures that handle millions of requests.",
    icon: <IconServer className="h-12 w-12 text-red-500" />,
    skills: ["Python/Django", "Go", "Microservices", "Redis", "Message Queues"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  },
  {
    title: "Cloud & DevOps Engineers",
    description:
      "Infrastructure that scales. CI/CD pipelines, containerization, and cloud architecture.",
    icon: <IconCloud className="h-12 w-12 text-red-500" />,
    skills: ["AWS/GCP/Azure", "Docker/Kubernetes", "Terraform", "CI/CD", "Monitoring"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
  },
];

const benefits = [
  {
    icon: <IconClock className="h-8 w-8 text-red-500" />,
    title: "40+ Hours/Week",
    description: "Dedicated full-time developer working exclusively on your projects",
  },
  {
    icon: <IconMessages className="h-8 w-8 text-red-500" />,
    title: "Direct Communication",
    description: "Slack, Discord, or your preferred channel—stay connected always",
  },
  {
    icon: <IconReportAnalytics className="h-8 w-8 text-red-500" />,
    title: "Weekly Reports",
    description: "Transparent progress updates and detailed work logs every week",
  },
  {
    icon: <IconShieldCheck className="h-8 w-8 text-red-500" />,
    title: "Code Reviews",
    description: "Quality assured with thorough code reviews and best practices",
  },
  {
    icon: <IconTools className="h-8 w-8 text-red-500" />,
    title: "Bug Fixes Included",
    description: "Maintenance and bug fixes covered within your retainer",
  },
  {
    icon: <IconCalendar className="h-8 w-8 text-red-500" />,
    title: "Flexible Terms",
    description: "Month-to-month contracts with no long-term commitments required",
  },
];

export default function ProDevPage() {
  useEffect(() => {
    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.head.removeChild(link);
      document.body.removeChild(script);
    };
  }, []);

  const openCalendly = useCallback(() => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: CALENDLY_URL });
    } else {
      // Fallback: open in new tab if Calendly hasn't loaded
      window.open(CALENDLY_URL, "_blank");
    }
  }, []);

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <FloatingNav navItems={navItems} />
      <WhatsAppWidget />

      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] w-full flex-col items-center justify-center overflow-hidden bg-black pt-20">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#DC2626" />
        
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            id="prodev-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={40}
            particleColor="#DC2626"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              Monthly Retainer Service
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-b from-white via-white to-red-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl"
          >
            Hire a{" "}
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text">
              ProDev
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mx-auto mt-8 max-w-2xl text-lg text-neutral-400 md:text-xl"
          >
            Get a dedicated developer on monthly retainer. AI engineers, full-stack developers, 
            mobile experts—scale your team with top-tier talent without the hiring hassle.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Button
              as="button"
              onClick={openCalendly}
              className="px-8 py-3 text-base font-medium"
              containerClassName="h-14 w-auto"
            >
              <span className="flex items-center gap-2">
                Book a Call <IconCalendar className="h-4 w-4" />
              </span>
            </Button>
            <div className="flex items-center gap-2 text-neutral-400">
              <span className="text-3xl font-bold text-white">$2,000</span>
              <span>/month</span>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Developer Types Section */}
      <section className="relative bg-black py-20">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              Our Talent Pool
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Developers for{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Every Need
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              From AI specialists to mobile experts, we have the right developer for your project.
            </p>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {developerTypes.map((dev, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl border border-red-500/20 bg-neutral-900/50 transition-all hover:border-red-500/40"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dev.image}
                    alt={dev.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    {dev.icon}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white">{dev.title}</h3>
                  <p className="mt-2 text-sm text-neutral-400">{dev.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {dev.skills.map((skill, skillIdx) => (
                      <span
                        key={skillIdx}
                        className="rounded-full bg-red-500/10 px-3 py-1 text-xs text-red-400"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative bg-black py-20">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              What You Get
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Everything{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Included
              </span>
            </h2>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-red-500/20 bg-neutral-900/50 p-6 transition-all hover:border-red-500/40"
              >
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                <p className="mt-2 text-sm text-neutral-400">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-black py-20">
        <div className="relative mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-red-500/30 bg-gradient-to-r from-red-500/10 via-red-500/5 to-transparent p-12 text-center"
          >
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to Scale Your Team?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-neutral-400">
              Get started with a ProDev today. No long-term contracts, no hiring hassle—just
              quality development work delivered consistently.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                as="button"
                onClick={openCalendly}
                className="px-8 py-3 text-base font-medium"
                containerClassName="h-14 w-auto"
              >
                <span className="flex items-center gap-2">
                  Book a Discovery Call <IconCalendar className="h-4 w-4" />
                </span>
              </Button>
              <div className="text-neutral-400">
                Starting at <span className="text-2xl font-bold text-white">$2,000</span>/month
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-500/10 bg-black py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <span className="text-red-500">Pro</span>Done
            </Link>
            <div className="flex gap-8 text-sm text-neutral-400">
              <Link href="/#services" className="hover:text-red-400 transition-colors">
                Services
              </Link>
              <Link href="/#portfolio" className="hover:text-red-400 transition-colors">
                Portfolio
              </Link>
              <Link href="/#pricing" className="hover:text-red-400 transition-colors">
                Pricing
              </Link>
              <Link href="/#contact" className="hover:text-red-400 transition-colors">
                Contact
              </Link>
            </div>
            <div className="text-sm text-neutral-500">
              © {new Date().getFullYear()} Prodone. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
