'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.addColumn(
        'PackageBases', // table name
        'defaultImage', // new field name
        {
          type: Sequelize.STRING,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'PackageBases',
        'inspoImages',
        {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'PackageBases',
        'buttonText',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'PackageBases',
        'description2Header',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
      queryInterface.addColumn(
        'PackageBases',
        'description2',
        {
          type: Sequelize.TEXT,
          allowNull: true,
        },
      ),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.removeColumn('PackageBases', 'defaultImages'),
      queryInterface.removeColumn('PackageBases', 'inspoImages'),
      queryInterface.removeColumn('PackageBases', 'title'),
      queryInterface.removeColumn('PackageBases', 'buttonText'),
      queryInterface.removeColumn('PackageBases', 'description1'),
      queryInterface.removeColumn('PackageBases', 'description2'),
    ]);
  }
};
