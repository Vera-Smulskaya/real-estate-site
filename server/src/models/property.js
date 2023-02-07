"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    static associate(models) {
      this.belongsTo(models.Agent);

      this.hasMany(models.Image);
      this.hasMany(models.Feature,);
      this.hasMany(models.Plan,);
      this.hasMany(models.Message,);

      this.belongsToMany(models.Amenity, {
        through: models.PropertyAmenities
      });
    }
  }
  Property.init(
    {
      prop_id: DataTypes.STRING,
      title: DataTypes.STRING,
      city: DataTypes.STRING,
      state: DataTypes.STRING,
      type: DataTypes.STRING,
      area: DataTypes.INTEGER,
      bedrooms: DataTypes.INTEGER,
      bathrooms: DataTypes.INTEGER,
      year: DataTypes.INTEGER,
      price: DataTypes.INTEGER,
      deal: DataTypes.STRING,
      preview: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Property",
      paranoid: true,
    }
  );
  return Property;
};
