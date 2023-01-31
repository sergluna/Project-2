const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');
const Food = require('./food');
const Tag = require('./tag');

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
        model: Food,
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
    modelName: 'foodTag',
  }
);

module.exports = foodTag;