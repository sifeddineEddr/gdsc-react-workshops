import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FiShoppingCart, FiMenu } from "react-icons/fi";
import { navbarLinks } from "../../assets/siteData";
import Logo from "../commons/Logo";
function Navbar() {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Logo />
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className=" font-medium rounded-lg text-sm  text-center "
          >
            <FiShoppingCart size={20} />
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="  rounded-lg md:hidden focus:outline-none "
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <FiMenu size={20} />
          </button>
        </div>
        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 items-center gap-y-4     rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {navbarLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.link}
                  className={({ isActive }) => {
                    return isActive && "font-semibold ";
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
