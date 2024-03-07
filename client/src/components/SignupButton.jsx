import React from 'react'
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development'
function SignupButton() {
  return (
    <Link to="/signup">
        <button className="bg-[#09B2FF] rounded-full font-bold  border-2 border-white hover:bg-white text-[#071A2D] pt-2 pb-2 pl-8 pr-8 mr-4  ml-2 text-sm transition-all duration-300 ease-in-out hover:ring-offset-2 hover:ring-4 ring-[#09B2FF]">
          Signup</button>
        
      </Link>
  )
}

export default SignupButton