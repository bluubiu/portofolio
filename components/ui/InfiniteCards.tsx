"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  type = "card",
  className,
}: {
  items: {
    quote: string; 
    name: string;
    title: string;
  }[];
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
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      scrollerContent.forEach((item) => {
        const duplicate = item.cloneNode(true);
        scrollerRef.current!.appendChild(duplicate);
      });

      containerRef.current.style.setProperty(
        "--animation-direction",
        direction === "left" ? "forwards" : "reverse"
      );

      containerRef.current.style.setProperty(
        "--animation-duration",
        speed === "fast" ? "20s" : speed === "slow" ? "80s" : "40s"
      );

      setStart(true);
    }
  }, [direction, speed]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 w-full max-w-full overflow-hidden",
        "[mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-8 sm:gap-12 md:gap-16 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx}>
            {type === "card" ? (
              <div className="w-[80vw] sm:w-[60vw] md:w-[30vw] lg:w-[24vw] flex-shrink-0 rounded-xl md:rounded-2xl border border-white/10 p-4 md:p-6 flex flex-col items-center bg-white/5 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300">
                <div className="w-full aspect-video overflow-hidden rounded-md border border-white/10">
                  <img
                    src={item.quote}
                    alt={item.name}
                    loading="lazy"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="text-center mt-4">
                  <span className="block text-base sm:text-lg md:text-xl font-bold text-white">
                    {item.name}
                  </span>
                  <span className="block text-xs sm:text-sm md:text-base text-white/70">
                    {item.title}
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center justify-center h-16 sm:h-20 md:h-24 aspect-square">
                <img
                  src={item.quote}
                  alt={item.name || `logo-${idx}`}
                  loading="lazy"
                  className="h-full w-auto object-contain filter brightness-90 hover:brightness-110 hover:scale-105 transition-all duration-300"
                />
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Animasi keyframes */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll linear infinite;
          animation-direction: var(--animation-direction);
          animation-duration: var(--animation-duration);
        }
      `}</style>
    </div>
  );
};

export default InfiniteMovingCards;
