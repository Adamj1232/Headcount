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
      dataSet: this.dataSetRetrieve.findAllMatches()
    }
  }

  findByName(input) {
    let searchedMatches = this.dataSetRetrieve.findAllMatches(input)
    this.setState({dataSet: searchedMatches })
    console.log(this.state.dataSet)
  }

  render() {
    const newArr = []
    let districtArray = []
    this.state.dataSet.forEach( location => {
      // console.log(Object.keys(location))
      let region = Object.keys(location)
      newArr.push(region[0])
      // console.log(newArr)
      districtArray = newArr.map( (district, index) => <DistrictCard district={district} index={index} districtSet={this.state.dataSet[index]}/>)
    })

    // districtSet={this.state.dataSet[district]}
    // const districtArray =
    //  let keys = Object.keys(this.state.dataSet)
    //  Object.keys(this.state.dataSet).map( (district, index) => <DistrictCard district={district} index={index} districtSet={this.state.dataSet[district]}/>)
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
