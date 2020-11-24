import React from 'react'
import { Navbar, Greeting, PokemonTable, Loading, ErrorPage } from './components/'
import { useFetchPokemon } from './hooks/'

export default function App() {
  // * Custom Hooks
  const [pokemons, loading, error] = useFetchPokemon()

  // * Show Loading Spinner
  if (loading) return <Loading />
  // * Show Error Page
  if (error) return <ErrorPage error={error} />

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <Greeting />
        <PokemonTable pokemons={pokemons} />
      </div>
    </>
  )
}
