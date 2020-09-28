'use strict';
module.exports = (sequelize, DataTypes) => {
  const ImageStyle = sequelize.define('ImageStyle', {
    url: DataTypes.TEXT,
    cover: DataTypes.TEXT,
    packageFaceId: DataTypes.INTEGER
  }, {});
  ImageStyle.associate = function(models) {
    ImageStyle.belongsTo(models.PackageFace, ({ foreignKey: 'packageFaceId'}));
  };
  return ImageStyle;
};
