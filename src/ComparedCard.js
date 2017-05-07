import React from 'react'
import PropTypes from 'prop-types'

export const ComparedCard = ({district, dataSet, cardsToCompare}) => {

if(!cardsToCompare.length){
  return (
    <div></div>
  )
} else {

  const dataSetView = Object.keys(dataSet).map( (location) => {
    return (
      <div className={dataSet[location] > 0.5 ? 'green' : 'red'}>
        <div>{location} : {dataSet[location]}</div>
      </div>
    )
  })

  return(

    <section className='compared'>
      <div className="card selected">
        <h3> {district}</h3>
        <div className='card-data'>{dataSetView}</div>
      </div>
    </section>
  )
  }
}

ComparedCard.propTypes = {
  district: PropTypes.string,
  dataSet: PropTypes.object,
  cardsToCompare: PropTypes.array
}

// export default ComparedCard
