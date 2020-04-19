const express = require('express')
const db = require('../../models')
const RESPONSES = require('../../utils/responses')
const app = express()
app.get('/', (req, res, next) => {
  db.Product.findAndCountAll()
    .then((data) => {
      res.status(200).json({
        ok: true,
        payload: data.rows,
      })
    })
    .catch(err => {
      res.status(500).json({ description: 'ssues trying to connect to database' + err })
    })
})

app.post('/', (req, res, next) => {
  const { product_name, product_price, product_photo } = req.body
  db.Product.create({
      product_name,
      product_price,
      product_photo
    }).then((productSaved) => {
      res.status(201).json({
        ok: true,
        product: productSaved,
      })
    })
    .catch(err => {
      res.status(400).json({ description: RESPONSES.DB_CONNECTION_ERROR + err })
    })
});

app.put('/:id', (req, res, next) => {
  const body = req.body
  const id = +req.params.id
  db.Product.update(body, {
      where: {
        id,
      }
    }).then((productUpdated) => {
      if (productUpdated === 0) {
        res.status(404).json({
          ok: false,
          err: 'Product not found',
        });
      }
      res.status(202).json({
        ok: true,
        description: 'Acepted',
      })
    })
    .catch(err => {
      res.status(400).json({ description: RESPONSES.DB_CONNECTION_ERROR + err })
    })
});
app.delete('/:id', (req, res, next) => {
  const id = +req.params.id
  db.Product.destroy({
      where: {
        id,
      }
    }).then((productUpdated) => {
      if (productUpdated === 0) {
        res.status(404).json({
          ok: false,
          err: 'Product not found',
        });
      }
      res.status(200).json({
        ok: true,
        description: 'Deleted',
      })
    })
    .catch(err => {
      res.status(400).json({ description: RESPONSES.DB_CONNECTION_ERROR + err })
    })
});

module.exports = app