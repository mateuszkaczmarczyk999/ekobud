const jwt = require('jsonwebtoken')

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1]
    const decoded = jwt.verify(token, 'SEKeb2019')
    req.userData = decoded
    next()
  } catch (error) {
    res.status(401).json({ message: 'Not permitted.' })
  }
}