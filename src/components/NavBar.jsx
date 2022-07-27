import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  let activeClassNameLogo =
    "inline-flex flex items-center py-6 px-3 mr-4 text-gray-300 hover:text-green-800 text-2xl font-bold tracking-widest";
  let activeClassName =
    "text-red-100 bg-red-700 inline-flex items-center py-3 px-3 my-6 rounded hover:text-green-800";
  return (
    <header className="bg-red-600">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            className={({ isActive }) =>
              isActive
                ? activeClassNameLogo
                : "inline-flex flex items-center py-6 px-3 mr-4 text-red-100 hover:text-green-800 text-2xl font-bold tracking-widest"
            }
          >
            BliPutuAbdi
          </NavLink>
          <NavLink
            to="/post"
            className={({ isActive }) =>
              isActive
                ? activeClassName
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className={({ isActive }) =>
              isActive
                ? activeClassName
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? activeClassName
                : "inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800"
            }
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://twitter.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://facebook.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://instagram.com/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
