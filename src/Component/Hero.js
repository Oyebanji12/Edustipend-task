import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div>
    <div className='hero-container'>
        <div className='section-one'>
        <p className='paragraph-one'>Make your party fun!</p>
        <div className='paragraph-two'>Create your own custom playlist list</div>
        <div><button className='section-one-btn'>Create playlist</button></div>
        </div>

        <div  className='section-two'>
            <div className='song'>Trending songs</div>
          
            <button className='section-two-btn'>Unavalaible by Davido <span className='plus-sign' >+</span></button>
            
          <button className='section-two-btn'>Unavalaible by Davido <span className='plus-sign'>+</span> </button> 

          <button className='section-two-btn'>Unavalaible by Davido <span className='plus-sign'>+</span> </button> 

          <button className='section-two-btn'>Unavalaible by Davido <span className='plus-sign'>+</span> </button> 

          <button className='section-two-btn'>Unavalaible by Davido <span className='plus-sign'>+</span> </button>

          <button className='view-more-btn'>View More</button>
        </div>

    </div>
    </div>
  )
}

export default Hero