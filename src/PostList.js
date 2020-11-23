import React, { Component } from 'react'

export default class PostList extends Component {
  render() {
    // * Props
    const { posts } = this.props
    return (
      <ul>
        { posts.map(post => { return <li key={post.id}>{post.title}</li>}) }
      </ul>
    )
  }
}