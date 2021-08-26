import Head from 'next/head';

import META_PROPS from './constants';

const Meta = () => (
  <Head>
    <meta content="#F7482F" name="theme-color" />
    <meta content="#F7482F" name="msapplication-navbutton-color" />
    <meta content="#F7482F" name="apple-mobile-web-app-status-bar-style" />

    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=0"
    />
    <meta name="format-detection" content="telephone=no" />

    <link
      key="favIcon"
      rel="shortcut icon"
      type="image/png"
      href={META_PROPS.image_icon}
    />
    <link rel="manifest" href={META_PROPS.manifest.url} />
    <meta key="ogUrl" property="og:url" content={META_PROPS.og.url} />
    <meta key="ogType" property="og:type" content={META_PROPS.og.type} />
    <meta key="ogImage" property="og:image" content={META_PROPS.og.image} />
    <meta key="ogTitle" property="og:title" content={META_PROPS.og.title} />
    <meta
      key="ogDesc"
      property="og:description"
      content={META_PROPS.og.description}
    />
    <link rel="icon" sizes="192x192" href={META_PROPS.image_icon} />
    <link rel="apple-touch-icon" href={META_PROPS.image_icon} />
    <meta name="msapplication-square310x310logo" content="/icons-512.png" />
    <meta
      key="pageDescription"
      name="description"
      content={META_PROPS.pageDescription}
    />
    <title key="pageTitle">{META_PROPS.pageTitle}</title>
  </Head>
);

export default Meta;
