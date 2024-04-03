import React from 'react'
import { GoDot } from "react-icons/go";

const News = () => {
  return (
    <div className='w-full bg-white sm:pb-20 select-none '>
        <div className=' max-w-screen-2xl mx-auto px-5 py-5 lg:px-10 md:px-16' >
            <div className='svg flex justify-center gap-2 items-center py-4 pb-10'>
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
           <p>In the media</p>
            </div>
            <div className='text text-center '>
            <h1  className='text-[16.5vw] leading-[19vw] sm:text-[9.5vw]  sm:leading-[9.8vw] sm:font-medium'>Spread</h1>
            <h1 className='text-[16.5vw] leading-[19vw]   pb-6  sm:text-[9.5vw] sm:leading-[9.8vw] sm:font-medium'>the News</h1>
            <p className='w-[80%] mx-auto text-[4.8vw] pb-6 font-medium text-[#686868]  sm:text-[1.5vw] sm:font-normal sm:py-5 sm:text-black sm:w-[30%] '>Find out more about our work on these leading design and technology platforms.</p>
            </div>

             <div className='flex gap-1 justify-center items-center py-5 '>
                 <GoDot className='text-zinc-400' />
                 <h4 className='font-medium text-zinc-700 border-b-2 border-zinc-400 pb-1 '>Browse all news</h4>
             </div>
        </div>
    </div>
  )
}

export default News