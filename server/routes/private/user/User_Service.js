const { userNameExists, createUser } = require('./User_DB');

async function validateUser(data) {
  const user = await createUser(data);
  return user;
}

module.exports = {
  validateUser
}
