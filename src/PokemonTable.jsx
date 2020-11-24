import React from 'react'
import Pokemon from './Pokemon'

export default function PokemonTable(props) {
  // * Props
  const { pokemons } = props
  return (
    <table className="table table-hover text-center" style={{ backgroundColor: '#fff' }}>
      <thead>
        <tr>
          <th scope="col">Pokémon</th>
          <th scope="col">Image</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        { pokemons.map(poke => <Pokemon poke={poke} key={poke.name} />) }
      </tbody>
    </table>
  )
}