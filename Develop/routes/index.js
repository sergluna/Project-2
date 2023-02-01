const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.get('/', (req, res) => {
  res.render('food')
});

router.get('/login', (req, res) => {
  res.render('login')
});

module.exports = router;