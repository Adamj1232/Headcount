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
    console.log(e.target.value)
    console.log(this.state)
    this.props.handleSearch(e.target.value);
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
