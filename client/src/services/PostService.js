import axios from 'axios'
import BASE_URL from '../config'

class PostService {
  static getAll () {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(`${BASE_URL}api/posts`)
        resolve(result.data.posts)
      } catch (error) {
        reject(error)
      }
    })
  }

  static getLastAdded () {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(`${BASE_URL}api/last_post`)
        resolve(result.data.post)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default PostService
