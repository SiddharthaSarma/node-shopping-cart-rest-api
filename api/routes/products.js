import express from 'express';
import mongoose from 'mongoose';
import { Product } from '../models/product';
export const productRoutes = express.Router();

productRoutes.get('/', (req, res, next) => {
  Product.find()
    .exec()
    .then(docs => {
      if (docs.length) {
        res.status(200).json({ products: docs });
      } else {
        res.status(404).json({ message: 'No products found' });
      }
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

productRoutes.post('/', (req, res, next) => {
  const product = new Product({
    _id: new mongoose.Types.ObjectId(),
    name: req.body.name,
    price: req.body.price
  });
  product
    .save()
    .then(result => {
      res.status(200).json({
        createdProduct: result
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({
        error: err
      });
    });
});

productRoutes.get('/:productId', (req, res, send) => {
  const id = req.params.productId;
  Product.findById(id)
    .then(product => {
      res.status(200).json(product);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});
