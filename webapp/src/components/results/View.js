// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import Loading from '../common/Loading'

// Component
class View extends Component {
  render() {
    return (
      <div>
        <h1>Results</h1>

        <p>
          <Link to={routes.results.search}>Back</Link>
        </p>

      </div>
    )
  }
}

// Component State
function viewState(state) {
  return {
    results: state.results
  }
}

export default connect(viewState)(View)