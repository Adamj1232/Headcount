export default class DistrictRepository {
  constructor(data){
    this.data = this.cleaner(data)
  }

  cleaner = (info) => {
    const newData = []
    info.reduce((accu, obj) => {
      const year = obj.TimeFrame
      const objData = obj.Data
      !accu[obj.Location] ?
        accu[obj.Location] = {[year] : objData} :
        accu[obj.Location][year] = objData
        return accu
      }, newData)
    return newData
  }

  findByName = (districtName) => {
    let matches = {}
    if(!districtName) {
      return undefined
    }
    Object.keys(this.data).filter(district => {
      if(district.toLowerCase() == districtName.toLowerCase()){
        // console.log(district)
        matches.location = district
        matches.data = this.data[district]
        Object.keys(this.data[district]).forEach(year =>{
          if(this.data[district][year] === 'N/A'){
            this.data[district][year] = 0
          }
          this.data[district][year]= Math.round(1000*this.data[district][year])/1000
          console.log(Math.round(1000*this.data[district][year])/1000)
        })
        // console.log(matches)
      }
    })
    if(!matches.location) {
      return undefined
    } else {
      return matches
    }
  }
}
