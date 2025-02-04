const Footer = () => {
  return (
    <footer className="w-full bg-black text-white py-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Logo & Copyright */}
        <div className="text-center md:text-left text-sm">
          <span className="font-semibold text-yellow-300">Warbler</span> &copy; {new Date().getFullYear()} 
          <span className="text-gray-400">. All rights reserved.</span>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="/about" className="text-gray-400 hover:text-white transition duration-300">
            About Us
          </a>
          <a href="/services" className="text-gray-400 hover:text-white transition duration-300">
            Services
          </a>
          <a href="/contact" className="text-gray-400 hover:text-white transition duration-300">
            Contact
          </a>
          <a href="/privacy" className="text-gray-400 hover:text-white transition duration-300">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




// import {
//     Accordion,
//     AccordionContent,
//     AccordionItem,
//     AccordionTrigger,
//   } from "@/components/ui/accordion"



// const Footer = () => {
//     return ( 
//         <div className=" items-center flex  justify-center ">
//         <div className=" md:py-10 border bg-transparent w-full md:w-[60%]
//         rounded-3xl
//         text-black

//         ">
//           <div className=" p-10 md:p-4 md:px-20 ">
//             <div className="text-sm font-bold text-white">
//               Have questions ?
//             </div>
//             <div className="  font-semibold text-sm text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
//               Get answers.
//             </div>
//             <Accordion type="single" collapsible>
//     <AccordionItem value="item-1">
//       <AccordionTrigger>What is Warbler?</AccordionTrigger>
//       <AccordionContent>
//         <span className="font-bold text-yellow-700">Warbler</span> is a full fledge consulting agency that specializes in business solutions, conpliance and advisory services. We help businesses grow and scale by providing them with the right tools and resources. We also help businesses comply with the latest regulations and standards. We are a team of experts with years of experience in the industry
//       </AccordionContent>
//     </AccordionItem>
//     <AccordionItem value="item-2">
//       <AccordionTrigger>How to start ?</AccordionTrigger>
//       <AccordionContent>
//         You can start by contacting us. We will get back to you within 24 hours.
//       </AccordionContent>
//     </AccordionItem>
//     <AccordionItem value="item-3">
//       <AccordionTrigger>
//     Pricing ?
//       </AccordionTrigger>
//       <AccordionContent>
//         We offer custom tailored solutions for your business. Contact us to get a quote.
        
//       </AccordionContent>
//     </AccordionItem>
  
//     <AccordionItem value="item-4">
//       <AccordionTrigger>
//     Support ?
//         </AccordionTrigger>
//       <AccordionContent>
//         We offer Monday-Friday support for all our clients.
//       </AccordionContent>
//     </AccordionItem>
//   </Accordion>
  
  
//           </div>
//         </div>
//         </div>
//          );
// }
 
// export default Footer;