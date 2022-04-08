import React from 'react';
import { FaAward, FaBriefcase, FaRegUserCircle } from 'react-icons/fa';
import { MdSchool } from 'react-icons/md';

function HomeNavigator() {
  return (
    <footer className='invisible md:visible fixed z-20 bottom-5 left-5 text-bl0'>
      <ul>
        <NavigatorListItem
          icon={<FaRegUserCircle size='1.5em' />}
          title='About'
          section='about'
        />
        <NavigatorListItem
          icon={<FaBriefcase size='1.5em' />}
          title='Berufsweg'
          section='career'
        />
        <NavigatorListItem
          icon={<FaAward size='1.5em' />}
          title='Auszeichnungen'
          section='awards'
        />
        <NavigatorListItem
          icon={
            <MdSchool
              className='transition ease-out duration-300 hover:scale-110'
              size='1.5em'
            />
          }
          title='Bildung'
          section='education'
        />
      </ul>
    </footer>
  );
}

function NavigatorListItem(props: {
  icon: JSX.Element;
  title: string;
  section: string;
}) {
  return (
    <li className='my-4 group flex flex-row transition ease-out duration-300 hover:scale-110'>
      <a
        href={`#${props.section}`}
        className='p-[7px] bg-b0 bg-opacity-60 shadow-2xl rounded-full text-w0 justify-center'>
        {props.icon}
      </a>
      <span
        className='absolute px-1 mt-[6px] ml-11 min-w-max rounded-md shadow-2xl text-w0 bg-b0 bg-opacity-60 origin-left hidden group-hover:block'
        style={{ wordBreak: 'normal' }}>
        {props.title}
      </span>
    </li>
  );
}

export default HomeNavigator;
