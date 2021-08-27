import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import SetGlobalStyles from '../components/GlobalStyles'

export default function Home() {
  return (
    <>
      <SetGlobalStyles />
      <h1>helloworld!</h1>
    </>
  )
}
