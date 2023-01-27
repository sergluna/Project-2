const router = require('express');
const food = require('../../models/food');
// gets the info from all foods
router.get('/', async (req, res) => {
    try {
        const foodData = await food.findAll();
        res.status(200).json(foodData);
    } catch (err) {
        res.status(500).json(err);
    }
});
//gets the info from one food by id
router.get('/:id', async (req, res) => {
    try {
        const foodData = await food.findbyPk(req.params.id);
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
        const newFood = await food.create({
            ...req.body,
            user_idd: req.session.user_id,
        });
        res.status(200).json(newFood);
    } catch (err) {
        res.status(400).json(err);
    }
});

//updates the food
router.put('/:food_name', (req, res) => {
    food.update(
        {
            food_name: req.body.food_name,
            food_descr: req.body.food_descr,
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
