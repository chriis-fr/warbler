import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"



const Footer = () => {
    return ( 
        <div className=" flex items-center justify-center ">
        <div className=" md:py-10 bg-transparent w-[60%]
        rounded-3xl
        text-white
        ">
          <div className=" p-10 md:p-4 md:px-20">
            <div className="text-5xl md:text-5xl font-bold text-white">
              Have questions ?
            </div>
            <div className="  font-semibold text-2xl md:text-6xl text-gradient bg-gradient-to-r from-emerald-600 to-blue-300 bg-clip-text text-transparent">
              Get answers.
            </div>
            <Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>What is Warbler?</AccordionTrigger>
      <AccordionContent>
        <span className="font-bold text-yellow-700">Warbler</span> is a full fledge consulting agency that specializes in business solutions, conpliance and advisory services. We help businesses grow and scale by providing them with the right tools and resources. We also help businesses comply with the latest regulations and standards. We are a team of experts with years of experience in the industry
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>How to start ?</AccordionTrigger>
      <AccordionContent>
        You can start by contacting us. We will get back to you within 24 hours.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>
    Pricing ?
      </AccordionTrigger>
      <AccordionContent>
        We offer custom tailored solutions for your business. Contact us to get a quote.
        
      </AccordionContent>
    </AccordionItem>
  
    <AccordionItem value="item-4">
      <AccordionTrigger>
    Support ?
        </AccordionTrigger>
      <AccordionContent>
        We offer Monday-Friday support for all our clients.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
  
          </div>
        </div>
        </div>
         );
}
 
export default Footer;