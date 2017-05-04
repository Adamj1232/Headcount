import React, { Component } from 'react';
import './App.css';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js'
import Search from './Search'
import CardHolder from './CardHolder'


class App extends Component {
  constructor () {
    super ()
    this.dataSetRetrieve = new DistrictRepository(kinderData)
    this.state = {
      dataSet: this.dataSetRetrieve.data
    }
  }

  findAllMatches(input) {
    // console.log(this.dataSetRetrieve.findAllMatches)
    let searchedMatches = this.dataSetRetrieve.findAllMatches(input)
    // console.log(searchedMatches)
    this.setState({dataSet: searchedMatches })
    console.log(this.state.dataSet)
    // console.log(this.state)
  }
  //
  // componentDidMount() {
  //   this.findAllMatches()
  // }

  // displaySearches () {
  //   if(!Array.isArray(this.state.dataSet)) {
  //     return Object.keys(this.state.dataSet).map( (district, index) => <DistrictCard district={district} key={index} districtSet={this.state.dataSet[district]}/>)
  //   } else {
  //     return this.state.dataSet.map( (district, index) => <DistrictCard district={this.state.dataSet} districtSet={this.state.dataSet[district]}/>)
  //
  //   }
  // }

  render() {
    return (
      <div>
        <div>Welcome To Headcount 2.0</div>
        <Search handleSearch={this.findAllMatches.bind(this)}/>
        <CardHolder dataSet={this.dataSetRetrieve} cleanedData={this.state.dataSet} />
      </div>
    );
  }
}

export default App;
