import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setShowDropdown((prevShowDropdown) => !prevShowDropdown);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLinkClick = () => {
    setShowDropdown(false);
  };

  return (
    <>
      <nav className="bg-gray-800 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <Link to="/" className="text-white font-bold text-xl">
              YourLogo
            </Link>
          </div>
          <div>
          <button
              onClick={toggleDropdown}
              className=" text-white hover:text-gray-300 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
          {showDropdown && (
            <ul
              ref={dropdownRef}
              className=" absolute top-12 right-4 py-2 px-3 bg-gray-800 rounded-lg shadow-lg"
            >
              <li>
                <Link
                  to="/userprofile"
                  className="text-white block py-2 hover:bg-gray-700 rounded-md"
                  onClick={handleLinkClick}
                >
                  User Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/calendar"
                  className="text-white block py-2 hover:bg-gray-700 rounded-md"
                  onClick={handleLinkClick}
                >
                  Calendar
                </Link>
              </li>
              <li>
                <Link
                  to="/dashboard"
                  className="text-white block py-2 hover:bg-gray-700 rounded-md"
                  onClick={handleLinkClick}
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-white block py-2 hover:bg-gray-700 rounded-md"
                  onClick={handleLinkClick}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-in"
                  className="text-white block py-2 hover:bg-gray-700 rounded-md"
                  onClick={handleLinkClick}
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  to="/sign-up"
                  className="text-white block py-2 hover:bg-gray-700 rounded-md"
                  onClick={handleLinkClick}
                >
                  Sign Up
                </Link>
              </li>
              <li>
                <Link
                  to="/settings"
                  className="text-white block py-2 hover:bg-gray-700 rounded-md"
                  onClick={handleLinkClick}
                >
                  Settings
                </Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
}
