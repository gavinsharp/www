import React from 'react';
import App from 'next/app';

import '../styles.css';

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />;
  }
}
