import React, { Component } from 'react';
import './App.css';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js'
import Main from './Main'
import DistrictCard from './DistrictCard'
import SelectedCards from './SelectedCards'


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

  handleCardSelect(selectedLocations) {
    if(this.state.selectedCards.length >= 2) {
      if(this.state.selectedCards[0] === selectedLocations || this.state.selectedCards[1] === selectedLocations) {
       throw new Error('Compare Different Districts!')
      }
      this.state.selectedCards.shift()
      this.state.selectedCards.push(selectedLocations)
    } else {
      if(this.state.selectedCards[0] === selectedLocations || this.state.selectedCards[1] === selectedLocations) {
       throw new Error('Compare Different Districts!')
      }
      this.state.selectedCards.push(selectedLocations)
    }
    this.setState({
      selectedCards: this.state.selectedCards
    })
  }

  findSelectedCards(cards) {
    cards.map (location => this.dataSetRetrieve.findByName(location))
  }

  render() {
    const newArr = []
    let districtArray = []
    this.state.dataSet.forEach( location => {
      let region = Object.keys(location)
      newArr.push(region[0])
      districtArray = newArr.map( (district, index) => <DistrictCard district={district} key={index} districtSet={this.state.dataSet[index]} districtSelect={this.handleCardSelect.bind(this)} />)
    })

    return (
      <div>
        <header>Welcome To Headcount 2.0</header>
        <Main
          handleSearch={this.findByName.bind(this)}
        />
        <section className='selected-cards'>
          <SelectedCards selectedArr={this.state.selectedCards} findCards={this.findSelectedCards.bind(this)}/>
        </section>
        <section className='card-holder'>
          {districtArray}
        </section>
      </div>
    );
  }
}

export default App;
