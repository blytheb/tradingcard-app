import React, { useState } from 'react'
import Input from '../../components/Inputs/Input';
import { Link } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = (e) => { 
    e.preventDefault();

    if (!name) {
      setError("Please enter your full name");
      return;
    }
    
    if (!email) {
      setError("Please enter your email address");
      return;
    }
    if (!password) {
      setError("Please enter your password");
      return;
    }
    
    if (password.length < 8) {
      setError("Password must be atleast 8 characters long");
      return;
    }
    setError(null);
    
    //Register API CALL HERE
    console.log("Register API CALL HERE");
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto dark:hidden"
          /> */}
          {/* <img
            alt="Your Company"
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
            className="mx-auto h-10 w-auto not-dark:hidden"
          /> */}
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
            Create an Account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleRegister} className="space-y-6">
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              label="Full Name"
              placeholder="Enter your full name"
              required
            />
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              label="Email Address"
              placeholder="Enter your email address"
              required
            />
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              label="Password"
              placeholder="Minimum 8 characters "
              required
            />

            {error && <p className='text-red-500 text-xs pb-2.5'>{error}</p> }

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
              >
                Register
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500 ">
            Already have an account ?{' '}
            <Link
              to="/login"
              className="font-semibold text-indigo-600 hover:text-indigo-500 "
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default RegisterPage