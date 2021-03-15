const express = require('express');
const mongodb = require('mongodb');

const router = express.Router();

// GET posts
router.get('/', async (req, res) => {
    const posts = await loadPostsCollection();
    res.send(await posts.find({}).toArray());
});

// Add post
router.post('/', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.insertOne({
        number: req.body.number,
        name: req.body.name,
        price: req.body.price,
        classFirstStroke: req.body.classFirstStroke,
        remark: req.body.remark,
        composition: req.body.composition,
    });
    res.status(201).send();
});


// Delete post
router.delete('/:id', async (req, res) => {
    const posts = await loadPostsCollection();
    await posts.deleteOne( {_id: new mongodb.ObjectID(req.params.id) });
    res.status(200).send();
})


async function loadPostsCollection() {
    const client = await mongodb.MongoClient.connect('mongodb://localhost/medicalAI');

    return client.db('medicalAI').collection('sheet-ones');
}

module.exports = router;