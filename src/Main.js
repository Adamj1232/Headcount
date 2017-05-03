import React, { Component } from 'react';
import App from './App'

export default class Main extends Component {
  constructor(){
    super()
    this.state = {
      search: ''
    }
  }
  // console.log(dataSet)
  // createDistrictArray ({ dataSet }) => {
  // return Object.keys(dataSet).map( (district, index) => <DistrictCard district={district} index={index} districtSet={dataSet[district]}/>)
  // }

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
