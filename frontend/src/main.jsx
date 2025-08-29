import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter } from "react-router";
import { Toaster } from "react-hot-toast"

import { AuthProvider } from './context/AuthContext.jsx';
import { ProfileProvider } from './context/ProfileContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <ProfileProvider>
        <BrowserRouter>
          <App />
          <Toaster />
        </BrowserRouter>
      </ProfileProvider>
    </AuthProvider>
  </StrictMode>,
)
