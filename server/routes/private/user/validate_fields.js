const Joi = require('@hapi/joi');
Joi.objectId = require('joi-objectid')(Joi);

// waste input validator
module.exports.validateFields = (
  fields,
  options = {
    idRequired: false,
    nameRequired: false,
    emailRequired: false
  },
) => {
  const schema = Joi.object().keys({
    id: Joi.objectId().when('$idRequired', {
      is: Joi.boolean().valid(true).required(),
      then: Joi.required(),
      otherwise: Joi.optional(),
    }),
    name: Joi.string().when('$nameRequired', {
      is: Joi.boolean().valid(true).required(),
      then: Joi.required(),
      otherwise: Joi.optional(),
    }),
    email: Joi.string().when('$emailRequired', {
      is: Joi.boolean().valid(true).required(),
      then: Joi.required(),
      otherwise: Joi.optional(),
    })
  });

  return schema.validate(fields, {
    context: options,
  });
};
