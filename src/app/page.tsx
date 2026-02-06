"use client";

import { motion } from "framer-motion";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { Spotlight } from "@/components/ui/spotlight";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { SparklesCore } from "@/components/ui/sparkles";
import { Button } from "@/components/ui/moving-border";
import { WhatsAppWidget } from "@/components/whatsapp-widget";
import { CaseStudyCarousel, CaseStudySlide } from "@/components/case-study-carousel";
import {
  IconRocket,
  IconCode,
  IconBrain,
  IconUsers,
  IconDeviceLaptop,
  IconCloudComputing,
  IconChartBar,
  IconArrowRight,
  IconCheck,
  IconCalendar,
  IconMail,
  IconBrandLinkedin,
  IconBrandTwitter,
  IconBrandGithub,
  IconSparkles,
} from "@tabler/icons-react";
import { useEffect, useCallback } from "react";
import Link from "next/link";

// Calendly popup function
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

const CALENDLY_URL = "https://calendly.com/rnithish248/30min";
const EMAIL = "hello@prodone.online";

const navItems = [
  { name: "Services", link: "#services" },
  { name: "Portfolio", link: "#portfolio" },
  { name: "Monthly Retainer", link: "#prodev", highlight: true },
  { name: "Pricing", link: "#pricing" },
  { name: "Testimonials", link: "#testimonials" },
];

const capabilities = [
  {
    title: "Full-Cycle AI Product Development",
    description: "End-to-end AI products from concept to launch. Design, build, deploy.",
    outcome: "Ship production-ready products in 4–8 weeks",
    proof: "50+ products launched for startups & enterprises",
    icon: <IconRocket className="h-7 w-7" />,
    gradient: "from-red-500/20 to-orange-500/10",
    href: "#portfolio",
    featured: true,
  },
  {
    title: "AI-Powered Web & Mobile Apps",
    description: "Smart apps with AI features that users actually engage with.",
    outcome: "2–5x higher user engagement",
    proof: "Used in customer-facing platforms",
    icon: <IconDeviceLaptop className="h-7 w-7" />,
    gradient: "from-blue-500/20 to-cyan-500/10",
    href: "#portfolio",
  },
  {
    title: "AI Agents & Automation",
    description: "Autonomous agents that handle workflows and customer interactions 24/7.",
    outcome: "Automate 80% of repetitive tasks",
    proof: "Powering real-world AI workflows",
    icon: <IconSparkles className="h-7 w-7" />,
    gradient: "from-purple-500/20 to-pink-500/10",
    href: "#portfolio",
  },
  {
    title: "Cloud & Infrastructure for AI",
    description: "Scalable infrastructure optimized for AI workloads.",
    outcome: "Handles millions of requests reliably",
    proof: "Running in production across multiple startups",
    icon: <IconCloudComputing className="h-7 w-7" />,
    gradient: "from-emerald-500/20 to-teal-500/10",
    href: "#contact",
  },
  {
    title: "Data & AI Intelligence Systems",
    description: "Data pipelines and AI models for smarter decisions.",
    outcome: "Turn raw data into actionable insights",
    proof: "Deployed for analytics-driven companies",
    icon: <IconChartBar className="h-7 w-7" />,
    gradient: "from-amber-500/20 to-yellow-500/10",
    href: "#contact",
  },
];

const portfolio = [
  {
    title: "nowg ai",
    description:
      "Lovable-style vibe coding platform that revolutionizes how developers build applications with AI assistance.",
    header: (
      <div className="relative h-full min-h-[8rem] w-full flex-1 overflow-hidden rounded-xl">
        <img 
          src="/images/nowgai.png" 
          alt="nowg ai" 
          className="h-full w-full object-cover transition-transform duration-300 group-hover/bento:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
      </div>
    ),
    icon: <IconCode className="h-4 w-4 text-red-500" />,
    href: "/work/nowgai",
  },
  {
    title: "Klinic",
    description:
      "Complete telemedicine platform with doctor booking, lab tests, and medicine delivery.",
    header: (
      <div className="relative h-full min-h-[8rem] w-full flex-1 overflow-hidden rounded-xl">
        <img 
          src="/images/klinic.png" 
          alt="Klinic" 
          className="h-full w-full object-cover transition-transform duration-300 group-hover/bento:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
      </div>
    ),
    icon: <IconDeviceLaptop className="h-4 w-4 text-red-500" />,
    href: "/work/klinic",
  },
  {
    title: "Talery",
    description: "AI-powered travel itinerary app that creates personalized trips in seconds.",
    header: (
      <div className="relative h-full min-h-[8rem] w-full flex-1 overflow-hidden rounded-xl">
        <img 
          src="/images/talery.png" 
          alt="Talery" 
          className="h-full w-full object-cover transition-transform duration-300 group-hover/bento:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
      </div>
    ),
    icon: <IconBrain className="h-4 w-4 text-red-500" />,
    href: "/work/talery",
  },
  {
    title: "El+Plus+",
    description:
      "Energy optimization platform for a Swedish energy company, reducing costs through smart AI analytics.",
    header: (
      <div className="relative h-full min-h-[8rem] w-full flex-1 overflow-hidden rounded-xl">
        <img 
          src="/images/elplusplus.png" 
          alt="El+Plus+" 
          className="h-full w-full object-cover transition-transform duration-300 group-hover/bento:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
      </div>
    ),
    icon: <IconChartBar className="h-4 w-4 text-red-500" />,
    href: "/work/elplusplus",
  },
  {
    title: "CutTheQ",
    description:
      "Food ordering app that eliminates wait times. Order online, skip the line, enjoy your meal.",
    header: (
      <div className="relative h-full min-h-[8rem] w-full flex-1 overflow-hidden rounded-xl">
        <img 
          src="/images/cuttheq.png" 
          alt="CutTheQ" 
          className="h-full w-full object-cover transition-transform duration-300 group-hover/bento:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
      </div>
    ),
    icon: <IconRocket className="h-4 w-4 text-red-500" />,
    href: "/work/cuttheq",
  },
  {
    title: "Shidosha",
    description:
      "Connect with experienced mentors for tailored advice and support to achieve your goals.",
    header: (
      <div className="relative h-full min-h-[8rem] w-full flex-1 overflow-hidden rounded-xl">
        <img 
          src="/images/shidosha.png" 
          alt="Shidosha" 
          className="h-full w-full object-cover transition-transform duration-300 group-hover/bento:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/90 via-neutral-900/40 to-transparent" />
      </div>
    ),
    icon: <IconUsers className="h-4 w-4 text-red-500" />,
    href: "/work/shidosha",
  },
];

const testimonials = [
  {
    quote:
      "Prodone transformed our vision into reality. The Shidosha platform exceeded all expectations. Their AI expertise and attention to detail made the entire process seamless.",
    name: "Rajesh Kumar",
    title: "Founder, Shidosha",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "The Klinic platform revolutionized how we deliver healthcare. Prodone's team understood the healthcare domain and built something truly impactful. Highly recommended!",
    name: "Dr. Priya Sharma",
    title: "Founder, Klinic",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "Working with Prodone on nowg.ai was incredible. They brought cutting-edge AI capabilities that set us apart from competitors. True product partners!",
    name: "Alex Thompson",
    title: "CEO, nowg.ai",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    quote:
      "The El+Plus+ platform helped us save 30% on energy costs. Prodone's AI solutions are not just innovative but also deliver real business value.",
    name: "Erik Lindgren",
    title: "CTO, El+Plus+ Sweden",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop&crop=face",
  },
];

// Case Studies for the carousel
const caseStudySlides: CaseStudySlide[] = [
  {
    logo: "nowg ai",
    image: "/images/nowgai.png",
    category: "AI Platform",
    title: "Building the future of AI-assisted development",
    description:
      "Developers needed a faster way to prototype and build applications without getting bogged down in boilerplate. Traditional coding workflows were slow and fragmented across multiple tools.",
    productIntro: "Meet nowg.ai — the Lovable-style vibe coding platform that revolutionizes how developers build with AI.",
    supportingText:
      "Built with Next.js, real-time collaboration features, AI code generation, and seamless deployment pipelines.",
    metrics: [
      { value: "10K+", label: "Lines generated daily" },
      { value: "500+", label: "Active developers" },
      { value: "3x", label: "Faster prototyping" },
    ],
    link: "/work/nowgai",
    ctaText: "View Case Study",
  },
  {
    logo: "CutTheQ",
    image: "/images/cuttheq.png",
    category: "Food Tech",
    title: "Eliminating wait times in food ordering",
    description:
      "Customers hated waiting in long queues at restaurants and cafes. Restaurants needed a solution to manage orders efficiently while improving customer experience.",
    productIntro: "Meet CutTheQ — order online, skip the line, enjoy your meal.",
    supportingText:
      "Mobile app for iOS & Android, restaurant dashboard, real-time order tracking, and integrated payment processing.",
    metrics: [
      { value: "50K+", label: "Orders processed" },
      { value: "200+", label: "Restaurant partners" },
      { value: "15min", label: "Avg. time saved" },
    ],
    link: "/work/cuttheq",
    ctaText: "View Case Study",
  },
  {
    logo: "Talery",
    image: "/images/talery.png",
    category: "Travel Tech",
    title: "AI-powered travel planning made effortless",
    description:
      "Planning trips was time-consuming and overwhelming. Travelers needed a smart assistant to create personalized itineraries instantly based on their preferences and budget.",
    productIntro: "Meet Talery — your AI travel companion that creates perfect trips in seconds.",
    supportingText:
      "Personalized itineraries, hotel recommendations, local experiences, and real-time travel updates.",
    metrics: [
      { value: "25K+", label: "Trips planned" },
      { value: "4.9★", label: "User rating" },
      { value: "80%", label: "Time saved" },
    ],
    link: "/work/talery",
    ctaText: "View Case Study",
  },
  {
    logo: "Klinic",
    image: "/images/klinic.png",
    category: "Healthcare",
    title: "Transforming healthcare access for millions",
    description:
      "Patients struggled to find doctors, book appointments, and manage prescriptions across disconnected systems. Healthcare providers needed a unified platform to serve patients remotely.",
    productIntro: "Meet Klinic — the complete telemedicine platform connecting patients with healthcare.",
    supportingText:
      "Doctor booking, video consultations, lab test scheduling, medicine delivery, and health records — all in one app.",
    metrics: [
      { value: "100K+", label: "Consultations completed" },
      { value: "5K+", label: "Doctors onboarded" },
      { value: "4.8★", label: "App store rating" },
    ],
    link: "/work/klinic",
    ctaText: "View Case Study",
  },
  {
    logo: "El+Plus+",
    image: "/images/elplusplus.png",
    category: "Energy & Utilities",
    title: "Smart energy optimization for Swedish households",
    description:
      "A Swedish energy company needed to help customers reduce costs and consumption. Traditional monitoring tools lacked the intelligence to provide actionable savings recommendations.",
    productIntro: "Meet El+Plus+ — AI-driven energy analytics that cut costs by 30%.",
    supportingText:
      "Real-time consumption tracking, smart alerts, usage predictions, and automated cost optimization.",
    metrics: [
      { value: "30%", label: "Cost reduction" },
      { value: "10K+", label: "Households served" },
      { value: "2M kWh", label: "Energy saved" },
    ],
    link: "/work/elplusplus",
    ctaText: "View Case Study",
  },
  {
    logo: "Shidosha",
    image: "/images/shidosha.png",
    category: "EdTech",
    title: "Connecting mentors with ambitious learners",
    description:
      "Aspiring professionals struggled to find quality mentorship. Experienced mentors lacked a platform to share their knowledge effectively and build meaningful connections.",
    productIntro: "Meet Shidosha — the mentorship platform that accelerates careers.",
    supportingText:
      "1-on-1 sessions, group workshops, goal tracking, and personalized mentor matching.",
    metrics: [
      { value: "5K+", label: "Mentorship sessions" },
      { value: "500+", label: "Expert mentors" },
      { value: "92%", label: "Goal achievement" },
    ],
    link: "/work/shidosha",
    ctaText: "View Case Study",
  },
];

const pricingPlans = [
  {
    name: "Starter",
    price: "$2,500",
    period: "",
    description: "Complete app development",
    features: [
      "Full web or mobile application",
      "Backend & database setup",
      "Modern, responsive design",
      "Mobile-optimized experience",
      "Hosting & deployment",
      "Source code ownership",
    ],
    popular: false,
    cta: "Start My Project",
    isEnterprise: false,
  },
  {
    name: "Growth",
    price: "$3,500",
    period: "",
    description: "Starter + premium design",
    features: [
      "Everything in Starter",
      "Custom UI/UX design included",
      "AI features & integrations",
      "Admin dashboard included",
      "Post-launch support & training",
      "Priority development queue",
    ],
    popular: true,
    cta: "Build My Product",
    isEnterprise: false,
  },
  {
    name: "Enterprise",
    price: "Let's Talk",
    period: "",
    description: "Scale without limits",
    features: [
      "Everything in Growth",
      "Dedicated development team",
      "Custom AI agents & automation",
      "Performance & security audits",
      "Priority support & SLA",
      "Ongoing partnership & scaling",
    ],
    popular: false,
    cta: "Schedule Strategy Call",
    isEnterprise: true,
  },
];

export default function Home() {
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

  // Email with meeting request
  const meetingEmailLink = `mailto:${EMAIL}?subject=${encodeURIComponent("Meeting Request - Let's Discuss My Project")}&body=${encodeURIComponent("Hi Prodone Team,\n\nI'd like to schedule a meeting to discuss a potential project.\n\nProject Overview:\n[Brief description of your project]\n\nPreferred Meeting Time:\n[Your availability]\n\nLooking forward to connecting!\n\nBest regards")}`;

  // WhatsApp with meeting request
  const whatsappMeetingLink = `https://wa.me/9663614603?text=${encodeURIComponent("Hi Prodone! I'd like to schedule a meeting to discuss my project. When would be a good time for a call?")}`;

  return (
    <main className="relative min-h-screen bg-black overflow-hidden">
      <FloatingNav navItems={navItems} />
      <WhatsAppWidget />

      {/* Hero Section */}
      <section className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black pt-20">
        <Spotlight className="-top-40 left-0 md:-top-20 md:left-60" fill="#DC2626" />
        
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            id="hero-sparkles"
            background="transparent"
            minSize={0.4}
            maxSize={1}
            particleDensity={50}
            particleColor="#DC2626"
          />
        </div>

        {/* Subtle product UI preview in background */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 md:opacity-30 pointer-events-none hidden lg:block">
          <div className="relative w-[600px] h-[500px]">
            <div className="absolute top-0 right-0 w-[400px] h-[280px] rounded-xl border border-red-500/20 bg-gradient-to-br from-neutral-900 to-neutral-950 shadow-2xl transform rotate-[-8deg] translate-x-20">
              <div className="p-4 border-b border-red-500/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
              </div>
              <div className="p-4 space-y-3">
                <div className="h-3 w-3/4 rounded bg-red-500/20" />
                <div className="h-3 w-1/2 rounded bg-neutral-700/50" />
                <div className="h-3 w-2/3 rounded bg-neutral-700/50" />
                <div className="mt-4 grid grid-cols-3 gap-2">
                  <div className="h-16 rounded bg-red-500/10" />
                  <div className="h-16 rounded bg-neutral-700/30" />
                  <div className="h-16 rounded bg-neutral-700/30" />
                </div>
              </div>
            </div>
            <div className="absolute bottom-0 right-20 w-[350px] h-[240px] rounded-xl border border-red-500/20 bg-gradient-to-br from-neutral-900 to-neutral-950 shadow-2xl transform rotate-[4deg]">
              <div className="p-4 border-b border-red-500/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/60" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
              </div>
              <div className="p-4 space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-red-500/30" />
                  <div className="h-3 w-24 rounded bg-neutral-700/50" />
                </div>
                <div className="h-3 w-full rounded bg-neutral-700/30" />
                <div className="h-3 w-3/4 rounded bg-neutral-700/30" />
                <div className="mt-3 h-10 w-full rounded bg-red-500/20" />
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center lg:text-left lg:max-w-5xl">
          {/* Differentiation Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              <IconSparkles className="h-4 w-4" />
              AI Product Studio — From Idea to Production
            </span>
          </motion.div>

          {/* Results-focused headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-b from-white via-white to-red-200 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-6xl md:text-7xl lg:text-8xl"
          >
            Launch AI Products
            <br />
            <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text">
              in Weeks, Not Months
            </span>
          </motion.h1>

          {/* Outcome-focused subheading */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 max-w-2xl lg:mx-0 mx-auto"
          >
            <TextGenerateEffect
              words="We design and ship AI-powered products, agents, and platforms that help startups launch faster and enterprises automate at scale. Production-ready in weeks, not months."
              className="text-lg text-neutral-400 md:text-xl"
            />
          </motion.div>

          {/* Improved CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button
              as="button"
              onClick={openCalendly}
              className="px-8 py-3 text-base font-medium"
              containerClassName="h-14 w-auto"
            >
              <span className="flex items-center gap-2">
                Book a Free Strategy Call <IconCalendar className="h-4 w-4" />
              </span>
            </Button>
            <a
              href="#portfolio"
              className="group flex items-center gap-2 rounded-full border border-red-500/30 bg-transparent px-8 py-3 text-white transition-all hover:border-red-500/50 hover:bg-red-500/10"
            >
              See Our Work
              <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>

          {/* Improved Stats with clarity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8"
          >
            {[
              { number: "50+", label: "Products Launched" },
              { number: "25+", label: "Founders Supported" },
              { number: "15+", label: "AI Systems in Production" },
              { number: "98%", label: "Client Retention" },
            ].map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left">
                <div className="text-3xl font-bold text-red-500 md:text-4xl">{stat.number}</div>
                <div className="mt-1 text-sm text-neutral-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Trust Row - Client Logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="mt-16 pt-8 border-t border-neutral-800"
          >
            <p className="text-sm text-neutral-500 mb-6 text-center lg:text-left">
              Trusted by startups and companies across US & Europe
            </p>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-8 md:gap-12">
              {/* Placeholder client logos - stylized company names */}
              {[
                { name: "TechFlow", style: "font-bold tracking-tight" },
                { name: "Nexus AI", style: "font-light tracking-widest uppercase text-xs" },
                { name: "Quantum", style: "font-semibold italic" },
                { name: "VERTEX", style: "font-black tracking-wider" },
                { name: "Synapse", style: "font-medium" },
              ].map((client, idx) => (
                <div
                  key={idx}
                  className={`text-neutral-500 hover:text-neutral-400 transition-colors text-lg ${client.style}`}
                >
                  {client.name}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent" />
      </section>

      {/* Services Section - Capability-Driven Layout */}
      <section id="services" className="relative bg-black py-24">
        <div className="absolute inset-0 bg-dot-pattern opacity-20" />
        {/* Subtle gradient accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-radial from-red-500/5 via-transparent to-transparent blur-3xl" />
        
        <div className="relative mx-auto max-w-7xl px-4">
          {/* Section Intro - Why This Matters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-20 max-w-4xl"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              <IconBrain className="h-4 w-4" />
              Our Capabilities
            </span>
            <h2 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl leading-tight">
              Why Great AI Products Need{" "}
              <span className="bg-gradient-to-r from-red-400 via-red-500 to-red-600 bg-clip-text text-transparent">
                Great Engineering
              </span>
            </h2>
            <p className="mt-6 text-xl text-neutral-400 leading-relaxed max-w-3xl">
              Modern businesses need scalable AI-powered platforms that automate operations, 
              improve decision-making, and deliver better user experiences. We build the 
              technology that makes it happen.
            </p>
          </motion.div>

          {/* Capability Cards - Staggered Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability, idx) => (
              <motion.a
                key={capability.title}
                href={capability.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative block ${idx === 0 ? 'lg:col-span-2 lg:row-span-1' : ''}`}
              >
                <div className={`relative h-full overflow-hidden rounded-2xl border bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-neutral-950 transition-all duration-300 hover:shadow-xl hover:shadow-red-500/5 ${
                  idx === 0 
                    ? 'border-red-500/30 hover:border-red-500/50 p-8 md:p-10' 
                    : 'border-red-500/20 hover:border-red-500/40 p-6 md:p-8'
                }`}>
                  {/* Featured badge for first card */}
                  {idx === 0 && (
                    <div className="absolute top-4 right-4 md:top-6 md:right-6">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-red-500/20 border border-red-500/30 px-3 py-1 text-xs font-medium text-red-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  {/* Background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="relative mb-5">
                    <div className={`inline-flex items-center justify-center rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 group-hover:bg-red-500/20 group-hover:border-red-500/30 transition-all duration-300 ${
                      idx === 0 ? 'w-16 h-16' : 'w-14 h-14'
                    }`}>
                      {capability.icon}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className={`font-semibold text-white mb-2 group-hover:text-red-50 transition-colors ${
                      idx === 0 ? 'text-2xl' : 'text-xl'
                    }`}>
                      {capability.title}
                    </h3>
                    <p className={`text-neutral-400 mb-4 line-clamp-2 ${idx === 0 ? 'text-base' : 'text-sm'}`}>
                      {capability.description}
                    </p>
                    
                    {/* Outcome Badge */}
                    <div className="flex items-center gap-2 text-sm text-red-400 font-medium mb-2">
                      <IconCheck className="h-4 w-4 flex-shrink-0" />
                      <span>{capability.outcome}</span>
                    </div>
                    
                    {/* Micro-proof line */}
                    <p className="text-xs text-neutral-500 italic">
                      {capability.proof}
                    </p>
                  </div>

                  {/* Hover Arrow */}
                  <div className={`absolute opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 ${
                    idx === 0 ? 'bottom-8 right-8 md:bottom-10 md:right-10' : 'bottom-6 right-6 md:bottom-8 md:right-8'
                  }`}>
                    <div className="flex items-center gap-2 text-sm text-red-500 font-medium">
                      <span className="hidden sm:inline">View work</span>
                      <IconArrowRight className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Dedicated Team Extension - Secondary Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <a 
              href="#prodev"
              className="group flex flex-col md:flex-row items-start md:items-center justify-between gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 md:p-8 transition-all hover:border-red-500/30 hover:bg-neutral-900"
            >
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-800 text-neutral-400 group-hover:bg-red-500/10 group-hover:text-red-500 transition-all">
                  <IconUsers className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white">Dedicated Product Team Extension</h4>
                  <p className="text-sm text-neutral-500">Scale your engineering capacity with embedded AI developers</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-neutral-400 group-hover:text-red-400 transition-colors">
                Learn about ProDev
                <IconArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </motion.div>

          {/* Section CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col items-center gap-4 p-8 rounded-2xl border border-red-500/20 bg-gradient-to-b from-red-500/5 to-transparent">
              <p className="text-lg text-neutral-300">
                Not sure what you need?
              </p>
              <button
                onClick={openCalendly}
                className="inline-flex items-center gap-2 rounded-full bg-red-500 px-8 py-4 font-medium text-white transition-all hover:bg-red-600 hover:scale-105"
              >
                Book a Free Strategy Call
                <IconCalendar className="h-4 w-4" />
              </button>
              <p className="text-sm text-neutral-500">
                Free strategy session. No commitment.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative bg-black py-20">
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
              Our Work
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Recent{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Builds
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              From telemedicine platforms to AI coding tools, here are some of the products we&apos;ve
              brought to life.
            </p>
          </motion.div>

          {/* Case Study Carousel */}
          <div className="mb-16">
            <CaseStudyCarousel slides={caseStudySlides} autoPlayInterval={8000} />
          </div>

          {/* Project Grid */}
          <div className="mb-4">
            <h3 className="text-center text-2xl font-bold text-white mb-8">
              Explore Our{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Projects
              </span>
            </h3>
          </div>

          <BentoGrid className="mx-auto">
            {portfolio.map((item, idx) => (
              <BentoGridItem
                key={idx}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                href={item.href}
              />
            ))}
          </BentoGrid>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-red-950/20 p-8 md:p-12 text-center">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-grid opacity-10" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-radial from-red-500/10 via-transparent to-transparent blur-3xl" />
              
              <div className="relative">
                <h3 className="text-3xl font-bold text-white md:text-4xl mb-4">
                  Want to build something{" "}
                  <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    similar?
                  </span>
                </h3>
                <p className="mx-auto max-w-2xl text-neutral-400 mb-8">
                  Let&apos;s discuss your project and how we can help bring your vision to life.
                  Free strategy session, no commitment required.
                </p>
                <button
                  onClick={openCalendly}
                  className="inline-flex items-center gap-2 rounded-xl bg-red-500 px-8 py-4 font-medium text-white transition-all hover:bg-red-600 hover:scale-105"
                >
                  <IconCalendar className="h-5 w-5" />
                  Book a Free Strategy Call
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ProDev Section */}
      <section className="relative bg-black py-20" id="prodev">
        <div className="absolute inset-0 bg-gradient-to-b from-red-950/20 via-transparent to-transparent" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-red-500/30 bg-gradient-to-br from-neutral-900 via-neutral-900/95 to-red-950/30"
          >
            <div className="grid lg:grid-cols-2">
              {/* Left Content */}
              <div className="p-8 md:p-12 lg:p-16">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
                    <IconUsers className="h-4 w-4" />
                    Monthly Retainer
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-green-500/20 border border-green-500/30 px-3 py-1.5 text-xs font-semibold text-green-400">
                    🎉 50% Off First Month
                  </span>
                </div>
                <h2 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                  Hire a{" "}
                  <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                    ProDev
                  </span>
                </h2>
                <p className="mt-4 text-base text-red-400/80 font-medium">
                  Ideal for teams that already have a product and need ongoing development and scaling support.
                </p>
                <p className="mt-3 text-lg text-neutral-400">
                  Get a dedicated developer on monthly retainer. AI engineers, full-stack developers, 
                  mobile experts—scale your team with top-tier talent.
                </p>
                
                <div className="mt-8">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="text-4xl font-bold text-green-400">$1,000</span>
                    <span className="text-lg text-neutral-400">first month</span>
                    <span className="text-neutral-600">•</span>
                    <span className="text-2xl font-bold text-white">$2,000</span>
                    <span className="text-lg text-neutral-400">/month after</span>
                  </div>
                  <p className="mt-2 text-sm text-neutral-500">
                    Cancel anytime. No long-term contracts.
                  </p>
                </div>

                <ul className="mt-8 space-y-3">
                  {[
                    "40+ hours/week dedicated developer",
                    "AI, Web, Mobile & Backend experts",
                    "Direct communication & weekly reports",
                    "Code reviews & bug fixes included",
                  ].map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-neutral-300">
                      <IconCheck className="h-5 w-5 flex-shrink-0 text-red-500" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                  <a
                    href="/prodev"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-red-500 px-8 py-4 font-medium text-white transition-all hover:bg-red-600"
                  >
                    Explore ProDev <IconArrowRight className="h-4 w-4" />
                  </a>
                  <button
                    onClick={openCalendly}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-500/30 px-8 py-4 font-medium text-white transition-all hover:bg-red-500/10"
                  >
                    Book a Call
                  </button>
                </div>
              </div>

              {/* Right Image Grid */}
              <div className="relative hidden lg:block">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-neutral-900/80" />
                <div className="grid h-full grid-cols-2 gap-2 p-4">
                  <div className="space-y-2">
                    <div className="relative h-1/2 overflow-hidden rounded-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop" 
                        alt="AI Development" 
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-sm font-medium text-white">AI Engineers</span>
                    </div>
                    <div className="relative h-1/2 overflow-hidden rounded-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop" 
                        alt="Web Development" 
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-sm font-medium text-white">Web Developers</span>
                    </div>
                  </div>
                  <div className="space-y-2 pt-8">
                    <div className="relative h-1/2 overflow-hidden rounded-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop" 
                        alt="Mobile Development" 
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-sm font-medium text-white">Mobile Devs</span>
                    </div>
                    <div className="relative h-1/2 overflow-hidden rounded-xl">
                      <img 
                        src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop" 
                        alt="Backend Development" 
                        className="h-full w-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <span className="absolute bottom-3 left-3 text-sm font-medium text-white">Backend Engineers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cross-link to Pricing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-neutral-700/50 bg-neutral-900/50 p-8">
              <p className="text-lg text-neutral-300">
                Need to build a product from scratch first?
              </p>
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-3 font-medium text-white transition-all hover:border-red-500/50 hover:bg-red-500/20"
              >
                <IconRocket className="h-4 w-4 text-red-500" />
                View Pricing
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative bg-black py-20">
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
              Pricing
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Simple,{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Transparent
              </span>{" "}
              Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-red-400/80 font-medium">
              Perfect for startups building a product from scratch or launching MVP quickly.
            </p>
            <p className="mx-auto mt-3 max-w-2xl text-neutral-400">
              Choose the plan that fits your needs. All plans include dedicated support and regular
              updates.
            </p>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-6"
          >
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <IconCheck className="h-4 w-4 text-green-500" />
              Source code ownership included
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <IconCheck className="h-4 w-4 text-green-500" />
              Delivered in weeks, not months
            </div>
            <div className="flex items-center gap-2 text-sm text-neutral-400">
              <IconCheck className="h-4 w-4 text-green-500" />
              No hidden fees
            </div>
          </motion.div>

          <div className="grid gap-6 md:gap-8 md:grid-cols-3">
            {pricingPlans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col rounded-2xl border p-6 md:p-8 ${
                  plan.popular
                    ? "border-red-500 bg-gradient-to-b from-red-500/20 to-transparent"
                    : plan.isEnterprise
                    ? "border-red-500/30 bg-gradient-to-br from-neutral-800/50 via-neutral-900/50 to-red-950/30"
                    : "border-red-500/20 bg-neutral-900/50"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-red-500 px-4 py-1 text-sm font-medium text-white">
                    Most Popular
                  </div>
                )}
                {plan.isEnterprise && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full border border-red-500/50 bg-neutral-900 px-4 py-1 text-sm font-medium text-red-400">
                    Custom Solution
                  </div>
                )}
                <div className="mb-5">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <p className="mt-2 text-sm text-neutral-400">{plan.description}</p>
                </div>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-neutral-400">{plan.period}</span>}
                  {!plan.period && !plan.isEnterprise && (
                    <span className="ml-2 text-sm text-neutral-500">one-time</span>
                  )}
                </div>
                {/* Bonus line */}
                <div className="mb-6 flex items-center gap-2 rounded-lg bg-green-500/10 border border-green-500/20 px-3 py-2">
                  <span className="text-sm">🎁</span>
                  <span className="text-xs text-green-400 font-medium">
                    Includes 2 days of free development
                  </span>
                </div>
                <ul className="mb-6 space-y-3 flex-grow">
                  {plan.features.map((feature, featureIdx) => (
                    <li key={featureIdx} className="flex items-center gap-3 text-sm text-neutral-300">
                      <IconCheck className="h-4 w-4 flex-shrink-0 text-red-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={openCalendly}
                  className={`block w-full rounded-xl py-3.5 text-center font-medium transition-all ${
                    plan.popular
                      ? "bg-red-500 text-white hover:bg-red-600 hover:scale-[1.02]"
                      : plan.isEnterprise
                      ? "bg-gradient-to-r from-red-600 to-red-500 text-white hover:from-red-500 hover:to-red-400"
                      : "border border-red-500/30 text-white hover:bg-red-500/10"
                  }`}
                >
                  {plan.cta}
                </button>
                {/* Reassurance text */}
                <p className="mt-3 text-center text-xs text-neutral-500">
                  {plan.isEnterprise ? "Custom scope & timeline" : "Typical delivery: 4-6 weeks"}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Bottom reassurance */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-8 text-center text-sm text-neutral-500"
          >
            All plans include dedicated support, regular updates, and full source code ownership.
          </motion.p>

          {/* Cross-link to Monthly Retainer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-neutral-700/50 bg-neutral-900/50 p-8">
              <p className="text-lg text-neutral-300">
                Already have a product and need continuous development?
              </p>
              <a
                href="#prodev"
                className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-6 py-3 font-medium text-white transition-all hover:border-red-500/50 hover:bg-red-500/20"
              >
                <IconUsers className="h-4 w-4 text-red-500" />
                Monthly Retainer
                <IconArrowRight className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative bg-black py-20">
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              Testimonials
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              What Our{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Clients Say
              </span>
            </h2>
          </motion.div>

          <InfiniteMovingCards items={testimonials} direction="left" speed="slow" />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative bg-black py-20">
        <div className="absolute inset-0 bg-grid opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-16 text-center"
          >
            <span className="mb-4 inline-block rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400">
              Get Started
            </span>
            <h2 className="mt-4 text-4xl font-bold text-white md:text-5xl">
              Let&apos;s Build{" "}
              <span className="bg-gradient-to-r from-red-400 to-red-600 bg-clip-text text-transparent">
                Together
              </span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-neutral-400">
              Ready to bring your vision to life? Book a call and let&apos;s discuss how we can help.
            </p>
          </motion.div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Calendly Embed */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-red-500/20 bg-neutral-900/50"
            >
              <div
                className="calendly-inline-widget h-[700px] w-full"
                data-url={CALENDLY_URL}
              />
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-8">
                <div>
                  <h3 className="mb-4 text-2xl font-bold text-white">Prefer to reach out directly?</h3>
                  <p className="text-neutral-400">
                    Send us a message or connect on your preferred platform. We typically respond
                    within 2-4 hours.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={meetingEmailLink}
                    className="flex items-center gap-4 rounded-xl border border-red-500/20 bg-neutral-900/50 p-4 transition-all hover:border-red-500/40 hover:bg-neutral-900"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/20">
                      <IconMail className="h-6 w-6 text-red-500" />
                    </div>
                    <div>
                      <div className="font-medium text-white">Email Us</div>
                      <div className="text-sm text-neutral-400">{EMAIL}</div>
                    </div>
                  </a>

                  <a
                    href={whatsappMeetingLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 rounded-xl border border-red-500/20 bg-neutral-900/50 p-4 transition-all hover:border-red-500/40 hover:bg-neutral-900"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20">
                      <svg
                        className="h-6 w-6 text-green-500"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-white">WhatsApp</div>
                      <div className="text-sm text-neutral-400">Chat with us instantly</div>
                    </div>
                  </a>
                </div>

                {/* Social Links */}
                <div className="pt-4">
                  <div className="mb-4 text-sm text-neutral-400">Follow us</div>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-neutral-900/50 text-neutral-400 transition-all hover:border-red-500/40 hover:bg-neutral-900 hover:text-red-500"
                    >
                      <IconBrandTwitter className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-neutral-900/50 text-neutral-400 transition-all hover:border-red-500/40 hover:bg-neutral-900 hover:text-red-500"
                    >
                      <IconBrandLinkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-red-500/20 bg-neutral-900/50 text-neutral-400 transition-all hover:border-red-500/40 hover:bg-neutral-900 hover:text-red-500"
                    >
                      <IconBrandGithub className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-500/10 bg-black py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <Link href="/" className="flex items-center gap-3 text-2xl font-bold text-white group" aria-label="Prodone Home">
              <img 
                src="/images/logo-nobg.png" 
                alt="Prodone Logo" 
                className="h-10 w-10 rounded-lg transition-transform group-hover:scale-105"
                width={40}
                height={40}
              />
              <span><span className="text-red-500">Pro</span>Done</span>
            </Link>
            <div className="flex gap-8 text-sm text-neutral-400">
              <a href="#services" className="hover:text-red-400 transition-colors">
                Services
              </a>
              <a href="#portfolio" className="hover:text-red-400 transition-colors">
                Portfolio
              </a>
              <a href="#pricing" className="hover:text-red-400 transition-colors">
                Pricing
              </a>
              <a href="#contact" className="hover:text-red-400 transition-colors">
                Contact
              </a>
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
