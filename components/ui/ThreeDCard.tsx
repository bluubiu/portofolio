"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

const ThreeDCard = ({ children }: { children: React.ReactNode }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const rotateX = useTransform(y, [0, 1], [15, -15]);
  const rotateY = useTransform(x, [0, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;

    const posX = (e.clientX - rect.left) / rect.width;
    const posY = (e.clientY - rect.top) / rect.height;

    x.set(posX);
    y.set(posY);
  };

  const handleMouseLeave = () => {
    animate(x, 0.5, { type: "spring", stiffness: 200, damping: 15 });
    animate(y, 0.5, { type: "spring", stiffness: 200, damping: 15 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 1000 }}
      className="w-full h-full"
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="w-full h-full will-change-transform"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ThreeDCard;
