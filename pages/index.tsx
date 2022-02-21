import type { NextPage } from 'next'
import Head from 'next/head'

import Icon from '../components/Icon'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rafa Valerio</title>
        <meta name="description" content="Rafa Valerio personal website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Rafa<span className={styles.highlight}>_</span>Valerio
        </h1>

        <p className={styles.description}>
          Hey!
          <br />I am a Software engineer based in{' '}
          <span className={styles.highlight}>🇦🇺 Melbourne, Australia</span>.
        </p>

        <div className={styles.grid}>
          <a href="https://www.linkedin.com/in/rafavalerio/" target="blank">
            <Icon path="/linkedin.svg" />
            LinkedIn
          </a>
          <div className={styles.spacer}></div>
          <a href="https://github.com/rafavalerio" target="blank">
            <Icon path="/github.svg" />
            GitHub
          </a>
          <div className={styles.spacer}></div>
          <a href="https://rafaelvalerio.smugmug.com/" target="blank">
            <Icon path="/camera.svg" />
            SmugMug
          </a>
          <div className={styles.spacer}></div>
          <a href="mailto:rafvalerio26@gmail.com" target="blank">
            <Icon path="/mail.svg" />
            Contact
          </a>
        </div>
      </main>
    </div>
  )
}

export default Home
