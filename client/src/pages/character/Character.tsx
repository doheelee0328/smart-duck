import React from 'react'
import '../../scss/main.scss'
import Duck1 from '../../images/duck1.png'
import { useNavigate } from 'react-router-dom'
import { changeCharacter } from '../../slices/character.ts'
import { useDispatch } from 'react-redux'

interface CharacterProps {
  image: any
  alt: string
}

const CharacterImages = ({ image, alt }: CharacterProps) => {
  const dispatch = useDispatch()
  const selectCharacterHandler = (selectedCharacter: any) => {
    dispatch(changeCharacter(selectedCharacter))
    localStorage.setItem('character-image', selectedCharacter)
  }

  return (
    <div className='image-container'>
      <img
        src={image}
        alt={alt}
        className='duck-image'
        onClick={() => selectCharacterHandler(image)}
      />
    </div>
  )
}

const Character = () => {
  const navigate = useNavigate()
  const navigateToLoginPage = () => navigate('/login')
  const navigateToHomepage = () => navigate('/')
  return (
    <div className='character-container'>
      <h1 className='character-heading'>Choose Your Duck</h1>
      <CharacterImages image={Duck1} alt='duck1' />
      <div className='button-container'>
        <button onClick={navigateToHomepage} className='character-button'>
          Back
        </button>
        <button onClick={navigateToLoginPage} className='character-button'>
          Next
        </button>
      </div>
    </div>
  )
}

export default Character
