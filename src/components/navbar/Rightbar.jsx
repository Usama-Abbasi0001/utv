import React, { useState } from 'react';
import { Cross, MenuBar, Search } from '../../utils/Icons';
import picture from '../../images/usam.jpg';

function Rightbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDropdown, setShowDropdown] = useState(false); // Toggle for small screens

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    if (showSearch) setSearchQuery('');
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) console.log('Searching for:', searchQuery);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') setShowSearch(false);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="relative flex items-center justify-end px-5">
      {/* Large screens Rightbar */}
      <div className="hidden lg:flex items-center gap-5">
        {/* Search */}
        <div className="relative flex">
          {showSearch ? (
            <form
              className="flex items-center bg-gray-100 rounded-full px-3 py-2 shadow-md animate-slideIn"
              onSubmit={handleSearchSubmit}
            >
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="bg-transparent border-none px-3 py-1 text-sm w-48 focus:outline-none text-gray-800 placeholder-gray-500"
                autoFocus
              />
              <button
                type="submit"
                className="p-1.5 text-gray-600 hover:bg-gray-200 rounded-full transition-colors"
              >
                <Cross />
              </button>
              <button
                type="button"
                className="ml-1 p-1 text-gray-600 hover:bg-gray-200 rounded-full text-lg transition-colors"
                onClick={() => setShowSearch(false)}
              >
                ×
              </button>
            </form>
          ) : (
            <button
              className="p-2 rounded-full text-gray-600 hover:text-gray-800 transition-colors"
              onClick={handleSearchClick}
            >
              <Search />
            </button>
          )}
        </div>

        {/* Sign In / Sign Up */}
        <div className="flex gap-3">
          <button className="px-5 py-2 text-sm font-medium text-purple-700 border border-purple-300 rounded-md hover:bg-purple-50 hover:border-purple-400 transition-all duration-200">
            Sign in
          </button>
          <button
            style={{ background: '#953BF5' }}
            className="px-5 py-2 text-sm font-medium text-white rounded-md hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Sign Up
          </button>
        </div>

        {/* Profile Picture */}
        {/* <img
          src={picture}
          alt="Profile"
          className="rounded-full w-10 h-10 hidden"
        /> */}
      </div>

      {/* Small/Medium screens */}
      <div className=" items-center gap-2 relative">
        <img
          src={picture}
          alt="Profile"
          className="lg:flex hidden rounded-full w-10 h-10 cursor-pointer ms-5"
          onClick={toggleDropdown}
        />
        <span
          className="font-medium text-gray-800 cursor-pointer lg:hidden flex"
          onClick={toggleDropdown}
        >
          <MenuBar/>
        </span>

        {/* Dropdown menu */}
        {showDropdown && (
          <div className="absolute top-12 right-0 w-56 bg-black/40 backdrop-blur-md shadow-lg rounded-md p-3 flex flex-col gap-3 z-50">

            {/* Search */}
            <div className="relative flex">
              {showSearch ? (
                <form
                  className="flex items-center bg-gray-100 rounded-full px-3 py-2 shadow-md w-full"
                  onSubmit={handleSearchSubmit}
                >
                  <input
                    type="text"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="bg-transparent border-none px-3 py-1 text-sm w-full focus:outline-none text-gray-800 placeholder-gray-500"
                    autoFocus
                  />
                  <button
                    type="submit"
                    className="p-1.5 text-gray-600 hover:bg-gray-200 rounded-full transition-colors"
                  >
                    <Cross />
                  </button>
                  <button
                    type="button"
                    className="ml-1 p-1 text-gray-600 hover:bg-gray-200 rounded-full text-lg transition-colors"
                    onClick={() => setShowSearch(false)}
                  >
                    ×
                  </button>
                </form>
              ) : (
                <button
                  className="p-2 rounded-full text-gray-600 hover:text-gray-800 transition-colors w-full"
                  onClick={handleSearchClick}
                >
                  <Search />
                </button>
              )}
            </div>

            {/* Sign In / Sign Up */}
            <div className="flex flex-col gap-2">
              <button className="px-5 py-2 text-sm font-medium text-purple-700 border border-purple-300 rounded-md hover:bg-purple-50 hover:border-purple-400 transition-all duration-200 w-full">
                Sign in
              </button>
              <button
                style={{ background: '#953BF5' }}
                className="px-5 py-2 text-sm font-medium text-white rounded-md hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 w-full"
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

export default Rightbar;
