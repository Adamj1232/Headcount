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
}
