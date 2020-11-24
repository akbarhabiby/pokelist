import React from 'react'

export default function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      {/* Brand */}
      <a className="navbar-brand" href="/">PokéList</a>
      {/* List Navbar Menu */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/">Add Pokémon</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
