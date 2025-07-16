"use client";

import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { cn } from "../../lib/utils";

const CloseIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M18 6l-12 12" />
    <path d="M6 6l12 12" />
  </svg>
);

interface StickyBannerProps {
  className?: string;
  children: React.ReactNode;
  hideOnScroll?: boolean;
}

export const StickyBanner: React.FC<StickyBannerProps> = ({
  className,
  children,
  hideOnScroll = false,
}) => {
  const [open, setOpen] = useState(true);
  const { scrollY } = useScroll();

  React.useEffect(() => {
    if (!hideOnScroll) return;

    const unsubscribe = scrollY.on("change", (latest) => {
      if (latest > 40 && open) setOpen(false);
      else if (latest <= 40 && !open) setOpen(true);
    });

    return () => unsubscribe();
  }, [hideOnScroll, scrollY, open]);

  if (!open) return null;

  return (
    <motion.div
      className={cn(
        "fixed inset-x-0 top-0 z-50 flex min-h-11 w-full items-center justify-center bg-blue-500 px-4 py-1 text-white",
        className
      )}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}

      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
        onClick={() => setOpen(false)}
        aria-label="Close banner"
      >
        <CloseIcon className="h-5 w-5 text-white" />
      </motion.button>
    </motion.div>
  );
};

// Sample fixed Navbar component to use below StickyBanner
export const FixedNavbar: React.FC = () => (
  <nav className="fixed top-11 left-0 w-full z-40 bg-gray-800 text-white p-4 flex items-center justify-between">
    <div className="max-w-8xl mx-auto w-full flex items-center justify-between">
      <span>Logo</span>
      <div className="flex space-x-4">
        <a href="#" className="text-white">Products</a>
        <a href="#" className="text-white">Solutions</a>
        <a href="#" className="text-white">Partners</a>
        <a href="#" className="text-white">Contact</a>
        <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700">See a demo</a>
      </div>
    </div>
  </nav>
);

// Usage note:
// Place <StickyBanner> at the top, <FixedNavbar> below it, and add <div className="pt-28"> to your main content.
