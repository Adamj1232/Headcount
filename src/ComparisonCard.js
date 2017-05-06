import React from 'react'



const SelectedCards = ({cardsToCompare, dataSet}) => {

if(!cardsToCompare.length){
  return (
    <div></div>
  )
} else {

  const comparisonObject = dataSet.compareDistrictAverages(cardsToCompare[0], cardsToCompare[1])
  const comparisonData = Object.keys(comparisonObject).map( (key) => {
    return (
      <div>
        <div>{key}</div>
        <div>{comparisonObject[key]}</div>
      </div>
    )
  })

//   const comparedCards = cardsToCompare.map((district) =>
//     dataSet.findByName(district)
//   )
//
// console.log(comparedCards)
//
//   const comparisonCards = comparedCards.map((district, index) => {
//     return <DistrictCard district={district.location} key={index+25} districtSet={district.data} />
//   })
//
//   {comparisonCards}

  return(

    <section>
      <div className="card comparison">
        <h3>{comparisonData}</h3>
      </div>
    </section>
  )
  }
}

export default SelectedCards
