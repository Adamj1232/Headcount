import React, { Component } from 'react';
import './App.css';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js'
import Main from './Main'

class App extends Component {
  constructor () {
    super ()
    const dataSetRetrieve = new DistrictRepository(kinderData)
    this.state = {
      dataSet: dataSetRetrieve.data
    }
  }
  render() {
    return (
      <div>
        <div>Welcome To Headcount 2.0</div>
        <Main dataSet={this.state.dataSet}/>
      </div>
    );
  }
}

export default App;
