import mongoose, { Schema } from "mongoose";

const BillSchema = new Schema(
  {
    inventory: {
      type: Schema.Types.ObjectId,
      ref: "Inventory",
      default: null,
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
    type: {
      type: Number,
    },
    totalAmount: {
      type: Number,
      default: 0,
    },
    editable: {
      type: Boolean,
      default: true,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Bill", BillSchema);
