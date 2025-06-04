import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Program from './Components/Program/Program'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'
import Footer from './Components/Footer/Footer'
import Title from './Components/Title/Title'
import Contact from './Components/Contact/Contact'
import VideoPlayer from './Components/VideoPlayer/VideoPlayer'


const App = () => {

  const [playState, setPlayState] = useState(false);


  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subtitle='Our Program' title='What we offer' />
        <Program />
        <About setPlayState={setPlayState}/>
        <Title subtitle='Gallery' title='Campus Photos' />
        <Campus />
        <Title subtitle='Testimonials' title='What Student Says' />
        <Testimonials />
        <Title subtitle='Contact Us' title='Get in Touch' />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState}/>
    </div>
  )
}

export default App