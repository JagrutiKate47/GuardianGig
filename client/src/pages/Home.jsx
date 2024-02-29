import React from "react";
import Navbar from "../components/Navbar";
import Category from "./Category";
import About from "./About";

function Home() {
  return (
    <div>
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

      <div className="flex justify-between">
            <div className="mt-10 text-left grid grid-cols-1 md:grid-cols-2 gap-8 w-1/2">
              <div className="bg-gray-300 bg-opacity-25 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
                <h3 className="text-2xl font-bold mb-4">
                  Transparent Earnings with Smart Contracts
                </h3>
                <p className="text-lg">
                  Ensure secure and predictable payments through our smart
                  contract system powered by Solidity. Experience financial
                  stability with clearly defined payment milestones.
                </p>
              </div>
              <div className="bg-gray-300 bg-opacity-25 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
                <h3 className="text-2xl font-bold mb-4">
                  Direct Connect, Better Projects:
                </h3>
                <p className="text-lg">
                  Communicate directly with employers to understand project
                  intricacies. Forge meaningful relationships and shape your
                  freelance career with seamless, peer-to-peer interactions.
                </p>
              </div>
              <div className="bg-gray-300 bg-opacity-25 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
                <h3 className="text-2xl font-bold mb-4">
                  Global Opportunities at Your Fingertips
                </h3>
                <p className="text-lg">
                  Access a world of freelance opportunities on our decentralized
                  platform. Connect with employers globally, diversify your
                  portfolio, and expand your professional horizons
                </p>
              </div>
              <div className="bg-gray-300 bg-opacity-25 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
                <h3 className="text-2xl font-bold mb-4">
                  Fair Compensation in a Trustworthy Space
                </h3>
                <p className="text-lg">
                  Trust in a platform designed for fairness. Benefit from our
                  commitment to cryptocurrency transactions, cryptographic
                  trust, and a minimal 5% service charge, ensuring a reliable
                  and secure freelancing ecosystem.
                </p>
              </div>
            </div>
            <div className="w-1/2">
              <img className="" src="src/assets/secondassetimage.jpg" alt="" />
            </div>
          </div>
          
    </div>
  );
}

export default Home;
