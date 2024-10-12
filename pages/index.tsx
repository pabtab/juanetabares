import React from "react";
import Head from "next/head";

import Header from "../app/components/Header";
import LocationPage from "../app/containers/LocationPage/LocationPage";
import HomePage from "../app/containers/HomePage/HomePage";
import "./globals.css";

const Home = () => (
  <div className='app'>
    <Head>
      <title>Juan Eugenio Tabares - Consultorio Odontologico</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css' />
      <link
        rel='stylesheet'
        href='https://cdn.jsdelivr.net/npm/bulma-carousel@4.0.4/dist/css/bulma-carousel.min.css'
      />
      <meta property='og:title' content='Dr Juan Eugenio Tabares - Pag Web' />
      <meta property='og:image' content='/assets/icons/favicon.png' />
      <script src='/static.js'></script>
    </Head>
    <Header />
    <main className='construction'>
      <HomePage />
      <LocationPage />
    </main>

    <style global jsx>
      {`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div,
        div#__next > div > div {
          height: 100%;
        }

        .page {
          align-items: center;
          justify-content: center;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;
          padding: 80px 0 40px;
        }
      `}
    </style>
    <style jsx>{`
      main {
        height: 100vh;
      }
    `}</style>
  </div>
);

export default Home;
