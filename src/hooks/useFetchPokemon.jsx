import { useState, useEffect } from 'react'

export default function useFetchPokemon(pokeId = '') {
  // * State
  const [pokemons, setPokemons] = useState([])
  const [pokemon, setPokemon] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // * Livecycle componentDidMount
  useEffect(() => {
    const fetchPokemon = () => {
      fetch('https://pokeapi.co/api/v2/pokemon/' + pokeId)
        .then(res => {
          if (res.ok) {
            return res.json()
          } else {
            return Promise.reject('Failed to Fetch Pokemons')
          }
        })
        .then(data => {
          const { results } = data
          if (results) setPokemons(results)
          setPokemon(data)
          console.log('Fetching Pokemons Completed')
        })
        .catch(err => {
          setError(err)
          console.log(err)
        })
        .finally(() => setLoading(false))
    }

    fetchPokemon()
  }, [pokeId])

  return { pokemons, pokemon, loading, error }
}