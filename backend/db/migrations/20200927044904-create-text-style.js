'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TextStyles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      text: {
        type: Sequelize.TEXT(255),
        allowNull: false
      },
      fontSize: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      fontFamily: {
        type: Sequelize.TEXT,
        allowNull: true
      },
      color: {
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
    return queryInterface.dropTable('TextStyles');
  }
};
