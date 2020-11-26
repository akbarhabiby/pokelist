import React from 'react'
import { PokemonTable, Greeting } from '../components/'
import { useSelector } from 'react-redux'

export default function PokemonFavorites() {
  const favorites = useSelector(state => state.favorites)
  return (
    <div className="container mt-5">
      <Greeting message="My Favorites Pokémon" />
      <PokemonTable pokemons={favorites} favorites={true} />
    </div>
  )
}