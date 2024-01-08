import React, { useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import '../../scss/main.scss'

const Login = () => {
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }, [])

  const selectedCharacter = useSelector(
    (state: any) => state.characterSlice.character
  )

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
