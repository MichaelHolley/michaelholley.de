import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

function Footer() {
  return (
    <footer className='bg-b0 bg-opacity-60 shadow-2xl fixed z-20 bottom-5 right-5 p-3 rounded-full border-2 border-w0 backdrop-blur-[2px]'>
      <ul className='flex flex-row-reverse text-w0'>
        <NavBarIconItem
          icon={
            <FiLinkedin
              size='1.5em'
              className='transition ease-out duration-300 hover:scale-110'
            />
          }
          link='https://www.linkedin.com/in/michael-holley-791a64228/'
          title='LinkedIn'></NavBarIconItem>
        <NavBarIconItem
          icon={
            <FiMail
              size='1.5em'
              className='transition ease-out duration-300 hover:scale-110'
            />
          }
          link='mailto:michael.philipp.holley@gmail.com'
          title='Mail'></NavBarIconItem>
        <NavBarIconItem
          icon={
            <FiGithub
              size='1.5em'
              className='transition ease-out duration-300 hover:scale-110'
            />
          }
          link='https://github.com/MichaelHolley'
          title='GitHub'></NavBarIconItem>
      </ul>
    </footer>
  );
}

function NavBarIconItem(props: {
  icon: JSX.Element;
  link: string;
  title: string;
}) {
  return (
    <li className='mx-[6px] group'>
      <a href={props.link} target='_blank' rel='noreferrer'>
        {props.icon}
      </a>
      <span className='absolute w-auto px-1 m-2 -top-[3.7rem] -ml-2 rounded-md shadow-2xl text-w0 bg-b0 bg-opacity-60 origin-left opacity-0 group-hover:-top-10 transition-all group-hover:opacity-100 duration-[400ms] ease-in-out'>
        {props.title}
      </span>
    </li>
  );
}

export default Footer;
