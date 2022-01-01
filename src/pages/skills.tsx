import React from "react";
import { DiMysql } from "react-icons/di";
import {
  FaAngular,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaReact,
  FaWindows,
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  SiAntdesign,
  SiCsharp,
  SiDotnet,
  SiGitlab,
  SiJava,
  SiMicrosoftoffice,
  SiMongodb,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Particles from "react-tsparticles";

function Skills() {
  const sections = [
    {
      title: "Frontend",
      percent: 85,
      icons: [
        <FaAngular />,
        <FaReact />,
        <FaBootstrap />,
        <SiTailwindcss />,
        <SiAntdesign />,
        <SiTypescript />,
      ],
    },
    {
      title: "Backend",
      percent: 75,
      icons: [
        <SiCsharp />,
        <SiDotnet />,
        <SiJava />,
        <DiMysql />,
        <SiSqlite />,
        <SiMongodb />,
      ],
    },
    {
      title: "Tools",
      percent: 70,
      icons: [
        <FaGitAlt />,
        <FaGithub />,
        <SiGitlab />,
        <FaWindows />,
        <SiMicrosoftoffice />,
      ],
    },
  ];

  return (
    <main>
      <Particles
        id="tsparticles"
        options={{
          background: {
            color: "#30475E",
          },
          fpsLimit: 60,
          particles: {
            color: {
              value: "#F5F5F5",
            },
            links: {
              color: "#F5F5F5",
              distance: 120,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "none",
              enable: true,
              outMode: "bounce",
              random: false,
              speed: 3,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 70,
            },
            opacity: {
              value: 0.5,
            },
            shape: {},
            size: {
              random: true,
              value: 5,
            },
          },
          detectRetina: true,
        }}
      />
      <div className="mx-4 mt-20 mb-4 sm:mx-12 sm:mt-24 md:mx-24 md:mt-28 lg:mx-48 xl:mx-72 px-2 sm:px-6 md:px-12 py-3 bg-bl0 bg-opacity-70 rounded-xl z-0 backdrop-blur-sm flex flex-col 2xl:flex-row 2xl:py-16">
        <div className="w-full p-4 text-w0 h-full my-auto">
          <p className="text-3xl text-center mb-3">Erfahrung</p>
          <p className="text-lg text-justify mb-3">
            Während Schule und Studium beschäftigte ich mich hauptsächlich mit
            Objektorientierter Programmierung und verschiedenen
            Programmiersprachen.
          </p>
          <p className="text-lg text-justify mb-3">
            Mit Beginn der Ausbildung setzte ich diese Leidenschaft fort.
            Seitdem entwickle ich Anwendungen unter Verwendung verschiedener
            Frameworks sowohl beruflich als auch privat mit besonderen Fokus auf
            Front- und Backend.
          </p>
        </div>
        <div className="w-full h-full my-auto p-3 2xl:border-l-2 border-w0">
          {sections.map((section, index) => {
            return (
              <div className="2xl:ml-3 mb-8">
                <div className="flex flex-col sm:flex-row mb-2 lg:mb-0">
                  <h2 className="text-2xl text-w0 mb-1 font-mono mr-8">
                    {section.title}
                  </h2>
                  <div className="flex">
                    <IconContext.Provider
                      value={{
                        size: "2rem",
                        className: "my-1 sm:my-0 mx-[1px] sm:mx-2",
                        color: "white",
                      }}
                    >
                      {section.icons}
                    </IconContext.Provider>
                  </div>
                </div>
                <div className="overflow-hidden h-1 mb-4 text-xs flex rounded-full bg-w0">
                  <div
                    style={{ width: `${section.percent}%` }}
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-r0"
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}

export default Skills;
