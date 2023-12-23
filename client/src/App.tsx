import React, { lazy, Suspense } from 'react'
// import * as Pages from './pages/index.ts'
import { Routes, Route } from 'react-router-dom'

const Homepage = lazy(() => import('./pages/homepage/Homepage.tsx'))
const Character = lazy(() => import('./pages/character/Character.tsx'))
const NotFound = lazy(() => import('./pages/notFound/NotFound.tsx'))
const Login = lazy(() => import('./pages/login/Login.tsx'))
// since lazy loading asynchronous its a good practice to use suspense
// to show that the page is loading.

function Loading() {
  return <div>Loading.....</div>
}

function App() {
  return (
    <div className='smart-duck'>
      <Routes>
        <Route
          path='/'
          element={
            <Suspense fallback={<Loading />}>
              <Homepage />
            </Suspense>
          }
        />
        <Route
          path='/character'
          element={
            <Suspense fallback={<Loading />}>
              <Character />
            </Suspense>
          }
        />
        <Route
          path='*'
          element={
            <Suspense fallback={<Loading />}>
              <NotFound />
            </Suspense>
          }
        />
        <Route
          path='/login'
          element={
            <Suspense fallback={<Loading />}>
              <Login />
            </Suspense>
          }
        />
      </Routes>
    </div>
  )
}

export default App
