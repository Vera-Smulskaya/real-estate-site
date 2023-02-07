"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    static associate(models) {
      this.belongsTo(models.Property,);
    }
  }

  Message.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      text: DataTypes.TEXT,
    },
    { sequelize, modelName: "Message", paranoid: true }
  );
  return Message;
};
