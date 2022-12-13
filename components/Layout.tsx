import React from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar';

type Props = {
  title: string,
  children: JSX.Element,
};

export default function Layout({ title, children }: Props) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content="MusicImport" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <Navbar/>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>

            </span>
          </a>
        </footer>
      </div>
    </>

  )
}