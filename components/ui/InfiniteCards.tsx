"use client";

import React, { useEffect, useRef, useState } from "react";

interface Item {
  quote: string;
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
      className={`scroller relative z-20 max-w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] ${className}`}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap ${
          start && "animate-scroll"
        } ${pauseOnHover && "hover:[animation-play-state:paused]"}`}
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
              <div className="group relative overflow-hidden h-[6rem] w-[12rem] rounded-2xl border border-slate-800 bg-black/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-slate-500 hover:shadow-2xl flex-shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute inset-0 flex items-center justify-center">
                  <img
                    src={item.quote}
                    alt={item.name || "Technology logo"}
                    className="h-12 w-12 object-contain filter brightness-90 group-hover:brightness-110 transition-all duration-300 group-hover:scale-110"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-60 blur-xl transition-all duration-300 -z-10"></div>
              </div>
            )}
          </li>
        ))}
      </ul>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scrollLeft {
          animation: scrollLeft linear infinite;
        }

        .animate-scrollRight {
          animation: scrollRight linear infinite;
        }

        .animate-scroll {
          animation: scrollLeft linear infinite;
        }
      `}</style>
    </div>
  );
};
