import React from 'react'
import DistrictYear from './DistrictYear'

const DistrictCard = ({ district, dataSet }) => {
  console.log(Object.values(dataSet))
  const districtHere = district
  const yearArray = Object.values(dataSet).map( (year, index) => {
    <DistrictYear key={index} year={year}/>
    // console.log(yearArray)
  })
  return (
      <div>
        <div>{district}</div>
        <div>{yearArray}</div>
      </div>
    )
  }
export default DistrictCard
