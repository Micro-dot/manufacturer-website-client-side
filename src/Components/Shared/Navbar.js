
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hook/useAdmin';


const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin] = useAdmin(user)
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');

    }
    const megamenu =
        <>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            {admin ? ' ' : <li><Link to="/myorder">My Order</Link></li>}
            <li><Link to="/dashboard">Dashboard</Link></li>
            <li>{user ? <button onClick={logout} className="btn btn-ghost">SIGN OUT</button> : <Link to="/login">Login</Link>}</li>
        </>
    return (
        <div className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabindex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {megamenu}
                    </ul>
                </div>
                <span className="normal-case text-xl font-bold cursor-pointer">Computer Village</span>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {megamenu}
                </ul>
            </div>
            <div className="navbar-end">
                <label for="dashboard-sidebar" class="btn btn-ghost drawer-button lg:hidden"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg></label>
            </div>
        </div>
    );
};

export default Navbar;