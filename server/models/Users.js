module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {},
  );
  // User.associate = function(models) {
  //   // associations can be defined here
  //   User.hasMany(models.Post, {
  //     foreignKey: 'userId',
  //     as: 'posts',
  //     onDelete: 'CASCADE',
  //   });

  //   User.hasMany(models.Comment, {
  //     foreignKey: 'userId',
  //     as: 'comments',
  //     onDelete: 'CASCADE',
  //   });
  // };
  return User;
};

// const config = require('../config');
// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize(
//   config.database.db,
//   config.database.user,
//   config.database.password,
//   {
//     host: config.database.host,
//     dialect: config.database.dialect,
//   },
// );

// const User = sequelize.define(
//   'User',
//   {
//     // Model attributes are defined here
//     firstName: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     lastName: {
//       type: DataTypes.STRING,
//       // allowNull defaults to true
//     },
//   },
//   {
//     // Other model options go here
//   },
// );
// User.sync();

// module.exports = User;
