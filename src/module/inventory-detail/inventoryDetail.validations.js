import Joi from 'joi';

export default {
  createInventoryDetail: {
    body: {
      inventory: Joi.string(),
      product: Joi.string(),
      quantity: Joi.number().min(0),
    },
    options: {
      allowUnknownBody: false,
    }
  },
  updateInventoryDetail: {
    body: {
      inventory: Joi.string(),
      product: Joi.string(),
      quantity: Joi.number().min(0),
      isActive: Joi.boolean(),
    },
    options: {
      allowUnknownBody: false,
    }
  }
}