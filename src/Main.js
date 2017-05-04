import React, { Component } from 'react';
import App from './App'

export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      search: ''
    }
  }

  handleChange(e) {
    this.setState({search: e.target.value})
    console.log(this.state)
    this.props.handleSearch(this.state.search);
  }

  submitIdea() {
    this.setState({search:''})
  }

  render(){
    return(
    <nav>
      <input
        type="text"
        value={this.state.search}
        placeholder="search for district"
        onChange={(e) => this.handleChange(e) }>
      </input>
    </nav>
    )
  }
}
