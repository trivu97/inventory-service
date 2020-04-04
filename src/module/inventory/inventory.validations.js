import Joi from 'joi';

export default {
  createInventory: {
    body: {
      name: Joi.string(),
      address: Joi.string(),
      describe: Joi.string(),
    },
    options: {
      allowUnknownBody: false,
    }
  },
  updateInventory: {
    body: {
      name: Joi.string(),
      address: Joi.string(),
      describe: Joi.string(),
      isActive: Joi.boolean(),
    },
    options: {
      allowUnknownBody: false,
    }
  }
}