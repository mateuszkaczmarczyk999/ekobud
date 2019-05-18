const Local = require('../../models/locals')

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

  router.post('/locals', (req, res, next) => {
    let local = new Local(req.body)
    local.save((error, about) => {
      if(error) return console.log(error)
      res.status(200).json(local)
    })
  })
}
