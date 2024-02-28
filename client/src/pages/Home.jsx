import React from "react";
import Navbar from "../components/Navbar";
import Category from "./Category";


function Home() {
  return (
    <div>
      <Navbar />

      <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 bg-black flex justify-center items-center ">
  <div className="text-center md:text-left  px-10 ">
    <h1 className="text-white text-4xl md:text-5xl pt-20 md:pt-0  ">
      Find the
      <span className="bg-gradient-to-r mx-4 from-[#912d9c] via-blue-400 to-[#0ABCF9] text-transparent bg-clip-text">
        Best
      </span>
      from around the world.
    </h1>
    <p className="text-gray-500  pt-6">
      Unleash Freelancing's Future: Seamlessly Navigate Contracts with Smart
      <br />
      Contract Technology, Fueled by Web3 Innovation, on Our Revolutionary App
    </p>
  </div>
</div>


        <div className="w-full md:w-1/2">
          <img className="w-full h-auto" src="./src/assets/bg.gif" alt="" />
        </div>
      </div>
      <Category/>
    </div>
  );
}

export default Home;
