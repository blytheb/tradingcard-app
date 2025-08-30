import React from 'react'
import { Link} from 'react-router'
import { useAuth } from '../hooks/useAuth'
import { useProfile } from '../hooks/useProfile'
import { useLogout } from '../hooks/useLogout';

const Navbar = () => {
    const { user } = useAuth();
    const { profile } = useProfile();
    const handleLogout = useLogout();

  return (
    <div className="navbar bg-base-100 shadow-md px-4 md:px-8">
        {/** logo here */}
        <div className="flex-1">
            <Link to="/" className="btn btn-ghost normal-case text-xl">
                Never Quit Dreaming
            </Link>
        </div>

        {/** Right links */}
        <div className="flex-none gap-2">
            <ul className="menu menu-horizontal p-0 hidden md:flex">
                {!user && (
                    <>
                    <li><Link to="/login">Login</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    </>
                )}

                {user && !profile && (
                    <>
                    <li>Select a Profile</li>
                    <li><Link onClick={handleLogout}>Logout</Link></li>
                    
                    </>
                )}

                {user && profile && (
                    <>
                    <li><Link to={`/home/${profile.id}`}>Home</Link></li>
                    <li><Link to="/settings">User Settings</Link></li>
                    <li><Link onClick={handleLogout}>Logout</Link></li>
                    </>
                )}
            </ul>


            <div className="dropdown dropdown-end md:hidden">
            <label tabIndex={0} className="btn btn-ghost btn-circle">☰</label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Dashboard</a></li>
                <li><a>Profiles</a></li>
            </ul>
            </div>
        </div>
    </div>
    )
}

export default Navbar