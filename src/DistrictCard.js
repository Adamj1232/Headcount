import React from 'react'
import DistrictYear from './DistrictYear'

const DistrictCard = ({ district, districtSet, districtSelect, selectedCards }) => {
  let locationKeys = Object.keys(districtSet)
  const yearArray = Object.keys(districtSet[locationKeys]).map( (year, yearIndex) =>
    <DistrictYear key={yearIndex} year={year} data={districtSet[locationKeys][year]}/>
  ) 

  const handleClick = (e, district)=>{
    districtSelect(district)
    console.log(e.currentTarget)
    e.currentTarget.className = 'card selected';
    this.componentDidUpdate()
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
      <div className='card' onClick={(e) => {handleClick(e, district)}}>
        <h3>{district}</h3>
        <div>{yearArray}</div>
      </div>
    )
}
export default DistrictCard
