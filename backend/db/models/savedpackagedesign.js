'use strict';
module.exports = (sequelize, DataTypes) => {
  const SavedPackageDesign = sequelize.define('SavedPackageDesign', {
    id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    autoIncrement: true,
    primaryKey: true
    },
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    packageBaseId: DataTypes.INTEGER
  }, {});
  SavedPackageDesign.associate = function(models) {
    SavedPackageDesign.hasMany(models.PackageFace, ({foreignKey: 'packageDesignId'}));
    SavedPackageDesign.belongsTo(models.User, ({foreignKey: 'userId'}));
    SavedPackageDesign.belongsTo(models.PackageBase, ({foreignKey: 'packageBaseId'}))
  };
  return SavedPackageDesign;
};
