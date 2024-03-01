import React from 'react';
import Blockchain from '../assets/Blockchain.png';
import Contract from '../assets/Contract.png';
import earning from '../assets/earning.png';
import trust from '../assets/trust.png';

function About() {
  return (
    <div className='mb-10'>
      {/* First Set */}
      <div className="flex flex-col md:flex-row justify-between bg-black md:pt-24">
        <div className="mt-10 md:w-1/2 text-center md:text-left">
          <div className="bg-gray-300 text-white md:ml-40 bg-opacity-0 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
            <h3 className="text-2xl font-bold mb-4 md:pt-20">
              Transparent Earnings with Smart Contracts
            </h3>
            <p className="text-lg">
              Ensure secure and predictable payments through our smart contract system powered by Solidity. Experience financial stability with clearly defined payment milestones.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:w-1/2 mt-6 md:mt-0">
          <img src={earning} alt="" className='w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-white'/>
        </div>
      </div>

      {/* Second Set */}
      <div className="flex flex-col md:flex-row justify-between bg-black md:pt-4">
        <div className="mt-10 md:w-1/2 text-center md:text-left">
          <div className="bg-gray-300 text-white md:ml-40 bg-opacity-0 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
            <h3 className="text-2xl font-bold mb-4 md:pt-20">
              Direct Connect, Better Projects:
            </h3>
            <p className="text-lg">
              Communicate directly with employers to understand project intricacies. Forge meaningful relationships and shape your freelance career with seamless, peer-to-peer interactions.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:w-1/2 mt-6 md:mt-0">
          <img src={Contract} alt="" className='w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-white'/>
        </div>
      </div>

      {/* Third Set */}
      <div className="flex flex-col md:flex-row justify-between bg-black md:pt-4">
        <div className="mt-10 md:w-1/2 text-center md:text-left">
          <div className="bg-gray-300 text-white md:ml-40 bg-opacity-0 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
            <h3 className="text-2xl font-bold mb-4 md:pt-20">
              Fair Compensation in a Trustworthy Space
            </h3>
            <p className="text-lg">
              Trust in a platform designed for fairness. Benefit from our commitment to cryptocurrency transactions, cryptographic trust, and a minimal 5% service charge, ensuring a reliable and secure freelancing ecosystem.
            </p>
          </div>
        </div>

        <div className="flex justify-center md:w-1/2 mt-6 md:mt-0">
          <img src={trust} alt="" className='w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-white'/>
        </div>
      </div>

      {/* Fourth Set */}
      <div className="flex flex-col md:flex-row justify-between bg-black md:pt-4">
        <div className="mt-10 md:w-1/2 text-center md:text-left">
          <div className="bg-gray-300 text-white md:ml-40 bg-opacity-0 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
            <h3 className="text-2xl font-bold mb-4 md:pt-20">
              Global Opportunities at Your Fingertips
            </h3>
            <p className="text-lg">
              Access a world of freelance opportunities on our decentralized platform. Connect with employers globally, diversify your portfolio, and expand your professional horizons
            </p>
          </div>
        </div>

        <div className="flex justify-center md:w-1/2 mt-6 md:mt-0">
          <img src={Blockchain} alt="" className='w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-white'/>
        </div>
      </div>
    </div>
  );
}

export default About;
