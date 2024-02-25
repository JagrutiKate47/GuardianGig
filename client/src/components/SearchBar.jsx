import React from 'react';
import { FaSearch } from 'react-icons/fa';

function SearchBar() {
  return (
    <div className='flex float-right caret-pink-500 items-center bg-[#ffffff] rounded-full px-12  ml-[44rem]'>
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
