import React, { Component } from 'react'
import axios from 'axios'
import PostList from './PostList'

export default class App extends Component {
  constructor(props) {
    super(props)
    // * State
    this.state = {
      posts: []
    }
  }

  // * Lifecycle
  componentDidMount() {
    axios({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
      params: {
        _limit: 20
      }
    })
      .then(({ data }) => {
        this.setState({ posts: data })
      })
  }

  render() {
    const { posts } = this.state
    return (
      <div className="container mt-5">
        <PostList posts={posts} />
      </div>
    )
  }
}
