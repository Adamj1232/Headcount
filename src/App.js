import React, { Component } from 'react';
import './App.css';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import DistrictRepository from './helper.js'
import Main from './Main'
import { DistrictCard } from './DistrictCard'
import { ComparisonCard } from './ComparisonCard'
import { ComparedCard } from './ComparedCard'


export default class App extends Component {
  constructor () {
    super ()
    this.dataSetRetrieve = new DistrictRepository(kinderData)
    this.state = {
      dataSet: this.dataSetRetrieve.findAllMatches(),
      selectedCards: []
    }
  }

  findByName(input) {
    let searchedMatches = this.dataSetRetrieve.findAllMatches(input)
    this.setState({dataSet: searchedMatches })
    this.setState({dataSet: searchedMatches })
  }

  handleCardSelect(selectedLocations) {
    if (this.state.selectedCards[0] === selectedLocations || this.state.selectedCards[1] === selectedLocations) {
      let updatedSelect = this.state.selectedCards.filter( locations => {
        return locations !== selectedLocations
      })
      return this.setState({selectedCards: updatedSelect})
    }
    if (this.state.selectedCards.length >= 2) {
      this.state.selectedCards.shift()
    }
    this.state.selectedCards.push(selectedLocations)
    this.setState({
      selectedCards: this.state.selectedCards
    })
  }

  render() {
    const newArr = []
    let districtArray = []

    this.state.dataSet.forEach( location => {
      let region = Object.keys(location)
      newArr.push(region[0])

      districtArray = newArr.map( (district, index) =>
        <DistrictCard
          district={district}
          key={index} districtSet={this.state.dataSet[index]}
          districtSelect={this.handleCardSelect.bind(this)}
          selectedCards={this.state.selectedCards}
        />)
    })

    let selectedCard = this.state.selectedCards
    let selectedCard1 = this.dataSetRetrieve.findByName(selectedCard[0]) || {location: '', data: ''}
    let selectedCard2 = this.dataSetRetrieve.findByName(selectedCard[1]) || {location: '', data: ''}

    return (
      <div>
        <header>Welcome To Headcount 2.0</header>
        <Main
          handleSearch={this.findByName.bind(this)}
        />
        <section className='selected-cards'>
          <ComparedCard
            district={selectedCard1.location}
            dataSet={selectedCard1.data}
            cardsToCompare={this.state.selectedCards}
            key={Math.random()}
          />
          <ComparisonCard
            cardsToCompare={this.state.selectedCards}
            dataSet={this.dataSetRetrieve}
            key={Math.random()}
          />
          <ComparedCard
            district={selectedCard2.location}
            dataSet={selectedCard2.data}
            cardsToCompare={this.state.selectedCards}
            key={Math.random()}
          />
        </section>
        <section className='card-holder'>
          {districtArray}
        </section>
      </div>
    );
  }
}
