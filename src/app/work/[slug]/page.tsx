"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { getCaseStudyBySlug, getAllCaseStudySlugs } from "@/data/case-studies";
import {
  IconArrowLeft,
  IconTrendingUp,
  IconCalendar,
  IconCode,
  IconQuote,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandGithub,
  IconMail,
} from "@tabler/icons-react";
import Link from "next/link";
import { useCallback, useEffect } from "react";

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
  { name: "Services", link: "/#services" },
  { name: "Portfolio", link: "/#portfolio" },
  { name: "Monthly Retainer", link: "/#prodev", highlight: true },
  { name: "Pricing", link: "/#pricing" },
  { name: "Testimonials", link: "/#testimonials" },
];

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const caseStudy = getCaseStudyBySlug(slug);

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

  // Handle case study not found
  if (!caseStudy) {
    return (
      <main className="relative min-h-screen bg-black overflow-hidden">
        <FloatingNav navItems={navItems} />
        <WhatsAppWidget />
        
        <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Case Study Not Found</h1>
          <p className="text-neutral-400 mb-8">
            The case study you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
          <Link
            href="/#portfolio"
            className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-6 py-3 font-medium text-white transition-all hover:bg-red-600"
          >
            <IconArrowLeft className="h-4 w-4" />
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <FloatingNav navItems={navItems} />
      <WhatsAppWidget />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-red-500/10 via-transparent to-transparent blur-3xl" />
        
        <div className="relative mx-auto max-w-6xl px-4">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/#portfolio"
              className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors mb-8"
            >
              <IconArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
          </motion.div>

          {/* Category & Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400 mb-6">
              {caseStudy.category}
            </span>
            
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight mb-6">
              {caseStudy.title}
            </h1>

            <p className="text-xl text-neutral-400 max-w-3xl mb-4">
              {caseStudy.description}
            </p>

            <p className="text-lg font-semibold text-white/90 mb-8">
              {caseStudy.productIntro}
            </p>
          </motion.div>

          {/* Metrics Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-3 gap-6 p-6 rounded-2xl border border-red-500/20 bg-neutral-900/50 mb-12"
          >
            {caseStudy.metrics.map((metric, idx) => (
              <div key={idx} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <IconTrendingUp className="h-5 w-5 text-green-500" />
                  <span className="text-3xl font-bold text-white md:text-4xl">
                    {metric.value}
                  </span>
                </div>
                <div className="text-sm text-neutral-500">
                  {metric.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-neutral-950 shadow-2xl"
          >
            {/* Browser header */}
            <div className="flex items-center gap-2 border-b border-red-500/10 bg-neutral-900/80 px-4 py-3">
              <div className="h-3 w-3 rounded-full bg-red-500/60" />
              <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
              <div className="h-3 w-3 rounded-full bg-green-500/60" />
              <div className="ml-4 flex-1 rounded-md bg-neutral-800/60 px-3 py-1">
                <span className="text-xs text-neutral-500 font-mono">
                  app.{caseStudy.logo.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}.com
                </span>
              </div>
            </div>
            
            <div className="relative aspect-[16/9] overflow-hidden">
              <img
                src={caseStudy.image}
                alt={caseStudy.title}
                className="h-full w-full object-cover object-top"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative py-16">
        <div className="relative mx-auto max-w-4xl px-4">
          <div className="space-y-16">
            {/* The Challenge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 text-red-500">
                  01
                </span>
                The Challenge
              </h2>
              <p className="text-neutral-400 leading-relaxed text-lg">
                {caseStudy.challenge || caseStudy.description}
              </p>
            </motion.div>

            {/* The Solution */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 text-red-500">
                  02
                </span>
                The Solution
              </h2>
              <p className="text-neutral-400 leading-relaxed text-lg mb-6">
                {caseStudy.solution || caseStudy.supportingText}
              </p>

              {/* Tech Stack */}
              {caseStudy.techStack && (
                <div className="mt-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-500 mb-3">
                    <IconCode className="h-4 w-4" />
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className="rounded-full border border-red-500/20 bg-neutral-900 px-3 py-1 text-sm text-neutral-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* The Results */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-500/20 text-red-500">
                  03
                </span>
                The Results
              </h2>
              <p className="text-neutral-400 leading-relaxed text-lg">
                {caseStudy.results || `${caseStudy.productIntro} ${caseStudy.supportingText}`}
              </p>
            </motion.div>

            {/* Testimonial */}
            {caseStudy.testimonial && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-red-950/20 p-8"
              >
                <IconQuote className="absolute top-6 right-6 h-16 w-16 text-red-500/10" />
                <blockquote className="relative">
                  <p className="text-xl text-white leading-relaxed mb-6 italic">
                    &ldquo;{caseStudy.testimonial.quote}&rdquo;
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center">
                      <span className="text-lg font-bold text-red-400">
                        {caseStudy.testimonial.author.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-medium text-white">
                        {caseStudy.testimonial.author}
                      </div>
                      <div className="text-sm text-neutral-500">
                        {caseStudy.testimonial.role}
                      </div>
                    </div>
                  </footer>
                </blockquote>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="relative mx-auto max-w-4xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-2xl border border-red-500/30 bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-red-950/30 p-8 md:p-12 text-center"
          >
            <div className="absolute inset-0 bg-grid opacity-10" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-red-500/10 via-transparent to-transparent blur-3xl" />
            
            <div className="relative">
              <h3 className="text-3xl font-bold text-white md:text-4xl mb-4">
                Start your project{" "}
                <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                  with us
                </span>
              </h3>
              <p className="mx-auto max-w-2xl text-neutral-400 mb-8">
                Ready to build something amazing? Let&apos;s discuss your vision and create the next success story together.
              </p>
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-8 py-4 font-medium text-white transition-all hover:bg-red-600 hover:scale-105"
              >
                <IconCalendar className="h-5 w-5" />
                Book a Strategy Call
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* More Projects */}
      <section className="relative py-16 border-t border-red-500/10">
        <div className="relative mx-auto max-w-6xl px-4">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Explore More Projects
          </h3>
          <div className="grid gap-4 md:grid-cols-3">
            {getAllCaseStudySlugs()
              .filter((s) => s !== slug)
              .slice(0, 3)
              .map((projectSlug) => {
                const project = getCaseStudyBySlug(projectSlug);
                if (!project) return null;
                return (
                  <Link
                    key={projectSlug}
                    href={`/work/${projectSlug}`}
                    className="group relative overflow-hidden rounded-xl border border-red-500/20 bg-neutral-900/50 p-4 transition-all hover:border-red-500/40 hover:bg-neutral-900"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-lg mb-4">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <span className="text-xs text-red-400 mb-1 block">
                      {project.category}
                    </span>
                    <h4 className="font-medium text-white group-hover:text-red-50 transition-colors">
                      {project.logo}
                    </h4>
                  </Link>
                );
              })}
          </div>
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
