import React from 'react';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';


const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/purchase">Purchase</Link></li>

        <li><Link to="/blog">Blogs</Link></li>
        <li><Link to="/MyPortfolio">My Portfolio</Link></li>
        {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
        }

        <li>{user ? <button className="btn btn-ghost" onClick={logout}>Sign Out</button> : <Link to="/login">Login</Link>}</li>

    </>
    return (
        // <div  >


        //     <div class="navbar bg-base-100">
        //         <div class="flex-1">
        //             <a class="btn btn-ghost normal-case text-xl">MF Gimbal</a>
        //         </div>
        //         <div class="flex-none">


        //             <div className="navbar-center hidden lg:flex">
        //                 <ul className="menu menu-horizontal p-0">
        //                     {menuItems}
        //                 </ul>
        //             </div>
        //             <div className="dropdown">
        //                 <label tabIndex="0" className="btn btn-ghost lg:hidden">
        //                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        //                 </label>
        //                 <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                     {menuItems}
        //                 </ul>
        //             </div>

        //             <div class="dropdown dropdown-end">
        //                 <label tabindex="0" class="btn btn-ghost btn-circle avatar">
        //                     <div class="w-10 rounded-full">
        //                         <img src="https://api.lorem.space/image/face?hash=33791" />
        //                     </div>
        //                 </label>
        //                 <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        //                     <li>
        //                         <a class="justify-between">
        //                             Profile
        //                             <span class="badge">New</span>
        //                         </a>
        //                     </li>
        //                     <li><a>Settings</a></li>
        //                     <li><a>Logout</a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex="0" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl ">Doctors Portal</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className='navbar-end'>
                    <label tabIndex="1" for="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                </div>
            </div>

        </div>
    );
};

export default Header;