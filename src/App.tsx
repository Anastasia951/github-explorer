import React from 'react'
import { Form, Profile } from './pages'
import { Route, Routes } from 'react-router-dom'
import { Followers, Repos } from './components'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Form />} />
      <Route path=':login' element={<Profile />}>
        <Route path='repos' element={<Repos />} />
        <Route path='followers' element={<Followers />} />
      </Route>
    </Routes>
  )
}

export default App
