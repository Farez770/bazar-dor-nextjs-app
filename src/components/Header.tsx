"use client";
import Image from "next/image";
import React from "react";
// import toast from "react-hot-toast";
import logo from "@/assets/logo-icon.png";
import Link from "next/link";
import Navlinks from "./Navlinks";
import UserAuthBtn from "./UserAuthBtn";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="px-4 sm:px-5 lg:px-6">
      <div className="flex justify-between items-center py-4">
        <Link href="/" className="flex gap-2 min-w-0 items-center sm:gap-3">
          <div className="shrink-0 rounded-xl bg-[#05893E] p-3 sm:p-4 sm:rounded-2xl ">
            <Image src={logo} alt="Logo icons" width={30} height={30} />
          </div>
          <div className="min-w-0 sm:block hidden">
            <h2 className="mb-0.5 truncate text-2xl sm:text-3xl font-bold ">
              বাজার দর
            </h2>
            <p className="truncate text-sm sm:text-base">{date}</p>
          </div>
        </Link>
        <UserAuthBtn />
      </div>
      <Navlinks />
    </header>
  );
};

export default Header;
