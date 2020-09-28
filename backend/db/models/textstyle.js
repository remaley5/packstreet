'use strict';
module.exports = (sequelize, DataTypes) => {
  const TextStyle = sequelize.define('TextStyle', {
    text: DataTypes.TEXT,
    fontSize: DataTypes.INTEGER,
    fontFamily: DataTypes.TEXT,
    color: DataTypes.TEXT,
    packageFaceId: DataTypes.INTEGER
  }, {});
  TextStyle.associate = function(models) {
    TextStyle.belongsTo(models.PackageFace, ({ foreignKey: 'packageFaceId'}));
  };
  return TextStyle;
};
