import React, { useEffect } from 'react'
import { Loading, ErrorPage, Greeting, PokemonTable } from '../components/'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemons } from '../helpers/'

export default function Dashboard() {
  // * Custom Hooks
  const dispatch = useDispatch()
  const { pokemons, loading, error } = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchPokemons())
  }, [])

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