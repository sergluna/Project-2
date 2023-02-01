const sequelize = require('../config/connection');
const { User, Food, Tag, foodType } = require('../models');

// I added food data and changed the require for user data, it was calling food data
const userData = require('./userData.json');
const foodData = require('./foodData.json');
const foodTagData = require('./tagData.json');
const foodTypeData = require('./typeData.json');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Food.bulkCreate(foodData, {
    individualHooks: true,
    returning: true,
  });

  await foodType.bulkCreate(foodTypeData, {
    individualHooks: true,
    returning: true,
  });

  await Tag.bulkCreate(foodTagData, {
    individualHooks: true,
    returning: true,
  });

  // I added food datem I could be wrong here
  await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();