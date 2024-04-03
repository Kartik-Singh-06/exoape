import React from "react";
import { motion } from "framer-motion";
import { Power4 } from "gsap/all";
import Video1 from "/Work-v-1.mp4";
import Video2 from "/Work-v-2.mp4";
import Video3 from "/Work-v-3.mp4";
import Video4 from "/Work-v-4.mp4";

const Work = () => {
  return (
    <div className="w-full relative min-h-screen overflow-hidden ">
      <div className="max-w-screen-2xl py-24 mx-auto px-5 md:px-16  lg:px-10 ">
        <div className="feature flex  items-center gap-1 sm:hidden">
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

        <h1 className=" text-5xl py-4 pl-1 lg:text-[16vw] lg:font-medium lg:pl-[12.4vw] overflow-hidden lg:tracking-tighter">
          <motion.span
            initial={{ y: "100%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ ease: Power4.easeInOut, duration: 1 }}
            viewport={{ once: true }}
            className="inline-block origin-left "
          >
            {" "}
            Work
          </motion.span>
        </h1>

        <div className="work-para px-1  sm:hidden">
          <p>
            Highlights of cases that we passionately built with forward-thinking
            clients and friends over the years.
          </p>
        </div>
        {/* project section */}
        <div className=" w-full h-[260vh] py-2 mt-28 ">
          {/* part-1 */}
          <div className=" flex gap-16 justify-center">
            <div className="flex justify-center w-[50%] h-[45vw]  ">
              <div className="w-[70%] h-full pt-4 relative cursor-pointer overflow-hidden ">
                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  data-scroll
                  data-scroll-speed="-.2"
                  className="w-full h-[100%] object-cover absolute top-0 left-0 z-[2] "
                  src="https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover   absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src={Video1}
                ></video>
              </div>
            </div>
            <div className=" w-[35%] h-[120vh]   ">
              <div className="flex w-full gap-36 flex-col justify-between ">
                <div className="lg:w-4/5 text-xl py-4">
                  <div className="feature flex  items-center gap-1 mb-5">
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
                  <div className="work-para  px-1 ">
                    <p>
                      Highlights of cases that we passionately built with
                      forward-thinking clients and friends over the years.
                    </p>
                  </div>
                </div>
                <div className="w-full h-[60vh] flex  items-center justify-center ">
                  <div className="w-[80%] pt-4 h-full relative overflow-hidden cursor-pointer  ">
                    <motion.img
                      initial={{ opacity: 1 }}
                      whileHover={{ opacity: 0 }}
                     
                      className="  w-full h-[100%] object-cover absolute top-0 left-0 z-[2]"
                      src="https://a.storyblok.com/f/133769/2500x3113/78edf86efd/rino-pelle-hero.jpg/m/1300x1619/filters:format(webp):quality(70)"
                      alt=""
                    />
                    <motion.video
                 
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover block absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src={Video2}
                ></motion.video>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* part-2 */}
          <div className="flex justify-center gap-3 w-full h-full px-10 mt-24 ">
            <div className="w-[25%] h-[55vw] py-5 flex flex-col items-center justify-end  ">
              <div className="w-[75%] relative  h-[30vw] bg-black overflow-hidden cursor-pointer  ">
                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  className="w-full h-full object-cover absolute top-0 left-0  z-[2]"
                  src="https://a.storyblok.com/f/133769/2880x3588/5c50befb8e/pixel-flakes-hero.jpg/m/1300x1620/filters:format(webp):quality(70)"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover block absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src={Video4}
                ></video>
              </div>
            </div>
            <div className="w-[60%] h-[40vw] p-5 ">
              <div className="w-[66%] ml-16 h-[43vw] relative cursor-pointer ">
                <motion.img
                  initial={{ opacity: 1 }}
                  whileHover={{ opacity: 0 }}
                  data-scroll
                  data-scroll-speed="-.09"
                  className="w-full h-full object-cover absolute top-0 left-0 z-[2]"
                  src="https://a.storyblok.com/f/133769/1606x2000/09a30057bd/aebele-interiors-hero.jpg/m/1300x1619/filters:format(webp):quality(70)"
                  alt=""
                />
                <video
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover absolute z-[1] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                  src={Video3}
                ></video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
