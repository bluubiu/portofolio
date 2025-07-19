"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useMemo, useRef } from "react";
import  DottedMap  from "dotted-map";

interface Dot {
  start: {
    lat: number;
    lng: number;
    label: string;
  };
  end: {
    lat: number;
    lng: number;
    label: string;
  };
}

const dots: Dot[] = [
  {
    start: { lat: -6.2, lng: 106.816666, label: "Jakarta" },
    end: { lat: -7.797068, lng: 110.370529, label: "Yogyakarta" },
  },
  {
    start: { lat: -6.2, lng: 106.816666, label: "Jakarta" },
    end: { lat: -6.914864, lng: 107.608238, label: "Bandung" },
  },
  {
    start: { lat: -6.2, lng: 106.816666, label: "Jakarta" },
    end: { lat: -8.409518, lng: 115.188919, label: "Bali" },
  },
];

const WorldMap = () => {
  const { theme } = useTheme();
  const svgRef = useRef<SVGSVGElement>(null);

  const mapSVG = useMemo(() => {
    const map = new DottedMap({ height: 100, grid: "diagonal" });
    return map.getSVG({
      radius: 0.22,
      color: theme === "dark" ? "#FFFFFF40" : "#00000040",
      shape: "circle",
      backgroundColor: "transparent",
    });
  }, [theme]);

  const width = 800;
  const height = 400;

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (width / 360);
    const y = (90 - lat) * (height / 180);
    return { x, y };
  };

  const lineColor = theme === "dark" ? "#ffffff" : "#000000";

  return (
    <div className="relative w-full h-full max-w-6xl mx-auto">
      {/* Background Map */}
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(mapSVG)}`}
        alt="Map"
        className="w-full h-auto"
        loading="lazy"
      />

      {/* Animated Paths & Dots */}
      <svg
        ref={svgRef}
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        {dots.map((dot, index) => {
          const start = projectPoint(dot.start.lat, dot.start.lng);
          const end = projectPoint(dot.end.lat, dot.end.lng);

          const dx = end.x - start.x;
          const dy = end.y - start.y;
          const dr = Math.sqrt(dx * dx + dy * dy) * 1.5;

          const path = `M ${start.x},${start.y} A ${dr},${dr} 0 0,1 ${end.x},${end.y}`;

          return (
            <g key={index}>
              <motion.path
                d={path}
                fill="none"
                stroke={lineColor}
                strokeWidth={1}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1.5,
                  delay: index * 0.3,
                  ease: "easeInOut",
                }}
              />
              {[start, end].map((point, j) => (
                <motion.circle
                  key={j}
                  cx={point.x}
                  cy={point.y}
                  r={4}
                  fill={lineColor}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.3 + j * 0.1,
                    ease: "easeOut",
                  }}
                />
              ))}
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default WorldMap;
