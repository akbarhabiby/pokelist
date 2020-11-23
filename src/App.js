import React, { Component } from 'react'
import axios from 'axios'
import Greeting from './Greeting'
import Navbar from './Navbar'
import PokemonTable from './PokemonTable'

export default class App extends Component {
  constructor(props) {
    super(props)
    // * State
    this.state = {
      pokemons: []
    }
  }

  // * Lifecycle
  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon',
      params: {
        limit: 20
      }
    })
      .then(({ data }) => {
        const { results } = data
        this.setState({ pokemons: results })
        console.log('Fetching Pokemons Completed')
      })
  }

  render() {
    const { pokemons } = this.state
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <Greeting />
          <PokemonTable pokemons={ pokemons } />
        </div>
      </>
    )
  }
}
