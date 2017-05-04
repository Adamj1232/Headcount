import React from 'react'
import DistrictYear from './DistrictYear'

const DistrictCard = ({ district, districtSet }) => {
  let locationKeys = Object.keys(districtSet)
  let yearKeys = Object.keys(districtSet[locationKeys])
  const yearArray = Object.keys(districtSet[locationKeys]).map( (year, yearIndex) =>
    <DistrictYear key={yearIndex} year={year} data={districtSet[locationKeys][year]}/>
  ) 

  return (
      <div className='card'>
        <h3>{district}</h3>
        <div>{yearArray}</div>
      </div>
    )
  }
export default DistrictCard
