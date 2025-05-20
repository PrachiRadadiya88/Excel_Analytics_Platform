import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ isAdmin }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center">
      {/* Logo */}
      <div className="text-xl font-bold text-blue-600">
        <Link to="/">ExcelAnalytics</Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex space-x-6 text-gray-700 font-medium items-center">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/upload">Upload Excel</Link></li>
        <li><Link to="/history">My History</Link></li>
        {isAdmin && <li><Link to="/admin">Admin Panel</Link></li>}

        {/* Profile Dropdown */}
        <li className="relative">
          <button
            className="w-9 h-9 rounded-full bg-gray-200 hover:bg-gray-300 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* You can replace with a real avatar later */}
            <span className="text-sm font-bold">👤</span>
          </button>
          {isOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 shadow-lg rounded-md text-sm z-50">
              <li>
                <Link
                  to="/profile"
                  className="block px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  View Profile
                </Link>
              </li>
              <li>
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100"
                  onClick={() => {
                    setIsOpen(false);
                    console.log("Logged out"); // Replace with real logout
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
