const AboutUs = require('../../models/aboutUs')

module.exports = (router) => {
  router.get('/about-us', (req, res, next) => {
    AboutUs.find().select()
    .then( au => {
      const result = { data: au[0] } 
      res.status(200).json(result)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err })
    })
  })

  router.post('/about-us', (req, res, next) => {
    let about = new AboutUs(req.body)
    about.save((error, about) => {
      if(error) return console.log(error)
      res.status(200).json(about)
    })
  })
}
