const express = require('express')
const bodyParser = require('body-parser')
const movies = require('./movies')

const app = express()

app.listen(1343, () => {
  console.log('listening on port 1343...') // eslint-disable-line no-console
})
