import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from './pages/auth/LoginPage';
import SignUpPage from './pages/auth/SignupPage';
import ProfileSelectionPage from './pages/auth/ProfileSelectionPage';
import CardsPage from './pages/dash/CardsPage';
import CollectionPage from './pages/dash/CollectionPage';
import FriendsPage from './pages/dash/FriendsPage';
import HomePage from './pages/dash/HomePage';
import SettingsPage from './pages/dash/SettingsPage';


const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignUpPage />} />
          <Route path='/select' element={<ProfileSelectionPage />} />
          <Route path='/cards' element={<CardsPage />} />
          <Route path='/collection' element={<CollectionPage />} />
          <Route path='/friends' element={<FriendsPage />} />
          <Route path='/home' element={<HomePage />} />
          <Route path='/settings' element={<SettingsPage />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App

const Root = () => {
  //check if token exist in localStorage
  const isAuthenticated = !!localStorage.getItem("token");

  //redirect to dashboard if authenticated, otherwise to login
  return isAuthenticated ? (
    <Navigate to="/home" />
  ) : (
    <Navigate to="login" />
  );
}