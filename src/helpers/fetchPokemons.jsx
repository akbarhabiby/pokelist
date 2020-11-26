import { setPokemons, setError, setLoading } from '../redux/actions/'

export default function fetchPokemons() {
  return dispatch => {
    fetch('https://pokeapi.co/api/v2/pokemon/')
      .then(res => {
        if (res.ok) return res.json()
        return Promise.reject('Failed to Fetch Pokemons')
      })
      .then(({ results }) => dispatch(setPokemons(results)))
      .catch(err => dispatch(setError(err)))
      .finally(() => dispatch(setLoading(false)))
  }
}
