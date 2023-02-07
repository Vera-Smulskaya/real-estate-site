"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    static associate(models) {
      this.belongsTo(models.Property);
    }
  }
  Plan.init(
    {
      name: DataTypes.STRING,
      url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Plan",
      paranoid: true,
    }
  );
  return Plan;
};
