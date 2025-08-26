import React from 'react'
import LoginForm from '../component/LoginForm'
import { Link } from 'react-router';

const LoginPage = () => {
  return (
    <div className='bg-login h-screen flex items-center justify-center'>
        <div className='bg-black bg-opacity-70 p-10 rounded-lg shadow-lg q-96 text-white'>
            <h2 className='text-3xl font-bold mb-6 text-center'> Login</h2>
            <LoginForm />
            <Link to={"/register"} className='text-sm text-center mt-4'>Don't have an account ?</Link>
        </div>
    </div>
  );
}

export default LoginPage;