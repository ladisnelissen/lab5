const express = require('express')
const app = express()
const port = 3000
const routerMessages = require('./routers/messages.js')
const indexRouter = require('./routers/index')
const cors = require('cors')

app.use(cors({
  //origin true
  origin: true,
  credentials: true,
  //add methods
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}))

app.set('view engine', 'jade');

app.use('/', router)
app.use('/message', routerMessages)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

module.exports = app