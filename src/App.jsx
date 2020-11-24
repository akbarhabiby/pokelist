import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Greeting from './Greeting'
import PokemonTable from './PokemonTable'

export default function App() {
  // * State
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)

  // * Livecycle componentDidMount
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        if (res.ok) {
          return res.json()
        }
      })
      .then(({ results }) => {
        setPokemons(results)
        setLoading(false)
        console.log('Fetching Pokemons Completed')
      })
      .catch(console.log)
  }, [])

  if (loading) return (
    <>
      <div className="d-flex justify-content-center" style={{ height: 100+'vh'}}>
        <div className="align-self-center">
          <div className="spinner-border text-info" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </div>
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
