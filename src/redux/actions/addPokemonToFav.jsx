export default function addPokemonToFav(poke) {
  return {
    type: 'AddPokemonToFav',
    payload: { poke }
  }
}