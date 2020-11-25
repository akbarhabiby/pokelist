import React from 'react'
import { Loading, ErrorPage, Greeting, PokemonTable } from '../components/'
import { useFetchPokemon } from '../hooks/'

export default function Dashboard() {
  // * Custom Hooks
  const { pokemons, loading, error } = useFetchPokemon()

  // * Show Loading Spinner
  if (loading) return <Loading />
  // * Show Error Page
  if (error) return <ErrorPage error={error} />

  return (
    <div className="container mt-5">
      <Greeting />
      <PokemonTable pokemons={pokemons} />
    </div>
  )
}