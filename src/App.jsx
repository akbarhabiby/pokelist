import React from 'react'
import Navbar from './Navbar'
import Greeting from './Greeting'
import PokemonTable from './PokemonTable'
import useFetchPokemon from './hooks/useFetchPokemon'

export default function App() {
  // * Custom Hooks
  const [pokemons, loading, error] = useFetchPokemon()

  if (loading) return (
    <div className="d-flex justify-content-center" style={{ height: 100+'vh'}}>
      <div className="align-self-center">
        <div className="spinner-border text-info" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </div>
  )

  if (error) return (
    <>
      <center><h1>{error}</h1></center>
      <hr/>
      <center>Support: <a href="mailto:akbarhabiby@icloud.com">akbarhabiby@icloud.com</a></center>
    </>
  )

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
