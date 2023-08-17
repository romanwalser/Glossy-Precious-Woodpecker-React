import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Glossy Precious Woodpecker</title>
        <meta property="og:title" content="Glossy Precious Woodpecker" />
      </Helmet>
      <a href="https://test.kamadeta.com/" className="home-link">
        <img alt="image" src="/buttonbg-400w.jpg" className="home-image" />
      </a>
    </div>
  )
}

export default Home
