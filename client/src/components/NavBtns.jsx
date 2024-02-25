import React from 'react'

function NavBtns() {
  return (
    <div>
        <div className=" flex bg-transparent mt-2 pt-1  ml-10 font-bold">
            <select className=" w-[110px] text-gray-600 bg-none outline-none bg-transparent">
                <option>Find Talent</option>
                <option>Hire now</option>
                <option>Post a job</option>
                <option>Find by categories</option>
                
            </select>

            <select className=" w-[110px] text-gray-600 bg-none outline-none bg-transparent pl-3">
                <option>Find Work</option>
                <option>Search according to your skills</option>
                <option>Find by categories</option>
                
            </select>

            <a href=""><h3 className='text-gray-600 pl-6'>Why us</h3></a>
            <a href=""><h3  className='text-gray-600 pl-6'>About</h3> </a>
        </div>
    </div>
  )
}

export default NavBtns;