import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div className="app">
    <Head>
      <title>Consultorio Odontologico Juan Tabares</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"/>
    </Head>

    <Nav />
    <main className="container construction">
      <section className="notification is-primary"> 
        <h1>🦷 - Sitio en Construccion - 🛠</h1>
      </section> 
    </main>



    <style global jsx>{`
    html,
      body,
      body > div:first-child,
      div#__next,
      div#__next > div,
      div#__next > div > div {
        height: 100%;
      }

      .app {
        display: flex;   
      }

      .construction {
        align-items: center;
        justify-content: center;
        display: flex;
      }

      
    `}</style>
  </div>
)

export default Home
