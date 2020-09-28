'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('PackageBases', [{
        name: 'Mailer Box',
        heightOptions: [2, 2, 1, 3, 4, 2, 4],
        widthOptions: [4, 6, 6, 5, 6, 8, 8],
        depthOptions: [4, 6, 7, 8, 9, 9, 10],
        materialOptions: ['white', 'dreamcoat', 'kraft'],
        description: "A durable and stylish corrugated cardboard mailer box that's great for shipping. Perfect for subscription boxes, gift boxes, and e-commerce packaging.",
        unitPrice: 2.06,
      },{
      name: 'Folding Carton',
      heightOptions: [6, 3.5, 5.5, 4],
      widthOptions: [2.25, 3, 3.5, 4],
      depthOptions: [2.25, 3, 2.25, 4],
      materialOptions: ['classic'],
      description: "Command attention on retail shelves with our folding cartons made from SBS paperboard. Perfect for beauty packaging, supplements, and chocolate.",
      unitPrice: 2.10,
    },
    {
      name: 'Standard Shipping Box',
      heightOptions: [6, 8, 6, 12],
      widthOptions: [6, 8, 12, 12],
      depthOptions: [6, 8, 12, 12],
      materialOptions: ['white', 'kraft'],
      description: "Our custom corrugated cardboard shipping boxes are strong and seriously durable. Perfect for shipping large or heavy items but also an excellent choice to protect fragile items.",
      unitPrice: 4.28,
    },
    {
      name: 'EconoFlex Shipping Boxes',
      heightOptions: [6, 8, 4, 12],
      widthOptions: [6, 8, 8.75, 12],
      depthOptions: [6, 8, 11.25, 12],
      materialOptions: ['kraft'],
      description: "Ultra affordable and Eco-Friendly. Our Econoflex shipping boxes are made from 100% recycled and recyclable Kraft with print quality that rivals flexo. They're sturdy enough for bulky items and a no-brainer for your budget.",
      unitPrice: 1.18,
    }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('PackageBases', null, {});
  }
};
