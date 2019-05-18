const Offer = require('../../models/offers')

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

  router.post('/offers', (req, res, next) => {
    let offer = new Offer(req.body)
    offer.save((error, offer) => {
      if(error) return console.log(error)
      res.status(200).json(offer)
    })
  })
}
