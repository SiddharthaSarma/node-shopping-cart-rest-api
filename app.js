import express from 'express';
import { productRoutes } from './api/routes/products';
export const app = express();

app.use('/products', productRoutes);
