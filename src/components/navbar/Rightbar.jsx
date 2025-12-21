import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cross, MenuBar, Search } from '../../utils/Icons';
import picture from '../../images/usma.jpg';

function Rightbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <div className="relative flex items-center justify-end px-5">

      {/* ================= Desktop ================= */}
      <div className="hidden lg:flex items-center gap-6">

        {/* Search */}
        {showSearch ? (
          <form
            onSubmit={handleSearchSubmit}
            className="flex items-center bg-gray-100 rounded-full px-3 py-2 shadow-md"
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent outline-none text-sm w-48"
              autoFocus
            />
            <button type="submit" className="p-1 text-gray-600">
              <Search />
            </button>
            <button
              type="button"
              onClick={() => setShowSearch(false)}
              className="ml-1 text-lg text-gray-600"
            >
              <Cross />
            </button>
          </form>
        ) : (
          <button onClick={() => setShowSearch(true)}>
            <Search />
          </button>
        )}

        {/* Auth Buttons */}
        <button className="px-5 py-2 text-sm font-medium text-purple-700 border border-purple-300 rounded-md hover:bg-purple-50">
          Sign in
        </button>

        <button
          style={{ background: '#953BF5' }}
          className="px-5 py-2 text-sm font-medium text-white rounded-md"
        >
          Sign Up
        </button>

        {/* Profile */}
        <img
          src={picture}
          alt="Profile"
          className="rounded-full w-10 h-10 cursor-pointer"
          onClick={() => setShowDropdown(!showDropdown)}
        />
      </div>

      {/* ================= Mobile ================= */}
      <div className="lg:hidden flex items-center relative">
        <button onClick={() => setShowDropdown(!showDropdown)}>
          <MenuBar />
        </button>

        {showDropdown && (
          <div className="absolute top-12 right-0 w-56 bg-black/40 backdrop-blur-md rounded-md p-4 z-50 space-y-4">

            {/* Nav Links */}
            <ul className="text-white flex flex-col gap-3">
              <Link to="/home" className="hover:text-purple-400">Home</Link>
              <Link to="/about" className="hover:text-purple-400">About Us</Link>
              <li className="hover:text-purple-400 cursor-pointer">Tech</li>
              <li className="hover:text-purple-400 cursor-pointer">Contact</li>
            </ul>

            {/* Search */}
            {showSearch ? (
              <form
                onSubmit={handleSearchSubmit}
                className="flex items-center bg-white rounded-full px-3 py-2"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="flex-1 outline-none text-sm"
                  autoFocus
                />
                <button type="submit">
                  <Search />
                </button>
                <button
                  type="button"
                  onClick={() => setShowSearch(false)}
                  className="ml-2"
                >
                  <Cross />
                </button>
              </form>
            ) : (
              <button
                onClick={() => setShowSearch(true)}
                className="text-white flex items-center gap-2"
              >
                <Search /> Search
              </button>
            )}

            {/* Auth Buttons */}
            <button className="border border-purple-400 text-purple-400 py-2 rounded-md w-full">
              Sign in
            </button>

            <button
              style={{ background: '#953BF5' }}
              className="text-white py-2 rounded-md w-full"
            >
              Sign Up
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Rightbar;
