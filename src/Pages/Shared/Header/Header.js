import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import person1 from '../../../assests/people1.png';

const Header = () => {
    return (
        <div className="navbar bg-base-100 shadow-md">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/dashboard/overview'>Dashboard</NavLink></li>
                        <li><NavLink to='/dashboard/overview'>Overview</NavLink></li>
                        <li><NavLink to='/dashboard/allcustomer'>All Customer</NavLink></li>
                        <li><NavLink to='/dashboard/addcustomer'>Add Customer</NavLink></li>
                        <li><NavLink to='/dashboard/allproduct'>All Products</NavLink></li>
                        <li><NavLink to='/dashboard/addproducts'>Add Products</NavLink></li>
                        <li><NavLink to='/dashboard/allorders'>All Orders</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost normal-case text-xl">Job Task</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/dashboard/overview'>Dashboard</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login' className="btn btn-primary rounded-full">Login & Sign Up</Link>
                <div className="dropdown dropdown-bottom dropdown-end ml-3">
                    <label tabIndex={0} className="m-1 cursor-pointer">
                        <div className="avatar">
                            <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img alt='user' src={person1} />
                            </div>
                        </div>
                    </label>
                    <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to='/user'>User Profile</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;