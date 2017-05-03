export default class DistrictRepository {
  constructor(data){
    this.data = this.cleaner(data)
  }

  cleaner = (info) => {
    const scrubData = info.reduce((accu, obj) => {
      const year = obj.TimeFrame
      const objData = obj.Data
      !accu[obj.Location] ?
        accu[obj.Location] = {[year] : objData} :
        accu[obj.Location][year] = objData
        return accu
      }, {})
    return scrubData
  }

  findByName = (districtName) => {
    let matchesByName = {}
    if(!districtName) {
      return undefined
    }
    Object.keys(this.data).filter(district => {
      // let districtNameRegEx = new RegExp('/('+ districtName + ')/ig')
      if(district.toLowerCase() == districtName.toLowerCase()){
        // console.log(district)
        matchesByName.location = district
        matchesByName.data = this.data[district]
        Object.keys(this.data[district]).forEach(year =>{
          if(this.data[district][year] === 'N/A'){
            this.data[district][year] = 0
          }
          this.data[district][year]= Math.round(1000*this.data[district][year])/1000
        })
      }
    })
    if(!matchesByName.location) {
      return undefined
    }
    return matchesByName
  }

  findAllMatches = (findThese) => {
    let matches = []
    if(!findThese){
      Object.keys(this.data).filter( location => {
        matches.push( {[location] :this.data[location]} )
      })
      return matches
    }
    Object.keys(this.data).filter( district => {
      let lowerCaseDistrict = district.toLowerCase()
      let lowerCaseFind = findThese.toLowerCase()
      // console.log(district)
      if(lowerCaseDistrict.includes(lowerCaseFind)){
        matches.push( {[district] :this.data[district]} )
      }
    })
    // console.log(matches)
    return matches
  }
}
