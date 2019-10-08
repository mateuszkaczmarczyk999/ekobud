const Offer = require('../../models/offers')
const checkAuth = require('../middleware/checkAuth')

module.exports = (router) => {
  router.get("/all_offers", (req, res, next) => {
    Offer.find().select()
    .then(offers => {
      const result = { offers: offers }
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err })
    })
  })

  router.get("/offers/:nameId", (req, res, next) => {
    Offer.findOne({ idName: req.params.nameId }).select()
    .then(offer => {
      const result = { offer: offer }
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err })
    })
  })

  router.get("/main_offer", (req, res, next) => {
    Offer.findOne({ isMain: true }).select()
    .then(offer => {
      const result = { offer: offer }
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err })
    })
  })

  router.post('/offers', checkAuth, (req, res, next) => {
    let offer = new Offer(req.body)
    offer.save((error, offer) => {
      if(error) return console.log(error)
      res.status(200).json(offer)
    })
  })

  router.post('/update-offer', checkAuth, (req, res, next) => {
    Offer.findOne({ _id: req.body._id }, (err, doc) => {
      if(err) return console.log(err)

      doc.isMain = req.body.isMain
      doc.name = req.body.name
      doc.description = req.body.description
      doc.text = req.body.text
      doc.term = req.body.term

      doc.save((error, offer) => {
        if(error) return console.log(error)
        res.status(200).json(offer)
      })
    })
  })
}
