import React, { useState } from 'react'
import { useNavigate } from 'react-router';';'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/profiles")
    } catch (error) {
      console.error("Error in handleLogin", error);
      setError(error.message);
    }
  }

  return (
    <form onSubmit={handleLogin} className='flex flex-col gap-4'>
      {error && <p className='text-red-500'>{error}</p>}

      <input
        type='email'
        placeholder='email'
        className='input input-bordered w-full text-black'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type='password'
        placeholder='password'
        className='input input-bordered w-full text-black'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type='submit' className='btn btn-primary w-full hover:scale-105 transition'>
        Login
      </button>
    </form>
  );
}