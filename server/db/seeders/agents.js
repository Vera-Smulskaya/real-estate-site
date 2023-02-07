"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const createdAt = new Date();
    const updatedAt = new Date();

    await queryInterface.bulkInsert(
      "Agents",
      [
        {
          name: "Adam Conover",
          photo:
            "https://rieltory.in.ua/img/images/%D0%A4%D0%BE%D1%82%D0%BE%202.jpg",
          location: "Los Angeles, California",
          phone: "+0 123-456-7890",
          email: "adamexample001@gmail.com",
          createdAt,
          updatedAt,
        },
        {
          name: "Olga Norova",
          photo:
            "https://www.hji.co.uk/wp-content/efs/2018/09/Hairdressing-Agent-square.jpg",
          location: "Kyjiv, Ukraine",
          phone: "+0 123-456-3399",
          email: "olgaexample002@gmail.com",
          createdAt,
          updatedAt,
        },
        {
          name: "Nick Pupkchenko",
          photo:
            "https://webteam.by/upload/resizer2/8/698/6983faaba00eef8df0b768dfac01a685.jpg",
          location: "Odessa, Ukraine",
          phone: "+0 123-456-1100",
          email: "nickexample003@gmail.com",
          createdAt,
          updatedAt,
        },
        {
          name: "New FrashMan",
          photo:
            "https://webtaaeam.by/upload/resizer2/8/698/6983faaba00eef8df0b768dfac01a685.jpg",
          location: "Lublin, PL",
          phone: "+0 123-456-4499",
          email: "testyuliat@gmail.com",
          createdAt,
          updatedAt,
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Agents", null, {});
  },
};
