const express = require('express')
const router = express.Router()
const Prodcut = require('../model/product')

router.get('', function(req, res) {
    Prodcut.find({}, function(err, foundProducts) {
        return res.json(foundProducts)

    })
})

router.get('/:productId', function(req, res) {
    const productId = req.params.productId
    Prodcut.findById(productId, function(err, foundProducts) {
        if(err){
            return res.status(422).send({errors: [{title: 'Product error', detail: 'Product not found'}]})
        }
        return res.json(foundProducts)

    })
})


module.exports = router