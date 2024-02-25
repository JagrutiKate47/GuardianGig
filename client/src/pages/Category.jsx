import React from "react";
import CategoryBox from "../components/CategoryBox";

function Category() {
  return (
    <div>
      <div className="flex flex-col bg-black">
        <div className=" items-center flex text-5xl ml-16 mt-10 text-[#00B2FF]  font-sans">
          {" "}
          <h1>Browse by Category</h1>
        </div>
        <CategoryBox/>
      </div>
    </div>
  );
}

export default Category;
