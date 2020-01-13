import React from 'react'
import { MdEmail } from 'react-icons/md'

import Phone from '../../components/Phone'
import Whatsapp from '../../components/Whatsapp'

import './styles.scss'

const HomePage = () => {
  return (
    <section className="page" id="home">
      <span className="content-notification">
        <article className="notification is-primary"> 
          <h1>🦷 - Sitio en Construcción - 🛠</h1>
        </article> 
      </span>
      <footer className="columns">
        <span className="column is-4 has-background-primary has-text-white">
          <div>
            Teléfono:
          </div>
          <div><Phone /> 2 50 39 57</div>
        </span>
        <span className="column is-4 ">
          <p>Escríbenos a:</p>
          <Whatsapp />
        </span>
        <span className="column is-4 has-background-primary has-text-white">
          <div>
            Correo:
          </div>
          <div className="email">
            <MdEmail />
            <a href="mailto:juantab@hotmail.com">juantab@hotmail.com</a>
          </div>
        </span>
      </footer>
    </section>
  )
}

export default HomePage
