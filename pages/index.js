// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Image from 'next/image'
import SetGlobalStyles from '../components/GlobalStyles'

import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <SetGlobalStyles />
      <Header/>
      <h1>helloworld!</h1>
    </>
  )
}
