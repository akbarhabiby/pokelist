import React from 'react'
import { PokemonTable } from '../components/'
import { useSelector } from 'react-redux'

export default function PokemonFavorites() {
  const favorites = useSelector(state => state.favorites)
  return (
    <div className="container mt-5">
      <PokemonTable pokemons={favorites} favorites={true} />
    </div>
  )
}