const router = require('express').Router();
const apiRoutes = require('./api');
const { Food, Tag, foodTag } = require('../models')

router.use('/api', apiRoutes);

router.get('/', async (req, res) => {
  try {
    const foodData = await Food.findAll({
      include: [
        {
          model: Tag,
          through: foodTag,
          attributes: ['tag_name']
        },
      ],
    });

    const foods = foodData.map((food) => food.get({ plain: true }));

    res.render('food', {
      foods
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  res.render('login')
});

module.exports = router;