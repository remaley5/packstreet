'use strict';
module.exports = (sequelize, DataTypes) => {
  const PackageFace = sequelize.define('PackageFace', {
    side: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        isIn: [['left', 'right', 'front', 'back', 'top', 'bottom']]
      },
    },
    color: DataTypes.TEXT,
    packageDesignId: DataTypes.INTEGER
  }, {});
  PackageFace.associate = function(models) {
    PackageFace.hasOne(models.ImageStyle, ({foreignKey: 'packageFaceId'}));
    PackageFace.hasOne(models.TextStyle, ({foreignKey: 'packageFaceId'}));
    PackageFace.belongsTo(models.SavedPackageDesign, ({foreignKey: 'packageDesignId'}));
  };
  return PackageFace;
};
