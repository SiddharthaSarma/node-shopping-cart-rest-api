import express from 'express';
import { productRoutes } from './api/routes/products';
import { orderRoutes } from './api/routes/orders';
import morgan from 'morgan';
export const app = express();

app.use(morgan('dev'));

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);
