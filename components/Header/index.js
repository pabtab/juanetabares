import React, {useState} from 'react'

const Header = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav className="navbar is-primary is-fixed-top">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <h1>Juan Eugenio Tabares</h1>
        </a>

        <a role="button" 
          aria-label="menu" 
          aria-expanded="false" 
          data-target="menu-burger"
          className={`navbar-burger burger ${isActive ? "is-active" : ""}`}
          onClick={() => {
            setIsActive(!isActive);
          }}
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="menu-burger" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
        <div className="navbar-end">
          {/* <a className="navbar-item" href="#works">
            Trabajos
          </a> */}
          <a className="navbar-item" href="#location">
            Cómo Llegar
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Header
