const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const morgan = require('morgan')
const port = 3000
const server = require('http').createServer(app)
const pollsRouter = require('./api/routers/pollsRouter')
// middleware: es una funcion que para cada request que lleguen se pueden interceptar
// hacer alguna operacion y pasar el flujo a la siguiente capa
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json())
app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})
app.use('/polls', pollsRouter)
// configuro server
server.listen(port, () => {
  console.log('Server online en pueto: ', port)
})
