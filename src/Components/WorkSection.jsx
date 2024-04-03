import React, { useState } from "react";
import { motion } from "framer-motion";
import {Power4} from "gsap/all"

const WorkSection = () => {
  const [data,setData] =useState([
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
      img: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)",
      heading: "Columbia pictures",
      para: "Celebrating a century of cinema",
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/914798484/rendition/720p/file.mp4?loc=external&log_user=0&signature=666d8099e0f1361eb1766ec0592b63a9bdf2b303cdb12ddfa5789d20ce8f523b",
      heading: "Rino & Pelle",
      para: "Effortless chic lifestyle",
      img : "https://a.storyblok.com/f/133769/2500x3113/78edf86efd/rino-pelle-hero.jpg/m/1300x1619/filters:format(webp):quality(70)"
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/914796979/rendition/540p/file.mp4?loc=external&log_user=0&signature=57ac30ff6fc3b29802f7414617e808395306f0b0fa5c9c6e3ef483a532f49c15",
      heading: "Aebele Interiors",
      para: "Luxurious design experience",
      img: "https://a.storyblok.com/f/133769/1606x2000/09a30057bd/aebele-interiors-hero.jpg/m/1300x1619/filters:format(webp):quality(70)"
    },
    {
      url: "https://player.vimeo.com/progressive_redirect/playback/914798271/rendition/720p/file.mp4?loc=external&log_user=0&signature=2af493277d050009920c26416a8d62a9a8c316353242c609ee157fcf1e300076",
      heading: "Pixelflakes",
      para: "Architectural marketing agency",
      img: "https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1300x1620/filters:format(webp):quality(70)"
    },
  ]);

  return (
    <div className="w-full relative overflow-hidden">
      <div className="max-w-screen-2xl py-24 mx-auto px-5 md:px-16  lg:px-10 ">
        <div className="feature flex  items-center gap-1 lg:hidden">
          <svg
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="icon w-4 h-4"
            data-v-669b4a84=""
          >
            <path
              d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z"
              fill="currentColor"
              data-v-669b4a84=""
            ></path>
          </svg>
          <h2>Featured Projects</h2>
        </div>

        <h1 className=" text-5xl py-4 pl-1 lg:text-[16vw] lg:font-medium lg:pl-[12.4vw] lg:tracking-tighter overflow-hidden">
        <motion.span
          initial={{ y: "100%", opacity: 0 }}
          whileInView={{y: 0, opacity:1}}
          transition={{ease: Power4.easeInOut , duration: 1}}
          viewport={{once :true}}
          className="inline-block origin-left "
        >Work</motion.span>
        </h1>

        <div className="work-para px-1  lg:hidden">
          <p className="overflow-hidden">
           <motion.span 
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{y: 0, opacity:1}}
            transition={{ease: Power4.easeInOut , duration: 1}}
            viewport={{once :true}}
            className="inline-block origin-left "
           >
           Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
           </motion.span>
          </p>
        </div>
        <div className="videos py-9">
          {data.map((item,index) => (
            <div key={index} className="pb-5">
              <div className="video w-full h-[104vw] relative shadow-md overflow-hidden">
               <motion.img 
               initial={{opacity: 1}}
               whileHover={{opacity: 0}}
                   data-scroll 
                   data-scroll-speed="-.1"
               className="  w-full h-full object-cover z-[2] absolute " src={item?.img}alt="" />
                <motion.video
          
                  className="w-full h-full object-cover absolute top-1/2 left-1/2 z-[1] -translate-x-1/2 -translate-y-1/2 "
                  playsInline
                  autoPlay
                  loop
                  muted
                  src={item?.url}
                ></motion.video>
              </div>
              <h1 className="font-medium mt-2">{item.heading}</h1>
              <p className="text-zinc-400 font-medium">
                {item.para}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default WorkSection;
