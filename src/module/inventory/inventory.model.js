import mongoose, {Schema} from 'mongoose';

const InventorySchema = new Schema({
  name: {
    type: String,
    default: 'default name',
  },
  address: {
    type: String,
    default: '',
  },
  describe: {
    type: String,
    default: 'Nothing',
  }, 
  isActive: {
    type: Boolean, 
    default: true,
  },
});

export default mongoose.model('Inventory', InventorySchema);