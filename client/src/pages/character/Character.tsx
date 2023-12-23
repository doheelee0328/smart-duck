import React from 'react'
import '../../scss/main.scss'
import Duck1 from '../../images/duck1.png'

interface CharacterProps {
  image: any
  alt: string
}

const CharacterImages = ({ image, alt }: CharacterProps) => (
  <img src={image} alt={alt} className='duck-image' />
)

const Character = () => {
  return (
    <div className='character-container'>
      <h1 className='character-heading'>Choose Your Duck</h1>
      <CharacterImages image={Duck1} alt='duck1' />
    </div>
  )
}

export default Character
