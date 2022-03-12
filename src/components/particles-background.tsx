import React from 'react';
import Particles from 'react-tsparticles';

function ParticlesBackground() {
  return (
    <Particles
      id='tsparticles'
      options={{
        background: {
          color: '#30475E',
        },
        fpsLimit: 60,
        particles: {
          color: {
            value: '#F5F5F5',
          },
          links: {
            color: '#F5F5F5',
            distance: 120,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: 'none',
            enable: true,
            outMode: 'bounce',
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.7,
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
  );
}

export default ParticlesBackground;
