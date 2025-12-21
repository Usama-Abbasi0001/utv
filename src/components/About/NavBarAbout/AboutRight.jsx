import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Cross, MenuBar, Search } from '../../../utils/Icons';
import picture from '../../../images/usma.jpg';

function AboutRight() {
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
      <div className="hidden lg:flex items-center gap-5">
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

            {/* Navigation */}
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
                <button type="submit" className="text-gray-600">
                  <Search />
                </button>
                <button
                  type="button"
                  onClick={() => setShowSearch(false)}
                  className="ml-2 text-gray-600"
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
            <div className="flex flex-col gap-2">
              <button className="border border-purple-400 text-purple-400 py-2 rounded-md">
                Sign In
              </button>
              <button
                style={{ background: '#953BF5' }}
                className="text-white py-2 rounded-md"
              >
                Sign Up
              </button>
            </div>

          </div>
        )}
      </div>
    </div>
  );
}

export default AboutRight;
