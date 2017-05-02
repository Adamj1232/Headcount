import React from 'react';
import DistrictCard from './DistrictCard'

export const Main = ({...props}) => {
  console.log(props.dataSet)
  return(
    <div>

      <DistrictCard />
    </div>
    )

}

export default Main
