const Feature = require('../../models/features')

module.exports = (router) => {
  router.get('/features', (req, res, next) => {
    Feature.find().select()
    .then(features => {
      const result = { features: features } 
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err })
    })
  })

  router.get("/features/:nameId", (req, res, next) => {
    Feature.find({ siteId: req.params.nameId }).select()
    .then(features => {
      const result = { features: features }
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err })
    })
  })

  router.post('/features', (req, res, next) => {
    let feature = new Feature(req.body)
    feature.save((error, feature) => {
      if(error) return console.log(error)
      res.status(200).json(feature)
    })
  })
}
