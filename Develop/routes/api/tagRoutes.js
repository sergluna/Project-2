const router = require('express').Router();
const Food = require('../../models/food');
const Tag = require('../../models/tag');

router.get('/', async (req, res) => {
    try { 
        const tagData = await Tag.findAll();
        const tags = tagData.map(tag => tag.get({plain: true}));
        res.status(200).json(tags);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
        const tagData = await Tag.findByPk(req.params.id);
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
        const newTag = await Tag.create({
            ...req.body,
            user_id: req.session.user_id,
        });
        res.status(200).json(newTag);
    } catch (err) {
        res.status(400).json(err);
    }
});


router.put('/:tag_name', (req, res) => {
    Tag.update(
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