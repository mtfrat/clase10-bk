const express = require('express')

const router = express.Router()

let products = []

router.post('/', (req, res) => {
    let product = req.body
    products.push(product)
    res.send({ message: "Product created" })
})

module.exports = router