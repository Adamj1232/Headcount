import React from 'react'
import DistrictYear from './DistrictYear'

const DistrictCard = ({ district, districtSet, districtSelect, selectedCards }) => {
  let locationKeys = Object.keys(districtSet)
  const yearArray = Object.keys(districtSet[locationKeys]).map( (year, yearIndex) =>
    <DistrictYear key={yearIndex} year={year} data={districtSet[locationKeys][year]}/>
  ) 
  //
  // const handleSelect = (selectedDistrict) => {
  //   console.log(selectedDistrict)
  //   this.props.districtSelect(selectedDistrict)
  // }
  // const handleClick = (e, district)=>{
  //   districtSelect(district)
  //   console.log(e.currentTarget.className)
  //
  //   if({district}.district === selectedCards[0] || {district}.district === selectedCards[1]){
  //   e.currentTarget.className = 'card selected'
  // } else {
  //   e.currentTarget.className = 'card'
  // }
  // }

  if({district}.district === selectedCards[0] || {district}.district === selectedCards[1]) {
    return (
        <div className='card selected' onClick={() => {districtSelect(district)}}>
          <h3>{district}</h3>
          <div>{yearArray}</div>
        </div>
      )
  }

  return (
      <div className='card' onClick={() => {districtSelect( district)}}>
        <h3>{district}</h3>
        <div>{yearArray}</div>
      </div>
    )
  }
export default DistrictCard
