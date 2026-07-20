"use client";

import React from "react";
import dynamic from "next/dynamic";
import { AnimatePresence, motion } from "framer-motion";

const CanvasRevealEffect = dynamic(
  () => import("./ui/CanvasRevealEffect").then((mod) => mod.CanvasRevealEffect),
  { ssr: false }
);

const Approach: React.FC = () => {
  return (
    <section className="w-full py-20">
      <h1 className="heading">
        My <span className="text-purple">Approach</span>
      </h1>
      <div className="my-20 flex flex-col lg:flex-row items-center justify-center w-full gap-4">
        <Card
          title="Vision Mapping & Strategy"
          icon={<AceternityIcon order="Phase 1" />}
          des="We'll work together to define your website's goals, target audience, and key functionalities. From user flows to content structure, we map everything out before taking a single step forward."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName="bg-emerald-900 rounded-3xl overflow-hidden"
          />
        </Card>
        <Card
          title="Development & Progress Reviews"
          icon={<AceternityIcon order="Phase 2" />}
          des="Once the plan is approved, I'll start building it out. From wireframes to clean, functional code, you'll receive regular updates at every stage of the development process."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-pink-900 rounded-3xl overflow-hidden"
            colors={[
              [255, 166, 158],
              [221, 255, 247],
            ]}
            dotSize={2}
          />
        </Card>
        <Card
          title="Finalization & Launch"
          icon={<AceternityIcon order="Phase 3" />}
          des="Time to bring it all to life. With the approved designs in hand, I transform them into fully functional code — building your site from the ground up until it's ready to go live."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName="bg-sky-600 rounded-3xl overflow-hidden"
            colors={[[125, 211, 252]]}
          />
        </Card>
      </div>
    </section>
  );
};

export default Approach;

// Card Component
const Card: React.FC<{
  title: string;
  icon: React.ReactNode;
  des: string;
  children?: React.ReactNode;
}> = ({ title, icon, des, children }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="border border-black/[0.2] group/canvas-card flex items-center justify-center
        dark:border-white/[0.2] max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl"
      style={{
        background:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      {/* Decorative corner icons */}
      {[
        "-top-3 -left-3",
        "-bottom-3 -left-3",
        "-top-3 -right-3",
        "-bottom-3 -right-3",
      ].map((pos, i) => (
        <Icon
          key={i}
          className={`absolute h-10 w-10 ${pos} dark:text-white text-black opacity-30`}
        />
      ))}

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 h-full w-full"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-20 px-10 text-center">
        <div
          className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 
                        group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 
                        transition duration-200"
        >
          {icon}
        </div>
        <h2
          className="text-3xl font-bold text-black dark:text-white mt-4 
                       opacity-0 group-hover/canvas-card:opacity-100 
                       group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 
                       transition duration-200"
        >
          {title}
        </h2>
        <p
          className="text-sm text-[#E4ECFF] mt-4 
                      opacity-0 group-hover/canvas-card:opacity-100 
                      group-hover/canvas-card:-translate-y-2 
                      transition duration-200"
        >
          {des}
        </p>
      </div>
    </div>
  );
};

// Phase button icon
const AceternityIcon: React.FC<{ order: string }> = ({ order }) => {
  return (
    <button className="relative inline-flex overflow-hidden rounded-full p-[1px]">
      <span
        className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite]
                        bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
      />
      <span
        className="inline-flex items-center justify-center rounded-full 
                        bg-slate-950 px-5 py-2 text-purple backdrop-blur-3xl
                        font-bold text-2xl"
      >
        {order}
      </span>
    </button>
  );
};

// Plus icon
export const Icon: React.FC<React.SVGProps<SVGSVGElement>> = ({
  className,
  ...rest
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
      {...rest}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
    </svg>
  );
};
