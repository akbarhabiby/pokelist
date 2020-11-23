import React, { Component } from 'react'
import Pokemon from './Pokemon'

export default class PokemonTable extends Component {
  render() {
    // * Props
    const { pokemons } = this.props
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Pokémon</th>
            <th scope="col">Image</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          { pokemons.map(poke => { return <Pokemon poke={poke} key={poke.name} /> })}
        </tbody>
      </table>
    )
  }
}