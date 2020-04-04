import mongoose, {Schema} from 'mongoose';

const InventoryDetailSchema = new Schema({
  inventory: {
    type: Schema.Types.ObjectId,
    ref: 'Inventory',
    default: null,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: 'Product',
    default: null,
  },
  quantity: {
    type: Number,
    default: 1,
  },
  expiredDate: {
    type: Date,
    default: null,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model('InventoryDetail', InventoryDetailSchema);