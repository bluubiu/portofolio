import { useState } from "react";
import { IoCopyOutline } from "react-icons/io5";
import Lottie from "react-lottie";
import { cn } from "@/lib/utils";
import animationData from "@/data/confetti.json";
import WorldMap from "./world-map";
import GridGlobe from "./GridGlobe";
import MagicButton from "../MagicButton";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  id,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  id: number;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists = ["Tailwind", "React", "Typescript"];
  const rightLists = ["Firebase", "Javascript", "GraphQL"];
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "nisaasanti8@gmail.com";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div className={`${id === 6 && "flex justify-center"} h-full`}>
        <div className="w-full h-full absolute">
          {img && id !== 1 && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>

        {id === 1 && (
          <div className="absolute inset-0 z-0">
            <WorldMap
              dots={[
                {
                  start: { lat: 37.7749, lng: -122.4194 },
                  end: { lat: 51.5074, lng: -0.1278 },
                },
                {
                  start: { lat: 40.7128, lng: -74.006 },
                  end: { lat: 35.6895, lng: 139.6917 },
                },
                {
                  start: { lat: -33.8688, lng: 151.2093 },
                  end: { lat: 48.8566, lng: 2.3522 },
                },
                {
                  start: { lat: 34.0522, lng: -118.2437 },
                  end: { lat: 55.7558, lng: 37.6173 },
                }, // LA to Moscow
                {
                  start: { lat: 52.52, lng: 13.405 },
                  end: { lat: 1.3521, lng: 103.8198 },
                }, // Berlin to Singapore
                {
                  start: { lat: 19.076, lng: 72.8777 },
                  end: { lat: 35.6762, lng: 139.6503 },
                }, // Mumbai to Tokyo
                {
                  start: { lat: -23.5505, lng: -46.6333 },
                  end: { lat: 40.4168, lng: -3.7038 },
                }, // Sao Paulo to Madrid
                
              ]}
              lineColor="#14b8a6"
            />
          </div>
        )}

        {id === 6 && <div className="absolute inset-0 z-0"></div>}

        {id && (
          <div
            className={cn(
              titleClassName,
              "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
            )}
          >
            <div className="font-sans font-extralight md:max-w-32 md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
              {description}
            </div>
            <div className="font-sans text-lg lg:text-3xl max-w-96 font-bold z-10">
              {title}
            </div>

            {id === 2 && <GridGlobe />}

            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
                <div className="flex flex-col gap-8 md:gap-3 lg:gap-8">
                  {leftLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                  <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                </div>
                <div className="flex flex-col gap-3 md:gap-3 lg:gap-8">
                  <span className="lg:py-4 lg:px-3 py-4 px-3  rounded-lg text-center bg-[#10132E]"></span>
                  {rightLists.map((item, i) => (
                    <span
                      key={i}
                      className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                      lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {id === 6 && (
              <div className="mt-5 relative">
                <div
                  className={`absolute -bottom-5 right-0 ${
                    copied ? "block" : "block"
                  }`}
                >
                  <Lottie options={defaultOptions} height={200} width={400} />
                </div>

                <MagicButton
                  title={copied ? "Email is Copied!" : "Copy my email address"}
                  icon={<IoCopyOutline />}
                  position="left"
                  handleClick={handleCopy}
                  otherClasses="!bg-[#161A31]"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
