import React, { Component } from 'react'

export default class Pokemon extends Component {
  render() {
    // * Props
    const { poke } = this.props
    return (
      <tr>
        <td className="align-middle">{poke.name[0].toUpperCase() + poke.name.slice(1)}</td>
        <td><img src={`https://pokeres.bastionbot.org/images/pokemon/${poke.url.split('/')[6]}.png`} alt={poke.name} width="100px" /></td>
        <td className="align-middle"><a href={poke.url} target="_blank" rel="noreferrer" className="btn btn-primary">Details</a></td>
        {/* <td className="align-middle"><button className="btn btn-primary">Details</button></td> */}
      </tr>
    )
  }
}