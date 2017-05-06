import React from 'react'
import DistrictCard from './DistrictCard'

const SelectedCards = ({cardsToCompare, dataSet}) => {

if(!cardsToCompare.length){
  return (
    <div></div>
  )
} else {

  const comparisonObject = dataSet.compareDistrictAverages(cardsToCompare[0], cardsToCompare[1])
  const comparisonData = Object.keys(comparisonObject).map( (key) => {
    return (
      <section>
        <div className='location'>{key}</div>
        <div>{comparisonObject[key]} Averaged Attendance</div>
      </section>
    )
  })

  return(
    <section className='compared'>
      <div className="card">
        <h3>{comparisonData}</h3>
      </div>
    </section>
  )
  }
}

export default SelectedCards
