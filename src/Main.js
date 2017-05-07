import React, { Component } from 'react';
import PropTypes from 'prop-types'

export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      search: ''
    }
  }

  handleChange(e) {
    this.setState({search: e.target.value})
    this.props.handleSearch(this.state.search);
    !this.state.search.length ? this.props.handleSearch(this.state.search) : null
  }

  render(){
    return(
    <nav>
      <input
        type="text"
        value={this.state.search}
        placeholder="Search School Districts"
        onChange={(e) => this.handleChange(e) }>
      </input>
    </nav>
    )
  }
}

Main.propTypes = {
  handleSearch: PropTypes.func
}
