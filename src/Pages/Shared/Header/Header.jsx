import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../Provider/AuthProvider';
const Header = () => {

    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }
    const navItems1 = <>
        <li><Link to="/">Home </Link></li>
        <li><Link to="/alltoy">All Toy</Link></li>
        {user?.email && <>
            <li><Link to="/addtoy">Add A Toy</Link></li>
            <li><Link to="/mytoy">My Toy</Link></li>
        </>
        }
        <li><Link to="/blog">Blog</Link></li>
    </>
    const navItems2 = <>
        {user?.email ? <>
            <div className="flex">
                <li> <button className="mr-4 mt-4" onClick={handleLogOut}>Log Out</button> </li>
                <li className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                    <img className="w-12 rounded-full" src={user?.photoURL} alt="" /></li>
            </div>
        </> : <li><Link to="/login">Login</Link></li>
        }
    </>

    return (
        <div className="navbar bg-neutral text-neutral-content  py-8 px-48">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-neutral  rounded-box w-52">
                        {navItems1}
                    </ul>
                </div>
                <Link to="/"><img className="h-18 w-48" src={logo} alt="" /></Link>
                <h1 className="text-3xl">Toy Palace</h1>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems1}
                </ul>
            </div>
            <div className="navbar-end mr-24">
                <ul>
                    {navItems2}
                </ul>
            </div>
        </div>
    );
};

export default Header;