import { createSlice } from '@reduxjs/toolkit'

type CharacterState = {
  character: any
}

const initialCounterState: CharacterState = {
  character: null,
}

const characterSlice = createSlice({
  name: 'character',
  initialState: initialCounterState,
  reducers: {
    // changeCharacter(state) {
    //   state.character =
    // }
  },
})
