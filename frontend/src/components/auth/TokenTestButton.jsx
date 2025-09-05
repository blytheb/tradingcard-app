import React from 'react'
import { auth } from '../../services/firebase'

const TokenTestButton = () => {
    const handleClick = async () => {
        const user = auth.currentUser;

        if (!user) {
            console.log("no user logged in");
            return;
        }

        const token = await user.getIdToken();
        console.log("Token", token);

        const res = await fetch("http://localhost:5001/api/test-token", {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        const data = await res.json();
        console.log("BACKEND Response:", data);
        alert(JSON.stringify(data, null, 2));
    }

  return (
    <div>
        <button onClick={handleClick} className='btn btn-primary w-full hover:scale-105 transition'> 
            Test Token Route
        </button>
    </div>
  )
}

export default TokenTestButton