import { setPokemon, setLoading } from '../redux/actions/'

export default function fetchOrSearchPokemon(id = 1) {
  return dispatch => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject(`Failed to Fetch Pokemons by id ${id}`)
      })
      .then(pokemon => dispatch(setPokemon(pokemon)))
      .catch(console.log)
      .finally(() => dispatch(setLoading(false)))
  }
}
