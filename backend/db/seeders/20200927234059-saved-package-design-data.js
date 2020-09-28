'use strict';

function r(o) {
  o.createdAt = new Date();
  o.updatedAt = new Date();
  return o;
}

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('SavedPackageDesigns', [
      r({
        name: 'user1package1',
        userId: 1,
        packageBaseId: 1,
      }),
      r({
        name: 'user1package2',
        userId: 1,
        packageBaseId: 2,
      }),
      r({
        name: 'user1package3',
        userId: 1,
        packageBaseId: 3,
      }),
      r({
        name: 'user1package4',
        userId: 2,
        packageBaseId: 4,
      }),
      r({
        name: 'user2package1',
        userId: 2,
        packageBaseId: 1,
      }),
      r({
        name: 'user2package2',
        userId: 2,
        packageBaseId: 2,
      }),
      r({
        name: 'user2package3',
        userId: 2,
        packageBaseId: 3,
      }),
      r({
        name: 'user4package1',
        userId: 3,
        packageBaseId: 1,
      }),
      r({
        name: 'user4package2',
        userId: 3,
        packageBaseId: 2,
      }),
      r({
        name: 'user4package3',
        userId: 3,
        packageBaseId: 3,
      }),
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('SavedPackageDesigns');
  }
};
