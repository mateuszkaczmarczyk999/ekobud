import axios from 'axios'
import BASE_URL from '../config'

class AuthService {
  static getToken (credentials) {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.post(`${BASE_URL}api/login`, credentials)
        resolve(result.data.token)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default AuthService
