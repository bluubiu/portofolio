"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";

type TextGenerateEffectProps = {
  words: string;
  className?: string;
  threshold?: number;
  colorAfterThreshold?: string;
};

export const TextGenerateEffect = ({
  words,
  className,
  threshold = 3,
  colorAfterThreshold = "text-[#CBACF9]",
}: TextGenerateEffectProps) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");

  useEffect(() => {
    animate(
      "span",
      { opacity: 1 },
      {
        duration: 2,
        delay: stagger(0.2),
      }
    );
  }, [animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="flex flex-wrap gap-x-1">
        {wordsArray.map((word, idx) => (
          <motion.span
            key={word + idx}
            className={cn(
              idx > threshold
                ? `${colorAfterThreshold}`
                : "dark:text-white text-black",
              "opacity-0"
            )}
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="leading-snug tracking-wide">{renderWords()}</div>
      </div>
    </div>
  );
};
