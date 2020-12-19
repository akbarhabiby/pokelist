import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchOrSearchPokemon } from '../helpers/'
import { Loading } from '../components/'
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
      <div className="form-group">
        <label>Search Pokémon</label>
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
      <div className="form-group">
        <label>Search Pokémon</label>
        <input
          type="text"
          className="form-control"
          placeholder="Search by Name e.g: Charmander OR Search by ID e.g: 4 (for Charmander)"
          onChange={e => handleKeyword(e.target.value)}>
        </input>
      </div>
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