import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Recious Flas</title>
        <meta property="og:title" content="Recious Flas" />
      </Helmet>
      <a
        href="https://nlpl1.kalkuala.homes/"
        target="_blank"
        rel="noreferrer noopener"
        className="home-link"
      >
        <img alt="image" src="/nlbutton-400h.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
