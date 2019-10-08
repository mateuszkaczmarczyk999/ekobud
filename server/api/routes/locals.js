const Local = require('../../models/locals')
const checkAuth = require('../middleware/checkAuth')

module.exports = (router) => {
  router.get('/locals', (req, res, next) => {
    Local.find().select()
    .then( locals => {
      const result = { locals: locals }
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err })
    })
  })

  router.get("/locals/:nameId", (req, res, next) => {
    Local.find({ offerId: req.params.nameId }).select()
    .then(locals => {
      const result = { locals: locals }
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err })
    })
  })

  router.post('/locals', checkAuth, (req, res, next) => {
    let local = new Local(req.body)
    local.save((error, local) => {
      if(error) return console.log(error)
      res.status(200).json(local)
    })
  })

  router.post('/update-local', checkAuth, (req, res, next) => {
    Local.findOne({ _id: req.body._id }, (err, doc) => {
      if(err) return console.log(err)

      doc.available = req.body.available
      doc.price = req.body.price
      doc.area = req.body.area

      doc.save((error, local) => {
        if(error) return console.log(error)
        res.status(200).json(local)
      })
    })
  })
}
