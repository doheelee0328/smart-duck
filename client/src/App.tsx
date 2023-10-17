import React from 'react'
import * as Pages from './pages'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='smart-duck'>
      <Routes>
        <Route path='/' element={<Pages.Homepage />} />
        <Route path='/character' element={<Pages.Character />} />
        <Route path='*' element={<Pages.NotFound />} />
      </Routes>
    </div>
  )
}

export default App
