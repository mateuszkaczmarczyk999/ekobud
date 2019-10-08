const FirmInformation = require('../../models/firmInformations')
const checkAuth = require('../middleware/checkAuth')

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

  router.post('/update-firm-information', checkAuth, (req, res, next) => {
    FirmInformation.findOne({ _id: req.body._id }, (err, doc) => {
      if(err) return console.log(err)

      doc.name = req.body.name
      doc.fullName = req.body.fullName
      doc.regon = req.body.regon
      doc.nip = req.body.nip
      doc.phone1st = req.body.phone1st
      doc.phone2nd = req.body.phone2nd
      doc.description = req.body.description
      doc.text = req.body.text
      doc.address = req.body.address

      doc.save((error, post) => {
        if(error) return console.log(error)
        res.status(200).json(post)
      })
    })
  })
}
