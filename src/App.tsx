import React from 'react'
import { Form, Profile } from './pages'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/profile/:login' element={<Profile />} />
    </Routes>
  )
}

export default App
