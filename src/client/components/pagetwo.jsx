import React from 'react'
import {Link} from 'react-router-dom'

export default class PageTwo extends React.Component {
  render() {
    return (
      <div>
        <div>Page Two</div>

        <Link to="/">Back</Link>
      </div>
    )
  }
}
