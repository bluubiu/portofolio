"use client";

import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/lib/utils";
import { useHasMounted } from "@/lib/useHasMounted";

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
  const hasMounted = useHasMounted();

  useEffect(() => {
    if (hasMounted) {
      animate("span", { opacity: 1 }, { duration: 2, delay: stagger(0.2) });
    }
  }, [animate, hasMounted]);

  if (!hasMounted) return null;

  return (
    <motion.div
      ref={scope}
      className={cn(
        "flex flex-wrap gap-x-1 justify-center text-center font-bold leading-snug tracking-wide my-4",
        className
      )}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={word + idx}
          className={cn(
            idx > threshold
              ? colorAfterThreshold
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
