import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }
  @font-face {
    font-family: 'Spoqa Han Sans Neo';
    src: local('Spoqa Han Sans Neo'),
    url(${'/fonts/SpoqaHanSansNeo-Medium.otf'});
  }
  * {
    font-family: "Spoqa Han Sans Neo", 'Noto Sans KR';
    color: #222222;
  }
  a {
    text-decoration: none;
  }
  p {
    margin: 0;
  }
  td {
    width: 0;
    height: 0;
  }
`;

export default GlobalStyle;
