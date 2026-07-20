"use client";

import React from "react";
import { workExperience } from "@/data";
import { Button } from "./ui/MovingBorders";

const Experience = () => {
  return (
    <section id="experience" className="py-20 w-full">
      <h1 className="heading text-center">
        My <span className="text-purple">Experience</span>
      </h1>

      <div className="w-full mt-20 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background:
                "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
              borderRadius: `calc(1.75rem * 0.96)`,
            }}
            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-4">
              <img
                src={card.thumbnail}
                alt={card.title}
                className="lg:w-32 md:w-24 w-20 object-contain"
              />
              <div className="lg:ms-5 text-start">
                <h2 className="text-xl md:text-2xl font-bold">{card.title}</h2>
                <p className="mt-2 text-sm text-white font-medium">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Experience;
