import Joi from "joi";

export default {
  createBillDetail: {
    body: {
      bill: Joi.string(),
      product: Joi.string(),
      price: Joi.number().min(0),
      quantity: Joi.number().min(0),
      note: Joi.string(),
    },
    options: {
      allowUnknownBody: false,
    },
  },
  updateBillDetail: {
    body: {
      bill: Joi.string(),
      product: Joi.string(),
      price: Joi.number().min(0),
      quantity: Joi.number().min(0),
      note: Joi.string(),
      isActive: Joi.boolean(),
    },
    options: {
      allowUnknownBody: false,
    },
  },
};
