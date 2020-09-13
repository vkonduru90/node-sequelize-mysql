const { validateUser } = require('./User_Service');
const { validateFields } = require('./validate_fields');

async function createUser(httpRequest) {
  const body = httpRequest.body;
  const { error } = validateFields(body, { nameRequired: true, emailRequired: true });

  if (error) {
    throw new Error(`${error.details[0].message}`);
  }

  const result = await validateUser(body);
  return result;
}

module.exports = {
  createUser,
};
