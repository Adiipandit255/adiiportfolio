import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const ParticlesBackground = () => {

  const particlesInit = async (main) => {
    await loadFull(main)
  }

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}

      options={{
        background: {
          color: {
            value: "#05010d",
          },
        },

        fpsLimit: 120,

        particles: {
          number: {
            value: 80,
          },

          color: {
            value: "#7c3aed",
          },

          links: {
            enable: true,
            color: "#7c3aed",
            distance: 150,
            opacity: 0.2,
          },

          move: {
            enable: true,
            speed: 1,
          },

          size: {
            value: 2,
          },

          opacity: {
            value: 0.5,
          },
        },

        detectRetina: true,
      }}
    />
  )
}

export default ParticlesBackground