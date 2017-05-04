import React, { Component } from 'react';
import DistrictCard from './DistrictCard'

displaySearches () {
  if(!Array.isArray(this.state.dataSet)) {
    return Object.keys(this.state.dataSet).map( (district, index) => <DistrictCard district={district} key={index} districtSet={this.state.dataSet[district]}/>)
  } else {
    return this.state.dataSet.map( (district, index) => <DistrictCard district={this.state.dataSet} districtSet={this.state.dataSet[district]}/>)
  }

  render(){
    return (
      {filteredCards}
    )
  }
}
