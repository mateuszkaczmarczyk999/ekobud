import axios from 'axios'
import BASE_URL from '../config'

class FirmService {
  static getInformations () {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(`${BASE_URL}api/firm-information`)
        resolve(result.data.info)
      } catch (error) {
        reject(error)
      }
    })
  }

  static getMainFeatures () {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(`${BASE_URL}api/features/about_us`)
        resolve(result.data.features)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default FirmService
