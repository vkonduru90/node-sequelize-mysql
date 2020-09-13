const { Sequelize } = require('sequelize');
const Config = require('./config');
const Logger = require('./logger');

const logger = Logger.createLogger('database.js');
const { protocol, user, password, host, port, db, prod } = Config.database;
const CONNECTION_STRING =
  `${protocol}://${user}:${password}@${host}${protocol === 'mongodb+srv' ? '' : `:${port}`}/${db}` +
  `${prod ? '?retryWrites=true&w=majority' : ''}`;

async function initDb() {
  const sequelize = new Sequelize('test', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
  });

  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    return sequelize;
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

module.exports = initDb;
