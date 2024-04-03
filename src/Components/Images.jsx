import gsap, { ScrollTrigger,Power4 } from "gsap/all";
import React, { useEffect, useRef } from "react";

const Images = () => {
  const parent = useRef(null);
  const first = useRef(null);
  const second = useRef(null);
  const third = useRef(null);
  const fourth = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: parent.current,
        start: "0 90%",
        scrub: 1,
      },
    })
    tl.to(first.current,{
        x: "30%",
        ease: Power4
    },"a")
    .to(second.current,{
      x : "-20%",
      ease: Power4
    },"a")
    .to(third.current,{
      x: "-20%",
        ease: Power4
    },"a")
    .to(fourth.current,{
      x : "30%",
      ease: Power4
    },"a")
  });
  return (
    <div
      ref={parent}
      className="w-full h-[75vh] bg-white flex items-center justify-center  sm:h-[130vh] sm:my-[10vw]"
    >
      <div className="w-[40%] h-1/2 relative sm:w-[25%] sm:h-[80%]">
        <div
          ref={first}
          className="absolute w-20 h-[7rem] -right-1/3 top-2 sm:w-[12rem] sm:h-[18rem] sm:-right-[40%] sm:top-[10%] "
        >
          <img
            className="w-full h-full object-cover "
            src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={second}
          className="absolute w-[8rem] aspect-video -left-[6.5rem] top-1/4  overflow-hidden sm:w-[23rem] sm:-left-[21rem]"
        >
          <video
            autoPlay
            muted
            loop
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"
          ></video>
        </div>
        <div
          ref={third}
          className="absolute w-[9rem] aspect-video -left-[70%] -bottom-[3rem] sm:w-[26rem] sm:-left-[100%] sm:-bottom-[8rem]"
        >
          <img
            className="w-full h-full object-cover"
            src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/1200x804/filters:quality(90)"
            alt=""
          />
        </div>
        <div
          ref={fourth}
          className="absolute w-[8rem] aspect-square -right-[65%] -bottom-[6rem] sm:w-[25rem] sm:-bottom-[18rem] sm:-right-[100%]"
        >
          <video
            autoPlay
            muted
            loop
            className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"
          ></video>
        </div>
        <img
          className="w-full h-full object-cover"
          src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/1200x2050/filters:quality(90)"
          alt=""
        />
      </div>
    </div>
  );
};

export default Images;
