import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";

function Skills() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.onscroll = () => {
      setOffset(window.pageYOffset);
    };
  }, []);

  console.log(offset);

  return (
    <main className="bg-w0">
      <span className="w-screen h-screen absolute top-0 left-0 -z-10" onWheel={() => console.log("t")}></span>
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

const getParticlesCanvas = () => {
  return;
};

export default Skills;
