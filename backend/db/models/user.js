'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hashedPassword: DataTypes.STRING,
    tokenId: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.SavedPackageDesign, {foreignKey: 'userId'});
  };
  return User;
};
