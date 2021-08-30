// import Head from 'next/head'
// import styles from '../styles/Home.module.css'

import Image from 'next/image'
import SetGlobalStyles from '../components/GlobalStyles'

import Header from '../components/Header';
import { RecoilRoot } from 'recoil';
import HomePage from './HomePage';

export default function Home() {
  return (
    <RecoilRoot>
      <SetGlobalStyles />
      <Header/>
      <HomePage />
      <h1>helloworld!</h1>
    </RecoilRoot>
  )
}
