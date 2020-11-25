import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-info">
      {/* Brand */}
      <Link to="/" className="navbar-brand">PokéList</Link>
      {/* List Navbar Menu */}
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item active">
            <Link to="/pokemon/favorites" className="nav-link">Favorites Pokémon</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
