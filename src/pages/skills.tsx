import React, { useState } from "react";
import Particles from "react-tsparticles";

function Skills() {
  const [index, setIndex] = useState(0);
  const [allowWheelInput, setAllowWheelInput] = useState(true);

  const sections = [
    "Allgemein",
    "Technologien",
    "Frameworks",
    "Tools",
    "Software",
  ];

  const handleWheel = (event: React.WheelEvent) => {
    if (!allowWheelInput) {
      return;
    }

    setAllowWheelInput(false);
    setTimeout(() => setAllowWheelInput(true), 150);

    if (event.deltaY < 0 && index > 0) {
      setIndex(index - 1);
    } else if (event.deltaY > 0 && index < sections.length - 1) {
      setIndex(index + 1);
    }
  };

  const getIndicator = () => {
    return sections.map((section, i) => {
      return (
        <span
          key={`indicator_${i}`}
          onClick={() => setIndex(i)}
          className={`rounded-full ${
            index === i ? "bg-r0 border-2 scale-110 text-bl0" : "bg-bl0"
          } bg-opacity-60 min-w-[27px] mx-2 px-2 hover:cursor-pointer`}
        >
          {index === i ? sections[i] : "  "}
        </span>
      );
    });
  };

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
      <span
        className="w-screen h-screen absolute top-0 left-0"
        style={{ zIndex: 1 }}
        onWheel={(e) => handleWheel(e)}
      ></span>
      <div className="mx-4 mt-20 sm:mx-12 sm:mt-24 md:mx-24 md:mt-28 lg:mx-48 xl:mx-72 p-12 bg-w0 bg-opacity-80 rounded z-0">
        <div className="flex flex-row justify-center mb-3">
          {getIndicator()}
        </div>
        <div>
          qwe qwe qw eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw eqw eqwe qwe qw eqw
          eqw eqw eqw eqwe qwe qw eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw eqw
          eqwe qwe qw eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw eqw eqwe qwe qw
          eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw
          eqw eqwe qwe qw eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw eqw eqwe qwe
          qw eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw
          eqw eqwe qwe qw eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw eqw eqwe qwe
          qw eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw
          eqw eqwe qwe qw eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw eqw eqwe qwe
          qw eqw eqw eqw eqw eqwe qwe qw eqw eqw eqw eqw e
        </div>
      </div>
    </main>
  );
}

export default Skills;
