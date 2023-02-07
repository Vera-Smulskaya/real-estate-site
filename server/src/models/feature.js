"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Feature extends Model {
    static associate(models) {
      this.belongsTo(models.Property);
    }
  }
  Feature.init(
    {
      type: DataTypes.STRING,
      text: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Feature",
      paranoid: true,
    }
  );
  return Feature;
};
