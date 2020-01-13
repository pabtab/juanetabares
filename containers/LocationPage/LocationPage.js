import React from 'react'
import Location from '../../components/Location'
import Title from '../../components/Title'

import './styles.scss'


const OFFICE_LOCATION = [6.235459, -75.601477];
const NAME_LOCATION = 'Odontología Y Ortodoncia Juan Tabares -411';

const LocationPage = () => {
  return (
    <section className="container page location" id="location">
      <span className="titleContainer">
        <Title text="Cómo llegar" />
        <img className="is-hidden-mobile" src="/assets/icons/tour.svg" alt="how to arrive icon" />
      </span>
      <Location toCoords={OFFICE_LOCATION} to={NAME_LOCATION} lang="es" />
    </section>
  )
}

export default LocationPage
