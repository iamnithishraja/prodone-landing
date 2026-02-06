"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: React.ReactNode;
    highlight?: boolean;
  }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "fixed inset-x-0 top-4 z-[5000] mx-auto flex max-w-fit items-center justify-center gap-1 rounded-full border border-neutral-800 bg-black/90 px-2 py-2 shadow-2xl backdrop-blur-xl sm:gap-2 sm:px-4",
        className
      )}
    >
      <Link href="/" className="flex items-center gap-2 px-3 py-2 text-lg font-bold text-white sm:text-xl group" aria-label="Prodone Home">
        <img 
          src="/images/logo-nobg.png" 
          alt="Prodone Logo" 
          className="h-7 w-7 rounded-md transition-transform group-hover:scale-110 sm:h-8 sm:w-8"
          width={32}
          height={32}
        />
        <span className="hidden sm:inline"><span className="text-red-500">Pro</span>Done</span>
      </Link>
      
      <div className="hidden items-center gap-1 md:flex">
        {navItems.map((navItem, idx) => {
          const isExternal = navItem.link.startsWith("#") || navItem.link.startsWith("/#");
          const Component = isExternal ? "a" : Link;
          return (
            <Component
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative rounded-full px-4 py-2 text-sm transition-all",
                navItem.highlight 
                  ? "bg-gradient-to-r from-red-600 to-red-500 font-medium text-white hover:from-red-500 hover:to-red-400"
                  : "text-neutral-400 hover:bg-neutral-800/50 hover:text-white"
              )}
            >
              {navItem.name}
            </Component>
          );
        })}
      </div>
      
      <a
        href="#contact"
        className="ml-1 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black transition-all hover:bg-neutral-200 sm:ml-2 sm:px-5"
      >
        Book a Call
      </a>
    </motion.div>
  );
};
