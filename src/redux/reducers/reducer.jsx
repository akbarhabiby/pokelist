const initialState = {
  pokemons: [],
  pokemon: {},
  favorites: [],
  loading: true,
  error: null
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload }
    case 'SET_ERROR':
      return { ...state, error: action.error }
    case 'SET_POKEMONS':
      return { ...state, pokemons: action.payload }
    case 'SET_POKEMON':
      return { ...state, pokemon: action.payload }
    case 'ADD_POKEMON_TO_FAV':
      const findDuplicated = state.favorites.find(poke => poke.name === action.payload.poke.name)
      if (findDuplicated) return state

      const newFavorites = state.favorites.concat(action.payload.poke)
      return { ...state, favorites: newFavorites }
    default:
      return state
  }
}
