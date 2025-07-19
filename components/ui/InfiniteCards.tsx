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
  speed = "normal",
  pauseOnHover = true,
  className,
  type = "card",
}: {
  items: Item[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
  type?: "card" | "logo";
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  };

  const getDirection = () => {
    if (scrollerRef.current) {
      if (direction === "left") {
        scrollerRef.current.classList.remove("animate-scrollRight");
        scrollerRef.current.classList.add("animate-scrollLeft");
      } else {
        scrollerRef.current.classList.remove("animate-scrollLeft");
        scrollerRef.current.classList.add("animate-scrollRight");
      }
    }
  };

  const getSpeed = () => {
    if (scrollerRef.current) {
      if (speed === "fast") {
        scrollerRef.current.style.animationDuration = "20s";
      } else if (speed === "slow") {
        scrollerRef.current.style.animationDuration = "60s";
      } else {
        scrollerRef.current.style.animationDuration = "40s";
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li key={idx} className="w-auto max-w-full">
            {type === "card" ? (
              <div className="w-[280px] sm:w-[320px] md:w-[360px] bg-[#0f0f1b] rounded-xl shadow-lg p-4 flex-shrink-0 text-white text-center transition-all duration-300 hover:scale-[1.03] hover:shadow-xl">
                <div className="relative w-full h-40 mb-4 rounded-md overflow-hidden border border-slate-800">
                  <img
                    src={item.quote}
                    alt={item.name}
                    className="w-full h-full object-contain object-top"
                  />
                </div>
                <h3 className="font-semibold text-base sm:text-lg">
                  {item.name}
                </h3>
                <p className="text-sm mt-2 text-white/70">{item.title}</p>
              </div>
            ) : (
              <div className="flex h-[6rem] w-[12rem] items-center justify-center rounded-2xl border border-slate-800 bg-black px-8 py-4">
                <img
                  src={item.quote}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
