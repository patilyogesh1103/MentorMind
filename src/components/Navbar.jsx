import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaSun, FaMoon } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';
import { useAuth } from '../context/AuthProvider.jsx';

const Navbar = ({ onClick }) => {
  const {authUser, setAuthUser} = useAuth;  // Uncommented this line to get authUser from context
  const sidebarRef = useRef(null);
  const hamburgerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);

  const [theme, setTheme] = useState(
    localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light'
  );

  useEffect(() => {
    const rootElement = document.documentElement;
    if (theme === 'dark') {
      rootElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      rootElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current && 
        !sidebarRef.current.contains(event.target) &&
        hamburgerRef.current && 
        !hamburgerRef.current.contains(event.target)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSidebarOpen]);

  return (
    <div className={`relative ${sticky ? 'shadow-lg' : ''}`}>
      <div className="px-12 dark:bg-slate-800 bg-slate-200 text-black dark:text-white fixed top-0 left-0 right-0 z-50">
        <div className="navbar flex items-center justify-between">
          <div className="flex-1 flex items-center">
            <a className="btn btn-ghost text-xl normal-case">daisyUI</a>

            <button
              onClick={toggleTheme}
              className="dark:text-white text-black ml-4 block md:hidden btn btn-ghost"
            >
              {theme === 'light' ? <FaMoon className="h-6 w-6" /> : <FaSun className="h-6 w-6" />}
            </button>
          </div>

          <button
            ref={hamburgerRef}
            className="block md:hidden"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>

          <div className="hidden md:flex flex-none mr-32">
            <ul className="menu menu-horizontal px-1">
              <li><Link to="/" className="hover:underline">Home</Link></li>
              <li><Link to="/course" className="hover:underline">Courses</Link></li>
              <li><Link to="/contact" className="hover:underline">Contact</Link></li>
              <a className="mx-2 ml-20 text-bold  text-white rounded-md px-3 py-1 text-[17px] animate-colorCycle"
                onClick={() => document.getElementById("my_modal_3").showModal()}>
                Login
              </a>
              <Login />
            </ul>
          </div>

          <div className="hidden md:flex flex-none gap-2 items-center">
            <button onClick={toggleTheme} className="dark:text-white text-black mr-2 btn btn-ghost">
              {theme === 'light' ? <FaMoon className="h-6 w-6" /> : <FaSun className="h-6 w-6" />}
            </button>

            <div className="dropdown dropdown-end">
              <div tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <FontAwesomeIcon icon={faUser} className="text-2xl" />
              </div>
              <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white text-black dark:text-white dark:bg-slate-800 rounded-box z-[1] mt-4 w-52 p-2 shadow">
                <li><a>Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div ref={sidebarRef} className={`fixed inset-y-0 left-0 z-40 w-64 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-200 ease-in-out md:hidden ${theme === 'light' ? 'bg-slate-200 text-black' : 'bg-slate-800 text-white'}`}>
        <button className="absolute top-4 right-4 text-black bg-white dark:bg-white dark:text-black" onClick={() => setIsSidebarOpen(false)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <ul className="menu menu-vertical px-4 py-6 mt-10 space-y-2">
          <li><Link to="/" onClick={() => setIsSidebarOpen(false)}>Home</Link></li>
          <li><Link to="/course" onClick={() => setIsSidebarOpen(false)}>Courses</Link></li>
          <li><a onClick={() => setIsSidebarOpen(false)}>Contact</a></li>
          <li><a onClick={() => setIsSidebarOpen(false)}>Logout</a></li>
        </ul>
        {
        authUser ? (<div className="ml-4">Logged in as {authUser.name}</div>) :
        <div className="">
          <a className="bg-black text-white rounded-md cursor-pointer hover:bg-slate-700 duration-300 px-3 py-2"
            onClick={() => {
              document.getElementById("my_modal_3").showModal()
            }}>
            Login
          </a>
          <Login />
        </div>
      }
      </div>

    </div>
  );
}

export default Navbar;
