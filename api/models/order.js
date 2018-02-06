import { Schema } from 'mongoose';

const orderSchema = Schema({
  _id: Schema.Types.ObjectId,
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }]
});
