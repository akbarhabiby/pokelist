import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrSearchPokemon } from '../helpers/'
import { Loading, Greeting } from '../components/'
import { setLoading } from '../redux/actions'
import debounce from 'lodash.debounce'

export default function SearchPokemon() {
  const dispatch = useDispatch()
  const { pokemon, loading } = useSelector(state => state)

  useEffect(() => {
    dispatch(setLoading(false))
    return () => {
      handleKeyword.cancel()
    }
  }, [])

  const handleKeyword = debounce(text => {
    dispatch(fetchOrSearchPokemon(text))
  }, 1000)

  // * Show Loading Spinner
  if (loading) return <Loading />

  if (!pokemon.name) return (
    <div className="container mt-5">
      <Greeting message="Search Pokémon" />
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Name e.g: Charmander OR Search by ID e.g: 4 (for Charmander)"
          onChange={e => handleKeyword(e.target.value)}>
        </input>
      </div>
      <div className="text-center">
        <h3>No Pokemon Found...</h3>
      </div>
    </div>
  )

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-5" style={{ color: '#14A3B8' }}>Search Pokémon</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by Name e.g: Charmander OR Search by ID e.g: 4 (for Charmander)"
          onChange={e => handleKeyword(e.target.value)}>
        </input>
      </div>
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