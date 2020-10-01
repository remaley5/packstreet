'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('PackageBases', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.TEXT(255),
        allowNull: false,
        unique: true
      },
      heightOptions: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      widthOptions: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      depthOptions: {
        type: Sequelize.ARRAY(Sequelize.INTEGER)
      },
      description1: {
        type: Sequelize.TEXT(900),
        allowNull: false
      },
      materialOptions: {
        type: Sequelize.ARRAY(Sequelize.TEXT),
        allowNull: true
      },
      unitPrice: {
        type: Sequelize.INTEGER,
        allowNull: false
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
    return queryInterface.dropTable('PackageBases');
  }
};
