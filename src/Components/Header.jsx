import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCalendarDays, faPhone, faHouse } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  // State to manage the menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle menu toggle
  const handleToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to close the menu when a link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Get current pathname from location
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <nav className="bg-black border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Celestia
            </span>
          </a>
          <button
            onClick={handleToggle}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-darkgrey focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div
            className={`${isMenuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-darkgrey rounded-lg bg-black md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-black dark:bg-black md:dark:bg-black dark:border-darkgrey">
              <li>
                <Link
                  to="/"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${currentPath === '/' ? 'text-neonblue' : 'text-white'} hover:text-neonblue`}
                  aria-current={currentPath === '/' ? 'page' : undefined}
                  onClick={closeMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${currentPath === '/about' ? 'text-neonblue' : 'text-white'} hover:text-neonblue`}
                  onClick={closeMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/events"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${currentPath === '/events' ? 'text-neonblue' : 'text-white'} hover:text-neonblue`}
                  onClick={closeMenu}
                >
                  Events
                </Link>
              </li>
              <li>
                <Link
                  to="/pricing"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${currentPath === '/pricing' ? 'text-neonblue' : 'text-white'} hover:text-neonblue`}
                  onClick={closeMenu}
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={`block py-2 px-3 rounded md:bg-transparent md:p-0 ${currentPath === '/contact' ? 'text-neonblue' : 'text-white'} hover:text-neonblue`}
                  onClick={closeMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
