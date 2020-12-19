import React from 'react'
import { useHistory } from 'react-router-dom'
import { addPokemonToFav, setLoading } from '../redux/actions/'
import { useDispatch, useSelector } from 'react-redux'

export default function Pokemon(props) {
  const router = useHistory()
  const dispatch = useDispatch()

  const detailPokemon = id => {
    dispatch(setLoading())
    router.push(`/pokemon/${id}`)
  }

  // * Props
  const { poke, favorites } = props
  const addedPoke = useSelector(state => state.favorites.find(pokemon => pokemon.name === poke.name))

  return (
    <tr>
      <td className="align-middle">{poke.name[0].toUpperCase() + poke.name.slice(1)}</td>
      <td><img src={`https://pokeres.bastionbot.org/images/pokemon/${poke.url.split('/')[6]}.png`} alt={poke.name} width="100px" /></td>
      <td className="align-middle">
        <button className="btn btn-primary" onClick={() => detailPokemon(poke.url.split('/')[6])}>Details</button> { !favorites ? <button className={!addedPoke ? 'btn btn-success' : 'btn btn-secondary'} disabled={addedPoke} onClick={() => dispatch(addPokemonToFav(poke))}>Add to Favorites</button> : '' }
      </td>
    </tr>
  )
}
