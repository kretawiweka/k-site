import { Fragment } from 'react';
import Meta from '../src/components/common/Meta';
import '../public/static/styles/main.scss';

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Meta />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
