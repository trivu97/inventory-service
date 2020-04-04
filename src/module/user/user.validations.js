import Joi from "joi";

export default {
  createUser: {
    body: {
      username: Joi.string()
        .min(5)
        .max(20)
        .required(),
      role: Joi.string().required(),
      password: Joi.string()
        .min(6)
        .max(120)
        .required(),
      fullname: Joi.string().required(),
      birthday: Joi.date(),
      gender: Joi.string(),
    },
  },
  login: {
    body: {
      password: Joi.string()
        .min(5)
        .max(120)
        .required(),
      username: Joi.string()
        .min(5)
        .max(20)
        .required(),
    },
    options: {
      allowUnknownBody: false,
    },
  },
  editProfile: {
    body: {
      password: Joi.string()
        .min(6)
        .max(120),
      role: Joi.string(),
      isActive: Joi.boolean(),
      birthday: Joi.date(),
      gender: Joi.string(),
    },
    options: {
      allowUnknownBody: false,
    },
  },
};
