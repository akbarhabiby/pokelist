const initialState = {
  favorites: []
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'AddPokemonToFav':
      const findDuplicated = state.favorites.find(poke => poke.name === action.payload.poke.name)
      if (findDuplicated) return state

      const newFavorites = state.favorites.concat(action.payload.poke)
      return { ...state, favorites: newFavorites }
    default:
      return state
  }
}
