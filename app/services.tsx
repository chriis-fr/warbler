'use client'

import { CardHoverEffectDemo } from "./snippets/card-hover-effect-snippet";

const Services = () => {
    return ( <div className="max-w-5xl mx-auto py-20">
   
        <div className="text-4xl pb-5 md:text-7xl text-center
         bg-clip-text text-transparent bg-gradient-to-b
          from-blue-500 to-neutral-50 bg-opacity-50 mt-20">
          Streamline your business with our services
        </div>
        <p className="mt-4 text-lg font-normal
          text-neutral-300 max-w-lg 
          text-center mx-auto">
          At <span className="font-bold text-yellow-300">Warbler</span>, we are dedicated to making a meaningful and sustainable impact. Partner with us to empower your business growth, whether you&apos;re expanding your reach, driving change, or thriving locally in this dynamic region. 
        </p>

        <CardHoverEffectDemo />

    </div> 
    
    );
}
 
export default Services;