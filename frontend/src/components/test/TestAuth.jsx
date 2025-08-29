import React from "react";
import { useAuth } from "../../hooks/useAuth";

export default function TestAuth() {
    const { user, loading } = useAuth();

    if (loading) return <h1>LOADING...</h1>

    return (
        <div className="p-4 bg-gray-100 rounded shadow">
            <h2 className="text-lg font-bold">AUTH TEST</h2>
            { user ? (
                <>
                <p> Logged in as : {user.email}</p>
                <p> UID: {user.uid}</p>
                </>
            ) : (
                <p> USER NOT LOGGED IN</p>
            )
        }
        </div>
    )
}