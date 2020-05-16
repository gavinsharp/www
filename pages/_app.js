import React from 'react';
import App from 'next/app';

import '@goproperly/linoleum/style/main.scss';
import '@goproperly/linoleum/fonts/fonts.scss';

export default class CustomApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...pageProps} />;
  }
}
