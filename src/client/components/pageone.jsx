import React from 'react'
import {Link} from 'react-router-dom'

export default class PageOne extends React.Component {
  render() {
    return (
      <div>
        <div>Page One</div>

        <Link to="/pagetwo">Go to Page Two</Link>
      </div>
    )
  }
}
