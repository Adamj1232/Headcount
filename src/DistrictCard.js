import React from 'react'
import { DistrictYear } from './DistrictYear'
import PropTypes from 'prop-types'

export const DistrictCard = ({ district, districtSet, districtSelect, selectedCards }) => {
  let locationKeys = Object.keys(districtSet)
  const yearArray = Object.keys(districtSet[locationKeys]).map( (year, yearIndex) =>
    <DistrictYear
      key={yearIndex}
      year={year}
      data={districtSet[locationKeys][year]}
    />
  ) 

  const handleClick = (e, district)=>{
    districtSelect(district)

    if (e.currentTarget.className === 'card selected'){
      e.currentTarget.className = 'card'
    } else {
      e.currentTarget.className = 'card selected'
    }
  }

  if({district}.district === selectedCards[0] || {district}.district === selectedCards[1]) {
    return (
      <div className='card selected' onClick={(e) => {handleClick(e, district)}}>
        <h3>{district}</h3>
        <div>{yearArray}</div>
      </div>
    )
  }

  return (
    <div className='card card-hover' onClick={(e) => {handleClick(e, district)}}>
      <h3 className='district'>{district}</h3>
      <div>{yearArray}</div>
    </div>
  )
}

DistrictCard.propTypes = {
  district: PropTypes.string,
  districtSet: PropTypes.object,
  districtSelect: PropTypes.func,
  selectedCards: PropTypes.array
}
