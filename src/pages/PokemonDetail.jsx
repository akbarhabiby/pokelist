import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetchPokemon } from '../hooks/'
import { Loading, ErrorPage } from '../components/'

export default function PokemonDetail() {
  const { pokeId } = useParams()
  const { pokemon, loading, error } = useFetchPokemon(pokeId)

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
          Types: {pokemon.types.map(type => <span className="btn btn-success" style={{ marginRight: '5px' }}>{type.type.name}</span>)}
        </div>
        <div>
          Abilities: {pokemon.abilities.map(abilitiy => <span className="btn btn-primary" style={{ marginRight: '5px' }}>{abilitiy.ability.name}</span>)}
        </div>
      </div>
    </div>
  )
}