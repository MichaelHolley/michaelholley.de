import React from 'react';

function PageHeader(props: { title: string; subtitle?: string }) {
  return (
    <>
      <div className='h-48 sm:h-64 md:h-96 text-w0 bg-gradient-to-br bg-fixed bg-tiles'>
        <p className='h-32 pt-24 sm:h-32 sm:pt-28 md:h-56 md:pt-48 text-center align-bottom text-4xl font-bold mb-8'>
          {props.title}
        </p>
        <p className='text-center text-2xl hidden sm:block font-mono'>
          {props.subtitle}
        </p>
      </div>
      <div className='h-2 bg-gradient-to-r from-b0 to-r0'></div>
    </>
  );
}

export default PageHeader;
