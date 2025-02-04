"use client";

import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import SliderOne from "@/components/ui/slider";
import { Spotlight } from "@/components/ui/spotlight";
import Link from "next/link";

import Services from "./services";
import { InfiniteMovingCardsDemo } from "./snippets/infinite-moving-card-snippet";
import Footer from "./footer";

export default function Home() {
  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] bg-white text-black antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar />

      <Spotlight className="hidden md:flex md:-top-80 left-80" fill="white" />
      
      <div className="p-4 mx-auto relative z-10 w-full pt-10 md:pt-20 px-2">
        {/* SECTION HEADER - RESPONSIVE TEXT ALIGNMENT */}
        <div className="text-3xl pb-5 md:text-5xl px-6 text-center md:text-left lg:text-left bg-clip-text text-transparent bg-gradient-to-b from-black to bg-neutral-400 bg-opacity-50">
          Transforming businesses for global expansion
        </div>

        {/* DESCRIPTION SECTION */}
        <div className="mt-4 text-lg font-normal text-center  md:text-left lg:text-left xl:text-left w-full text-black md:w-full mx-auto md:mx-0 px-4">
          At <span className="font-bold text-yellow-300">Warbler Consultancy</span>, we provide custom-tailored solutions for your business, <br />  offering a wide range of services including legal and tax guidance, book-keeping, audit, and assurance.
        </div>

        {/* BUTTON CENTERED FOR MOBILE, LEFT FOR DESKTOP */}
        <div className="flex justify-center">
          <Link
            href={"/book"}
            className="cursor-pointer flex items-center justify-center border rounded-full w-48 p-2 my-6 text-black bg-slate-200"
          >
            Book a call
          </Link>
        </div>

        {/* SLIDER SECTION */}
        <div className="w-full pt-20">
          <SliderOne />
        </div>

        <div id="services">
          <Services />
        </div>

        <InfiniteMovingCardsDemo />
        <Footer />
      </div>
    </div>
  );
}
