import React from 'react'
import footerVideo from '/footerVideo.mp4';

const Footer = () => {
  return (
    <div className='overflow-hidden'>
          <div data-scroll data-scroll-speed="-1"  className='w-full h-[80vh] bg-[#000302] py-5 px-10 sm:px-32 sm:h-[120vh] pt-[20vw] sm:pt-[2vw]'> 
        <div  className=' flex items-center justify-between  sm:h-[75vh] pb-10  mt-10 border-b-[2px] border-[#d8b08da4] sm:pb-14'>
            <div className='w-[40%] h-[20vh]  py-5 sm:h-[50vh] sm:w-[28%]  '>
               <div className=''>
               <h1 className='text-4xl   font-medium text-[#E0CCBB]  sm:text-[9vw] sm:leading-[7.5vw] sm:font-medium '>Our</h1>
                <h1 className='text-4xl  font-medium text-[#E0CCBB]  sm:text-[9vw] sm:leading-[7.5vw] sm:font-medium '>Story</h1>
               </div>
                <p className='text-[#E0CCBB] w-[200%] mt-7 text-sm sm:mt-16 sm:font-medium sm:w-[100%] sm:text-xl'>The story behind Exo Ape is one of exploration, creativity and curiosity.</p>
            </div>
            <div className='w-[60%] -mt-8  h-[10vh] py-2 sm:h-[50vh] sm:mt-10 sm:w-[70%]  '>
                <video className='  sm:w-full sm:h-full object-cover px-2 ' autoPlay loop muted src={footerVideo}></video>
            </div>
        </div>
        <div className='mt-[4vw] flex gap-[10vw] text-[2vw] sm:text-sm'>
            <div className=''>
                {["Willem II Singel", "8 6041 HS" , "Roermond The Netherlands","hello@exoape.com"].map((item)=>(
                    <h4  key={item} className='text-[#E0CCBB] cursor-pointer my-1 font-medium' >{item}</h4>
                ))}
            </div>
            <div>
                {["Work","Studio","News","Contact"].map((item)=>(
                    <h4  key={item} className='text-[#E0CCBB] cursor-pointer my-1 font-medium' >{item}</h4>
                ))}
            </div>
            <div>
                {["Behance","Dribbble","Twitter","Instagram"].map((item)=>(
                    <h4  key={item} className='text-[#E0CCBB] cursor-pointer my-1 font-medium' >{item}</h4>
                ))}
            </div>
        </div>
        
    </div>
    </div>
  )
}

export default Footer