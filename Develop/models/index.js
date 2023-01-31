// import models
const Food = require('./food');
const foodType = require('./foodType');
const Tag = require('./Tag');
const foodTag = require('./foodTag');
const User = require('./User');

// The food you eat is a certain type of food
Food.belongsTo(foodType);
// The type of food has a wide variety of food in it
foodType.hasMany(Food);
// The food you ate belongToMany tags e.g. spicy, sweet (through ProductTag)
Food.belongsToMany(Tag, {through: foodTag});
// The tags belongToMany types of food (through ProductTag)
Tag.belongsToMany(Food, {through: foodTag});

module.exports = {
  Food,
  foodType,
  Tag,
  foodTag,
  User
};