import React from 'react'

const DistrictYear = ({year, data}) => {
  // console.log(district)

  return (
      <div className={data > 0.5 ? 'green' : 'red'}>
        <div>{year} : {data}</div>
      </div>
    )
}
export default DistrictYear
