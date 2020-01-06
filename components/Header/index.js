import React from 'react'

const Header = () => {
  return (
    <nav class="navbar is-primary">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1>Juan Eugenio Tabares</h1>
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="menu" class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="#works">
            Trabajos
          </a>
          <a class="navbar-item" href="#location">
            Ubicación
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
