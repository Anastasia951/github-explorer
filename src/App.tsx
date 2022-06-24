import React from 'react'
import { Form, Profile } from './pages'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Form />} />
      <Route path='/profile/:login' element={<Profile />}>
        <Route path='followers' element={<div>Followers</div>} />
      </Route>
    </Routes>
  )
}

export default App
