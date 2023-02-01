// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');
const type = require('./foodType');

// Initialize Product model (table) by extending off Sequelize's Model class
class Food extends Model {}

// set up fields and rules for food model
Food.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    food_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    food_url: {
      type: DataTypes.STRING,
      allowNull:true
    },
    food_descr: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    photo_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    type_id: {
      type: DataTypes.INTEGER,
      references: {
        model: type,
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'food',
  }
);

module.exports = Food;