import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Blind Lively Herring</title>
        <meta property="og:title" content="Blind Lively Herring" />
      </Helmet>
      <h1>Heading</h1>
      <img alt="image" src="/favicon-32x32-200h.png" className="home-image" />
    </div>
  )
}

export default Home
