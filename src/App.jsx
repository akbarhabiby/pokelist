import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Greeting from './Greeting'
import PokemonTable from './PokemonTable'

export default function App() {
  // * State
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  // * Livecycle componentDidMount
  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon')
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          return Promise.reject('Failed to Fetch Pokemons')
        }
      })
      .then(({ results }) => {
        setPokemons(results)
        setLoading(false)
        console.log('Fetching Pokemons Completed')
      })
      .catch(err => {
        setError(err)
        setLoading(false)
        console.log(err)
      })
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
