import React from "react";
import { FaUserCircle } from "react-icons/fa";

function FreelanceShow() {
  return (
    <div className="bg-gray-900 pt-10 px-4 md:px-8">
      <div className="flex md:grid items-center justify-between">
        <a href="#">
          <button className="bg-blue-500 hover:bg-blue-600 text-black font-semibold px-4 py-1 md:px-6 md:py-2 md:ml-[45rem] md:mb-4 md:mr-4 rounded-md">
            Freelancer
          </button>
        </a>

        <div className="text-white font-bold md:pl-4">
          <FaUserCircle size={42} className="pb-2 md:pb-0 md:mr-2" />
          <div>
            <h4 className="text-xl md:text-2xl">Name</h4>
            <p className="text-sm md:text-base">
              Company Name- <span className="text-blue-300">Input</span>
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8">
        <div className="bg-gray-800 p-4 rounded-md">
          <h4 className="text-white text-xl">About Me</h4>
          <p className="text-white mt-2 md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed
            ipsum ac odio vehicula mollis. Integer vel odio id elit lacinia
            pulvinar.
          </p>
        </div>

        <div className="bg-gray-800 p-4 rounded-md">
          <h4 className="text-white text-xl">Experience</h4>
          <p className="text-white mt-2 md:text-base">
            - Experience 1 <br />
            - Experience 2 <br />
            - Experience 3
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 pt-8">
        <div className="bg-gray-800 p-4 rounded-md">
          <h4 className="text-white text-xl">Videos</h4>
          {/* Add video component or embed video here */}
        </div>

        <div className="bg-gray-800 p-4 rounded-md">
          <h4 className="text-white text-xl">PDFs</h4>
          {/* Add PDF component or link to PDFs here */}
        </div>
      </div>
    </div>
  );
}

export default FreelanceShow;
