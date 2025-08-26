import React from 'react'
import { Link } from 'react-router';
import RegisterForm from '../component/RegisterForm';

const RegisterPage = () => {
  return (
    <div className='bg-login h-screen flex items-center justify-center'>
        <div className='bg-black bg-opacity-70 p-10 rounded-lg shadow-lg q-96 text-white'>
            <h2 className='text-3xl font-bold mb-6 text-center'> Register</h2>
            <RegisterForm />
            <Link to={"/login"} className='text-sm text-center mt-4'>Already have an account ?</Link>
        </div>
    </div>
  );
}

export default RegisterPage;