import PropTypes from 'prop-types';

import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
      <Component {...pageProps} />
  );
}

export default MyApp
MyApp.propTypes = {
  Component: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.objectOf(PropTypes.string),
    ]),
  ).isRequired,
  pageProps: PropTypes.objectOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.bool,
      PropTypes.objectOf(PropTypes.string),
    ]),
  ).isRequired,
}