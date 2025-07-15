"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  type = "card",
  className,
}: {
  items: {
    quote: string; // image src for logo mode
    name: string;
    title: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  type?: "card" | "logo";
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        scrollerRef.current!.appendChild(duplicatedItem);
      });
      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );
      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "normal" ? "40s" : "80s"
      );
      setStart(true);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-screen overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx}>
            {type === "card" ? (
              <div
                className="w-[80vw] md:w-[30vw] flex-shrink-0 relative rounded-2xl border border-slate-800 p-4 md:p-6 flex flex-col items-center bg-[#0a0c1d]"
                key={idx}
              >
                <div className="w-full aspect-video flex items-center justify-center overflow-hidden rounded-md">
                  <img
                    src={item.quote}
                    alt={item.name}
                    className="object-contain max-h-full max-w-full"
                  />
                </div>
                <div className="text-center mt-4">
                  <span className="block text-lg md:text-xl font-bold text-white">
                    {item.name}
                  </span>
                  <span className="block text-sm md:text-base text-gray-300">
                    {item.title}
                  </span>
                </div>
              </div>
            ) : (
              <img
                src={item.quote}
                alt={item.name || `logo-${idx}`}
                className="h-16 w-auto object-contain"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
