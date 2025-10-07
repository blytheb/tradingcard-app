import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ProfileSelectionPage from './pages/auth/ProfileSelectionPage';
import CardsPage from './pages/dash/CardsPage';
import CollectionPage from './pages/dash/CollectionPage';
import FriendsPage from './pages/dash/FriendsPage';
import HomePage from './pages/dash/HomePage';
import SettingsPage from './pages/dash/SettingsPage';
import UserProvider from './context/userProvider';


const App = () => {
  return (
    <UserProvider>
      <div>
        <Router>
          <Routes>
            <Route path='/' element={<Root />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/select' element={<ProfileSelectionPage />} />
            <Route path='/cards' element={<CardsPage />} />
            <Route path='/collection' element={<CollectionPage />} />
            <Route path='/friends' element={<FriendsPage />} />
            <Route path='/home' element={<HomePage />} />
            <Route path='/settings' element={<SettingsPage />} />
          </Routes>
        </Router>
      </div>
    </UserProvider>
  )
};

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