import React from "react";
import Navbar from "../components/Navbar";

function Home() {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-black">
          <div className="flex flex-col justify-center h-screen md:h-auto">
            <h1 className="text-white text-center md:text-left text-4xl md:text-6xl pt-60 pl-10  ">
              Find the <span className="text-blue-400">Best</span> from around
              the world.
            </h1>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img className="w-full" src="./src/assets/bg.gif" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
