import HomeHeader from "@/components/HomeHeader";
import HomeSearch from "@/components/HomeSearch";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <>
      {/* Header */}
      <HomeHeader />

      {/* body */}
      <div className="flex flex-col items-center mt-24">
        <Image
          src="https://www.freepnglogos.com/uploads/google-logo-png-hd-11.png"
          width="100"
          height="100"
          alt="Google Logo"
        />

        <HomeSearch />
      </div>
    </>
  );
}
