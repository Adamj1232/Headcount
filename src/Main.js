import React, { Component } from 'react';

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
  }

  submitIdea() {
    this.props.handleSearch(this.state);
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
