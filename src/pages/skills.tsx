import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

function Skills() {
  const [index, setIndex] = useState(0);
  const [allowWheelInput, setAllowWheelInput] = useState(true);

  const sections = [1, 2, 3, 4, 5];

  const handleWheel = (event: React.WheelEvent) => {
    if (!allowWheelInput) {
      return;
    }

    setAllowWheelInput(false);
    setTimeout(() => setAllowWheelInput(true), 200);

    if (event.deltaY < 0) {
      setIndex((index + 1) % sections.length);
    } else if (event.deltaY > 0) {
      setIndex((index + 1) % sections.length);
    }

    console.log(index);
  };

  return (
    <main>
      <span
        className="w-screen h-screen absolute top-0 left-0 -z-10"
        onWheel={(e) => handleWheel(e)}
      ></span>
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
              value: 60,
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
      <div></div>
    </main>
  );
}

export default Skills;
