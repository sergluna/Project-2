const router = require('express').Router();
const userRoutes = require('./userRoutes');
const foodRoutes = require('./foodRoutes');
const typeRoutes = require('./typeRoutes');
const tagRoutes = require('./tagRoutes');

router.use('/users', userRoutes);
router.use('/food', foodRoutes);
router.use('/type', typeRoutes);
router.use('/tag', tagRoutes);

module.exports = router;
