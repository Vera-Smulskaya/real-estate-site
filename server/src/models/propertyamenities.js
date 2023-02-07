"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class PropertyAmenities extends Model {
    static associate(models) {}
  }
  PropertyAmenities.init(
    {
      PropertyId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Properties", 
          key: 'id'
        }
      },
      AmenityId: {
        type: DataTypes.INTEGER,
        references: {
          model:  "Amenities",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "PropertyAmenities",
      paranoid: true,
    }
  );
  return PropertyAmenities;
};
