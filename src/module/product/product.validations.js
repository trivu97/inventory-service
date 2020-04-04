import Joi from 'joi';

export default { 
  createProduct: {
    body: {
      name: Joi.string(),
      price: Joi.number().min(0),
      describe: Joi.string(),
    },
    options: {
      allowUnknownBody: false,
    }
  },
  updateProduct: {
    body: {
      name: Joi.string(),
      price: Joi.number().min(0),
      describe: Joi.string(),
      isActive: Joi.boolean(),
    },
    options: {
      allowUnknownBody: false,
    }
  }
}