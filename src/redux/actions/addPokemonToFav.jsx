export default function addPokemonToFav(poke) {
  return { type: 'ADD_POKEMON_TO_FAV', payload: { poke } }
}