import React from 'react';
import { Link } from 'react-router-dom/dist/umd/react-router-dom.development';
import Login from '../pages/Login';

function LoginButton() {
  return (
    <Link to="/login">
      <button className="font-bold hover:text-white text-[#09B2FF] text-sm mt-0 md:ml-8 mr-0">
        Login
      </button>
      </Link>
  );
}

export default LoginButton;
