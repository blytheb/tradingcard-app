import React, { useState } from 'react'
import { useNavigate } from 'react-router';';'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../services/firebase';

function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  
  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/profiles");
    } catch (error) {
      console.error("Error in handleRegister", error);
      setError(error.message);
    }
  }

  return (
    <form onSubmit={handleRegister} className='flex flex-col gap-4'>
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

      <input
        type='password'
        placeholder='Confirm Password'
        className='input input-bordered w-full text-black'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <button type='submit' className='btn btn-primary w-full hover:scale-105 transition'>
        Register
      </button>
    </form>
  );
}

export default RegisterForm;
