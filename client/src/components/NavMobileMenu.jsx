import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

function HamburgerMenu() {
  return (
    <div>
        <div className=' md:hidden'>
        <GiHamburgerMenu value={{ color: 'blue', size: '50px' }}/>
        </div>


    </div>
  )
}

export default HamburgerMenu

//<GiHamburgerMenu />
