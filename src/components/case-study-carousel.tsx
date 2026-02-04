"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowRight, IconArrowLeft, IconTrendingUp } from "@tabler/icons-react";

export interface CaseStudyMetric {
  value: string;
  label: string;
}

export interface CaseStudySlide {
  logo: string;
  logoImage?: string;
  image: string;
  imageAlt?: string;
  category: string;
  title: string;
  description: string;
  productIntro: string;
  supportingText?: string;
  metrics: CaseStudyMetric[];
  link?: string;
  ctaText?: string;
}

interface CaseStudyCarouselProps {
  slides: CaseStudySlide[];
  autoPlayInterval?: number;
}

export function CaseStudyCarousel({ 
  slides, 
  autoPlayInterval = 6000 
}: CaseStudyCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  }, [slides.length]);

  const goToPrev = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    if (autoPlayInterval <= 0) return;
    const timer = setInterval(goToNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, goToNext]);

  const currentSlide = slides[currentIndex];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
    }),
  };

  return (
    <div className="relative">
      {/* Main Card Container */}
      <div className="relative overflow-hidden rounded-2xl border border-red-500/20 bg-gradient-to-br from-neutral-900 via-neutral-900/98 to-neutral-950">
        
        {/* Navigation Arrows */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-red-500/30 bg-neutral-900/90 text-neutral-400 backdrop-blur-sm transition-all hover:border-red-500/50 hover:bg-neutral-800 hover:text-white"
          aria-label="Previous slide"
        >
          <IconArrowLeft className="h-5 w-5" />
        </button>
        
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-red-500/30 bg-neutral-900/90 text-neutral-400 backdrop-blur-sm transition-all hover:border-red-500/50 hover:bg-neutral-800 hover:text-white"
          aria-label="Next slide"
        >
          <IconArrowRight className="h-5 w-5" />
        </button>

        {/* Slide Content */}
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentIndex}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="p-6 md:p-8 lg:p-10"
          >
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
              {/* LEFT SIDE - Logo & Image */}
              <div className="order-2 lg:order-1">
                {/* Logo */}
                <div className="mb-6 flex items-center justify-center lg:justify-start">
                  {currentSlide.logoImage ? (
                    <img
                      src={currentSlide.logoImage}
                      alt={currentSlide.logo}
                      className="h-10 w-auto object-contain"
                    />
                  ) : (
                    <div className="inline-flex items-center gap-2 rounded-lg border border-red-500/20 bg-neutral-800/50 px-4 py-2">
                      <span className="text-xl font-bold text-white tracking-tight">
                        {currentSlide.logo}
                      </span>
                    </div>
                  )}
                </div>

                {/* Product Screenshot */}
                <div className="relative overflow-hidden rounded-xl border border-red-500/10 bg-neutral-950 shadow-2xl shadow-black/50">
                  {/* Browser header */}
                  <div className="flex items-center gap-2 border-b border-red-500/10 bg-neutral-900/80 px-4 py-3">
                    <div className="h-3 w-3 rounded-full bg-red-500/60" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                    <div className="h-3 w-3 rounded-full bg-green-500/60" />
                    <div className="ml-4 flex-1 rounded-md bg-neutral-800/60 px-3 py-1">
                      <span className="text-xs text-neutral-500 font-mono">
                        app.{currentSlide.logo.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')}.com
                      </span>
                    </div>
                  </div>
                  
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={currentSlide.image}
                      alt={currentSlide.imageAlt || currentSlide.title}
                      className="h-full w-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/20 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE - Content */}
              <div className="order-1 flex flex-col justify-center lg:order-2">
                {/* Category Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center gap-2 rounded-full border border-red-500/30 bg-red-500/10 px-4 py-1.5 text-sm font-medium text-red-400">
                    {currentSlide.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-white md:text-3xl lg:text-4xl leading-tight">
                  {currentSlide.title}
                </h3>

                {/* Description */}
                <p className="mb-4 text-neutral-400 leading-relaxed">
                  {currentSlide.description}
                </p>

                {/* Product Intro */}
                <p className="mb-2 text-lg font-semibold text-white/90">
                  {currentSlide.productIntro}
                </p>

                {/* Supporting Text */}
                {currentSlide.supportingText && (
                  <p className="mb-6 text-sm text-neutral-500 leading-relaxed">
                    {currentSlide.supportingText}
                  </p>
                )}

                {/* Metrics */}
                <div className="mt-4 grid grid-cols-3 gap-4">
                  {currentSlide.metrics.map((metric, idx) => (
                    <div key={idx} className="text-center lg:text-left">
                      <div className="flex items-center justify-center lg:justify-start gap-1">
                        <IconTrendingUp className="h-4 w-4 text-green-500" />
                        <span className="text-2xl font-bold text-white md:text-3xl">
                          {metric.value}
                        </span>
                      </div>
                      <div className="text-xs text-neutral-500 mt-1">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                {currentSlide.link && (
                  <div className="mt-6">
                    <a
                      href={currentSlide.link}
                      className="inline-flex items-center gap-2 text-red-400 font-medium hover:text-red-300 transition-colors group"
                    >
                      <span className="group-hover:underline underline-offset-4">
                        {currentSlide.ctaText || "View Case Study"}
                      </span>
                      <IconArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Pagination Dots */}
      <div className="mt-6 flex items-center justify-center gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              idx === currentIndex
                ? "w-8 bg-red-500"
                : "w-2.5 bg-neutral-600 hover:bg-neutral-500"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
