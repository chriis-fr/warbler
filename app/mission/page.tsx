"use client";
import React, { useRef } from "react";
import Navbar from "@/components/navbar";
import { cn } from "@/lib/utils";
import { Lora } from "next/font/google";
import { PiCheckCircleFill } from "react-icons/pi";

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const Missions = [
  "Our mission is to empower businesses and individuals by providing expert audit, accounting, and tax consultancy services that drive financial clarity, compliance, and growth.",
  "We are dedicated to delivering tailored solutions with precision, integrity, and excellence, ensuring our clients achieve their financial goals while navigating an ever-evolving regulatory landscape.",
  "Through our commitment to professionalism and client-focused strategies, we aim to be a trusted partner in fostering long-term financial success.",
];

export default function Page() {
  const brandsRef = useRef<HTMLDivElement>(null);

  const scrollToBrands = () => {
    brandsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-full min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <div className="p-4 mx-auto relative z-10 w-full pt-20 md:pt-16">
        {/* Title */}
        <div
          className="text-3xl md:pb-8 md:text-5xl lg:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50"
        >
          Our Mission
        </div>

        {/* Mission List */}
        <div className="w-full flex justify-center items-center mt-6">
          <ul className="p-4 w-[90%] md:w-[70%] lg:w-[50%]">
            {Missions.map((item, index) => (
              <li
                className="text-base md:text-lg lg:text-xl text-white py-2 flex space-x-2 items-center"
                key={index}
              >
                <PiCheckCircleFill className="text-green-600 mr-2 text-lg md:text-xl" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Quote Section */}
      <div
        className={cn(
          "flex items-center justify-center text-center bottom-0 text-sm md:text-lg xl:text-2xl pt-10 pb-8 px-6 text-white",
          font.className
        )}
      >
        &quot;We got rid of nearly a dozen different tools because of what
        Warbler does for us.&quot;
      </div>
    </div>
  );
}
