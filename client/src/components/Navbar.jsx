import React, { useState } from "react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import NavBtns from "./NavBtns";
import NavMobileMenu from "./NavMobileMenu";
import SignupButton from "./SignupButton";
import LoginButton from "./LoginButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="container mx-auto px-4 md:px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <img src={logo} className="h-8" alt="Flowbite Logo" />
            <SearchBar />
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <NavBtns />
            <LoginButton />
            <SignupButton />
          </div>
          <button
            onClick={toggleMenu}
            type="button"
            className="md:hidden focus:outline-none"
            aria-controls="navbar-default"
            aria-expanded={isOpen ? "true" : "false"}
          >
            <svg
              className="w-6 h-6 text-gray-500 hover:text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          className={`w-full md:hidden ${isOpen ? "" : "hidden"}`}
          id="navbar-default"
        >
          <ul className="flex flex-col items-start space-y-4 mt-4">
            <NavMobileMenu />
            <li>
              <SignupButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

