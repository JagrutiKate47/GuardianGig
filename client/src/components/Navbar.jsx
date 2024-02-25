import React from 'react'
import logo from '../assets/logo.png';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import NavBtns from './NavBtns';
function Navbar() {
  return (
    <div className='flex bg-black pt-4 h-[4.6rem] pl-6 md:pl-2'>
      <div className='text-white w-48 ml-24 mr-14'><img src={logo} alt="Logo" /></div>
      <NavBtns/>
      
      <LoginButton/>
      <SignupButton/>
      
    </div>
  )
}



export default Navbar