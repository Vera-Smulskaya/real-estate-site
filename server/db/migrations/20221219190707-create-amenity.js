"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Amenities", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      deletedAt: {
        type: Sequelize.DATE,
      },
    });
    await queryInterface.bulkInsert(
      "Amenities",
      [
        {
          id: 1,
          title: "Air Conditioning",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          title: "Alarm Clock",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          title: "Balcony",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 4,
          title: "Clothes Dryer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 5,
          title: "Coffee Maker",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 6,
          title: "Deck / Patio",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 7,
          title: "Dishes & Utensils",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 8,
          title: "Dishwasher",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 9,
          title: "Fireplace",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 10,
          title: "Freezer",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 11,
          title: "Garage",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 12,
          title: "Heating",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 13,
          title: "Ice Maker",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 14,
          title: "Internet",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 15,
          title: "Microwave",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 16,
          title: "Outdoor Grill",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 17,
          title: "Oven",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 18,
          title: "Parking On Street",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 19,
          title: "Refrigerator",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 20,
          title: "Satellite / Cable TV",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 21,
          title: "Security System",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 22,
          title: "Sofa Bed",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 23,
          title: "Stove",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 24,
          title: "Telephone",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 25,
          title: "Toaster",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 26,
          title: "Washing Machine",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 27,
          title: "Water Cooler",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Amenities");
  },
};
