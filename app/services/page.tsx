"use client";

import { useState } from "react";
import Link from "next/link";
import { PiCheckCircleFill } from "react-icons/pi";
import Navbar from "@/components/navbar";

const services = [
  {
    index: 0,
    name: "Tax & Legal",
    features: [
      "Regulatory advisory and compliance",
      "Tax optimization and planning",
      "Legal counsel and representation",
      "Proactive risk assessments",
    ],
    style:
      " rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Tailored guidance to help you navigate complex regulations, lower liabilities, and stay ahead of evolving requirements.",
    button: "Learn More",
  },
  {
    index: 1,
    name: "Audit & Assurance",
    features: [
      "Independent financial reviews",
      "Comprehensive compliance checks",
      "Controls and processes assessments",
      "Confidence in reporting and disclosures",
    ],
    style:
      " rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Objective evaluations of financial records and processes, ensuring transparency, accuracy, and trust for stakeholders.",
    button: "Learn More",
  },
  {
    index: 2,
    name: "Business Advisory",
    features: [
      "Strategic planning and growth consulting",
      "Market research and insights",
      "Risk mitigation strategies",
      "Operational efficiency support",
    ],
    style:
      " rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Actionable plans to tackle challenges and capitalize on new opportunities, turning your vision into tangible success.",
    button: "Learn More",
  },
  {
    index: 3,
    name: "Integrated Tax Strategies",
    features: [
      "Custom-tailored tax roadmaps",
      "Cross-border compliance",
      "Detailed reporting and analytics",
      "Continuous optimization",
    ],
    style:
      " rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Holistic approaches that simplify compliance, reduce costs, and position your organization for sustained financial health.",
    button: "Learn More",
  },
  {
    index: 4,
    name: "Financial Appraisals",
    features: [
      "Valuation of assets and businesses",
      "Detailed audit documentation",
      "Uncovering inefficiencies",
      "Independent, unbiased reporting",
    ],
    style:
      " rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Reliable insights into the true value of your business or assets, supporting informed decision-making and negotiations.",
    button: "Learn More",
  },
  {
    index: 5,
    name: "Strategic Advisory",
    features: [
      "Guidance on mergers and acquisitions",
      "Industry benchmarking",
      "Roadmaps for sustainable scaling",
      "Specialized sector insights",
    ],
    style:
      " rounded-3xl py-10 bg-clip-text text-transparent bg-gradient-to-b from-neutral-300 to-neutral-50",
    description:
      "Elevate your growth trajectory with data-driven recommendations and operational roadmaps customized to your goals.",
    button: "Learn More",
  },
];

const ServicesPage = () => {
  return (
    <div
      className="w-full md:items-center md:justify-center
      bg-black/[0.96] antialiased 
      bg-grid-white/[0.02] relative overflow-hidden"
    >
      <Navbar />

      <div className="flex items-center justify-center flex-col">
        {/* SECTION HEADING */}
        <div className="text-5xl pb-10 md:pb-20 text-slate-300 px-6 text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500 bg-opacity-50">
          Our Key Services <br /> Empowering Your Path to Growth
        </div>

        {/* SERVICES GRID (similar layout) */}
        <div className="grid md:grid-cols-3 gap-6 px-6 md:w-4/5 2xl:w-3/4 cursor-pointer pb-20 items-start">
          {services.map((service) => (
            <div
              key={service.name}
              className="h-full flex flex-col justify-between border rounded-3xl px-6"
            >
              {/* CARD TOP SECTION */}
              <div className={service.style}>
                <div className="text-4xl flex items-center font-medium">
                  {service.name}
                </div>

                {/* Description */}
                <div className="py-6">{service.description}</div>

                {/* Features List */}
                <ul>
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="text-lg py-2 flex space-x-2 items-center"
                    >
                      <PiCheckCircleFill className="text-green-600 mr-2 text-xl" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* ACTION BUTTON */}
              {/* <div>
                <Link
                  href="/contact"
                  className="rounded-3xl my-4 py-2 text-white w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                >
                  {service.button}
                </Link>
              </div> */}
            </div>
          ))}
        </div>
        <div>
                <Link
                  href="/contact"
                  className="rounded-3xl my-4 py-2 text-white pl-4 pr-4 w-full mx-auto items-center flex justify-center bg-gradient-to-r from-emerald-500 to-blue-300"
                >
                  Learn more about our services
                </Link>
              </div>
      </div>
      
    </div>
  );
};

export default ServicesPage;
