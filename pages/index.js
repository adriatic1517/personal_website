import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emad's Blog</title>
        <meta name="description" content="Fun stuff from CS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello</h1>
      </div>
  )
}
