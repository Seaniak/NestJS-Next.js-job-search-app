import App from 'next/app';
import { StoreContextProvider } from '../context/Store';
import React from 'react';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <StoreContextProvider>
        <Component {...pageProps} />
      </StoreContextProvider>
    );
  }
}
