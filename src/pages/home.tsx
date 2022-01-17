import React from "react";
import { FaEnvelopeSquare, FaLinkedin, FaXingSquare } from "react-icons/fa";
import PageHeader from "../components/page-header";

function Home() {
  const getAge = (birth: Date) => {
    var today = new Date();
    var nowyear = today.getFullYear();
    var nowmonth = today.getMonth();
    var nowday = today.getDate();

    var birthyear = birth.getFullYear();
    var birthmonth = birth.getMonth();
    var birthday = birth.getDate();

    var age = nowyear - birthyear;
    var age_month = nowmonth - birthmonth;
    var age_day = nowday - birthday;

    if (age_month < 0 || (age_month == 0 && age_day < 0)) {
      age = age - 1;
    }

    return age;
  };

  return (
    <main className="bg-w0">
      <PageHeader
        title="Michael Holley"
        subtitle="Auszubildender zum Fachinformatiker für Anwendungsentwicklung"
      ></PageHeader>
      <section className="bg-w0">
        <div className="container mx-auto  text-lg text-justify text-bl0 py-16 px-4 sm:px-10 md:px-24 lg:px-48">
          <p className="text-3xl text-center mb-3 font-bold">Wer bin ich?</p>
          <p className="py-2">
            Michael, {getAge(new Date(1999, 6, 8))} Jahre jung und aktuell in
            der Ausbildung zum Fachinformatiker für Anwendungsentwicklung.
          </p>
          <p className="py-2">
            Seit <span id="exp-div"></span> Jahren beschäftige ich mich bereits
            mit Computern, Problemlösung und vor allem Programmieren, mit
            besonderer Leidenschaft für Softwareentwicklung.
          </p>
          <p className="py-2">
            Die Herausforderung war für mich der Grund, unzählige Stunden vor
            dem Rechner zu verbringen, um meiner Passion nachzugehen. Bis heute
            mache ich mich täglich mit neuen Technologien und Prozessen
            vertraut, um meinen Wissensdrang zu stillen.
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.xing.com/profile/Michael_Holley"
              target="_blank"
              className="mx-2"
            >
              <FaXingSquare
                size="2em"
                className="hover:fill-r0 transition ease-out duration-500 hover:scale-125"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/michael-holley-791a64228/"
              target="_blank"
              className="mx-2"
            >
              <FaLinkedin
                size="2em"
                className="hover:fill-r0 transition ease-out duration-500 hover:scale-125"
              />
            </a>
            <a
              href="mailto:michael.philipp.holley@gmail.com"
              target="_blank"
              className="mx-2"
            >
              <FaEnvelopeSquare
                size="2em"
                className="hover:fill-r0 transition ease-out duration-500 hover:scale-125"
              />
            </a>
          </div>
        </div>
      </section>
      <section className="bg-r0">
        <div className="container mx-auto text-lg text-justify py-16 px-4 sm:px-10 md:px-24 lg:px-48 text-w0">
          <p className="text-3xl text-center mb-3 font-bold">Berufsweg</p>
          <div>
            <p className="text-xl mb-3 font-bold">
              Auszubildender (seit Sept. 2019) | AraCom IT Services AG
            </p>
            <ul>
              <li>Entwicklung von Individualsoftware</li>
              <li>Arbeiten im Team an der Umsetzung von Softwarelösungen</li>
              <li>Spezialisierung auf Webentwicklung</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="bg-b0">
        <div className="container mx-auto text-lg text-justify px-0 sm:px4 sm:px-10 md:px-24 lg:px-48 text-w0">
          <div className="flex flex-row h-[320px]">
            <img
              src="/img/WSPreis_Schulen.jpeg"
              className="h-[320px] shadow-xl absolute xl:relative"
              alt="Gruppenbild Wissenschaftspreis"
            ></img>
            <div className="w-full my-auto p-4 z-10 bg-b0 bg-opacity-70 xl:bg-transparent">
              <p className="text-2xl font-bold">2. Platz</p>
              <p className="text-xl font-bold">
                <a
                  href="https://www.augsburg.de/aktuelles-aus-der-stadt/detail/wissenschaftspreis-augsburger-schulen-2020-21-vergeben"
                  target={"_blank"}
                  className="hover:animate-pulse"
                >
                  Wissenschaftspreis Augsburger Schulen 2020/21
                </a>
              </p>
              <div className="my-3">
                <div className="font-bold">Titel</div>
                <div>
                  Projekt zur Messung und Darstellung von Feinstaubpartikeln mit
                  Hilfe eines Raspberry Pi
                </div>
              </div>
              <div className="my-3">
                <div className="font-bold">Teammitglieder</div>
                <div>Luca Schäfer // Johannes Stock // Kajetan Kuczorski</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-w0">
        <div className="container mx-auto text-lg text-justify py-16 px-4 sm:px-10 md:px-24 lg:px-48 text-bl0">
          <p className="text-3xl text-center mb-3 font-bold">Bildungsweg</p>
          <div>
            <div className="my-3">
              <div className="font-bold">Okt. 2017 - Aug. 2019</div>
              <div>
                Bachelor-Studiengang Informatik und Multimedia | Universität
                Augsburg
              </div>
            </div>
            <div className="my-3">
              <div className="font-bold">2009 - 2017</div>
              <div>
                <p>Maria-Theresia-Gymnasium | Augsburg</p>
                <p>abgeschlossen mit der Allgemeinen Hochschulreife</p>
              </div>
            </div>
            <div className="my-3">
              <div className="font-bold">2005 - 2009</div>
              <div>St. Max Grundschule | Augsburg</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;