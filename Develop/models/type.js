const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class foodType extends Model {}

foodType.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    type_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'type',
  }
);

module.exports = type;