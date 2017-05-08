export default class DistrictRepository {
  constructor(data){
    this.data = this.cleaner(data)
  }

  cleaner = (info) => {
    const scrubData = info.reduce((accu, obj) => {
      const year = obj.TimeFrame
      let objData = obj.Data
      isNaN(objData) ? objData = 0 : objData = Math.round(1000 * objData)/1000
      !accu[obj.Location] ?
        accu[obj.Location] = {[year] : objData} :
        accu[obj.Location][year] = objData
        return accu
      }, [])
    return scrubData
  }

  findByName = (districtName) => {
    const input = ''

    let matchesByName = {}
    if(!districtName) {
      return input
    }
    Object.keys(this.data).filter(district => {
      if(district.toLowerCase() == districtName.toLowerCase()){
        matchesByName.location = district
        matchesByName.data = this.data[district]
      }
    })
    if(!matchesByName.location) {
      return input
    }
    return matchesByName
  }

  findAllMatches = (findThese) => {
    let matches = []
    if(!findThese || null){
      Object.keys(this.data).filter( location => {
        matches.push( {[location] :this.data[location]} )
      })
      return matches
    }
    Object.keys(this.data).filter( district => {
      let lowerCaseDistrict = district.toLowerCase()
      let lowerCaseFind = findThese.toLowerCase()
      if(lowerCaseDistrict.match(lowerCaseFind)){
        matches.push( {[district] :this.data[district]} )
      }
    })
    return matches
  }

  compareDistrictAverages = (districtA, districtB) => {
    const averageA = this.findAverage(districtA) || null
    const averageB = this.findAverage(districtB) || null
    const comparedAverage = Math.round(1000 * (averageA/averageB))/1000

    return {
             [districtA.toUpperCase()]: averageA,
             [districtB.toUpperCase()]: averageB,
             'Compared Averages': comparedAverage
            }
  }

  findAverage = (districtName) => {
    let dataObject = this.findByName(districtName).data

    const reducedAverage = Object.keys(dataObject).reduce( (acc, year) => {
      return acc + dataObject[year]
    }, 0)

    const average = reducedAverage / Object.keys(dataObject).length

    return Math.round(1000 * average)/1000
  }
}
