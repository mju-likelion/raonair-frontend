import { RecoilRoot } from 'recoil';

import '../styles/globals.css'

import SetGlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <SetGlobalStyles/>
      <Header/>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp
