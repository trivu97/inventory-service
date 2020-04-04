import Joi from "joi";

export default {
  createBill: {
    body: {
      inventory: Joi.string(),
      type: Joi.number().min(0),
      totalAmount: Joi.number().min(0),
    },
    options: {
      allowUnknownBody: false,
    },
  },
  updateBill: {
    body: {
      inventory: Joi.string(),
      type: Joi.number().min(0),
      totalAmount: Joi.number().min(0),
      isActive: Joi.boolean(),
      editable: Joi.boolean(),
    },
    options: {
      allowUnknownBody: false,
    },
  },
};
