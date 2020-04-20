import React from 'react'
import App, { Container } from 'next/app'

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
     // console.log (pageProps)// result { statusCode: 404 }
    }
    // console.log (pageProps)// result { statusCode: 404 }
    return { pageProps }
  }

  namastate = {
    name: "Nizam",
  }

  render () {
    const { Component, pageProps } = this.props


    return (
      <Container>
        <Component {...pageProps} {...this.namastate}/>
      </Container>
    )
  }
}