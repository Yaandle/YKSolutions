"use client";
import React, { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/cn";

export const FlipWords = ({
  words,
  colors,
  duration = 3000,
  className,
}: {
  words: string[];
  colors: string[];
  duration?: number;
  className?: string;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = useCallback(() => {
    setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    setIsAnimating(true);
  }, [words.length]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      startAnimation();
    }, duration);

    return () => clearTimeout(timeout);
  }, [duration, startAnimation]);

  return (
    <AnimatePresence>
      <motion.span
        key={words[currentWordIndex]}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "z-10 inline-block relative text-left px-2",
          className,
          colors[currentWordIndex % colors.length] // Apply color based on index
        )}
      >
        {words[currentWordIndex]}
      </motion.span>
    </AnimatePresence>
  );
};
