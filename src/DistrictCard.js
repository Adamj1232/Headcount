import React from 'react'
import DistrictYear from './DistrictYear'

const DistrictCard = ({ district, districtSet, districtSelect }) => {
  // console.log(district, districtSet)
  let locationKeys = Object.keys(districtSet)
  // let yearKeys = Object.keys(districtSet[locationKeys])
  const yearArray = Object.keys(districtSet[locationKeys]).map( (year, yearIndex) =>
    <DistrictYear key={yearIndex} year={year} data={districtSet[locationKeys][year]}/>
  ) 
  //
  // const handleSelect = (selectedDistrict) => {
  //   console.log(selectedDistrict)
  //   this.props.districtSelect(selectedDistrict)
  // }

  return (
      <div className='card' onClick={() => {districtSelect(district)}}>
        <h3>{district}</h3>
        <div>{yearArray}</div>
      </div>
    )
  }
export default DistrictCard
