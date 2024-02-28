import React from 'react';
import Blockchain from '../assets/Blockchain.png';
import Contract from '../assets/Contract.png';

function About() {
  return (
    <div className='bg-black grid text-center md:text-left'>
      <div className='max-w-screen-xl mx-auto'>
        <div className='md:ml-0 pl-10 md:pl-0 text-white'>
          <h1 className="text-4xl md:text-5xl font-bold md:font-extrabold pt-20">
            How Are We <span className="gradient-text" style={{ color: '#09B2FF' }}>Different</span>?
          </h1>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-20 my-10 md:my-20">
          {/* Blockchain Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="text-white md:text-lg md:w-1/2 md:pr-10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">We use blockchain for safer payments</h3>
              <p className="text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, fuga ullam! Ducimus consectetur in eius facere, facilis amet.</p>
            </div>
            <img src={Blockchain} alt="Blockchain" className="w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-white mt-6 md:mt-0 md:ml-6" />
          </div>

          {/* Contract Section */}
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="text-white md:text-lg md:w-1/2 md:pr-10">
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">We use Smart contracts</h3>
              <p className="text-base md:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem, fuga ullam! Ducimus consectetur in eius facere, facilis amet.</p>
            </div>
            <img src={Contract} alt="Smart Contract" className="w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-white mt-6 md:mt-0 md:ml-6" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;

