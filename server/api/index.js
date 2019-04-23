const express = require('express')
const router  = express.Router()

require('./routes/aboutUs')(router)
require('./routes/firmInformations')(router)
require('./routes/offers')(router)
require('./routes/posts')(router)

module.exports = router
