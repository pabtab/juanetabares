import React from 'react'
import Head from 'next/head'
import Whatsapp from '../components/Whatsapp'
import Phone from '../components/Phone'
import Header from '../components/Header'

const Home = () => (
  <div className="app">
    <Head>
      <title>Juan Eugenio Tabares - Consultorio Odontologico</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"/>
      <script  src="/static.js"></script>
    </Head>
    <Header />
    <main className="container construction">
      <span>
        <Phone /> 2 50 39 57
      </span>
      <section className="notification is-primary"> 
        <h1>🦷 - Sitio en Construcción - 🛠</h1>
      </section> 
      <p>Escríbenos a:</p>
      <Whatsapp />
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
    `}
    </style>
    <style jsx>{`

      .construction {
        align-items: center;
        justify-content: center;
        display: flex;
        flex-direction: column;
        height: 100%;
      }

      .notification {
        margin-top: 20px;
      }
      
    `}</style>
  </div>
)

export default Home
