"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[20rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  href,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  href?: string;
}) => {
  const Wrapper = href ? "a" : "div";
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={cn(
        "group/bento relative row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-red-500/20 bg-gradient-to-br from-neutral-900 to-neutral-950 p-4 shadow-lg transition duration-200 hover:shadow-xl hover:shadow-red-500/10 hover:border-red-500/40",
        href && "cursor-pointer",
        className
      )}
    >
      <Wrapper href={href} className={href ? "absolute inset-0 z-10" : "hidden"} />
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        {icon}
        <div className="mb-2 mt-2 font-sans font-bold text-neutral-200 flex items-center justify-between">
          <span>{title}</span>
          {href && (
            <svg className="h-4 w-4 text-red-500 opacity-0 group-hover/bento:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          )}
        </div>
        <div className="font-sans text-sm font-normal text-neutral-400">
          {description}
        </div>
      </div>
    </motion.div>
  );
};
