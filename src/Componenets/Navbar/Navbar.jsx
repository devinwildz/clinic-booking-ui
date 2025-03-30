import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="w-full px-4 sm:px-6 lg:px-12 py-5 flex justify-between items-center">
      <div className="logo">
        <Link to="/">
          <img
            className="w-32 h-auto sm:w-40"
            src="https://doccure-wp.dreamstechnologies.com/wp-content/uploads/2024/06/logo-01.svg"
            alt="Logo"
          />
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <div className="hidden lg:flex lg:space-x-8">
          {['Home', 'Specialities', 'Doctors', 'Blog', 'Contact Us'].map(
            (item, index) => (
              <NavLink
                to={
                  item === 'Home'
                    ? '/'
                    : `/${item.toLowerCase().replace(' ', '')}`
                }
                key={index}
                className={({ isActive }) =>
                  `text-base font-medium ${
                    isActive ? 'text-sky-500' : 'hover:text-sky-500'
                  }`
                }
              >
                {item}
              </NavLink>
            )
          )}
        </div>
        <div className="hidden md:hidden lg:block sm:flex space-x-3">
          <Link to="/register">
            <button className="text-sm sm:text-base font-medium border-[#0e82fd] border-solid border-2 rounded-md p-2 w-20 sm:w-24 hover:bg-[#0e82fd] hover:text-white hover:border-[#0e82fd] transition duration-300 transform hover:-translate-y-1">
              Register
            </button>
          </Link>
          <Link to="/login">
            <button className="text-sm sm:text-base font-medium border-[#0e82fd] border-solid border-2 rounded-md p-2 w-20 sm:w-24 hover:bg-[#0e82fd] hover:text-white hover:border-[#0e82fd] transition duration-300 transform hover:-translate-y-1">
              Login
            </button>
          </Link>
        </div>
        <div className="lg:hidden">
          <button aria-label="Open Menu" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-300 ${
          menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMenu}
      >
        <div
          className={`fixed top-0 right-0 w-64 h-full z-50 bg-white flex flex-col items-center pt-14 px-5 transition-transform duration-300 transform ${
            menuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            aria-label="Close Menu"
            className="absolute top-4 right-4 text-3xl p-2 bg-[#0e82fd] rounded-full"
            onClick={toggleMenu}
          >
            <IoIosClose className="fill-white text-2xl" />
          </button>
          <div className="flex flex-col gap-4 w-full">
            {['Home', 'Specialities', 'Doctors', 'Blog', 'Contact Us'].map(
              (item, index) => (
                <NavLink
                  to={
                    item === 'Home'
                      ? '/'
                      : `/${item.toLowerCase().replace(' ', '')}`
                  }
                  key={index}
                  className={({ isActive }) =>
                    `text-base font-medium ${
                      isActive ? 'text-sky-500' : 'hover:text-sky-500'
                    }`
                  }
                  onClick={toggleMenu}
                >
                  {item}
                </NavLink>
              )
            )}
          </div>
          <div className="mt-8 flex flex-col space-y-3 w-full">
            <Link to="/register" onClick={toggleMenu}>
              <button className="text-base font-medium border-[#0e82fd] border-solid border-2 rounded-md p-2 w-full hover:bg-[#0e82fd] hover:text-white hover:border-[#0e82fd] transition duration-300">
                Register
              </button>
            </Link>
            <Link to="/login" onClick={toggleMenu}>
              <button className="text-base font-medium border-[#0e82fd] border-solid border-2 rounded-md p-2 w-full hover:bg-[#0e82fd] hover:text-white hover:border-[#0e82fd] transition duration-300">
                Login
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
