import React from 'react'
import DistrictYear from './DistrictYear'

const DistrictCard = ({ district, districtSet }) => {
  // console.log(Object.keys(districtSet))
  let locationKeys = Object.keys(districtSet)
  let yearKeys = Object.keys(districtSet[locationKeys])
  const yearArray = Object.keys(districtSet[locationKeys]).map( (year, yearIndex) =>
  // console.log(districtSet[locationKeys][year])
    <DistrictYear key={yearIndex} year={year} data={districtSet[locationKeys][year]}/>
  ) 
  // console.log(yearArray)
  return (
      <div className='card'>
        <div>{district}</div>
        <div>{yearArray}</div>
      </div>
    )
  }
export default DistrictCard
