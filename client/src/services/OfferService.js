import axios from 'axios'
import BASE_URL from '../config'

class OfferService {
  static getMainOffer () {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(`${BASE_URL}api/main_offer`)
        resolve(result.data.offer)
      } catch (error) {
        reject(error)
      }
    })
  }

  static getAllOffers () {
    return new Promise(async (resolve, reject) => {
      try {
        const result = await axios.get(`${BASE_URL}api/all_offers`)
        resolve(result.data.offers)
      } catch (error) {
        reject(error)
      }
    })
  }

  static getOfferByNameId (nameId) {
    return new Promise(async (resolve, reject) => {
      try {
        const offerResult = await axios.get(`${BASE_URL}api/offers/${nameId}`)
        const localsResult = await axios.get(`${BASE_URL}api/locals/${nameId}`)
        const featuresResult = await axios.get(`${BASE_URL}api/features/${nameId}`)
        const result = {
          offerData: offerResult.data.offer,
          localsData: localsResult.data.locals,
          featuresData: featuresResult.data.features
        }
        resolve(result)
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default OfferService
