'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PackageFaces', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      side: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      color: {
        type: Sequelize.TEXT,
        allowNull:true
      },
      packageDesignId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'SavedPackageDesigns' }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('PackageFaces');
  }
};
