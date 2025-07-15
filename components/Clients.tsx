"use client";

import React from "react";
import { certificates, companies } from "@/data";
import { InfiniteMovingCards } from "./ui/InfiniteCards";

const Clients = () => {
  return (
    <section id="certificate" className="py-20">
      {/* Section Title */}
      <h1 className="heading">
        My journey of
        <span className="text-purple"> certifications</span>
      </h1>

      <div className="flex flex-col items-center gap-10 mt-10">
        {/* Certificates Infinite Moving Cards */}
        <div className="w-full flex justify-center">
          <div className="h-[40vh] md:h-[30rem] w-full max-w-7xl rounded-md flex items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
              items={certificates}
              direction="left"
              speed="normal"
              pauseOnHover={true}
              type="card"
            />
          </div>
        </div>

        {/* Companies Infinite Moving Cards */}
        <div className="w-full flex justify-center">
          <div className="h-[20vh] md:h-[15rem] w-full max-w-7xl rounded-md flex items-center justify-center relative overflow-hidden">
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

export default Clients;
