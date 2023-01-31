const router = require('express');
const { type } = require('os');
const food = require('../../models/type');

//get route for food types
router.get('/', async (req, res) => {
    try {
        const typeData = await type.findAll();
        res.status(200).json(typeData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get route for one food type by id
router.get('/:id', async (req, res) => {
    try {
        const typeData = await type.findbyPk(req.params.id);
        if (!typeData) {
            res.status(400).json({ message: 'No food type with that id.' });
            return;
    }
    res.status(200).json(typeData);
} catch (err) {
    res.status(500).json(err);
}
})

//post route for type
//may need to add withAuth tag to this
router.post('/', async (req, res) => {
    try {
        const newType = await type.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newType);
    } catch (err) {
        res.status(400).json(err);
    }
});

// update route for type
//may need to add withAuth tag to this
router.put('/:type_name', async (req, res) => {
    try {
        const updatedType = await food.update(
            {
                type_name: req.body.type_name,
        },
        {
            where: {
                type_name: req.params.type_name,
            }
        },
        )
        res.status(200).json(updatedType);
    } catch (err) {
        res.status(400).json(err);
    }
});

module.exports = router;