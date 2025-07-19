"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

interface Item {
  quote: string; // image src or logo
  name: string;
  title: string;
}

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  type = "card",
  className,
}: {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  type?: "card" | "logo";
  className?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    // Duplicate items for infinite scroll effect
    const originals = Array.from(scroller.children);
    originals.forEach((child) => {
      scroller.appendChild(child.cloneNode(true));
    });

    // Set CSS variables for animation
    container.style.setProperty(
      "--animation-direction",
      direction === "left" ? "forwards" : "reverse"
    );
    container.style.setProperty(
      "--animation-duration",
      speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
    );

    // Start animation
    setStart(true);
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex gap-8 py-4 whitespace-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx} className="inline-block">
            {type === "card" ? (
              <div className="w-[90vw] sm:w-[70vw] md:w-[40vw] lg:w-[30vw] p-4 md:p-6 bg-[#0a0c1d] border border-slate-800 rounded-xl md:rounded-2xl flex-shrink-0">
                <div className="aspect-video w-full flex items-center justify-center mb-4 overflow-hidden rounded-md">
                  <img
                    src={item.quote}
                    alt={item.name}
                    className="object-contain max-w-full max-h-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300">
                    {item.title}
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-16 sm:h-20 md:h-24 aspect-square inline-block">
                <img
                  src={item.quote}
                  alt={item.name || `logo-${idx}`}
                  className="h-full w-auto object-contain"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InfiniteMovingCards;
