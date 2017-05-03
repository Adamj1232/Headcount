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
      dataSet: this.dataSetRetrieve.data
    }
  }

  findByName() {
    this.dataSetRetrieve.findAllMatches()
  }

  render() {
    const districtArray = Object.keys(this.state.dataSet).map( (district, index) => <DistrictCard district={district} index={index} districtSet={this.state.dataSet[district]}/>)
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
