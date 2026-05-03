import { cn } from "@/lib/utils";
import React from "react";

type SpotlightProps = {
  className?: string;
  fill?: string;
};

export const Spotlight = ({ className, fill }: SpotlightProps) => {
  return (
    <div
      className={cn(
        "animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 overflow-visible",
        className
      )}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: "150%",
          height: "150%",
          background: `radial-gradient(ellipse at center, ${
            fill || "white"
          } 0%, transparent 50%)`,
          opacity: 0.25,
          transform: "rotate(-35deg) scaleX(2.5) scaleY(0.3)",
        }}
      />
    </div>
  );
};
