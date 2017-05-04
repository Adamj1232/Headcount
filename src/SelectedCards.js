import React from 'react'
import DistrictCard from './DistrictCard'


const SelectedCards = ({selectedArr, findCards}) => {

  const printCards =() => {


    console.log(this.props.findCards(selectedArr))
  }

  return(
    <div>
      <h3>selected</h3>
      <div>selected</div>
    </div>
  )
}

export default SelectedCards
