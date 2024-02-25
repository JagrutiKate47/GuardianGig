import React from 'react'
import logo from '../assets/logo.png';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
function Navbar() {
  return (
    <div className='flex bg-black pt-4 h-20 pl-6 md:pl-2'>
      <div className='text-white w-48'><img src={logo} alt="Logo" /></div>
      <SearchBar/>
      <LoginButton/>
      <SignupButton/>
    </div>
  )
}



export default Navbar