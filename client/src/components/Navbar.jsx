import React from 'react'
import logo from '../assets/logo.png';
import SearchBar from './SearchBar';
import LoginButton from './LoginButton';
import SignupButton from './SignupButton';
import NavBtns from './NavBtns'
import NaVMobileMenu from './NavMobileMenu';

function Navbar() {
  return (
    <div>
    <div className=' hidden  bg-black text-white md:flex pt-4 h-[4.6rem] md:pl-6 pl-2'>
      <div className='text-white w-48 ml-24 mr-14'><img src={logo} alt="Logo" /></div>
      <NavBtns/>
      
      <LoginButton/>
      <SignupButton/>
      
    </div>
    <div className=' md:hidden '>
      <NaVMobileMenu/>
      

    </div>
    </div>
    
  )
}



export default Navbar