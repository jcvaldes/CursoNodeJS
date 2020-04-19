const express = require('express')
const db = require('./models');
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const port = 3000
const server = require('http').createServer(app)
const productsRoutes = require('./api/products/routes')
// middleware: es una funcion que para cada request que lleguen se pueden interceptar
// hacer alguna operacion y pasar el flujo a la siguiente capa
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json(), cors())
app.use(morgan('dev'))
app.use('/products', productsRoutes)

db.sequelize
  .sync()
  .then((data) => {
    // console.log(data.config);
    console.log(`Postgres connection has been established successfully: \x1b[32m%s\x1b[0m`, 'online');
  })
  .catch((err) => {
    console.error('Unable to connect to the database Postgres:', err);
  });

// configuro server
server.listen(port, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server corriendo en el port ${port}: \x1b[32m%s\x1b[0m`, 'online');
  }
})
