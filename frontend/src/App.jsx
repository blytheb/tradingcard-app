import React from 'react'
import { Routes, Route } from 'react-router'

//pages
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import HomePage from './pages/HomePage'
import ProfileSelectorPage from './pages/ProfileSelectorPage'
import NotFoundPage from './pages/NotFoundPage';

import Navbar from "./components/Navbar";

//route protection components
import ProtectedRoute from './components/ProtectedRoute'
import ProfileProtectedRoute from './components/ProfileProtectedRoute'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* public routes */}
        <Route path='/login' element={ <LoginPage />} />
        <Route path='/register' element={ <RegisterPage />} />

        { /* Profile selector: must be logged in */}
        <Route 
          path='/profiles' 
          element={
          <ProtectedRoute>
            <ProfileSelectorPage />
          </ProtectedRoute>
          }
        />
        
        { /* Home page: must be logged in AND have selected a profile*/}
        <Route 
          path='/home' 
          element={
            <ProtectedRoute>
              <ProfileProtectedRoute>
                <HomePage />
              </ProfileProtectedRoute>
            </ProtectedRoute>
          }
        />

        { /** Fallback Route */}
        <Route path='/' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App
