import React from 'react'
import PropTypes from 'prop-types'
import DistrictRepository from './helper.js'

export const ComparisonCard = ({cardsToCompare, dataSet}) => {

  if(cardsToCompare.length !== 2){
    return (
      <h3>Click Two Cards to Compare</h3>
    )

  } else {
    const comparisonObject = dataSet.compareDistrictAverages(cardsToCompare[0], cardsToCompare[1])
    const comparisonData = Object.keys(comparisonObject).map( (key, index) => {
      return (
        <section  key={index}>
          <h2 className="comparison-district">
            {key}
          </h2>
          <h3 className="comparison-average">
            {comparisonObject[key]}
          </h3>
        </section>
      )
    })

    return(

      <section>
        <div className="card comparison">
          <section>{comparisonData}</section>
        </div>
      </section>
    )
  }
}

ComparisonCard.propTypes = {
  cardsToCompare: PropTypes.array,
  dataSet: PropTypes.instanceOf(DistrictRepository)
}
