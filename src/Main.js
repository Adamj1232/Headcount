import React from 'react';
import DistrictCard from './DistrictCard'

export const Main = ({ dataSet }) => {
  // console.log(dataSet)
  const districtArray = Object.keys(dataSet).map( (district, index) => <DistrictCard key={index} district={district} />)
  return(
    <div>
      {districtArray}
    </div>
    )


}

export default Main
