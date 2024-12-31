"use client"
import React, {useRef} from "react";
import Brands from "../brands";
import Navbar from "@/components/navbar";


export default function Page() {
    const brandsRef = useRef<HTMLDivElement>(null);

    const scrollToBrands = () => {
        brandsRef.current?.scrollIntoView({ behavior: "smooth" });
      };

      return(
        <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
            <Navbar />
            <div ref={brandsRef}>
                <Brands />
            </div>
        </div>
      )
}