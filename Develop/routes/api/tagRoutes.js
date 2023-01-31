const router = require('express').Router();
const food = require('../../models/food');
const { foodTag, update } = require('../../models/foodTag');

router.get('/', async (req, res) => {
    try { 
        const tagData = await foodTag.findAll();
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const tagData = await foodTag.findByPk(req.params.id);
        if (!tagData) {
            res.status(400).json({ message: 'No tag found with that id. '});
            return;
        }
        res.status(200).json(tagData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
        const newTag = await foodTag.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newTag);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.put('/:tag_name', (req, res) => {
    foodTag.update(
        {
            tag_name: req.body.tag_name,
        },
        {
            where: {
                tag_name: req.params.tag_name,
            },
        }
    )
    .then((updatedTag) => {
        res.json(updatedTag);
    })
    .catch((err) => res.json(err));
});

module.exports = router;

// this whole file may need heavy editing 