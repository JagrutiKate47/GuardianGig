import React from 'react';
import Blockchain from '../assets/Blockchain.png';
import Contract from '../assets/Contract.png';
import earning from '../assets/earning.png';
import trust from '../assets/trust.png';

function About() {
  return (
    <div>
    <div className="flex justify-between bg-black md:pt-24">
    <div className="mt-10 text-left grid grid-cols-1 md:grid-cols-2 gap-8 ">
      <div className="bg-gray-300 text-white md:ml-40 bg-opacity-0 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
        <h3 className="text-2xl font-bold mb-4 md:pt-20">
          Transparent Earnings with Smart Contracts
        </h3>
        <p className="text-lg">
          Ensure secure and predictable payments through our smart contract system powered by Solidity. Experience financial
          stability with clearly defined payment milestones.
        </p>
      </div>


      <div >
      <img src={earning} alt=""  className='w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-white mt-6 md:mt-0 md:ml-32'/>
        
      </div>
      <div >
      <img src={trust} alt=""  className='w-60 h-60 md:w-80 md:h-80 md:ml-72  rounded-full border-4 border-white mt-6 md:mt-0 '/>
        
      </div>

      <div className=" text-white bg-opacity-0 rounded-2xl p-4 md:mr-24 hover:scale-110 transition-all duration-100 ease-in-out">
        <h3 className="text-2xl font-bold mb-4 md:pt-20">
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
   
  </div>

  {/*SECOND SET*/}
  <div className="flex justify-between bg-black md:pt-4">
    <div className="mt-10 text-left grid grid-cols-1 md:grid-cols-2 gap-8 ">
      <div className="bg-gray-300 text-white md:ml-40 bg-opacity-0 rounded-2xl p-4 hover:scale-110 transition-all duration-100 ease-in-out">
        <h3 className="text-2xl font-bold mb-4 md:pt-20">
        Direct Connect, Better Projects:
               
        </h3>
        <p className="text-lg">
        Communicate directly with employers to understand project
                  intricacies. Forge meaningful relationships and shape your
                  freelance career with seamless, peer-to-peer interactions.
        </p>
      </div>


      <div >
      <img src={Contract} alt=""  className='w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-white mt-6 md:mt-0 md:ml-32'/>
        
      </div>
      <div >
      <img src={Blockchain} alt=""  className='w-60 h-60 md:w-80 md:h-80 md:ml-72  rounded-full border-4 border-white mt-6 md:mt-0 '/>
        
      </div>

      <div className=" text-white bg-opacity-0 rounded-2xl p-4 md:mr-24 hover:scale-110 transition-all duration-100 ease-in-out">
        <h3 className="text-2xl font-bold mb-4 md:pt-20">
        Global Opportunities at Your Fingertips
        </h3>
        <p className="text-lg">
        Access a world of freelance opportunities on our decentralized
                  platform. Connect with employers globally, diversify your
                  portfolio, and expand your professional horizons
        </p>
      </div>
    </div>
   
  </div>
  </div>
  

  );
}

export default About;
