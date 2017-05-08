import React from 'react'
import PropTypes from 'prop-types'

export const ComparedCard = ({district, dataSet, cardsToCompare}) => {

if(cardsToCompare.length !== 2){
  return (
    <div></div>
  )
} else {

  const dataSetView = Object.keys(dataSet).map( (location, index) => {
    return (
      <div className={dataSet[location] > 0.5 ? 'green' : 'red'} key={index}>
        <div>{location} : {dataSet[location]}</div>
      </div>
    )
  })

  return(

    <section className='compared'>
      <div className="card selected">
        <h3>{district}</h3>
        <div className='card-data'>{dataSetView}</div>
      </div>
    </section>
  )
  }
}

ComparedCard.propTypes = {
  district: PropTypes.string,
  dataSet: PropTypes.string,
  cardsToCompare: PropTypes.array
}
