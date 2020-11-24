import { useState, useEffect } from 'react'

export default function useFetchPokemon() {
  // * State
  const [pokemons, setPokemons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchPokemon = () => {
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
        console.log('Fetching Pokemons Completed')
      })
      .catch(err => {
        setError(err)
        console.log(err)
      })
      .finally(() => setLoading(false))
  }

  // * Livecycle componentDidMount
  useEffect(() => {
    fetchPokemon()
  }, [])

  return [pokemons, loading, error]
}