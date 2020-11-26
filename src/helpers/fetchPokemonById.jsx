import { setPokemon, setError, setLoading } from '../redux/actions/'

export default function fetchPokemonById(pokeId) {
  return dispatch => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokeId}`)
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(`Failed to Fetch Pokemons by id ${pokeId}`)
      })
      .then(pokemon => dispatch(setPokemon(pokemon)))
      .catch(err => dispatch(setError(err)))
      .finally(() => dispatch(setLoading(false)))
  }
}
