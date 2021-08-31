import { RecoilRoot } from 'recoil';

import SetGlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';

import HomePage from './HomePage';

export default function Home() {
  return (
    <RecoilRoot>
      <SetGlobalStyles />
      <Header/>
      <HomePage />
    </RecoilRoot>
  )
}
