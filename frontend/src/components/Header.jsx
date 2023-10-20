import React from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { AiOutlineLogin, AiOutlineHome } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";

const Header = () => {
  return (
    <>
      <header className="bg-blue-100 shadow-md">
        <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-orange-700">ੴ  &nbsp;</span>
            <span className="text-slate-700">Parma</span>
            <span className="text-yellow-400">tama</span>
            {/* <span className="text-orange-700">&nbsp;ॐ</span> */}
          </h1>
          <form className="bg-slate-100 p-3 rounded-lg flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent focus:outline-none w-24 sm:w-64"
            />
            <button className="pr-1">
              <FaSearch className="text-slate-600" />
            </button>
          </form>
          <div className="flex hidden md:flex">
            <Link to="/profile">
              <CgProfile className="mr-7" size={20}/>
            </Link>
            <Link to="/">
              <AiOutlineHome className="mr-7" size={20}/>
            </Link>
            <Link to="/about">
              <FcAbout className="mr-7" size={20}/>
            </Link>
            <Link to="/signup">
              <AiOutlineLogin className="mr-7" size={20}/>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
