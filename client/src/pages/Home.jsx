import React from "react";
import Navbar from "../components/Navbar";
import Category from "./Category";
import About from "./About";
import Footer from "../components/Footer";

function Home() {
  return (
    <div className="bg-black">
      <Navbar />

      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 bg-black flex justify-center items-center">
          <div className="text-center md:text-left md:ml-8 px-10 text-white">
            <h1 className="text-4xl md:text-5xl pt-20 md:pt-0">
              Find the <span className="gradient-text">Best</span> from around
              the world.
            </h1>
            <p className="text-gray-500 pt-6">
              Unleash Freelancing's Future: Seamlessly Navigate Contracts with
              Smart Contract Technology, Fueled by Web3 Innovation, on Our
              Revolutionary App
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/2">
          <img
            className="w-full h-auto object-cover"
            src="./src/assets/bg.gif"
            alt="Background"
          />
        </div>
      </div>

      <Category />
      <About/>
      <Footer></Footer>
      </div>

    
  );
}

export default Home;
