import React from 'react'
import DistrictYear from './DistrictYear'

const DistrictCard = ({ district, districtSet }) => {
  const yearArray = Object.keys(districtSet).map( (year, yearIndex) =>
    <DistrictYear key={yearIndex} year={year} data={districtSet[year]}/>
  ) 
  return (
      <div>
        <div>{district}</div>
        <div>{yearArray}</div>
      </div>
    )
  }
export default DistrictCard
