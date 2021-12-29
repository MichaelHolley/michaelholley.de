import React from "react";
import { FaXing } from "react-icons/fa";
import { FiLinkedin, FiGithub, FiMail } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-b0 bg-opacity-60 shadow-2xl fixed z-20 bottom-5 right-5 p-3 rounded-full border-2 border-w0 transition-[width] duration-500">
      <ul className="flex flex-row-reverse text-w0">
        <NavBarIconItem
          icon={
            <FiGithub
              size="1.5em"
              className="hover:stroke-r0 transition ease-out duration-300 hover:scale-110"
            />
          }
          link="https://github.com/MichaelHolley"
          title="GitHub"
        ></NavBarIconItem>
        <NavBarIconItem
          icon={
            <FaXing
              size="1.5em"
              className="hover:fill-r0 transition ease-out duration-300 hover:scale-110"
            />
          }
          link="https://www.xing.com/profile/Michael_Holley"
          title="Xing"
        ></NavBarIconItem>
        <NavBarIconItem
          icon={
            <FiLinkedin
              size="1.5em"
              className="hover:stroke-r0 transition ease-out duration-300 hover:scale-110"
            />
          }
          link="https://www.linkedin.com/in/michael-holley-791a64228/"
          title="LinkedIn"
        ></NavBarIconItem>
        <NavBarIconItem
          icon={
            <FiMail
              size="1.5em"
              className="hover:stroke-r0 transition ease-out duration-300 hover:scale-110"
            />
          }
          link="mailto:michael.philipp.holley@gmail.com"
          title="Mail"
        ></NavBarIconItem>
      </ul>
    </footer>
  );
}

function NavBarIconItem(props: { icon: any; link: string; title: string }) {
  return (
    <li className="mx-[6px] group">
      <a href={props.link} target="_blank">
        {props.icon}
      </a>
      <span className="absolute w-auto px-1 m-2 -top-10 -ml-2 rounded-md shadow-2xl text-w0 bg-b0 border-2 bg-opacity-60 origin-left hidden group-hover:block">
        {props.title}
      </span>
    </li>
  );
}

export default Footer;
