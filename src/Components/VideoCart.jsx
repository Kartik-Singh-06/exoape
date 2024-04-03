import React, { useEffect, useRef } from 'react'
import gsap,{Power4,ScrollTrigger} from 'gsap/all';

const VideoCart = () => {
const elem = useRef(null);
const videoDiv = useRef(null);
const reel = useRef(null);
const play = useRef(null);
useEffect(()=>{
  gsap.registerPlugin(ScrollTrigger);
  var tl = gsap.timeline({
    scrollTrigger :{
      trigger :elem.current,
      top:"0 0",
      pin : true,
      scrub : 1,
      
    },
  })
  tl
  .to(videoDiv.current,{
    width : "110%",
    height : "100%",
    ease : Power4
  },"a")
  .to(play.current,{
    x: "-250%",
    scale:.3,
    ease : Power4,
  
  },"a")
  .to(reel.current,{
    x: "250%",
    scale:.3,
    ease : Power4
  },"a")
})

  return (
    <div ref={elem} className='w-full h-screen overflow-hidden relative bg-black '>
      <div ref={videoDiv}  className='w-32 overflow-hidden aspect-video  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 sm:w-96 '>
        <video autoPlay muted loop  className='w-full h-full scale-[1.1] aspect-video brightness-50 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ' src="https://player.vimeo.com/progressive_redirect/playback/914803778/rendition/1080p/file.mp4?loc=external&log_user=0&signature=5344c0e4fea63ca54bb433621ca0be7b9470b475583fa68b26de2b6e380a390a"></video>
      </div>
      <div className='w-full flex flex-col justify-between h-full py-20 absolute text-[#E4E0DB]'>
        <div className='flex gap-3 text-sm font-medium justify-center items-center text-[#E4E0DB]'>
        <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-4 h-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
        <h3>Work in motion</h3>
        </div>
        <h1 className='w-full text-[#E4E0DB] flex justify-center gap-16 items-center sm:gap-80'>
          <div ref={play}  className='text-4xl  sm:text-9xl sm:font-medium '>Play</div>
          <div ref={reel} className='text-4xl  sm:text-9xl sm:font-medium '>Reel</div>
        </h1>
        <p className='text-center flex justify-center px-10 text-xs  sm:text-sm'><div>Our work is best experienced in motion. Don’t forget to put on your headphones.</div></p>
      </div>

    </div>
  )
}

export default VideoCart