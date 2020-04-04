import mongoose, { Schema } from "mongoose";

const billDetailSchema = new Schema({
  bill: {
    type: Schema.Types.ObjectId,
    ref: "Bill",
    default: null,
  },
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
    default: null,
  },
  price: {
    type: Number,
    default: 0,
  },
  quantity: {
    type: Number,
    default: 0,
  },
  note: {
    type: String,
    default: "",
  },
  isActive: {
    type: Boolean,
    default: true,
  },
});

export default mongoose.model("BillDetail", billDetailSchema);
