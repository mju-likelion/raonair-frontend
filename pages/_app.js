import { RecoilRoot } from 'recoil';

import GlobalStyles from '../components/GlobalStyles';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <GlobalStyles />
      <Header />
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
