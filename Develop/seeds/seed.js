const sequelize = require('../config/connection');
const { User } = require('../models');

// I added food data and changed the require for user data, it was calling food data
const userData = require('./userData.json');
const foodData = require('./foodData.json')

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  // I added food datem I could be wrong here
  await User.bulkCreate(userData, foodData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();