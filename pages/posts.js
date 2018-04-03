import React, { Component } from 'react'

import Nav from '../components/Nav'

export default class extends Component {
  static getInitialProps ({ query: { testObject, testArray, id } }) {
    console.log(typeof testObject, typeof testArray, id)
    return { testObject, testArray, postId: id }
  }

  render () {
    return <div>
      <Nav />

      <h1>My blog post #{this.props.postId}</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <h2>Below we output props:</h2>

      <p>Test Post ID:</p>
      <pre>{this.props.postId}</pre>

      <p>Test Object: </p>
      <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(this.props.testObject, null, 2) }} />

      <p>Test Array: </p>
      <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(this.props.testArray, null, 2) }} />
    </div>
  }
}
