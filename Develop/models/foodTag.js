const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const food = require('./food');
const Tag = require('./Tag');

class foodTag extends Model {}

foodTag.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    food_id: {
      type: DataTypes.INTEGER,
      references: {
        model: food,
        key: 'id'
      }
    },
    tag_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Tag,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;