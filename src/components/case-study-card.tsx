"use client";

import { motion } from "framer-motion";
import { IconArrowRight, IconTrendingUp } from "@tabler/icons-react";

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudyCardProps {
  /** Project logo or name text */
  logo?: string;
  /** Optional logo image URL */
  logoImage?: string;
  /** Main product screenshot/preview image */
  image: string;
  /** Alt text for the image */
  imageAlt?: string;
  /** Category tag (e.g., "Automation", "AI Agents", "Healthcare") */
  category: string;
  /** Main case study title */
  title: string;
  /** Story paragraph: problem, solution, value */
  description: string;
  /** Bold product intro line (e.g., "Meet Bugasura — the AI-powered bug tracker...") */
  productIntro: string;
  /** Supporting description about platforms/features built */
  supportingText?: string;
  /** Array of impact metrics to display */
  metrics: CaseStudyMetric[];
  /** Link to the full case study */
  link?: string;
  /** CTA button text */
  ctaText?: string;
}

export function CaseStudyCard({
  logo,
  logoImage,
  image,
  imageAlt = "Product screenshot",
  category,
  title,
  description,
  productIntro,
  supportingText,
  metrics,
  link = "#",
  ctaText = "View Case Study",
}: CaseStudyCardProps) {
  const CardWrapper = link ? motion.a : motion.div;

  return (
    <CardWrapper
      href={link}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      className="group relative block overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-950 transition-all duration-300 hover:border-red-500/40 hover:shadow-2xl hover:shadow-red-500/5"
    >
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 md:p-8 lg:p-10">
        {/* Main Content Grid */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* LEFT SIDE - Image */}
          <div className="order-2 lg:order-1">
            {/* Logo/Name above image */}
            {(logo || logoImage) && (
              <div className="mb-4 flex items-center gap-3">
                {logoImage ? (
                  <img
                    src={logoImage}
                    alt={logo || "Project logo"}
                    className="h-8 w-auto object-contain"
                  />
                ) : (
                  <span className="text-lg font-semibold text-white/90 tracking-tight">
                    {logo}
                  </span>
                )}
              </div>
            )}

            {/* Product Screenshot */}
            <div className="relative overflow-hidden rounded-xl border border-red-500/10 bg-neutral-950 shadow-xl shadow-black/50">
              {/* Browser-style header dots */}
              <div className="flex items-center gap-2 border-b border-red-500/10 bg-neutral-900/80 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <div className="ml-4 flex-1 rounded-md bg-neutral-800/60 px-3 py-1">
                  <span className="text-xs text-neutral-500 font-mono">app.{logo?.toLowerCase().replace(/\s+/g, '') || 'product'}.com</span>
                </div>
              </div>
              
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={image}
                  alt={imageAlt}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                {/* Subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent" />
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - Content */}
          <div className="order-1 flex flex-col justify-center lg:order-2">
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-3 py-1.5 text-xs font-medium text-red-400 uppercase tracking-wider">
                {category}
              </span>
            </div>

            {/* Title */}
            <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl leading-tight">
              {title}
            </h3>

            {/* Story Description */}
            <p className="mb-6 text-neutral-400 leading-relaxed">
              {description}
            </p>

            {/* Product Intro Line */}
            <p className="mb-3 text-lg font-semibold text-white/90">
              {productIntro}
            </p>

            {/* Supporting Text */}
            {supportingText && (
              <p className="mb-6 text-sm text-neutral-500 leading-relaxed">
                {supportingText}
              </p>
            )}

            {/* CTA Button */}
            <div className="flex items-center gap-2 text-red-400 font-medium group/cta">
              <span className="group-hover/cta:underline underline-offset-4">{ctaText}</span>
              <IconArrowRight className="h-4 w-4 transition-transform group-hover/cta:translate-x-1" />
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION - Metrics */}
        <div className="mt-8 pt-8 border-t border-red-500/10">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            {metrics.map((metric, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 sm:justify-center lg:justify-start"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-red-500/10 border border-red-500/20">
                  <IconTrendingUp className="h-5 w-5 text-red-500" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white md:text-3xl">
                    {metric.value}
                  </div>
                  <div className="text-xs text-neutral-500 uppercase tracking-wider">
                    {metric.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CardWrapper>
  );
}

// Example usage data for reference:
export const exampleCaseStudy: CaseStudyCardProps = {
  logo: "Bugasura",
  image: "/images/bugasura.png",
  category: "Developer Tools",
  title: "How Bugasura streamlined bug tracking for 50K+ developers",
  description:
    "Engineering teams were drowning in scattered bug reports across Slack, email, and spreadsheets. They needed a unified platform that could intelligently categorize, prioritize, and route issues to the right team members.",
  productIntro: "Meet Bugasura — the AI-powered bug tracker for modern teams.",
  supportingText:
    "Built with React Native for iOS & Android, Node.js backend, and custom ML models for smart bug categorization and duplicate detection.",
  metrics: [
    { value: "49M", label: "Requests processed" },
    { value: "10K", label: "Bugs logged" },
    { value: "50K", label: "Users served" },
  ],
  link: "/case-studies/bugasura",
  ctaText: "View Case Study",
};
