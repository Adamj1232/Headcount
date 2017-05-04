import React from 'react'

const DistrictYear = ({year, data}) => {

  return (
      <section className={data > 0.5 ? 'green' : 'red'}>
        <div className='card-data'>{year} : {data}</div>
      </section>
    )
}
export default DistrictYear
