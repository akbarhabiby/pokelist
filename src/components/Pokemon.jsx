import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Pokemon(props) {
  const router = useHistory()
  const detailPokemon = id => {
    router.push(`/pokemon/${id}`)
  }

  // * Props
  const { poke } = props
  return (
    <tr>
      <td className="align-middle">{poke.name[0].toUpperCase() + poke.name.slice(1)}</td>
      <td><img src={`https://pokeres.bastionbot.org/images/pokemon/${poke.url.split('/')[6]}.png`} alt={poke.name} width="100px" /></td>
      <td className="align-middle"><button className="btn btn-primary" onClick={() => detailPokemon(poke.url.split('/')[6])}>Details</button></td>
    </tr>
  )
}
