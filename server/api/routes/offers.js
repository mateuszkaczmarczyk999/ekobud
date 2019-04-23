const Offer = require('../../models/offers')

module.exports = (router) => {
  router.get("/offers", (req, res, next) => {
    Offer.find().select()
    .then(offers => {
      const result = {
        count: offers.length,
        data: offers
      }
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      })
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
