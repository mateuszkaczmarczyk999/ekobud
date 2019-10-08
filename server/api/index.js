const express = require('express')
const router  = express.Router()

require('./routes/firmInformations')(router)
require('./routes/offers')(router)
require('./routes/posts')(router)
require('./routes/locals')(router)
require('./routes/features')(router)
require('./routes/mailSender')(router)
require('./routes/user')(router)

module.exports = router
