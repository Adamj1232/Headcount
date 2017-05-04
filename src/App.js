import React, { Component } from 'react';
import './App.css';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js'
import Main from './Main'
import DistrictCard from './DistrictCard'


class App extends Component {
  constructor () {
    super ()
    this.dataSetRetrieve = new DistrictRepository(kinderData)
    this.state = {
      dataSet: this.dataSetRetrieve.findAllMatches(),
      selectedCards: []
    }
  }

  findByName(input) {
    console.log(input)
    let searchedMatches = this.dataSetRetrieve.findAllMatches(input)
    this.setState({dataSet: searchedMatches })
    console.log(this.state.dataSet)
  }

  render() {
    const newArr = []
    let districtArray = []
    this.state.dataSet.forEach( location => {
      let region = Object.keys(location)
      newArr.push(region[0])
      districtArray = newArr.map( (district, index) => <DistrictCard district={district} key={index} districtSet={this.state.dataSet[index]} />)
    })

    return (
      <div>
        <div>Welcome To Headcount 2.0</div>
        <Main handleSearch={this.findByName.bind(this)}/>
        {districtArray}
      </div>
    );
  }
}

export default App;
