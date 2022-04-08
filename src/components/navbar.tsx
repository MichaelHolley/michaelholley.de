import React, { useState } from 'react';
import {
  FaProjectDiagram,
  FaUser,
  FaCubes,
  FaTimes,
  FaBars,
} from 'react-icons/fa';
import { Link, Route } from 'react-router-dom';

function NavBar() {
  const [collapsed, setCollapsed] = useState(true);

  const loc = window.location.pathname.substring(1);
  const [activeRoute, setActiveRoute] = useState(
    window.location.pathname !== '/'
      ? window.location.pathname.substring(1)
      : window.location.pathname,
  );

  return (
    <nav className='px-2 sm:px-4 py-2 shadow-xl bg-w0 w-full z-20 fixed top-0 font-mono'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <Link to='/' className='flex'>
          <img
            src='/logo512.png'
            className='mr-3 h-10'
            alt='Michael Holley - Icon'
          />
          <span className='text-b0 self-center text-xl font-semibold whitespace-nowrap invisible md:visible'>
            Michael Holley
          </span>
        </Link>
        <button
          type='button'
          onClick={() => setCollapsed(!collapsed)}
          className='inline-flex items-center p-2 ml-3 text-sm text-b0 rounded-lg md:hidden'>
          {collapsed ? (
            <FaBars
              size='1.5em'
              className='hover:fill-r0 transition ease-out duration-500 hover:scale-125'
            />
          ) : (
            <FaTimes
              size='1.5em'
              className='hover:fill-r0 transition ease-out duration-500 hover:scale-125'
            />
          )}
        </button>
        <div className='w-full md:block md:w-auto' hidden={collapsed}>
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
            <NavBarLinkItem
              route='/'
              title='About'
              activeRoute={activeRoute}
              icon={<FaUser size='1.2em' />}
              setActiveRoute={setActiveRoute}
            />
            <NavBarLinkItem
              route='Skills'
              title='Skills'
              activeRoute={activeRoute}
              icon={<FaCubes size='1.2em' />}
              setActiveRoute={setActiveRoute}
            />
            <NavBarLinkItem
              route='Projects'
              title='Projekte'
              activeRoute={activeRoute}
              icon={<FaProjectDiagram size='1.2em' />}
              setActiveRoute={setActiveRoute}
            />
          </ul>
        </div>
      </div>
    </nav>
  );
}

function NavBarLinkItem(props: {
  route: string;
  title: string;
  icon: any;
  activeRoute: string;
  setActiveRoute: (route: string) => void;
}) {
  const isActive = props.activeRoute === props.route;

  return (
    <li
      key={props.route}
      className={`border-b-2 border-transparent ${
        isActive ? 'border-r0' : ''
      }`}>
      <Link
        to={props.route}
        className='py-2 pr-4 pl-3 text-b0 text-base flex transition-all duration-500 hover:-translate-y-[3px] group'
        aria-current='page'
        onClick={(event) => {
          props.setActiveRoute(props.route);
        }}>
        <span className='mr-2 group-hover:scale-125 ease-in-out duration-300'>
          {props.icon}
        </span>
        <span>{props.title}</span>
      </Link>
    </li>
  );
}

export default NavBar;
