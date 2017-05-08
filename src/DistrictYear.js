import React from 'react'
import PropTypes from 'prop-types'

export const DistrictYear = ({year, data}) => {

  return (
    <section className={data > 0.5 ? 'green' : 'red'}>
      <div className='card-data'>
        {year} : {data}
      </div>
    </section>
  )
}

DistrictYear.propTypes = {
  year: PropTypes.string,
  data: PropTypes.number
}
