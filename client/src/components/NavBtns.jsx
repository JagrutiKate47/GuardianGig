import React, { useState } from 'react';

function NavBtns() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-black py-4 md:py-2">
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* First select dropdown for finding talent */}
          <select
            className={`w-full md:w-28 py-2 md:py-4 text-gray-900 mr-6 md:text-gray-400 bg-${
              isOpen ? 'black' : 'transparent'
            } rounded-md outline-none border-2 ${
              isOpen ? 'border-blue-800' : 'border-gray-300'
            } md:border-none focus:border-blue-800 md:focus:border-none`}
            onClick={toggleDropdown}
            onBlur={toggleDropdown}
          >
            <option>Find Talent</option>
            <option>Hire now</option>
            <option>Post a job</option>
            <option>Find by categories</option>
          </select>

          {/* Second select dropdown for finding work */}
          <select
            className={`w-full md:w-28 py-2 md:py-4 text-gray-900 md:text-gray-400 bg-${
              isOpen ? 'black' : 'transparent'
            } rounded-md outline-none border-2 ${
              isOpen ? 'border-blue-800' : 'border-gray-300'
            } md:border-none focus:border-blue-800 md:focus:border-none`}
            onClick={toggleDropdown}
            onBlur={toggleDropdown}
          >
            <option>Find Work</option>
            <option>Search according to your skills</option>
            <option>Find by categories</option>
          </select>

          {/* Link for "Why us" */}
          <a href="/" className="block mt-2 md:mt-0 text-gray-900 md:text-gray-400 font-bold hover:text-blue-500 md:font-normal md:ml-8">Why us</a>

          {/* Link for "About" */}
          <a href="/" className="block mt-2 md:mt-0 text-gray-900 md:text-gray-400 font-bold hover:text-blue-500 md:font-normal md:ml-8 md:mr-6">About</a>
        </div>
      </div>
    </div>
  );
}

export default NavBtns;
