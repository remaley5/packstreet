'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ImageStyles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      cover: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      packageFaceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'PackageFaces' }
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ImageStyles');
  }
};
