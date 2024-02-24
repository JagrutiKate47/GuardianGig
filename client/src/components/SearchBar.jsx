import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className='flex float-right items-center bg-[#ffffff] rounded-full pl-12 pr-12 mt-2 ml-[44rem]'>
      <FaSearch size={20} className='text-gray-800 -ml-8' />
      <input
        type='text'
        placeholder='Type to search...'
        className='bg-transparent placeholder-black ml-2 border-none focus:outline-none'
      />
    </div>
  );
}

export default SearchBar;
