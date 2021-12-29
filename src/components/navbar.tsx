import React, { useState } from "react";
import {
  FaProjectDiagram,
  FaUser,
  FaCubes,
  FaTimes,
  FaBars,
} from "react-icons/fa";

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <nav className="px-2 sm:px-4 py-2.5 shadow-xl bg-w0 w-full z-10">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="/" className="flex">
          <img src="/logo512.png" className="mr-3 h-10" />
          <span className="text-b0 self-center text-xl font-semibold whitespace-nowrap">
            Michael Holley
          </span>
        </a>
        <button
          type="button"
          onClick={() => setCollapsed(!collapsed)}
          className="inline-flex items-center p-2 ml-3 text-sm text-b0 rounded-lg md:hidden"
        >
          {collapsed ? (
            <FaBars
              size="1.5em"
              className="hover:fill-r0 transition ease-out duration-500 hover:scale-125"
            />
          ) : (
            <FaTimes
              size="1.5em"
              className="hover:fill-r0 transition ease-out duration-500 hover:scale-125"
            />
          )}
        </button>
        <div className="w-full md:block md:w-auto" hidden={collapsed}>
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
            <NavBarLinkItem
              route="/"
              title="About"
              icon={<FaUser size="1.2em" />}
            />
            <NavBarLinkItem
              route="Skills"
              title="Skills"
              icon={<FaCubes size="1.2em" />}
            />
            <NavBarLinkItem
              route="Projects"
              title="Projekte"
              icon={<FaProjectDiagram size="1.2em" />}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavBarLinkItem(props: { route: string; title: string; icon: any }) {
  return (
    <li>
      <a
        href={props.route}
        className="py-2 pr-4 pl-3 text-b0 text-md flex rounded hover:bg-r0 hover:bg-opacity-40 transition-all duration-500 group"
        aria-current="page"
      >
        <span className="mr-2 group-hover:scale-125 transition duration-500 ease-in-out">{props.icon}</span>
        <span>{props.title}</span>
      </a>
    </li>
  );
}

export default NavBar;
