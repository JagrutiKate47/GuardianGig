import React from "react";
//importing images
import Artist from '../assets/Artist.png'
import DataAnalyst  from '../assets/DataAnalyst.png';
import editor  from '../assets/editor.png';
import finance  from '../assets/finance.png';
import musicProducer  from '../assets/musicProducer.png';
import photographer  from '../assets/photographer.png';
import Translation from '../assets/Translation.png';
import writer from '../assets/writer.png';



function Category() {
  return (
    <div>
      <div className="flex flex-col bg-black pb-8">
        <div className=" items-center flex text-xl  justify-center font-semibold mt-10 text-[#00B2FF]  font-sans md:text-5xl">
          {" "}
          <h1>Browse by Category</h1>
        </div>
        
      </div>
      <div className="bg-black  ">
        <div className="grid grid-cols-1 grid-rows-8 ml-6  pt-4 md:grid-flow-col md:grid-cols-4 md:grid-rows-2 md:ml-24 ">
         
        <img className="border-double border-4 border-sky-500 mt-12 2xl:ml-16 "  src={photographer} alt="" />
        <img className="border-double border-4 border-sky-500 mt-12 2xl:ml-16 " src={Artist} alt="" />
        <img className="border-double border-4 border-sky-500 mt-12" src={writer} alt="" />
        <img className="border-double border-4 border-sky-500 mt-12" src={Translation} alt="" />       
        <img className="border-double border-4 border-sky-500 mt-12" src={editor} alt="" />
        <img className="border-double border-4 border-sky-500 mt-12" src={finance} alt="" />
        <img className="border-double border-4 border-sky-500 mt-12 2xl:lg-12" src={DataAnalyst} alt="" />
        <img className="border-double border-4 border-sky-500 mt-12 2xl:lg-12" src={musicProducer} alt="" />
        
      </div>
      </div>
    </div>
  );
}

export default Category;
