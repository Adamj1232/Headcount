import React from 'react'

const DistrictYear = ({year, data}) => {
  // console.log(district)
  // if( {data} > 0.5){
  //   return
  // }

  return (
      <div className={data > 0.5 ? 'green' : 'red'}>
        <div>{year} : {data}</div>
      </div>
    )
}
export default DistrictYear
