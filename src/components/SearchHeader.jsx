import Image from "next/image";
import Link from "next/link";
import React from "react";
import SearchBox from "./SearchBox";
import { RiSettings3Line } from "react-icons/ri";
import { TbGridDots } from "react-icons/tb";

export default function SearchHeader() {
  return (
    <header>
      <div className="">
        <Link href={"/"}>
          <Image
            src="https://www.freepnglogos.com/uploads/google-logo-png-hd-11.png"
            alt="logo"
            width={120}
            height={40}
          />
        </Link>
        <div className="">
          <SearchBox />
        </div>
        <div className="">
          <RiSettings3Line className="header-icon" />
          <TbGridDots className="header-icon" />
        </div>
        <button>Sign in</button>
      </div>
    </header>
  );
}
