// import models
const food = require('./food');
const foodType = require('./foodType');
const tag = require('./Tag');
const foodTag = require('./ProductTag');

// The food you eat is a certain type of food
food.belongsTo(foodType);
// The type of food has a wide variety of food in it
foodType.hasMany(food);
// The food you ate belongToMany tags e.g. spicy, sweet (through ProductTag)
food.belongsToMany(tag, {through: foodTag});
// The tags belongToMany types of food (through ProductTag)
tag.belongsToMany(food, {through: foodTag});

module.exports = {
  food,
  foodType,
  tag,
  foodTag,
};