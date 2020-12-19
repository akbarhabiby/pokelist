import React from 'react'
import { useDispatch } from 'react-redux'
import { setPokemon } from '../redux/actions/'
import { Link, useHistory } from 'react-router-dom'

export default function Navbar() {
  const router = useHistory()
  const dispatch = useDispatch()

  const handleToSearchPage = e => {
    e.preventDefault()
    dispatch(setPokemon({}))
    router.push('/search')
  }

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
          <li className="nav-item active">
            <a href="/search" onClick={e => handleToSearchPage(e)} className="nav-link">Search Pokémon</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
