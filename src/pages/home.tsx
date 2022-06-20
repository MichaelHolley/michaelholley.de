import React from 'react';
import { FaEnvelopeSquare, FaLinkedin, FaXingSquare } from 'react-icons/fa';
import HomeNavigator from '../components/home-navigator';
import PageHeader from '../components/page-header';
import { EducationSvg } from '../components/svgs/education-svg';
import { ProgrammingSvg } from '../components/svgs/programming-svg';

function Home() {
  const getAge = (birth: Date) => {
    const today = new Date();
    let age = today.getFullYear() - birth.getFullYear();
    const m = today.getMonth() - birth.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birth.getDate())) {
        age--;
    }
    return age;
  };

  return (
    <main className='bg-w0'>
      <PageHeader
        title='Michael Holley'
        subtitle='Junior Software Developer'></PageHeader>
      <section className='bg-w0' id='about'>
        <div className='container mx-auto  text-lg text-justify text-bl0 py-16 px-4 sm:px-10 md:px-24 lg:px-48'>
          <p className='text-3xl text-center mb-3 font-bold'>Wer bin ich?</p>
          <p className='py-2'>
            Michael, {getAge(new Date("1999-06-08"))} Jahre jung mit einer
            Begeisterung für Code und Software.
          </p>
          <p className='py-2'>
            Seit <span id='exp-div'></span> Jahren beschäftige ich mich bereits
            mit Computern, Problemlösung und vor allem Programmieren, mit
            besonderer Leidenschaft für Softwareentwicklung.
          </p>
          <p className='py-2'>
            Die Herausforderung war für mich der Grund, unzählige Stunden vor
            dem Rechner zu verbringen, um meiner Passion nachzugehen. Bis heute
            mache ich mich täglich mit neuen Technologien und Prozessen
            vertraut, um meinen Wissensdrang zu stillen.
          </p>
          <div className='flex justify-center'>
            <a
              href='https://www.xing.com/profile/Michael_Holley'
              target='_blank'
              className='mx-2'
              rel='noreferrer'>
              <FaXingSquare
                size='2em'
                className='hover:fill-r0 transition ease-out duration-500 hover:scale-125'
              />
            </a>
            <a
              href='https://www.linkedin.com/in/michael-holley-791a64228/'
              target='_blank'
              className='mx-2'
              rel='noreferrer'>
              <FaLinkedin
                size='2em'
                className='hover:fill-r0 transition ease-out duration-500 hover:scale-125'
              />
            </a>
            <a
              href='mailto:michael.philipp.holley@gmail.com'
              target='_blank'
              className='mx-2'
              rel='noreferrer'>
              <FaEnvelopeSquare
                size='2em'
                className='hover:fill-r0 transition ease-out duration-500 hover:scale-125'
              />
            </a>
          </div>
        </div>
      </section>
      <section className='bg-tiles' id='career'>
        <div className='container mx-auto text-lg text-justify justify-center py-16 px-4 sm:px-10 md:px-24 lg:px-48 text-w0'>
          <div className='py-2 px-3 rounded'>
            <p className='text-3xl text-center mb-2 font-bold'>Berufsweg</p>
            <div className='flex flex-row'>
              <div className='basis-0 xl:basis-1/4 h-full mr-0 xl:mr-6'>
                <ProgrammingSvg />
              </div>
              <div className='basis-auto'>
                <div className='text-right my-5'>
                  <p>Seit Jan. 2022</p>
                  <p className='text-xl mb-1 font-bold'>
                    Junior Software Developer | AraCom IT Services AG
                  </p>
                  <ul>
                    <li>Entwicklung von Individualsoftware</li>
                    <li>
                      Arbeiten im Team an der Umsetzung von Softwarelösungen
                    </li>
                    <li>Spezialisierung auf Webentwicklung</li>
                  </ul>
                </div>
                <div className='text-left my-5'>
                  <p>Sept. 2019 - Jan. 2022</p>
                  <p className='text-xl mb-1 font-bold'>
                    Ausbildung zum Fachinformatiker für Anwendungsentwicklung
                  </p>
                  <ul>
                    <li>Betrieb: AraCom IT Services AG</li>
                    <li>Berufsschule abgeschlossen mit 1,0</li>
                    <li>
                      IHK Prüfung abgelegt mit{' '}
                      <span className='font-bold'>96 von 100</span> Punkten
                      gesamt
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-b0' id='awards'>
        <div className='container mx-auto text-lg text-justify px-0 sm:px4 sm:px-10 md:px-24 lg:px-48 text-w0'>
          <div className='flex flex-row h-[320px]'>
            <img
              src='/img/WSPreis_Schulen.jpeg'
              className='h-[320px] shadow-xl absolute xl:relative'
              alt='Gruppenbild Wissenschaftspreis'></img>
            <div className='w-full my-auto p-4 z-10 bg-b0 bg-opacity-70 xl:bg-transparent'>
              <a
                href='https://www.augsburg.de/aktuelles-aus-der-stadt/detail/wissenschaftspreis-augsburger-schulen-2020-21-vergeben'
                target={'_blank'}
                rel='noreferrer'>
                <p className='text-2xl font-bold'>2. Platz</p>
                <p className='text-xl font-bold'>
                  Wissenschaftspreis Augsburger Schulen 2020/21
                </p>
              </a>
              <div className='my-3'>
                <div className='font-bold'>Titel</div>
                <div>
                  Projekt zur Messung und Darstellung von Feinstaubpartikeln mit
                  Hilfe eines Raspberry Pi
                </div>
              </div>
              <div className='my-3'>
                <div className='font-bold'>Teammitglieder</div>
                <div>Luca Schäfer // Johannes Stock // Kajetan Kuczorski</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='bg-w0' id='education'>
        <div className='container mx-auto text-lg text-justify justify-center py-16 px-4 sm:px-10 md:px-24 lg:px-48 text-bl0'>
          <p className='text-3xl text-center mb-3 font-bold'>Bildungsweg</p>
          <div className='flex flex-row'>
            <div className='basis-0 xl:basis-1/4 h-full mr-0 xl:mr-6'>
              <EducationSvg />
            </div>
            <div className='basis-auto'>
              <div className='my-3'>
                <div className='font-bold'>Okt. 2017 - Aug. 2019</div>
                <div>
                  Bachelor-Studiengang Informatik und Multimedia | Universität
                  Augsburg
                </div>
              </div>
              <div className='my-3 xl:ml-8'>
                <div className='font-bold'>2009 - 2017</div>
                <div>
                  <p>Maria-Theresia-Gymnasium | Augsburg</p>
                  <p>abgeschlossen mit der Allgemeinen Hochschulreife</p>
                </div>
              </div>
              <div className='my-3 xl:ml-16'>
                <div className='font-bold'>2005 - 2009</div>
                <div>St. Max Grundschule | Augsburg</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeNavigator />
    </main>
  );
}

export default Home;
