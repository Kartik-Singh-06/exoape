import React from "react";
import { motion } from "framer-motion";
import {Power4} from "gsap/all"
const Landing = () => {
  return (
    <div className="relative w-[100vw] h-[130vh] lg:h-[250vh] md:h-[120vh] ">
      <div className="w-full h-full overflow-hidden ">
        <img
          data-scroll
          data-scroll-speed="-1"
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/1920x2716/filters:format(webp):quality(70)"
          alt=""
        />
      </div>
      <div className="w-full absolute top-0">
        <div className=" h-full max-w-screen-2xl px-5 mx-auto  lg:px-10 md:px-16 ">
          <div className="para mt-[52vh] text-white lg:text-2xl sm:font-medium ` lg:px-20 lg:mt-[70vh] md:px-5 md:mt-[25vh] text-md ">
            {[
              "Global digital design studio partnering with",
              "brands and business that create exceptional",
              "experience where people live, work, and unwind.",
            ].map((item, index) => (
              <p key={index} className="overflow-hidden">
                <motion.span initial={{ rotate: 90 , y:"100%", opacity :0}}
                animate={{rotate: 0,y:0,opacity:1}}
                transition={{ease:Power4.easeInOut , duration:1.3,delay: index *.1}}
                className="inline-block origin-left">{item}</motion.span>
              </p>
            ))}
          </div>
          <div className="mt-20  text-white  lg:px-10 lg:mt-[5vw]">
            {["Digital","Design","Experience"].map((item,index)=>(
              <h1 key={index} className="text-[18.9vw]    sm:text-[17rem] leading-none tracking-tighter -mt-24 py-12 sm:font-[400] overflow-hidden ">
              <motion.span initial={{y:"100%",opacity :0}} 
              animate={{y:0, opacity:1}} 
              transition={{ease:Power4.easeInOut,duration:1.6,delay: 1+index*.5}} className="inline-block origin-left  ">{item}</motion.span>
            </h1>
            ))}
          </div>
          <div className="mt-6 w-[90%] font-[450] text-white lg:w-[50%] lg:text-2xl  lg:px-14 md:px-5  lg:mt-16 md:w-2/3 md:mt-20  ">
            <p>
              We help experience-driven companies thrive by making their
              audience feel the refined intricacies of their brand and product
              in the digital space. Unforgettable journeys start with a click.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
