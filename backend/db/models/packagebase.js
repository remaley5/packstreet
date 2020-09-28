'use strict';
module.exports = (sequelize, DataTypes) => {
  const PackageBase = sequelize.define('PackageBase', {
    name: DataTypes.TEXT,
    heightOptions: DataTypes.ARRAY(DataTypes.INTEGER),
    widthOptions: DataTypes.ARRAY(DataTypes.INTEGER),
    depthOptions: DataTypes.ARRAY(DataTypes.INTEGER),
    description: DataTypes.TEXT,
    materialOptions: {
      type: DataTypes.ARRAY(DataTypes.TEXT),
    },
    unitPrice: DataTypes.INTEGER
  }, {});
  PackageBase.associate = function(models) {
    PackageBase.hasMany(models.SavedPackageDesign, ({ foreignKey: 'packageBaseId' }));
  };
  return PackageBase;
};
