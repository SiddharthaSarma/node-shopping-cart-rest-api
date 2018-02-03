import express from 'express';
export const orderRoutes = express.Router();

orderRoutes.get('/', (req, res, next) => {
  res.status(200).json({
    message: 'Get request for the orders'
  });
});

orderRoutes.post('/', (req, res, next) => {
  res.status(200).json({
    message: 'Post request for the orders'
  });
});

orderRoutes.get('/:orderId', (req, res, next) => {
  res.status(200).json({
    message: 'Get request for the individual order'
  });
});
