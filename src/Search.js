import React, { Component } from 'react';
import App from './App'

export default class Search extends Component {
  constructor(){
    super()
    this.state = {
      search: ''
    }
  }

  handleChange(e) {
    this.setState({search: e.target.value})
    this.props.handleSearch(this.state.search);
    // console.log(this.state)
  }

  submitIdea() {
    this.setState({search:''})
  }

  render(){
    return(
    <div>
      <input type="text" value={this.state.search} placeholder="search for district" onChange={(e) => this.handleChange(e) }></input>
    </div>
    )
  }
}
