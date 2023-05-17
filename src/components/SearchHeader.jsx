import Image from "next/image";
import Link from "next/link";
import React from "react";

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

        </div>
      </div>
    </header>
  );
}
