import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Dashboard, PokemonDetail, PokemonFavorites } from './pages/'
import { Navbar } from './components/'

export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/pokemon/favorites">
          <PokemonFavorites />
        </Route>
        <Route path="/pokemon/:pokeId">
          <PokemonDetail />
        </Route>
        <Route path="/">
          <Dashboard />
        </Route>
      </Switch>
    </>
  )
}
