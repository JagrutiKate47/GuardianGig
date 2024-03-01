import React from 'react';

function NavBtns() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-4 pb-20  md:mt-0 md:flex bg-transparent md:pt-1 md:ml-10 md:font-bold">
        {/* First select dropdown for finding talent */}
        <select className="md:w-[110px] pt-10 md:pt-0 text-gray-600 bg-none outline-none bg-transparent">
          <option>Find Talent</option>
          <option>Hire now</option>
          <option>Post a job</option>
          <option>Find by categories</option>
        </select>

        {/* Second select dropdown for finding work */}
        <select className="md:w-[110px] text-gray-600 bg-none outline-none bg-transparent md:pl-3">
          <option>Find Work</option>
          <option>Search according to your skills</option>
          <option>Find by categories</option>
        </select>

        {/* Link for "Why us" */}
        <a href=""><h3 className='text-gray-600  md:pl-5 md:pt-0'>Why us</h3></a>

        {/* Link for "About" */}
        <a href=""><h3 className='text-gray-600  md:pl-5 md:pt-0'>About</h3></a>
      </div>
    </div>
  );
}

export default NavBtns;
