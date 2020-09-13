const db = require('../../../models');

async function userNameExists(userName) {
  const user = await db.user.findOne({ where: { userName } });
  if (user) {
    return user;
  }
  return null;
}

async function createUser(data) {
  const user = await db.User.create(data);
  return user;
}

module.exports = {
  userNameExists,
  createUser
}
