import React from 'react'
import { MdEmail } from 'react-icons/md'

import Phone from '../../components/Phone'
import Whatsapp from '../../components/Whatsapp'


import './styles.scss'


const HomePage = () => {
  return (
    <section className="home" id="home">
      <aside>
      </aside>
      <article className="main-data">
        <div className="info-office">
          <div className="box-info has-background-primary has-text-white">
            <div>
              Teléfono:
            </div>
            <div><Phone /> 2 50 39 57</div>
          </div>
          <div className="box-info">
            <p>Escríbenos a:</p>
            <Whatsapp />
          </div>
          <div className="box-info has-background-primary has-text-white">
            <div>
              Correo:
            </div>
            <div className="email">
              <MdEmail />
              <a href="mailto:juantab@hotmail.com">juantab@hotmail.com</a>
            </div>
          </div>
        </div>
      </article>
    </section>
  )
}

export default HomePage
