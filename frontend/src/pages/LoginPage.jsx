import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../hooks/useAuth.js';

import LoginForm from '../components/auth/LoginForm.jsx';
import { Link } from 'react-router';
import TokenTestButton from '../components/auth/TokenTestButton';

const LoginPage = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  //if alreadu logged in, redirect to profiles
  useEffect(() => {
    if (user) {
      navigate("/profiles", {replace: true});
    }  
  }, [user, navigate]);

  return (
    <div className='bg-login h-screen flex items-center justify-center'>
        <div className='bg-black bg-opacity-70 p-10 rounded-lg shadow-lg q-96 text-white'>
            <h2 className='text-3xl font-bold mb-6 text-center'> Login</h2>
            <LoginForm />
            <TokenTestButton />
            <Link to={"/register"} className='text-sm text-center mt-4'>Don't have an account ?</Link>
        </div>
    </div>
  );
}

export default LoginPage;