"use client";

import { useState } from "react";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

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
  return (
    <div className=" mx-auto py-20 bg-gray-200">
      {/* HEADER TEXT */}
      <div
        className="text-4xl pb-5 md:text-5xl text-left
        bg-clip-text text-transparent bg-gradient-to-b
        from-blue-500 to-neutral-50 bg-opacity-50 mt-20"
      >
        Streamline your business with our services
      </div>
      <p className="mt-4 text-lg font-normal text-black max-w-lg text-left">
        At <span className="font-bold text-yellow-300">Warbler</span>, we are
        dedicated to making a meaningful and sustainable impact. Partner with us
        to empower your business growth, whether you&apos;re expanding your
        reach, driving change, or thriving locally in this dynamic region.
      </p>

      {/* SERVICES GRID - 3 COLUMNS ON DESKTOP, 1 COLUMN ON MOBILE */}
      <div className="grid grid-cols-1 md:grid-cols-3  gap-6 px-6 mt-10">
        {services.map((service, index) => (
          <HoverCard key={index} item={service} />
        ))}
      </div>
    </div>
  );
};

// Define types for the HoverCard component
const HoverCard = ({ item }: { item: ServiceItem }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative block p-4 border rounded-2xl bg-black text-white shadow-lg hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* HOVER BACKGROUND EFFECT */}
      {hovered && (
        <div className="absolute inset-0 h-full w-full bg-white/10 rounded-2xl transition-opacity duration-200"></div>
      )}

      {/* CARD CONTENT */}
      <div className="relative z-50">
        <div className="p-4">
          <div className="flex items-center">{item.icon}</div>
          <h4 className="text-white font-bold tracking-wide mt-4">{item.title}</h4>
          <p className="mt-4 text-neutral-400 tracking-wide leading-relaxed text-sm">
            {item.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
