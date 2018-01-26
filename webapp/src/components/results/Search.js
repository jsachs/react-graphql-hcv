// Imports
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

// App Imports
import {routes} from '../../setup/routes'
import {getList} from './api/actions'
import {messageShow, messageHide} from '../common/api/actions'

// Component
class Search extends Component {

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  submit = (event) => {
    event.preventDefault()

    // Hide old messages
    this.props.messageHide()

    this.props.messageShow('Searching, please wait...')

    // Call API
    this.props.getList(this.state)
      .then(response => {
        this.setState({
          name: ''
        })

        console.log(this.props)
      })
      .catch(error => {
        console.log(error)
        this.props.messageShow('Error creating thought. Please try again.')
      })
  }

  constructor(props) {
    super(props)

    this.state = {
      name: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Search Results</h1>

        {/* Form */}
        <form onSubmit={this.submit}>
          {/* Name */}
          <input
            type="text"
            name="name"
            placeholder="Restaurant name"
            required="required"
            value={this.state.name}
            onChange={this.onChange}
          />

          <br/><br/>

          {/* Submit */}
          <button type="submit">Search</button>
        </form>
      </div>
    )
  }
}

// Component Properties
Search.propTypes = {
  getList: PropTypes.func.isRequired,
  messageShow: PropTypes.func.isRequired,
  messageHide: PropTypes.func.isRequired
}

export default connect(null, {getList, messageShow, messageHide})(Search)