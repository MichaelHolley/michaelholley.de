import React, { useState } from "react";
import {
  FaGithub,
  FaXingSquare,
  FaLinkedin,
  FaEnvelope,
  FaShareAlt,
  FaTimes,
} from "react-icons/fa";

function Footer() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <footer className="bg-b0 fixed bottom-5 right-5 p-3 rounded-full border-2 border-w0 transition-[width] duration-500">
      <ul className="flex flex-row-reverse text-w0">
        <li
          className="mx-2 cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        >
          {collapsed ? (
            <FaShareAlt
              size="1.5em"
              className="hover:fill-r0 transition ease-out duration-500 hover:scale-110"
            />
          ) : (
            <FaTimes
              size="1.5em"
              className="hover:fill-r0 transition ease-out duration-500 hover:scale-110"
            />
          )}
        </li>
        <li className="mx-2" hidden={collapsed}>
          <span className="border-r-2"> </span>
        </li>
        {!collapsed ? (
          <>
            <NavBarIconItem
              icon={
                <FaGithub
                  size="1.5em"
                  className="hover:fill-r0 transition ease-out duration-500 hover:scale-110"
                />
              }
              link="https://github.com/MichaelHolley"
            ></NavBarIconItem>
            <NavBarIconItem
              icon={
                <FaXingSquare
                  size="1.5em"
                  className="hover:fill-r0 transition ease-out duration-500 hover:scale-110"
                />
              }
              link="https://www.xing.com/profile/Michael_Holley"
            ></NavBarIconItem>
            <NavBarIconItem
              icon={
                <FaLinkedin
                  size="1.5em"
                  className="hover:fill-r0 transition ease-out duration-500 hover:scale-110"
                />
              }
              link="https://www.linkedin.com/in/michael-holley-791a64228/"
            ></NavBarIconItem>
            <NavBarIconItem
              icon={
                <FaEnvelope
                  size="1.5em"
                  className="hover:fill-r0 transition ease-out duration-500 hover:scale-110"
                />
              }
              link="mailto:michael.philipp.holley@gmail.com"
            ></NavBarIconItem>
          </>
        ) : (
          <></>
        )}
      </ul>
    </footer>
  );
}

function NavBarIconItem(props: { icon: any; link: string }) {
  return (
    <li className="mx-1 visible:tr">
      <a href={props.link} target="_blank">
        {props.icon}
      </a>
    </li>
  );
}

export default Footer;
