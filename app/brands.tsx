import Image from "next/image";
import React from "react";

import { Lora } from "next/font/google";
import { cn } from "@/lib/utils";
import image from "@/public/logo/whitebg.png"

const font = Lora({
  subsets: ["latin"],
  weight: ["400"],
});

const logos = [
  {
    image: "/teamImages/face.jpg",
  },
  {
    image: "/teamImages/face.jpg",
  },
  {
    image: "/teamImages/face.jpg",
  },
  {
    image: "/teamImages/face.jpg",
  },
  {
    image: "/teamImages/face.jpg",
  },
  {
    image: "/teamImages/face.jpg",
  },
];

const Brands = () => {
  return (
    <div>
      <div className=" p-4   mx-auto relative z-10  w-full pt-20 md:pt-32">
        <div className="text-4xl md:pb-8 md:text-7xl text-center 
        bg-clip-text text-transparent bg-gradient-to-b from-purple-500 to-sky-200 bg-opacity-50">
          The best brands <br /> choose us
        </div>

        <p className="mt-4 text-lg font-normal  text-neutral-300 max-w-lg text-center mx-auto">
          From small businesses to large corporations, we have helped many
          brands elevate their business.
        </p>

        <div className="grid grid-cols-3 items-center justify-center mx-auto md:w-4/5 cursor-pointer">
          {logos.map((logo, i) => (
            <div key={i} className="p-4 md:p-20">
              <Image
                priority
                src={logo.image}
                width={500}
                height={500}
                alt="logo"
                className="w-full h-auto max-w-full rounded-lg"
              />
              <div className=" pt-2 text-white m-1">
                <p className="text-2xl font-bold">Member Name</p>
                <p className="text-md">Member description/role</p>
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "flex items-center justify-center text-xl xl:text-2xl pt-10 md:pt-0 pb-4  px-8  text-center text-white  ",
            font.className
          )}
        >
          &quot;We got rid of nearly a dozen different tools because of what
          Warbler does for us.&quot;
        </div>

        <div className="items-center flex justify-center flex-col text-white">
          <Image
            src={image}
            alt="logo"
            width={1000}
            height={1000}
            className="pt-2 xl:pt-0  w-28 xl:w-36 "
          />

          {/* <div className=" text-center">
            <div className="text-sm  font-medium pt-4">Naruto Uzumaki</div>
            <div className="text-sm">Marketing Director, Konoha Software</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Brands;