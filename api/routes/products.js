import express from 'express';
export const productRoutes = express.Router();

productRoutes.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get request for the products'
  });
});

productRoutes.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Post request for the products'
  });
});

productRoutes.get('/:productId', (req, res, send) => {
  res.status(200).json({
    message: 'Get request for individual product'
  });
});
