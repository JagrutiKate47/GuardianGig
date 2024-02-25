import React from 'react';

function LoginButton() {
  return (
    <a href="#">
      <button className="bg-white rounded-lg border-2 border-[#09B2FF] hover:bg-[#09B2FF] hover:text-white text-[#071A2D] pt-1 pb-1 pl-12 pr-12 mt-3 ml-10 mr-8 text-lg transition-all duration-300 ease-in-out hover:ring-offset-4 ring-0">
        Login
      </button>
    </a>
  );
}

export default LoginButton;
