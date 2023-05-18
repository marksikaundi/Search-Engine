"use client";

import { useSearchParams, useRouter } from "next/navigation";
import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";


export default function SearchBox() {
  const searchParams = useSearchParams();
  const searchTerm = searchParams.get("searchTerm");
  const router = useRouter();
  const [term, setTerm] = useState(searchTerm || "");
  function handleSubmit(e) {
    e.preventDefault();
    if(!term.trim) return;
    router.push(`/search/web?searchTerm=${term}`);
  }

  return (
    <form onSubmit={handleSubmit} className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
      <input type="text" onChange={(e) => setTerm(e.target.value)} className="w-full focus:outline-none" value={term} />
      <RxCross2 onClick={() => setTerm("")} className="text-2xl text-gray-500 cursor-pointer sm:mr-2" />
      <BsFillMicFill className="hidden sm:inline-flex text-4xl text-blue-500 pl-4 order-l-2 border-gray-300 mr-3" />
      <AiOutlineSearch onClick={handleSubmit} className="text-2xl hidden sm:inline-flex text-blue-500 cursor-pointer" />
    </form>
  );
}
