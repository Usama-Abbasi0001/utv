import React, { useState } from 'react';
import { Cross, Menu, Search } from '../../utils/Icons';
import picture from '../../images/usam.jpg'; 

function Rightbar() {
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchClick = () => {
    setShowSearch(!showSearch);
    if (showSearch) {
      setSearchQuery(''); // Clear search when closing
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      console.log('Searching for:', searchQuery);
      // Implement your search logic here
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setShowSearch(false);
    }
  };

  return (
    <div className="flex items-center justify-end px-5 ">
      <div className="flex items-center gap-5">
        {/* Sign In / Sign Up Buttons */}
        <div className="lg:flex hidden gap-3">
          <button className="px-5 py-2 text-sm font-medium text-purple-700 border border-purple-300 rounded-md hover:bg-purple-50 hover:border-purple-400 transition-all duration-200">
            Sign in
          </button>
          <button  style={{ background: '#953BF5'}} className="px-5 py-2 text-sm font-medium text-white  rounded-md  hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5">
            Sign Up
          </button>
        </div>

          {/* Search Section */}
        <div className="relative lg:flex hidden">
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
                aria-label="Submit search"
              >
           <Cross/>
              </button>
              <button 
                type="button" 
                className="ml-1 p-1 text-gray-600 hover:bg-gray-200 rounded-full text-lg transition-colors"
                onClick={() => setShowSearch(false)}
                aria-label="Close search"
              >
                ×
              </button>
            </form>
          ) : (
            <button 
              className="p-2 hover:bg-gray-100 rounded-full text-gray-600 hover:text-gray-800 transition-colors"
              onClick={handleSearchClick}
              aria-label="Search"
            >
            <Search/>
            </button>
          )}
        </div>
        <div>
          <img  src={picture} alt="my picture" className='lg:flex hidden rounded-[50%] w-[40px] h-[40px]' />
          <div className='lg:hidden flex'><Menu/></div>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;