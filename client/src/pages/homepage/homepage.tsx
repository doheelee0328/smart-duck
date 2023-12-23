import React from 'react'
import Arrow from '../../images/Arrow.png'
import Duck from '../../images/Duck.png'
import { Link } from 'react-router-dom'
import '../../scss/main.scss'

const Homepage = () => {
  return (
    <div className='smart-duck-container'>
      <h1 className='welcome-message'>Welcome To SmartDuck</h1>

      <p className='begin-learning-message'>
        Click the duck to begin your learning
      </p>
      <div className='image-container'>
        <img src={Arrow} alt='arrow' className='arrow-image' />
        <Link to='/character'>
          <img src={Duck} alt='duck' className='duck-image' />
        </Link>
      </div>
    </div>
  )
}

export default Homepage
