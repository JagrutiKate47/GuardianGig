import React from "react";
import Artist from "../assets/Artist.png";
import DataAnalyst from "../assets/DataAnalyst.png";
import editor from "../assets/editor.png";
import finance from "../assets/finance.png";
import musicProducer from "../assets/musicProducer.png";
import photographer from "../assets/photographer.png";
import Translation from "../assets/Translation.png";
import writer from "../assets/writer.png";

function Category() {
  return (
    <div className="bg-black">
      <div className="flex items-center justify-center py-10 text-xl font-semibold text-[#00B2FF] md:text-5xl">
        <h1>Browse by Category</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 md:px-12 lg:px-24">
        <Card desc={"Photographer"} image={photographer} />
        <Card desc={"Artist"} image={Artist} />
        <Card desc={"Writer"} image={writer} />
        <Card desc={"Translation"} image={Translation} />
        <Card desc={"Editor"} image={editor} />
        <Card desc={"Finance"} image={finance} />
        <Card desc={"Data Analyst"} image={DataAnalyst} />
        <Card desc={"Music Producer"} image={musicProducer} />
      </div>
    </div>
  );
}

function Card({ image, desc, text }) {
  return (
    <div className="max-w-sm bg-[#071A2D] border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center">
        <img
          className="border-double border-4 border-sky-500 mt-12"
          src={image}
          alt={desc}
        />
      </div>
      <div className="p-5 flex flex-col items-center">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-100 dark:text-white">
          {desc}
        </h5>

        <button className="inline-flex items-center px-4 py-2 mt-3 text-sm font-medium text-white bg-gradient-to-r from-pink-600 via-pink-500 to-blue-500 rounded-lg hover:from-pink-700 hover:via-pink-600 hover:to-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-gradient-to-r dark:from-pink-800 dark:via-pink-700 dark:to-blue-700 dark:hover:from-pink-900 dark:hover:via-pink-800 dark:hover:to-blue-800 dark:focus:ring-blue-800 transition duration-300 ease-in-out hover:ring-2 hover:ring-blue-500">
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
  );
}

export default Category;
