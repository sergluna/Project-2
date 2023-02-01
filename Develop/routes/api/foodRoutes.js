const router = require('express').Router();
const Food = require('../../models/food');
// gets the info from all foods
router.get('/', async (req, res) => {
    try {
        const foodData = await Food.findAll();
        res.status(200).json(foodData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//gets the info from one food by id
router.get('/:id', async (req, res) => {
    try {
        const foodData = await Food.findbyPk(req.params.id);
        if (!foodData) {
            res.status(400).json({ message: 'No food found with that id.'});
            return;
        }
        res.status(200).json(foodData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//creates new food
//may need to add withAuth to this to verify login to post
router.post('/', async (req, res) => {
    try {
        const newFood = await Food.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newFood);
    } catch (err) {
        res.status(400).json(err);
    }
});

//may need to add withAuth tag to this
//updates the food
router.put('/:food_name', (req, res) => {
    Food.update(
        {
            food_name: req.body.food_name,
            food_descr: req.body.food_descr,
            photo_url: req.body.photo_url,
            price: req.body.price,
        },
        {
            where: {
                food_name: req.params.food_name,
            },
        }
    )
    .then((updatedFood) => {
        res.json(updatedFood);
    })
    .catch((err) => res.json(err));
});

module.exports = router;
