import axios from 'axios'
import BASE_URL from '../config'

class MailSender {
  static sendMailOffer (mailInfo) {
    return new Promise(async (resolve, reject) => {
      try {
        const firstMail = await axios.post(`${BASE_URL}api/send-client-email`, mailInfo)
        const secondMail = await axios.post(`${BASE_URL}api/send-firm-email`, mailInfo)
        resolve({
          firstMail: firstMail,
          secondMail: secondMail
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default MailSender
