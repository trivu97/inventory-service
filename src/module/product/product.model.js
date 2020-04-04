import mongoose, {Schema} from 'mongoose';

const ProductSchema = new Schema({
  name: {
    type: String,
    default: '',
  },
  price: {
    type: Number,
    default: 0,
  },
  describe: {
    type: String,
    default: '',
  }, 
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model('Product', ProductSchema);