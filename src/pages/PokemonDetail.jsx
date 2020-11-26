import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Loading, ErrorPage, Greeting } from '../components/'
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
      <Greeting message="Detail Pokémon" />
      <div className="d-flex justify-content-center">
        <div className="card" style={{ width: '18rem' }}>
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} className="card-img-top" alt={pokemon.name} style={{ width: '200px', padding: '15px' }} />
          <div className="card-body">
            <h5 className="card-title">{pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}</h5>
            <p className="card-text">Types</p>
            <div>
              {pokemon.types.map(type => <span key={type.slot} className="btn btn-success" style={{ marginRight: '5px' }}>{type.type.name[0].toUpperCase() + type.type.name.slice(1)}</span>)}
            </div>
            <p className="pt-2">Abilities</p>
            <div>
              {pokemon.abilities.map(abilitiy => <span key={abilitiy.slot} className="btn btn-primary" style={{ marginRight: '5px' }}>{abilitiy.ability.name[0].toUpperCase() + abilitiy.ability.name.slice(1)}</span>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}