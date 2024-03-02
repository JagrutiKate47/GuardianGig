import React from 'react';
import './Card.css';
import Artist from '../assets/Artist.png';
import DataAnalyst from '../assets/DataAnalyst.png';
import editor from '../assets/editor.png';
import finance from '../assets/finance.png';
import musicProducer from '../assets/musicProducer.png';
import photographer from '../assets/photographer.png';
import Translation from '../assets/Translation.png';
import writer from '../assets/writer.png';

function Category() {
  return (
    <div className="bg-gray-900 py-20">
      <div className="text-center text-3xl font-semibold text-blue-400 mb-10">
        Browse by Category
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-24">
        <Card desc={'Photographer'} image={photographer} info={'We have some of the best Photographers,hope you will enjoy working with them.'} />
        <Card desc={'Artist'} image={Artist} info={'We have some of the best Artists,hope you will enjoy working with them.'} />
        <Card desc={'Writer'} image={writer} info={'We have some of the best Writers,hope you will enjoy working with them.'} />
        <Card desc={'Translation'} image={Translation} info={'We have some of the best Translators,hope you will enjoy working with them.'} />
        <Card desc={'Editor'} image={editor} info={'We have some of the best Editors,hope you will enjoy working with them.'} />
        <Card desc={'Finance'} image={finance} info={'We have some of the best Financers,hopeyou will enjoy working with them.'} />
        <Card desc={'Data Analyst'} image={DataAnalyst} info={'We have some of the best Data Analyst,hopeyou will enjoy working with them.'} />
        <Card desc={'Music Producer'} image={musicProducer} info={'We have some of the best Music Producers,hopeyou will enjoy working with them.'} />
      </div>
    </div>
  );
}

function Card({ image, desc, info }) {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front bg-gray-800 rounded-lg flex justify-center items-center">
          <img className="w-full h-full object-cover rounded-lg" src={image} alt={desc} />
        </div>
        <div className="flip-card-back bg-blue-900 text-white rounded-lg flex flex-col justify-center items-center">
          <h5 className="mb-4 text-2xl font-bold">{desc}</h5>
          <p className="text-lg text-center mb-6 px-4">
           {info}
          </p>
          <button className="px-8 py-2 text-sm font-medium bg-black rounded-lg hover:bg-[#73C2FB] hover:text-black focus:ring-4 focus:outline-none focus:ring-blue-300 transition duration-300 ease-in-out hover:ring-2 hover:ring-blue-500 text-white">
            Search more
            <svg
              className="rtl:rotate-180 w-4 h-4 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}


export default Category;
