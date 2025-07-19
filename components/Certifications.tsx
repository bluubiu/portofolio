"use client";

import React from "react";
import { certificates, companies } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Certificate = () => {
  return (
    <section
      id="certificate"
      className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <h1 className="heading text-center">
        My journey of <span className="text-purple">certifications</span>
      </h1>

      <div className="flex flex-col items-center gap-16 mt-12 w-full">
        <div className="w-full flex justify-center">
          <div
            className="w-full max-w-7xl rounded-lg flex items-center justify-center relative overflow-hidden
              h-[28rem] sm:h-[32rem] md:h-[36rem] lg:h-[40rem] px-2"
          >
            <InfiniteMovingCards
              items={certificates}
              direction="left"
              speed="normal"
              pauseOnHover={true}
              type="card"
            />
          </div>
        </div>

        <div className="w-full flex justify-center">
          <div
            className="w-full max-w-7xl rounded-lg flex items-center justify-center relative overflow-hidden
              h-[10rem] sm:h-[12rem] md:h-[14rem] lg:h-[16rem] px-2"
          >
            <InfiniteMovingCards
              items={companies.map((c) => ({
                quote: c.img,
                name: "",
                title: "",
              }))}
              direction="right"
              speed="normal"
              pauseOnHover={true}
              type="logo"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
