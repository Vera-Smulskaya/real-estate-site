"use strict";
const { Model } = require("sequelize");
const property = require("./property");

module.exports = (sequelize, DataTypes) => {
  class Amenity extends Model {
    static associate(models) {
      this.belongsToMany(models.Property, {
        through: models.PropertyAmenities
      });
    }
  }
  Amenity.init(
    {
      title: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Amenity",
      paranoid: true,
    }
  );
  return Amenity;
};
