const User = require('../../models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = (router) => {
  router.post("/login", (req, res, next) => {
    User.findOne({ email: req.body.email })
      .select()
      .then(user => {
        bcrypt.compare(req.body.password, user.password, (err, same) => {
          if (err) res.status(500).json(err)
          if (same) {
            const token = jwt.sign({ email: user.email, userId: user._id }, 'SEKeb2019', { expiresIn: "1h" })
            res.status(200).json({ message: 'Auth succesful.', token })
          }
        })
      })
      .catch(err => {
        console.log(err)
        res.status(500).json({ error: err })
      })
  })

  // router.post("/signup", (req, res, next) => {
  //   console.log(req)
  //   bcrypt.hash(req.body.password, 10, (err, hash) => {
  //     if (err) return res.status(500).send({ error: err })
  //     const user = new User({
  //       email: req.body.email,
  //       password: hash
  //     })
  //     user
  //       .save()
  //       .then(result => res.status(201).json(result))
  //       .catch(err => res.status(500).json(err))
  //   })
  // })
}