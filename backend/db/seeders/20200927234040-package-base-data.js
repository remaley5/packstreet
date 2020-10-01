'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('PackageBases', [{
      name: 'Mailer Box',
      heightOptions: [2, 2, 1, 3, 4, 2, 4],
      widthOptions: [4, 6, 6, 5, 6, 8, 8],
      depthOptions: [4, 6, 7, 8, 9, 9, 10],
      materialOptions: ['white', 'dreamcoat', 'kraft'],
      description1: "A durable and stylish corrugated cardboard mailer box that's great for shipping. Perfect for subscription boxes, gift boxes, and e-commerce packaging.",
      unitPrice: 2.06,
      defaultImage: 'mailer.png',
      inspoImages: ['inspo-mailer-box-1.jpg', 'inspo-mailer-box-2.jpg, inspo-mailer-box-3.jpg, inspo-mailer-box-4.jpg', 'inspo-mailer-box-5.jpg', 'inspo-mailer-box-6.jpg', 'inspo-mailer-box-7.jpg'],
      buttonText: 'Meet our mailer',
      description2Header: 'Stylish durability',
      description2: "When your product demands protection but also needs to arrive in style, our custom mailer boxes are your best choice. Mailer boxes come in E-Flute, 1/16\" or B-Flute 1/8\" single-wall corrugated cardboard and can happily ship between 1-30 lbs. We'll automatically select the best thickness for your box size to ensure it's extra sound and sturdy.",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Folding Carton',
      heightOptions: [6, 3.5, 5.5, 4],
      widthOptions: [2.25, 3, 3.5, 4],
      depthOptions: [2.25, 3, 2.25, 4],
      materialOptions: ['classic'],
      description1: "Command attention on retail shelves with our folding cartons made from SBS paperboard. Perfect for beauty packaging, supplements, and chocolate.",
      unitPrice: 2.10,
      defaultImage: 'folding.png',
      inspoImages: ['inspo-folding-carton-1.jpg', 'inspo-folding-carton-2.jpg', 'inspo-folding-carton-3.jpg', 'inspo-folding-carton-4.jpg'],
      buttonText: 'Meet our carton',
      description2Header: 'Light as a feather',
      description2: "With a refined feel that is excellent for retail shelves, our folding cartons are made using 16pt lightweight SBS paperboard. Cartons can hold up to 1 lb but don't like to go it alone. They can be perfectly paired with one of our mailer or shipping boxes if you need to drop them in the mail.",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Standard Shipping Box',
      heightOptions: [6, 8, 6, 12],
      widthOptions: [6, 8, 12, 12],
      depthOptions: [6, 8, 12, 12],
      materialOptions: ['white', 'kraft'],
      description1: "Our custom corrugated cardboard shipping boxes are strong and seriously durable. Perfect for shipping large or heavy items but also an excellent choice to protect fragile items.",
      unitPrice: 4.28,
      defaultImage: 'shipping.png',
      inspoImages: ['inspo-shipping-box-1.jpg', 'inspo-shipping-box-2.jpg', 'inspo-shipping-box-3.jpg', 'inspo-shipping-box-4.jpg', 'inspo-shipping-box-5.jpg'],
      buttonText: 'Meet our shipper',
      description2Header: 'Solid as a rock',
      description2: 'Protect your products from unnecessary damage with our rugged and tough custom shipping boxes. Made from 1/8” B-flute single-wall corrugated cardboard, a shipping box can safely ship up to 30 lbs standard.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'EconoFlex Shipping Boxes',
      heightOptions: [6, 8, 4, 12],
      widthOptions: [6, 8, 8.75, 12],
      depthOptions: [6, 8, 11.25, 12],
      materialOptions: ['kraft'],
      description1: "Ultra affordable and Eco-Friendly. Our Econoflex shipping boxes are made from 100% recycled and recyclable Kraft with print quality that rivals flexo. They're sturdy enough for bulky items and a no-brainer for your budget.",
      unitPrice: 1.18,
      defaultImage: 'econoflex.png',
      inspoImages: ['inspo-econoflex-1.jpg', 'inspo-econoflex-2.jpg', 'inspo-econoflex-3.jpg'],
      buttonText: 'meet econoflex shippers',
      description2Header: 'Solid as a rock',
      description2: 'Sustainable durability that makes your brand stand out while safely shipping your product. Made with 100% recycled, 32 ECT corrugated cardboard, Econoflex shipping boxes protect your precious cargo door-to-door and naturally biodegrade over time.',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('PackageBases', null, {});
  }
};
