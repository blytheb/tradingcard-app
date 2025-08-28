import React from 'react'
import { Route, Routes } from 'react-router'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import ProfileSelectorPage from './pages/ProfileSelectorPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/home' element={ <HomePage />} />
        <Route path='/login' element={ <LoginPage />} />
        <Route path='/register' element={ <RegisterPage />} />
        <Route path='/profiles' element={ <ProfileSelectorPage />} />
      </Routes>
      
    </div>
  )
}

export default App
