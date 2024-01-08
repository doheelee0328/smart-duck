import React, { useRef, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeCharacter } from '../../slices/character.ts'
import '../../scss/main.scss'

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null)
  const dispatch = useDispatch()
  const selectedCharacter = useSelector(
    (state: any) => state.characterSlice.character
  )

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
    const storedCharacter = localStorage.getItem('character-image')
    if (storedCharacter) {
      dispatch(changeCharacter(storedCharacter))
    }
  }, [dispatch, selectedCharacter])

  return (
    <div className='login-container'>
      {selectedCharacter && (
        <img src={selectedCharacter} alt='selected-character' />
      )}
      <input type='text' ref={inputRef} className='input' />
      <div className='button-container'>
        <button className='character-button'>Back</button>
        <button className='character-button'>Next</button>
      </div>
    </div>
  )
}

export default Login
