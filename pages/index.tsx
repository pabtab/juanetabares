import React from "react";
import Head from "next/head";

import { LanguageProvider } from "../app/context/LanguageContext";
import Navbar from "../app/components/Navbar";
import Hero from "../app/sections/Hero";
import Services from "../app/sections/Services";
import About from "../app/sections/About";
import Gallery from "../app/sections/Gallery";
import Contact from "../app/sections/Contact";
import Footer from "../app/sections/Footer";
import "./globals.css";

const Home = () => (
  <LanguageProvider>
    <Head>
      <title>Dr. Juan Eugenio Tabares - Consultorio Odontológico</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@600;700;800&display=swap"
        rel="stylesheet"
      />
      <meta
        name="description"
        content="Consultorio Odontológico del Dr. Juan Eugenio Tabares en Medellín. Odontología general y especializada con más de 20 años de experiencia."
      />
      <meta property="og:title" content="Dr. Juan Eugenio Tabares - Consultorio Odontológico" />
      <meta property="og:image" content="/assets/icons/favicon.png" />
      <meta property="og:description" content="Odontología general y especializada en Medellín" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <Navbar />
    <main>
      <Hero />
      <Services />
      <About />
      <Gallery />
      <Contact />
    </main>
    <Footer />
  </LanguageProvider>
);

export default Home;
