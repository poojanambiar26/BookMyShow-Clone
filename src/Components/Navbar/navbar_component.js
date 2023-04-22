import React from "react";
import { BiChevronRight, BiChevronDown, BiMenu} from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
const NavSm = () => {
  return (
    <>
      <div className="text-white flex items-center justify-between">
        <div>
          <h3 className="text-xl font-bold">It all Starts Here!</h3>
          <span className="text-gray-400 text-xs flex items-center">
            Bhubaneshwar
            <BiChevronRight />
          </span>
        </div>
        <div className="w-8 h-8">
          <BsSearch className="w-full h-full" />
        </div>
      </div>
    </>
  );
};
const NavMd = () => {
  return (
    <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
      <BsSearch />

      <input
        type="search"
        className="w-full focus:outline-none"
        placeholder="Search for movies, events, plays, sports and activities"
      />
    </div>
  );
};
const NavLg = () => {
  return (
    <div className="container mx-auto px-4 flex items-center justify-between">
      <div className="flex items-center w-1/2">
        <div className="w-12 h-12">
          <img src="" alt="logo" className="w-full h-full" />
        </div>
        <div className="w-full flex items-center bg-white gap-3 px-3 py-2 rounded-sm">
          <BsSearch />

          <input
            type="search"
            className="w-full focus:outline-none"
            placeholder="Search for movies, events, plays, sports and activities"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
      <span className="text-gray-400 text-xs flex items-center hover:text-white cursor-pointer">
            Bhubaneshwar
            <BiChevronDown />
          </span>
          <button className="bg-red-500 text-white text-sm rounder px-2 py-1" > Sign In </button>
          <div className="w-8 h-8 text-white">
            <BiMenu className="w-full h-full" />
          </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  return (
    <>
      <nav className="bg-navColor-900 px-5 py-2">
        <div className="md:hidden">
          {
            /*moblie screen  */
            <NavSm />
          }
        </div>
        <div className="hidden lg:hidden md:flex">
          {
            /*tablet screen  */
            <NavMd />
          }
        </div>
        <div className="hidden lg:flex">
          {
            /*desktop screen  */
            <NavLg />
          }
        </div>
      </nav>
    </>
  );
};

export default Navbar;


// npm i react-slick
// npm install slick-carousel