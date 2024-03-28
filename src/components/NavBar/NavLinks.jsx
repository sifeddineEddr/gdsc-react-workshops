import React from 'react'
import { navbarLinks } from '../../assets/siteData';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <>
    {navbarLinks.map((link, index) => (
        <li key={index}>
          <NavLink
            to={link.link}
            className={({ isActive }) => {
              return isActive && "font-semibold underline bg-transparent";
            }}
          >
            {link.label}
          </NavLink>
        </li>
      ))}</>
  )
}

export default NavLinks