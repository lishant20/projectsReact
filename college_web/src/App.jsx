import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonials from './Components/Testimonials/Testimonials'

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subtitle='Our Program' title='What We Offer'/>
        <Programs />
        <About />
        <Title subtitle='Gallery' title='Campus Photos'/>
        <Campus />
        <Title subtitle='TESTIMONIALS' title='What Student Says'/>
        <Testimonials />
      </div>
    </div>
  )
}

export default App