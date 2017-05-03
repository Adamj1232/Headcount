import React from 'react'

const DistrictCard = ({district}) => {
  for(let i in district){
    return(
      <div>
        <div>{district}</div>
        <div>{district[i]}</div>
      </div>
    )
  }

}
export default DistrictCard
