import { configureStore } from '@reduxjs/toolkit'
import characterReducer from './character.ts'

// import each of the slice and export the store

export const store = configureStore({
  reducer: {
    characterSlice: characterReducer,
  },
})
