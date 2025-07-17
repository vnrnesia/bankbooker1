"use client";

import React, { useState, useEffect } from "react";
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
  onClose?: () => void;
}

export const StickyBanner: React.FC<StickyBannerProps> = ({
  className,
  children,
  hideOnScroll = false,
  onClose,
}) => {
  const [open, setOpen] = useState(true);
  const { scrollY } = useScroll();



  if (!open) return null;

  const handleCloseClick = () => {
    setOpen(false);
    if (onClose) onClose();
  };

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
        onClick={handleCloseClick}
        aria-label="Close banner"
      >
        <CloseIcon className="h-5 w-5 text-white" />
      </motion.button>
    </motion.div>
  );
};
