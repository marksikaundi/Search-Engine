import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

export default function SearchHeaderOptions() {
  return (
    <div>
      <div className="flex items-center space-x-1 border-b-4 border-transparent active:text-blue-500 cursor-pointer pb-3 px-2">
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
    </div>
  );
}
