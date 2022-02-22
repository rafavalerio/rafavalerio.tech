import Particles from 'react-tsparticles'

import styles from './BackgroundParticles.module.css'

export default function BackgroundParticles() {
  const particlesOptions = {
    particles: {
      color: {
        value: ['#f8cfdd', '#f0f0f0'],
      },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: false,
        speed: 0.3,
        straight: false,
      },
      links: {
        color: '#a8a8a8',
        distance: 100,
        enable: true,
        opacity: 0.3,
        width: 1,
      },
      number: {
        density: {
          enable: true,
          area: 500,
        },
        value: 50,
      },
    },
    detectRetina: true,
  }
  return <Particles options={particlesOptions} className={styles.tsparticles} />
}
