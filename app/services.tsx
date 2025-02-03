"use client";

import { useState } from "react";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Define TypeScript interface for service items
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
    title: "Comprehensive Regulatory Pathways",
    description: "We provide end-to-end guidance on local and global requirements, giving you freedom to innovate while remaining in step with the rules.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
    title: "Integrated Tax Strategies",
    description: "Our solutions help lower your burden and address every legal nuance, safeguarding both short-term stability and long-term growth.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
    title: "Independent Financial Appraisals",
    description: "We deliver objective evaluations of financial records, revealing both key strengths and hidden inefficiencies to support confident decision-making.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
    title: "Proactive Risk & Compliance Checks",
    description: "By regularly reviewing internal safeguards and procedures, we keep your organization aligned with shifting industry benchmarks.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
    title: "Strategic Advisory & Insights",
    description: "Count on our consulting expertise to uncover opportunities, refine your operational blueprint, and steer your business toward ambitious goals.",
  },
  {
    icon: <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
    title: "Holistic Business Empowerment",
    description: "We streamline the complexities of running a company so you can devote your full attention to scaling, innovating, and thriving in dynamic markets.",
  },
];

const Services = () => {
  const isMediumScreen = useMediaQuery({ minWidth: 768, maxWidth: 1023 });
  const isSmallScreen = useMediaQuery({ maxWidth: 767 });

  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: isSmallScreen ? 1 : isMediumScreen ? 1.67 : 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    className: "w-full mx-auto cursor-pointer",
  };

  return (
    <div className="max-w-5xl mx-auto py-20">
      {/* HEADER TEXT */}
      <div
        className="text-4xl pb-5 md:text-7xl text-left
        bg-clip-text text-transparent bg-gradient-to-b
        from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Streamline your business with our services
      </div>
      <p className="mt-4 text-lg font-normal text-black max-w-lg text-left mx-auto">
        At <span className="font-bold text-yellow-300">Warbler</span>, we are
        dedicated to making a meaningful and sustainable impact. Partner with us
        to empower your business growth, whether you&apos;re expanding your
        reach, driving change, or thriving locally in this dynamic region.
      </p>

      {/* SERVICES SLIDER */}
      <div className="w-full md:w-full 2xl:w-3/4 px-6 pb-20">
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="px-4  w-full">
              {/* HOVER CARD */}
              <HoverCard item={service} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

// Define types for the HoverCard component
const HoverCard = ({ item }: { item: ServiceItem }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative block p-2 h-full w-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* HOVER BACKGROUND */}
      {hovered && (
        <div className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl transition-opacity duration-200"></div>
      )}

      {/* CARD CONTENT */}
      <div
        className="rounded-2xl h-full w-full p-6 overflow-hidden bg-black border border-transparent dark:border-white/[0.2] hover:border-slate-700 relative z-20"
      >
        <div className="relative z-50">
          <div className="p-4">
            <div className="flex items-center">{item.icon}</div>
            <h4 className="text-zinc-100 font-bold tracking-wide mt-4">{item.title}</h4>
            <p className="mt-4 text-zinc-400 tracking-wide leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
