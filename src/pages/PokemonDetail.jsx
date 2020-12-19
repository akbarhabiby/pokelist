import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loading, ErrorPage } from '../components/'
import { useSelector, useDispatch } from 'react-redux'
import { fetchPokemonById } from '../helpers/'

export default function PokemonDetail() {
  const { pokeId } = useParams()
  
  const dispatch = useDispatch()
  const { pokemon, loading, error } = useSelector(state => state)

  useEffect(() => {
    dispatch(fetchPokemonById(pokeId))
  }, [])

  // * Show Loading Spinner
  if (loading) return <Loading />
  // * Show Error Page
  if (error) return <ErrorPage error={error} />

  return (
    <div className="container mt-5">
      <div className="text-center">
      <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={pokemon.name} style={{ width: '200px' }} />
        <div>
          Name: {pokemon.name}
        </div>
        <div>
          Types: {pokemon.types.map(type => <span key={type.slot} className="btn btn-success" style={{ marginRight: '5px' }}>{type.type.name}</span>)}
        </div>
        <div>
          Abilities: {pokemon.abilities.map(abilitiy => <span key={abilitiy.slot} className="btn btn-primary" style={{ marginRight: '5px' }}>{abilitiy.ability.name}</span>)}
        </div>
      </div>
    </div>
  )
}