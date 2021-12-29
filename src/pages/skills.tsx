import React from "react";
import { DiMysql } from "react-icons/di";
import {
  FaAngular,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaLinux,
  FaReact,
  FaWindows
} from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import {
  SiAntdesign, SiCsharp, SiDotnet, SiGitlab, SiJava, SiMicrosoftoffice, SiMongodb, SiSqlite, SiTailwindcss, SiTypescript
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
      percent: 60,
      icons: [
        <FaGitAlt />,
        <FaGithub />,
        <SiGitlab />,
        <FaWindows />,
        <FaLinux />,
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
              value: 120,
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
      <div className="mx-4 mt-20 sm:mx-12 sm:mt-24 md:mx-24 md:mt-28 lg:mx-48 xl:mx-72 px-12 py-3 bg-bl0 bg-opacity-80 rounded-xl z-0">
        {sections.map((section, index) => {
          return (
            <div className="my-14">
              <div className="grid lg:flex mb-2 lg:mb-0">
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
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-w0">
                <div
                  style={{ width: `${section.percent}%` }}
                  className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-r0"
                ></div>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export default Skills;
