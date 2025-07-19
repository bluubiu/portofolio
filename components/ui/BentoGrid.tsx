import React from "react";
import clsx from "clsx";

interface BentoGridProps {
  className?: string;
  children: React.ReactNode;
}

export const BentoGrid: React.FC<BentoGridProps> = ({
  className,
  children,
}) => {
  return (
    <div
      className={clsx(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
        className
      )}
    >
      {children}
    </div>
  );
};

interface BentoGridItemProps {
  id?: string;
  title: string;
  description: string;
  className?: string;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}

export const BentoGridItem: React.FC<BentoGridItemProps> = ({
  id,
  title,
  description,
  className,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}) => {
  return (
    <div
      id={id}
      className={clsx(
        "relative flex flex-col justify-between p-6 rounded-2xl border border-white/[0.1] bg-black/[0.4] backdrop-blur-md transition-all hover:scale-[1.02]",
        className
      )}
    >
      {img && (
        <img
          src={img}
          alt={title}
          className={clsx("w-12 h-12 mb-4", imgClassName)}
        />
      )}
      <div>
        <h3
          className={clsx("text-lg font-semibold text-white", titleClassName)}
        >
          {title}
        </h3>
        <p className="text-sm text-gray-300 mt-2">{description}</p>
      </div>
      {spareImg && (
        <img
          src={spareImg}
          alt="spare"
          className="absolute right-4 bottom-4 w-6 h-6 opacity-50"
        />
      )}
    </div>
  );
};
