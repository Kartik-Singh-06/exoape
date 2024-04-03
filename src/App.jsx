import React from 'react'
import Nav from './Components/Nav'
import Landing from './Components/Landing'
import WorkSection from './Components/WorkSection'
import Work from "./Components/Work"
import VideoCart from './Components/VideoCart'
import Images from './Components/Images'
import News from './Components/News'
import LocomotiveScroll from 'locomotive-scroll';
import Footer from './Components/Footer'
import ManageWork from './Components/ManageWork'



const App = () => {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <>
      <div className='overflow-x-hidden select-none'>
        <Nav/>
        <Landing/>
        <ManageWork/>
        <VideoCart/>
        <Images/>
        <News/>
        <Footer/>
      </div>
    </>
  )
}

export default App