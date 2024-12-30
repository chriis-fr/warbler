import { HoverEffect } from "@/components/ui/card-hover-effect";
import { PiAppStoreLogo, PiHeadsetFill, PiLock, PiMegaphone, PiMonitor, PiStorefront } from "react-icons/pi";

export function CardHoverEffectDemo() {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={projects} />
    </div>
  );
}
export const projects = [
    {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMonitor className="w-8 h-8 text-blue-600" /></div>,
        title: "Comprehensive Regulatory Pathways",
        description:
          "We provide end-to-end guidance on local and global requirements, giving you freedom to innovate while remaining in step with the rules.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiStorefront className="w-8 h-8 text-blue-600" /></div>,
        title: "Integrated Tax Strategies",
        description:
          "Our solutions help lower your burden and address every legal nuance, safeguarding both short-term stability and long-term growth.",
       
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiLock className="w-8 h-8 text-blue-600" /></div>,
        title: "Independent Financial Appraisals",
        description:
          "We deliver objective evaluations of financial records, revealing both key strengths and hidden inefficiencies to support confident decision-making.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiMegaphone className="w-8 h-8 text-blue-600" /></div>,
        title: "Proactive Risk & Compliance Checks",
        description:
          "By regularly reviewing internal safeguards and procedures, we keep your organization aligned with shifting industry benchmarks.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiAppStoreLogo className="w-8 h-8 text-blue-600" /></div>,
        title: "Strategic Advisory & Insights",
        description:
          "Count on our consulting expertise to uncover opportunities, refine your operational blueprint, and steer your business toward ambitious goals.",
      
      },
      {
        icon : <div className="bg-blue-100 p-4 rounded-full"><PiHeadsetFill className="w-8 h-8 text-blue-600" /></div>,
        title: "Holistic Business Empowerment",
        description:
          "We streamline the complexities of running a company so you can devote your full attention to scaling, innovating, and thriving in dynamic markets.",
     
      },
];