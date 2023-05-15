import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  return (
    <>
      <form className="flex w-full mt-5 mx-auto max-w-[90%]  hover:shadow-md focus-within:shadow-md transition-shadow border border-gray-200 px-5 py-3 rounded-full sm:max-w-xl lg:max-w-2xl">
        <AiOutlineSearch className="text-xl text-gray-500 mr-3" />
        <input type="text" className="flex-grow focus:outline-none" />
        <BsFillMicFill className="text-xl text-gray-500" />
      </form>

      <div className="flex flex-col space-y-2 justify-center sm:flex-row mt-8 sm:space-y-0 sm:space-x-4">
        <button className="btn">Google Search</button>
        <button className="btn"> I&apos;m Feeling Lucky</button>
      </div>
    </>
  );
}
