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
        imgSrc=""
        title="Michael Holley"
        subtitle="Auszubildender zum Fachinformatiker für Anwendungsentwicklung"
      ></PageHeader>
      <section className="container mx-auto bg-w0 text-lg text-justify text-bl0 py-16 px-4 sm:px-10 md:px-24 lg:px-48">
        <p className="text-3xl text-center mb-3 font-bold">Wer bin ich?</p>
        <p className="py-2">
          Michael, {getAge(new Date(1999, 6, 8))} Jahre jung und aktuell in der
          Ausbildung zum Fachinformatiker für Anwendungsentwicklung.
        </p>
        <p className="py-2">
          Seit <span id="exp-div"></span> Jahren beschäftige ich mich bereits
          mit Computern, Problemlösung und vor allem Programmieren, mit
          besonderer Leidenschaft für Softwareentwicklung.
        </p>
        <p className="py-2">
          Die Herausforderung war für mich der Grund, unzählige Stunden vor dem
          Rechner zu verbringen, um meiner Passion nachzugehen. Bis heute mache
          ich mich täglich mit neuen Technologien und Prozessen vertraut, um
          meinen Wissensdrang zu stillen.
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
      </section>
      <section className="bg-r0">
        <div className="container mx-auto text-lg text-justify py-16 px-4 sm:px-10 md:px-24 lg:px-48 text-w0">
          <p className="text-3xl text-center mb-3 font-bold">Steckbrief</p>
          <div>
            <div className="flex flex-row my-3">
              <div className="w-52">Geboren</div>
              <div>8. Juni 1999</div>
            </div>
            <div className="flex flex-row my-3">
              <div className="w-52">Alter</div>
              <div>{getAge(new Date(1999, 6, 8))}</div>
            </div>
            <div className="flex flex-row my-3">
              <div className="w-52">Geburtsort</div>
              <div>Augsburg, Bayern</div>
            </div>
            <div className="flex flex-row my-3">
              <div className="w-52">Voller Name</div>
              <div>Michael Philipp Holley</div>
            </div>
            <div className="flex flex-row my-3">
              <div className="w-52">StA</div>
              <div>deutsch</div>
            </div>
            <div className="flex flex-row my-3">
              <div className="w-52">E-Mail</div>
              <div>
                <a
                  href="mailto:michael.philipp.holley@gmail.com"
                  className="hover:animate-pulse"
                >
                  michael.philipp.holley@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-b0">
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
      <section className="container mx-auto bg-w0 text-lg text-justify py-16 px-4 sm:px-10 md:px-24 lg:px-48 text-bl0">
        <p className="text-3xl text-center mb-3 font-bold">Bildungsweg</p>
        <div>
          <div className="flex flex-row my-3">
            <div className="w-52">Okt. 2017 - Aug. 2019</div>
            <div>
              Bachelor-Studiengang Informatik und Multimedia | Universität
              Augsburg
            </div>
          </div>

          <div className="flex flex-row my-3">
            <div className="w-52">2009 - 2017</div>
            <div>
              <p>Maria-Theresia-Gymnasium | Augsburg</p>
              <p>abgeschlossen mit der Allgemeinen Hochschulreife</p>
            </div>
          </div>
          <div className="flex flex-row my-3">
            <div className="w-52">2005 - 2009</div>
            <div>St. Max Grundschule | Augsburg</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
