const FirmInformation = require('../../models/firmInformations')

module.exports = (router) => {
  router.get('/firm-information', (req, res, next) => {
    FirmInformation.find().select()
    .then(info => {
      const result = { info: info[0] } 
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err })
    })
  })

  router.post('/firm-information', (req, res, next) => {
    let firmInfo = new FirmInformation(req.body)
    firmInfo.save((error, firmInfo) => {
      if(error) return console.log(error)
      res.status(200).json(firmInfo)
    })
  })
}
