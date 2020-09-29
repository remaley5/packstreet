'use strict';

const bcrypt = require('bcryptjs');

function createPassword() {
  return bcrypt.hashSync('password');
}

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      r({ firstName: 'Demo', lastName: 'Demo', email: 'demo@example.com', hashedPassword: createPassword()}),
      r({ firstName: 'Sophie', lastName: 'Willson', email: 'sophie@example.com', hashedPassword: createPassword() }),
      r({ firstName: 'Blu', lastName: 'Tucker', email: 'blu@example.com', hashedPassword: createPassword() }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users');
  }
};
