const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const food = require('./food');
const tag = require('./tag');

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
        model: tag,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'foodTag',
  }
);

module.exports = foodTag;