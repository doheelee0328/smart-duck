import React from 'react'
import Arrow from '../../images/Arrow.png'
import Duck from '../../images/Duck.png'
import '../../scss/main.scss'

const homepage = () => {
  return (
    <div className='homepage-background'>
      <div className='smart-duck-container'>
        <h1 className='welcome-message'>Welcome To SmartDuck</h1>

        <p className='begin-learning-message'>
          Click the duck to begin your learning
        </p>
        <div className='image-container'>
          <img src={Arrow} alt='arrow' className='arrow-image' />
          <img src={Duck} alt='duck' className='duck-image' />
        </div>
      </div>
    </div>
  )
}

export default homepage
